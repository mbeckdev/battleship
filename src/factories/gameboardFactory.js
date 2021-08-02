'use strict';
// import { Ship } from '.shipFactory.js';
import Ship from './shipFactory.js';

// Gameboards should be able to place ships at specific
// coordinates by calling the ship factory function
const Gameboard = function () {
  // how it will be used elsewhere
  // let board1 = Gameboard();
  // board1.receiveAttack(2, 4);

  let arrayOfShips = [
    // Ship('destroyer', 2, [0, 0], true),
    // Ship('submarine', 3, [5, 7], true),
  ];

  let boardHitAndMissLayout = [
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

  // receiveAttack determines whether or not the attack
  // hit a ship and
  // then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.
  function receiveAttack(x, y) {
    // has this attack hit a ship?
    arrayOfShips.forEach((aShip) => {
      for (let i = 0; i < aShip.positionsOnBoard.length; i++) {
        if (
          aShip.positionsOnBoard[i][0] == x &&
          aShip.positionsOnBoard[i][1] == y
        ) {
          // a hit!
          aShip.hit(i);
          boardHitAndMissLayout[x][y] = 'hit';
          // check if sunk here??????
        } else {
          // document miss

          boardHitAndMissLayout[x][y] = 'miss';
        }
      }
    });
  }

  // let shipToAdd = Ship(2, [0, 0], true);
  let boardShipLayout = []; // [0][1] = x, y
  boardShipLayout = [
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

  function addShipToBoard(shipToAdd) {
    arrayOfShips.push(shipToAdd); // for use in receiveAttack later
    shipToAdd.positionsOnBoard.forEach((coords) => {
      let x = coords[0];
      let y = coords[1];

      // add these coords to board
      boardShipLayout[x][y] = shipToAdd.name;
    });
  }

  function allShipsSunk() {
    for (let i = 0; i < arrayOfShips.length; i++) {
      if (arrayOfShips[i].isSunk()) {
      } else {
        return false;
      }
    }
    return true;
  }

  return {
    addShipToBoard,
    allShipsSunk,
    boardHitAndMissLayout,
    boardShipLayout,
    receiveAttack,
    // setupBoard,
  };
};

export default Gameboard;
