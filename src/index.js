'use strict';
import css from './styles.css';
import Gameboard from './factories/gameboardFactory.js';
import dom from './factories/dom.js';

startGame();
function startGame() {
  let gameboard1 = Gameboard();

  dom.createDivsInGrid(dom.domElements.gridA);
  dom.createDivsInGrid(dom.domElements.gridB);
}
// dom.domElements.gridA.textContent = 'hi';
console.log(dom.domElements.gridA);
