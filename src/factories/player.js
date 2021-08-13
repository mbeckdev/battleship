'use strict';
import game from '../module-patterns/game.js';
import Gameboard from './gameboardFactory.js';

const Player = function (aPlayerName) {
  let playerName = aPlayerName;

  function attack(x, y, gameBoard) {
    gameBoard.receiveAttack(x, y);
  }

  function computerTakeRandomGuess() {
    console.log('computerTakesrandomgues start');
    // should not guess the same square twice
    let max = 10;
    let xRandom = Math.floor(Math.random() * max);
    let yRandom = Math.floor(Math.random() * max);
    let needToGuessMore = true;

    //check if it's been guessed before
    console.log('while loop started for computer guessing');
    while (needToGuessMore) {
      if (game.gameboardA.boardHitAndMissLayout[xRandom][yRandom] == null) {
        //space is empty
        console.log('space is good to guess in');
        needToGuessMore = false;
        // guessLayout[xRandom][yRandom] = 'guessed';
        console.log(`guess added to layout in ${xRandom}-${yRandom}`);
      } else {
        console.log('while loop - space has been guessed before, try again');
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
