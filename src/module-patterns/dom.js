'use strict';

import game from './game.js';

const dom = (function () {
  // let gridA = document.getElementById('gridA');
  // let gridB = document.getElementById('gridB');
  let maxNumberOfDivsXDirection = 10;

  const domElements = {
    gridA: document.getElementById('gridA'),
    gridB: document.getElementById('gridB'),
  };

  // starting from top left, 100 divs are created 10 x 10
  function createDivsInGrid(someGrid) {
    for (let y = 0; y < maxNumberOfDivsXDirection; y++) {
      for (let x = 0; x < maxNumberOfDivsXDirection; x++) {
        let tempDiv = document.createElement('div');
        tempDiv.dataset.id = x.toString() + y.toString();
        tempDiv.classList.add('grid-square');
        someGrid.appendChild(tempDiv);
      }
    }
  }

  function addShipClassesToBoard(someBoard, domGrid) {
    // go through all ships on board
    for (let i = 0; i < someBoard.arrayOfShips.length; i++) {
      // go through all of the positions of that ship
      for (
        let j = 0;
        j < someBoard.arrayOfShips[i].positionsOnBoard.length;
        j++
      ) {
        let xPosition = someBoard.arrayOfShips[i].positionsOnBoard[j][0];
        let yPosition = someBoard.arrayOfShips[i].positionsOnBoard[j][1];

        // find the div with these coordinates
        let selector = `[data-id="${xPosition}${yPosition}"]`;
        let thisDiv = domGrid.querySelector(selector);

        thisDiv.classList.add('ship');
      }
    }
  }

  function allowClickToHit() {
    for (let i = 0; i < gridA.children.length; i++) {
      gridA.children[i].addEventListener('click', game.handleHitInGridA);
    }
    for (let i = 0; i < gridB.children.length; i++) {
      gridB.children[i].addEventListener('click', game.handleHitInGridB);
    }
  }

  // function showHit(x, y) {
  //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa show hit tbd');
  // }

  return {
    addShipClassesToBoard,
    allowClickToHit,
    createDivsInGrid,
    domElements,
    // showHit,
  };
})();

export default dom;
