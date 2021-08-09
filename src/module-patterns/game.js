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

    // playerA.attack(x, y, gameboardB)
  }

  function startGame() {
    console.log('starting game...');
  }

  return {
    setupGame,
    startGame,
  };
})();

export default game;
