'use strict';
import Gameboard from '../factories/gameboardFactory.js';
import Ship from '../factories/shipFactory.js';
import Player from '../factories/player.js';

describe('playerA.attack x2 sinks all ships', () => {
  let playerA = Player('playerA');
  let playerB = Player('computer');
  let boardB = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  boardB.addShipToBoard(shipToAdd);

  // boardB.receiveAttack(0, 0);
  // boardB.receiveAttack(1, 0);
  playerA.attack(0, 0, boardB);
  playerA.attack(1, 0, boardB);

  test('all Ships sunk = true', () => {
    expect(boardB.allShipsSunk()).toBe(true);
  });
});

describe('playerA.attack x2 sinks all ships', () => {
  let playerA = Player('playerA');
  let playerB = Player('computer');
  let boardB = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  boardB.addShipToBoard(shipToAdd);

  // boardB.receiveAttack(0, 0);
  // boardB.receiveAttack(1, 0);
  playerA.attack(0, 0, boardB);
  playerA.attack(1, 0, boardB);

  test('all Ships sunk = true', () => {
    expect(boardB.allShipsSunk()).toBe(true);
  });
});

describe('computer taking a random guess, one guess', () => {
  let playerA = Player('computer');
  let playerB = Player('otherplayer');
  let boardB = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  boardB.addShipToBoard(shipToAdd);

  let guess = playerB.computerTakeRandomGuess();
  playerA.attack(guess[0], guess[1], boardB);

  test('all Ships sunk = false', () => {
    expect(boardB.allShipsSunk()).toBe(false);
  });
});

describe('computer taking 100 random guesses', () => {
  let playerA = Player('computer');
  let playerB = Player('otherplayer');
  let boardB = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  boardB.addShipToBoard(shipToAdd);

  let guess = undefined;
  for (let i = 0; i < 100; i++) {
    guess = playerB.computerTakeRandomGuess();
    playerA.attack(guess[0], guess[1], boardB);
  }

  test('all Ships sunk = true', () => {
    expect(boardB.allShipsSunk()).toBe(true);
  });
});
