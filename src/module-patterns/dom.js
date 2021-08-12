'use strict';

import game from './game.js';
import Ship from '../factories/shipFactory.js';

const dom = (function () {
  // let gridA = document.getElementById('gridA');
  // let gridB = document.getElementById('gridB');
  let maxNumberOfDivsXDirection = 10;

  const domElements = {
    gridA: document.getElementById('gridA'),
    gridB: document.getElementById('gridB'),
    winLoseMessage: document.getElementById('win-lose-message'),
    rotateShipButton: document.getElementById('rotate-ship-button'),
    shipHolder: document.getElementById('ship-holder'),
    draggableShips: {
      destroyerContainer: document.querySelector('.destroyer-container'),
      submarineContainer: document.querySelector('.submarine-container'),
      cruiserContainer: document.querySelector('.cruiser-container'),
      battleshipContainer: document.querySelector('.battleship-container'),
      carrierContainer: document.querySelector('.carrier-container'),
    },
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

  function maskGrid(gridToHide) {
    for (let i = 0; i < gridToHide.children.length; i++) {
      gridToHide.children[i].classList.add('mask');
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
    thisDiv.classList.remove('mask');
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
    thisDiv.classList.remove('mask');
    thisDiv.classList.add('miss');
  }

  function showWinner(player) {
    dom.domElements.winLoseMessage.textContent = `${player.playerName} won!`;
  }

  let selectedShipNameWithIndex = '';
  function addDragAndDropEvents() {
    // document.addEventListener('drag', _drag);
    // document.addEventListener('drop', _dragDrop);
    // document.addEventListener('drop', _drop);

    let obj = dom.domElements.draggableShips;
    for (let prop in obj) {
      // console.log(prop);
      let shipDiv = obj[prop];
      console.log(shipDiv);
      shipDiv.addEventListener('dragstart', _dragStart);
      document.addEventListener('dragover', _dragOver);
      document.addEventListener('dragenter', _dragEnter);
      shipDiv.addEventListener('mousedown', draggableClicked);
      // shipDiv.addEventListener('dragleave', _dragLeave);
      // shipDiv.addEventListener('dragend', _dragEnd);
    }

    // put drop event listener on each square in gridA
    for (let i = 0; i < gridA.children.length; i++) {
      gridA.children[i].addEventListener('drop', _drop);
    }

    // addevent listener when you click .. to capture which square of the ship you clicked
  }

  function draggableClicked(e) {
    // get which square of the ship you clicked. ie. 'submarine-1'
    selectedShipNameWithIndex = e.target.id;
    console.log(selectedShipNameWithIndex);
  }

  // function _drag() {
  //   console.log('drag');
  // }

  let draggedShip = '';
  let indexOfDraggedShipClicked = undefined;
  function _dragStart() {
    draggedShip = this;

    console.log(indexOfDraggedShipClicked);
    console.log(this);
    console.log('dragStart');
  }

  function _drop(e) {
    // e.preventDefault();
    console.log('drop');
    console.log(this);
    console.log(this.dataset.id);

    let dropShip = this;

    let dropDiv = this;
    let dropDivCoords = this.dataset.id;
    let xDropCoord = Number(dropDivCoords[0]);
    let yDropCoord = Number(dropDivCoords[1]);

    //find id .. got it

    // find what ship will be adding?
    let firstDivOfDraggedShip = draggedShip.children[0];
    let idOfFirstDiv = firstDivOfDraggedShip.id;
    let draggedShipName = idOfFirstDiv.slice(0, -2); //'destroyer' etc.

    console.log(indexOfDraggedShipClicked);

    // Which index of dragged ship are we in?
    let indexOfClickedSquareInShip = Number(
      selectedShipNameWithIndex.slice(-1)
    );

    // how many squares long is this ship?
    let shipLength = game.ships[draggedShipName].length;

    let newShipXStart = undefined;
    let newShipYStart = undefined;
    if (game.draggedShipsAreHorizontal) {
      newShipXStart = xDropCoord - indexOfClickedSquareInShip;
      newShipYStart = yDropCoord;
    } else {
      newShipXStart = xDropCoord;
      newShipYStart = yDropCoord - indexOfClickedSquareInShip;
    }

    // is starting point valid?
    // is ending point valid?
    //  what is ending x,y?

    let newShipXEnd = undefined;
    let newShipYEnd = undefined;
    if (game.draggedShipsAreHorizontal) {
      newShipXEnd = newShipXStart + shipLength - 1;
      newShipYEnd = newShipYStart;
    } else {
      newShipYEnd = newShipYStart + shipLength - 1;
      newShipXEnd = newShipXStart;
    }

    // let _allCoordsOfShipAreValid = false;

    // find coords of other squares in ship. if any
    let allShipCoords = []; //ie [[0,0],[1,0],[2,0]]
    for (let i = 0; i < shipLength; i++) {
      let newX = undefined;
      let newY = undefined;
      if (game.draggedShipsAreHorizontal) {
        newX = newShipXStart + i;
        newY = newShipYStart;
      } else {
        newX = newShipXStart;
        newY = newShipYStart + 1;
      }
      allShipCoords.push([newX, newY]);
    }

    let allShipCoordsAreValid = 0;

    for (let i = 0; i < allShipCoords.length; i++) {
      if (game.areCoordsValid(allShipCoords[i][0], allShipCoords[i][1])) {
      } else {
        allShipCoordsAreValid++;
      }
    }

    if (allShipCoordsAreValid == 0) {
      // all are valid
      // let newShip = Ship('destroyer', 2, [9,0], true)
      let newShip = Ship(
        draggedShipName,
        shipLength,
        [newShipXStart, newShipYStart],
        true
      );

      // let shipToAddNow = game.ships[draggedShipName];
      game.gameboardA.addShipToBoard(newShip);
      addShipClassesToBoard(game.gameboardA, dom.domElements.gridA);

      // hide ship
      draggedShip.classList.add('hidden');
    }
  }

  // function _dragDrop() {
  //   console.log(this);
  //   console.log('dragDrop');
  // }
  function _dragOver(e) {
    e.preventDefault();
    console.log('dragOver');
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
  }
  function _dragEnter(e) {
    e.preventDefault();
    console.log('dragEnter');
  }
  // function _dragLeave(e) {
  //   console.log('dragLeave');
  // }
  // function _dragEnd(e) {
  //   console.log('dragEnd');
  // }

  function addEventListenerToButtons() {
    dom.domElements.rotateShipButton.addEventListener('click', rotateShips);
  }

  function rotateShips() {
    //take ship=holder, make it

    // if horiz, make it vertical
    if (game.draggedShipsAreHorizontal) {
      dom.domElements.shipHolder.classList.remove('ship-holder-horizontals');
      dom.domElements.shipHolder.classList.add('ship-holder-verticals');
      game.draggedShipsAreHorizontal = false;

      let shipContainers = dom.domElements.draggableShips;
      for (let ship in shipContainers) {
        let domShip = shipContainers[ship];
        domShip.classList.add('ship-is-vertical');
      }
    } else {
      dom.domElements.shipHolder.classList.add('ship-holder-horizontals');
      dom.domElements.shipHolder.classList.remove('ship-holder-verticals');
      game.draggedShipsAreHorizontal = true;

      let shipContainers = dom.domElements.draggableShips;
      for (let ship in shipContainers) {
        let domShip = shipContainers[ship];
        domShip.classList.remove('ship-is-vertical');
      }
    }
  }

  return {
    addDragAndDropEvents,
    addShipClassesToBoard,
    maskGrid,
    allowClickInGridA,
    allowClickInGridB,
    disallowClickInGridA,
    disallowClickInGridB,
    createDivsInGrid,
    domElements,
    showHit,
    showMiss,
    showWinner,
    addEventListenerToButtons,
  };
})();

export default dom;

// /* events fired on the draggable target */
// document.addEventListener(
//   'drag',
//   function (event) {
//     console.log('drag');
//   },
//   false
// );

// document.addEventListener(
//   'dragstart',
//   function (event) {
//     // store a ref. on the dragged elem
//     dragged = event.target;
//     // make it half transparent
//     event.target.style.opacity = 0.5;
//   },
//   false
// );
// /*
//   document.addEventListener("dragend", function( event ) {
//       // reset the transparency
//       event.target.style.opacity = "";
//   }, false);
//   */
// //events fired on the drop targets
// document.addEventListener(
//   'dragover',
//   function (event) {
//     // prevent default to allow drop
//     event.preventDefault();
//   },
//   false
// );
// /*
//   document.addEventListener("dragenter", function( event ) {
//       // highlight potential drop target when the draggable element enters it
//       if ( event.target.className == "dropzone" ) {
//           event.target.style.background = "purple";
//       }

//   }, false);

//   document.addEventListener("dragleave", function( event ) {
//       // reset background of potential drop target when the draggable element leaves it
//       if ( event.target.className == "dropzone" ) {
//           event.target.style.background = "";
//       }

//   }, false); */

// document.addEventListener(
//   'drop',
//   function (event) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     console.log('drop');

//     // move dragged elem to the selected drop target
//     if (event.target.className == 'dropzone') {
//       event.target.style.background = '';
//       dragged.parentNode.removeChild(dragged);
//       event.target.appendChild(dragged);
//     }
//   },
//   false
// );