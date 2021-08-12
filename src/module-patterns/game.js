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
    gameboardA.addShipToBoard(shipA);
    gameboardA.addShipToBoard(shipB);
    gameboardA.addShipToBoard(shipC);
    gameboardA.addShipToBoard(shipD);
    gameboardA.addShipToBoard(shipE);

    let bShipA = Ship('destroyer', 2, [0, 0], false);
    let bShipB = Ship('submarine', 3, [1, 0], false);
    let bShipC = Ship('cruiser', 3, [2, 0], false);
    let bShipD = Ship('battleship', 4, [3, 0], false);
    let bShipE = Ship('carrier', 5, [4, 0], false);
    gameboardB.addShipToBoard(bShipA);
    gameboardB.addShipToBoard(bShipB);
    gameboardB.addShipToBoard(bShipC);
    gameboardB.addShipToBoard(bShipD);
    gameboardB.addShipToBoard(bShipE);

    dom.createDivsInGrid(dom.domElements.gridA);
    dom.createDivsInGrid(dom.domElements.gridB);

    dom.addShipClassesToBoard(gameboardA, dom.domElements.gridA);
    dom.addShipClassesToBoard(gameboardB, dom.domElements.gridB);

    dom.maskGrid(dom.domElements.gridB);

    dom.addDragAndDropEvents();
    dom.addEventListenerToButtons();
  }

  let gameIsOver = false;
  function startGame() {
    playerAsTurn();
  }

  function playerAsTurn() {
    game.itsPlayerAsTurn = true;
    dom.disallowClickInGridA();
    dom.allowClickInGridB();
    // then you click in grid B,
    // gridB has an eventlistener that says after click, go to
    //    game.handleHitInGridB()
  }

  function playerBsTurn() {
    // Computer turn
    game.itsPlayerAsTurn = false;
    //   - you should not be allowed to click.
    dom.disallowClickInGridB();
    // dom.allowClickInGridA();

    // Computer takes a turn here
    let newCoords = playerB.computerTakeRandomGuess();
    playerB.attack(newCoords[0], newCoords[1], gameboardA);

    //           - set a bit of a wait after computer's turn is over
    //             setTimeout(console.log('waiting'), 1 * 3000);
    //   - check GameOver
    checkGameOver();
    if (!gameIsOver) {
      playerAsTurn();
    }
    //   - Switch whose turn
  }

  function checkGameOver() {
    if (gameboardA.allShipsSunk()) {
      gameIsOver = true;
      dom.showWinner(game.playerB);
      dom.disallowClickInGridA();
      dom.disallowClickInGridB();
    }
    if (gameboardB.allShipsSunk()) {
      gameIsOver = true;
      dom.showWinner(game.playerA);
      dom.disallowClickInGridA();
      dom.disallowClickInGridB();
    }
  }

  function handleHitInGridA(e) {
    // find x and y of click
    console.log(e.target);
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    playerB.attack(xCoord, yCoord, gameboardA);
  }

  function handleHitInGridB(e) {
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    playerA.attack(xCoord, yCoord, gameboardB);

    checkGameOver();
    if (!gameIsOver) {
      playerBsTurn();
    }
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
