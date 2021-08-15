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
    // let shipA = Ship('destroyer', 2, [0, 0], true);
    // let shipB = Ship('submarine', 3, [0, 1], true);
    // let shipC = Ship('cruiser', 3, [0, 2], true);
    // let shipD = Ship('battleship', 4, [0, 3], true);
    // let shipE = Ship('carrier', 5, [0, 4], true);
    // game.gameboardA.addShipToBoard(shipA);
    // game.gameboardA.addShipToBoard(shipB);
    // game.gameboardA.addShipToBoard(shipC);
    // game.gameboardA.addShipToBoard(shipD);
    // game.gameboardA.addShipToBoard(shipE);

    _setupPlayerBBoard();

    dom.maskGrid(dom.domElements.gridB);

    dom.addDragAndDropEvents();
    dom.addEventListenerToButtons();

    dom.disallowClickInGridA();
    dom.disallowClickInGridB();
  }

  function _findShipToAddToComputerGrid(shipName) {
    // let bShipA = Ship('destroyer', 2, [0, 0], false);

    // let keys = Object.keys(game.ships);
    // let numberOfShips = keys.length;
    // let randomShipIndex = Math.floor(Math.random() * numberOfShips);
    // let aShip = game.ships[keys[randomShipIndex]];

    // let randomShip = aShip.name;
    let aShip = game.ships[shipName];
    let shipLength = aShip.length;

    // find random horizontal or vertical
    // let isHorizontal = false;
    let isHorizontal = undefined;
    let trueOrFalseNumber = Math.floor(Math.random() * 2);
    if (trueOrFalseNumber == 0) {
      isHorizontal = true;
    } else {
      isHorizontal = false;
    }
    // find not taken space for starting coords
    // let randomCoords = [1, 0];
    let randomCoords = game.pickRandomCoords();
    let randomCoordsAreValid = game.allShipCoordsAreValid(
      randomCoords,
      shipLength,
      game.gameboardB,
      isHorizontal
    );
    while (!randomCoordsAreValid) {
      randomCoords = game.pickRandomCoords();
      randomCoordsAreValid = game.allShipCoordsAreValid(
        randomCoords,
        shipLength,
        game.gameboardB,
        isHorizontal
      );
    }
    console.log(
      `${randomCoords[0]}-${randomCoords[1]} allshipCoords are valid starting at these coords`
    );

    let validRandomCoords = randomCoords;

    let returnShip = Ship(
      shipName,
      shipLength,
      validRandomCoords,
      isHorizontal
    );

    return returnShip;
  }

  function _addShipsToComputerGrid() {
    let bShipA = _findShipToAddToComputerGrid('destroyer');
    game.gameboardB.addShipToBoard(bShipA);
    let bShipB = _findShipToAddToComputerGrid('submarine');
    game.gameboardB.addShipToBoard(bShipB);
    let bShipC = _findShipToAddToComputerGrid('cruiser');
    game.gameboardB.addShipToBoard(bShipC);
    let bShipD = _findShipToAddToComputerGrid('battleship');
    game.gameboardB.addShipToBoard(bShipD);
    let bShipE = _findShipToAddToComputerGrid('carrier');
    game.gameboardB.addShipToBoard(bShipE);

    // let bShipA = Ship(
    //   'destroyer',
    //   2,
    //   validRandomCoords,
    //   randomHorizonalOrVertical
    // );

    // let bShipB = Ship('submarine', 3, [1, 0], false);
    // let bShipC = Ship('cruiser', 3, [2, 0], false);
    // let bShipD = Ship('battleship', 4, [3, 0], false);
    // let bShipE = Ship('carrier', 5, [4, 0], false);
  }

  function _setupPlayerBBoard() {
    _addShipsToComputerGrid();

    dom.createDivsInGrid(dom.domElements.gridA);
    dom.createDivsInGrid(dom.domElements.gridB);

    dom.addShipClassesToBoard(game.gameboardA, dom.domElements.gridA);
    dom.addShipClassesToBoard(game.gameboardB, dom.domElements.gridB);
  }

  function startGame() {
    // if it's the first time or if the button says 'Play"
    if (
      game.isFirstGame ||
      dom.domElements.startGameButton.textContent == 'Play'
    ) {
      dom.domElements.startGameButton.classList.add('soft-hidden');

      game.itsPlayerAsTurn = true;
      playerAsTurn();
      dom.domElements.gridB.classList.remove('hidden');
      dom.domElements.playerBGridLabel.classList.remove('soft-hidden');
      // dom.domElements.gridB.classList.remove('hidden');

      // If the button says 'play again'
    } else {
      // restart game  - you hit play again
      _resetBoards();
      dom.domElements.playerBGridLabel.classList.add('soft-hidden');

      // start over
      setupGame();

      // setup dom for playing mode
      dom.domElements.startGameButton.classList.add('soft-hidden');
      dom.hideWinner();
      // game.gameIsOver = false;

      // wait for all ships placed before allowing play
      // make draggableships appear in holding area
      dom.resetDraggableShips();

      game.draggedShipsAreHorizontal = true;
      dom.rotateShips();
      dom.domElements.rotateShipButton.classList.remove('hidden');
      dom.domElements.winLoseMessage.textContent = 'Place your ships';
      dom.domElements.winLoseMessage.classList.remove('soft-hidden');
      dom.domElements.gridB.classList.add('hidden');
      // dom.domElements.gridB.classList.add('hidden');
      // game.itsPlayerAsTurn = true;
      // playerAsTurn();
    }
  }

  function _resetBoards() {
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
  }

  function allShipsHaveBeenPlaced() {
    console.log('allshipshavebeenplaced started');
    let counter = 0;
    for (let shipContainer in dom.domElements.draggableShips) {
      let thisShip = dom.domElements.draggableShips[shipContainer];
      // console.log('asdf');
      if (!thisShip.classList.contains('hidden')) {
        counter++;
        // console.log('asdf2');
      }
      // console.log('asdf3');
    }
    // console.log('asdf4');
    if (counter == 0) {
      console.log('yep all ships have been placed');
      return true;
    }
    console.log('nope all ships have NOT been placed');
  }

  function allowStart() {
    dom.domElements.winLoseMessage.classList.add('soft-hidden');
    dom.domElements.startGameButton.textContent = 'Play';
    dom.domElements.startGameButton.classList.remove('soft-hidden');
    dom.domElements.rotateShipButton.classList.add('hidden');
  }

  function playerAsTurn() {
    console.log('playerAs Turn');
    game.itsPlayerAsTurn = true;
    dom.disallowClickInGridA();
    dom.allowClickInGridB();
    console.log('playerAs Turn over');
    // then you click in grid B,
    // gridB has an eventlistener that says after click, go to
    //    game.handleHitInGridB()
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

  function areCoordsValid(x, y, board) {
    let withinBoard = _withinBoard(x, y);
    let returnThing = false;

    if (withinBoard) {
      let notOnAnotherShip = _notOnAnotherShip(x, y, board);
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

  function _notOnAnotherShip(x, y, board) {
    // let textOnSpace = game.gameboardA.boardShipLayout[x][y];
    let textOnSpace = board.boardShipLayout[x][y];
    if (textOnSpace == null) {
      return true;
    } else {
      return false;
    }
  }

  function pickRandomCoords() {
    let xCoord = Math.floor(Math.random() * 10);
    let yCoord = Math.floor(Math.random() * 10);
    return [xCoord, yCoord];
  }

  function returnAllCoordsOfShip(startCoords, shipLength, isHorizontal) {
    let allShipCoords = [];
    for (let i = 0; i < shipLength; i++) {
      let newX = undefined;
      let newY = undefined;
      if (isHorizontal) {
        newX = startCoords[0] + i;
        newY = startCoords[1];
      } else {
        newX = startCoords[0];
        newY = startCoords[1] + i;
      }
      allShipCoords.push([newX, newY]);
    }

    return allShipCoords;
  }

  function allShipCoordsAreValid(
    startCoords,
    shipLength,
    board,
    horizOrVertical
  ) {
    // find coords of other squares in ship. if any
    let allShipCoords = []; //ie [[0,0],[1,0],[2,0]]
    allShipCoords = game.returnAllCoordsOfShip(
      [startCoords[0], startCoords[1]],
      shipLength,
      horizOrVertical
    );
    console.log('all ship coords = ' + allShipCoords);

    // allShipCoords = [[0,0],[1,0]]
    let allShipCoordsAreValid = 0;
    for (let i = 0; i < allShipCoords.length; i++) {
      if (
        game.areCoordsValid(
          allShipCoords[i][0],
          allShipCoords[i][1],
          // game.gameboardA
          board
        )
      ) {
        console.log(
          `${allShipCoords[i][0]}-${allShipCoords[i][1]} are valid on board ${board.name}`
        );
      } else {
        allShipCoordsAreValid++;
      }
    }

    if (allShipCoordsAreValid == 0) {
      // all are valid
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
    isFirstGame,
    allShipsHaveBeenPlaced,
    allowStart,
    returnAllCoordsOfShip,
    allShipCoordsAreValid,
    pickRandomCoords,
  };
})();

export default game;
