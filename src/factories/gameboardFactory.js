'use strict';
import dom from '../module-patterns/dom.js';
// import { Ship } from '.shipFactory.js';
import Ship from './shipFactory.js';
import game from '../module-patterns/game.js';

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
    let hitFound = false;
    arrayOfShips.forEach((aShip) => {
      for (let i = 0; i < aShip.positionsOnBoard.length; i++) {
        if (
          aShip.positionsOnBoard[i][0] == x &&
          aShip.positionsOnBoard[i][1] == y
        ) {
          // a hit!
          hitFound = true;
          aShip.hit(i);
          boardHitAndMissLayout[x][y] = 'hit';
          game.gameboardA.allShipsSunk();
          dom.showHit(x, y);
          // check if sunk here??????
        } else {
          // these coordinates dont match this ship section.
        }
      }
    });

    if (!hitFound) {
      // x,y doesn't match any ship section, so it's a miss
      boardHitAndMissLayout[x][y] = 'miss';
      dom.showMiss(x, y);
    }
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
      // boardShipLayout will not look like actual board, sort of flipped, but will work.
      // like array of [1][0] will look vertical, but we're not writing to screen like so it works.
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
    arrayOfShips,
    boardHitAndMissLayout,
    boardShipLayout,
    receiveAttack,
    // setupBoard,
  };
};

export default Gameboard;
