'use strict';
// import { Ship } from '.shipFactory.js';
import Ship from './shipFactory.js';

// Gameboards should be able to place ships at specific
// coordinates by calling the ship factory function
const Gameboard = function () {
  // how it will be used elsewhere
  // let board1 = Gameboard();
  // board1.receiveAttack(2, 4);

  let arrayOfShips = [Ship(2, [0, 0], true), Ship(3, [5, 7], true)];

  // receiveAttack determines whether or not the attack
  // hit a ship and
  // then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.
  function receiveAttack(x, y) {
    // has this attack hit a ship?
    arrayOfShips.forEach((aShip) => {
      aShip.positionsOnBoard.forEach((positionOfPartOfShip) => {
        //check they are the same, if so it's a hit
        positionOfPartOfShip == x, y; //////////////////fixme
      });
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
    shipToAdd.positionsOnBoard.forEach((coords) => {
      let x = coords[0];
      let y = coords[1];

      // add these coords to board
      boardShipLayout[x][y] = shipToAdd.name;
    });
  }

  // function setupBoard() {
  //   let ship2Long = Ship(2);
  //   // ship2Long.hi
  // }
  // function placeShips() {}

  return {
    addShipToBoard,
    boardShipLayout,
    receiveAttack,
    // setupBoard,
  };
};

export default Gameboard;
