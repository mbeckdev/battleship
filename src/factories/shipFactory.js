'use strict';

// not an iife because we'll use it many times
const Ship = function (aLength) {
  let length = aLength; //1,2,3,4,5
  let isHit = false;
  let isSunk = false;

  function hit(aNumber) {
    console.log('marks this number and marks that position as a hit');
  }

  // const ship = { length: 4, isHit: false, isSunk: false };
  return {
    length,
    isHit,
    isSunk,
  };
};

export { Ship };
