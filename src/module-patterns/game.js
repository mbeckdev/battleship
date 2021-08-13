'use strict';

import Gameboard from '../factories/gameboardFactory.js';
import dom from './dom.js';
import Player from '../factories/player.js';
import Ship from '../factories/shipFactory.js';

const game = (function () {
  let playerA = Player('You');
  let playerB = Player('Computer');
  let gameboardA = Gameboard(dom.domElements.gridA);
  let gameboardB = Gameboard(dom.domElements.gridB);
  let itsPlayerAsTurn = true;
  let draggedShipsAreHorizontal = true;
  let gameState = 'initial'; // initial, playing, gameover
  let isFirstGame = true;
  let gameIsOver = false;

  let ships = {
    destroyer: {
      name: 'destroyer',
      length: 2,
    },
    submarine: {
      name: 'submarine',
      length: 3,
    },
    cruiser: {
      name: 'cruiser',
      length: 3,
    },
    battleship: {
      name: 'battleship',
      length: 4,
    },
    carrier: {
      name: 'carrier',
      length: 5,
    },
  };

  // setupGame();
  function setupGame() {
    let shipA = Ship('destroyer', 2, [0, 0], true);
    let shipB = Ship('submarine', 3, [0, 1], true);
    let shipC = Ship('cruiser', 3, [0, 2], true);
    let shipD = Ship('battleship', 4, [0, 3], true);
    let shipE = Ship('carrier', 5, [0, 4], true);
    game.gameboardA.addShipToBoard(shipA);
    game.gameboardA.addShipToBoard(shipB);
    game.gameboardA.addShipToBoard(shipC);
    game.gameboardA.addShipToBoard(shipD);
    game.gameboardA.addShipToBoard(shipE);

    let bShipA = Ship('destroyer', 2, [0, 0], false);
    let bShipB = Ship('submarine', 3, [1, 0], false);
    let bShipC = Ship('cruiser', 3, [2, 0], false);
    let bShipD = Ship('battleship', 4, [3, 0], false);
    let bShipE = Ship('carrier', 5, [4, 0], false);
    game.gameboardB.addShipToBoard(bShipA);
    game.gameboardB.addShipToBoard(bShipB);
    game.gameboardB.addShipToBoard(bShipC);
    game.gameboardB.addShipToBoard(bShipD);
    game.gameboardB.addShipToBoard(bShipE);

    dom.createDivsInGrid(dom.domElements.gridA);
    dom.createDivsInGrid(dom.domElements.gridB);

    dom.addShipClassesToBoard(game.gameboardA, dom.domElements.gridA);
    dom.addShipClassesToBoard(game.gameboardB, dom.domElements.gridB);

    dom.maskGrid(dom.domElements.gridB);

    dom.addDragAndDropEvents();
    dom.addEventListenerToButtons();

    dom.disallowClickInGridA();
    dom.disallowClickInGridB();
  }

  function startGame() {
    if (game.isFirstGame) {
      dom.domElements.startGameButton.classList.add('soft-hidden');
      playerAsTurn();
    } else {
      // restart game

      //  clear dom grid
      while (dom.domElements.gridA.firstChild) {
        dom.domElements.gridA.removeChild(dom.domElements.gridA.lastChild);
      }
      while (dom.domElements.gridB.firstChild) {
        dom.domElements.gridB.removeChild(dom.domElements.gridB.lastChild);
      }

      // clear gameboards.. or write over them
      game.gameboardA = '';
      game.gameboardB = '';
      game.gameboardA = Gameboard(dom.domElements.gridA);
      game.gameboardB = Gameboard(dom.domElements.gridB);

      // clear computer guessing layout
      game.playerB.guessLayout = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ];

      // start over
      setupGame();
      dom.domElements.startGameButton.classList.add('soft-hidden');
      dom.hideWinner();
      game.gameIsOver = false;

      game.itsPlayerAsTurn = true;
      game.draggedShipsAreHorizontal = true;
      playerAsTurn();
    }
  }

  function playerAsTurn() {
    console.log('playerAs Turn');
    game.itsPlayerAsTurn = true;
    dom.disallowClickInGridA();
    dom.allowClickInGridB();
    // then you click in grid B,
    // gridB has an eventlistener that says after click, go to
    //    game.handleHitInGridB()
    console.log('playerAs Turn over');
  }

  function playerBsTurn() {
    console.log('playerBs Turn');
    // Computer turn
    game.itsPlayerAsTurn = false;
    //   - you should not be allowed to click.
    console.log('now call disallowClickingridB');
    dom.disallowClickInGridB();
    // dom.allowClickInGridA();

    // Computer takes a turn here
    console.log('computer will take a turn now');
    let newCoords = game.playerB.computerTakeRandomGuess();

    game.playerB.attack(newCoords[0], newCoords[1], game.gameboardA);

    //           - set a bit of a wait after computer's turn is over
    //             setTimeout(console.log('waiting'), 1 * 3000);
    //   - check GameOver
    console.log('playerBs Turn calls checkGameOver');
    checkGameOver();
    console.log('playerBs Turn over');
    if (!game.gameIsOver) {
      console.log('game.gameIsOver is false, so now call playerAs turn');
      playerAsTurn();
    }
    //   - Switch whose turn
  }

  function checkGameOver() {
    console.log('checkGameOver starts');
    game.gameIsOver = false;
    console.log('checkGameOver now checks for allshipssunk');
    if (game.gameboardA.allShipsSunk()) {
      console.log(
        'checkGameOver ends - all sunk in gameboardA, so call handleGameOver(playerB)'
      );
      handleGameOver(game.playerB);
    }
    if (game.gameboardB.allShipsSunk()) {
      console.log(
        'checkGameOver ends - all sunk in gameboardB, so call handleGameOver(playerA)'
      );
      handleGameOver(game.playerA);
    }
  }

  function handleGameOver(winner) {
    console.log('handlegameover starts');
    game.gameIsOver = true;
    dom.showWinner(winner);
    dom.disallowClickInGridA();
    dom.disallowClickInGridB();
    dom.domElements.startGameButton.textContent = 'Play Again';
    dom.domElements.startGameButton.classList.remove('soft-hidden');
    game.isFirstGame = false;
    console.log('handlegameover ends');
  }

  function handleHitInGridA(e) {
    // find x and y of click
    // console.log(e.target);
    console.log('handleHitInGridA start');
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    game.playerB.attack(xCoord, yCoord, game.gameboardA);
    console.log('handleHitInGridA end');
  }

  function handleHitInGridB(e) {
    console.log('handleHitInGridB start');
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    game.playerA.attack(xCoord, yCoord, game.gameboardB);

    console.log('handleHitInGridB calls checkgameOver');
    checkGameOver();
    if (!game.gameIsOver) {
      console.log('handleHitInGridB calls checkgameOver - and its not over');

      playerBsTurn();
    }
    console.log('handleHitInGridB end ');
  }

  function areCoordsValid(x, y) {
    let withinBoard = _withinBoard(x, y);
    let returnThing = false;

    if (withinBoard) {
      let notOnAnotherShip = _notOnAnotherShip(x, y);
      if (notOnAnotherShip) {
        returnThing = true;
      }
    }

    return returnThing;
  }

  function _withinBoard(x, y) {
    if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
      return true;
    } else {
      return false;
    }
  }

  function _notOnAnotherShip(x, y) {
    let textOnSpace = game.gameboardA.boardShipLayout[x][y];
    if (textOnSpace == null) {
      return true;
    } else {
      return false;
    }
  }

  return {
    handleHitInGridA,
    handleHitInGridB,
    setupGame,
    startGame,
    gameboardA,
    gameboardB,
    itsPlayerAsTurn,
    playerA,
    playerB,
    ships,
    draggedShipsAreHorizontal,
    areCoordsValid,
  };
})();

export default game;
