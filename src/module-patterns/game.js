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

    dom.allowClickToHit();
    // playerA.attack(x, y, gameboardB)
  }

  function startGame() {
    console.log('starting game...');
    // game loop here

    // Your turn
    //   - you're allowed to click only in gridB,
    //   - gridA events should be disabled
    //   - check GameOver
    //   - Switch whose turn

    // Computer turn
    //   - you should not be allowed to click.
    //   - set a bit of a wait after computer's turn is over
    //   - check GameOver
    //   - Switch whose turn
  }

  function handleHitInGridA(e) {
    // find x and y of click
    console.log(e.target);
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    playerB.attack(xCoord, yCoord, gameboardA);
  }

  function handleHitInGridB() {
    let xCoord = e.target.dataset.id[0];
    let yCoord = e.target.dataset.id[1];
    playerA.attack(xCoord, yCoord, gameboardB);
  }

  return {
    handleHitInGridA,
    handleHitInGridB,
    setupGame,
    startGame,
  };
})();

export default game;
