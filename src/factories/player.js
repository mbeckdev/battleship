'use strict';
import Gameboard from './gameboardFactory.js';

const Player = function (aPlayerName) {
  let playerName = aPlayerName;

  function attack(x, y, gameBoard) {
    gameBoard.receiveAttack(x, y);
  }

  let _guessLayout = [
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

  function computerTakeRandomGuess() {
    // should not guess the same square twice
    let max = 10;
    let xRandom = Math.floor(Math.random() * max);
    let yRandom = Math.floor(Math.random() * max);
    let needToGuessMore = true;

    //check if it's been guessed before
    while (needToGuessMore) {
      if (_guessLayout[xRandom][yRandom] == null) {
        // space is empty
        needToGuessMore = false;
        _guessLayout[xRandom][yRandom] = 'guessed';
      } else {
        // space has been guessed before
        xRandom = Math.floor(Math.random() * max);
        yRandom = Math.floor(Math.random() * max);
      }
    }
    return [xRandom, yRandom];
  }

  return {
    attack,
    playerName,
    computerTakeRandomGuess,
  };
};

export default Player;
