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

  function allowClickInGridA() {
    for (let i = 0; i < gridA.children.length; i++) {
      gridA.children[i].addEventListener('click', game.handleHitInGridA);
    }
  }
  function allowClickInGridB() {
    for (let i = 0; i < gridB.children.length; i++) {
      gridB.children[i].addEventListener('click', game.handleHitInGridB);
    }
  }
  function disallowClickInGridA() {
    for (let i = 0; i < gridA.children.length; i++) {
      gridA.children[i].removeEventListener('click', game.handleHitInGridA);
    }
  }
  function disallowClickInGridB() {
    for (let i = 0; i < gridB.children.length; i++) {
      gridB.children[i].removeEventListener('click', game.handleHitInGridB);
    }
  }

  function showHit(x, y) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa show hit tbd');
    let thisGrid = '';
    if (game.itsPlayerAsTurn) {
      thisGrid = gridB;
    } else {
      thisGrid = gridA;
    }
    let selector = `[data-id="${x}${y}"]`;
    let thisDiv = thisGrid.querySelector(selector);
    thisDiv.classList.add('hit');
  }

  function showMiss(x, y) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa show miss tbd');
    let thisGrid = '';
    if (game.itsPlayerAsTurn) {
      thisGrid = gridB;
    } else {
      thisGrid = gridA;
    }
    let selector = `[data-id="${x}${y}"]`;
    let thisDiv = thisGrid.querySelector(selector);
    thisDiv.classList.add('miss');
  }

  return {
    addShipClassesToBoard,
    allowClickInGridA,
    allowClickInGridB,
    disallowClickInGridA,
    disallowClickInGridB,
    createDivsInGrid,
    domElements,
    showHit,
    showMiss,
  };
})();

export default dom;
