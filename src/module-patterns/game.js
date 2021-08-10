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

  // setupGame();
  function setupGame() {
    let shipA = Ship('Bob', 3, [0, 0], true);
    let shipB = Ship('BobB', 2, [0, 1], true);
    let shipC = Ship('BobC', 3, [0, 2], true);
    let shipD = Ship('BobD', 5, [0, 3], true);
    let shipE = Ship('BobE', 3, [0, 4], true);
    gameboardA.addShipToBoard(shipA);
    gameboardA.addShipToBoard(shipB);
    gameboardA.addShipToBoard(shipC);
    gameboardA.addShipToBoard(shipD);
    gameboardA.addShipToBoard(shipE);

    let bShipA = Ship('Bob', 3, [0, 0], false);
    let bShipB = Ship('BobB', 2, [1, 0], false);
    let bShipC = Ship('BobC', 3, [2, 0], false);
    let bShipD = Ship('BobD', 5, [3, 0], false);
    let bShipE = Ship('BobE', 3, [4, 0], false);
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
    }
    if (gameboardB.allShipsSunk()) {
      gameIsOver = true;
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

  return {
    handleHitInGridA,
    handleHitInGridB,
    setupGame,
    startGame,
    gameboardA,
    gameboardB,
    itsPlayerAsTurn,
  };
})();

export default game;
