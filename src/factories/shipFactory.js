'use strict';

// not an iife because we'll use it many times
// ships are objects that include their length, where they’ve been hit and whether or not they’ve been sunk.
const Ship = function (aLength) {
  let length = aLength; //1,2,3,4,5
  let positionOnBoard = []; //[14,15,16]  //[2,12,22]
  let hits = Array(length).fill(null); //['','hit','']

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

  // const ship = { length: 4, isHit: false, isSunk: false };
  return {
    length,
    hits,
    isSunk,
    hit,
  };
};

export { Ship };
