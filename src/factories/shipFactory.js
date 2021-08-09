'use strict';

// not an iife because we'll use it many times
// ships are objects that include their length, where they’ve been hit and whether or not they’ve been sunk.
const Ship = function (aName, aLength, abeginningPosition, horizontal) {
  let name = aName;
  let length = aLength; //1,2,3,4,5
  let beginningPosition = abeginningPosition;
  let isHorizontal = horizontal;
  let hits = Array(length).fill(null); //['','hit','']
  // sets positionsOnBoard
  let positionsOnBoard = [];
  _findCoordsOfShipPieces();
  // let positionsOnBoard = [beginningPosition, [1, 0], [2, 0]]; //[14,15,16]  //[2,12,22]

  // let isSunk = false;

  // takes a number and then marks that position as ‘hit’.
  function hit(position) {
    //0,1,2,3,4
    hits[position] = 'hit';
  }

  // calculates is sunk based on their length and whether all of their positions are ‘hit’.
  function isSunk() {
    for (let i = 0; i < length; i++) {
      if (hits[i] != 'hit') {
        return false;
      }
    }
    return true;
  }

  function _findCoordsOfShipPieces() {
    // assumes this is a legit placement already
    positionsOnBoard.push(beginningPosition);
    let beginningX = beginningPosition[0];
    let beginningY = beginningPosition[1];
    if (isHorizontal == true) {
      for (let i = 1; i < length; i++) {
        positionsOnBoard.push([beginningX + i, beginningY]);
      }
    } else {
      // vertical orientation
      for (let i = 1; i < length; i++) {
        positionsOnBoard.push([beginningX, beginningY + i]);
      }
    }
  }

  // const ship = { length: 4, isHit: false, isSunk: false };
  return {
    name,
    length,
    hits,
    isSunk,
    hit,
    positionsOnBoard,
    isHorizontal,
  };
};

// export { Ship };
export default Ship;
