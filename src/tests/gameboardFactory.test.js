'use strict';
// import { hasUncaughtExceptionCaptureCallback } from 'node:process';
import Gameboard from '../factories/gameboardFactory.js';
import Ship from '../factories/shipFactory.js';

describe('horizontal 2 length ship', () => {
  let board24 = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  board24.addShipToBoard(shipToAdd);
  test('expect(board[0][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[0][0]).toBe('shipA');
  });
  test('expect(board[1][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[1][0]).toBe('shipA');
  });
  test('expect(board[2][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[2][0]).toBe(null);
  });
});

describe('vertical 2 length ship', () => {
  let board24 = Gameboard();
  let shipToAdd = Ship('shipB', 2, [0, 0], false);
  board24.addShipToBoard(shipToAdd);
  test('expect(board[0][0]).toBe(shipB)', () => {
    expect(board24.boardShipLayout[0][0]).toBe('shipB');
  });
  test('expect(board[0][1]).toBe(shipB)', () => {
    expect(board24.boardShipLayout[0][1]).toBe('shipB');
  });
  test('expect(board[0][2]).toBe(shipB)', () => {
    expect(board24.boardShipLayout[0][2]).toBe(null);
  });
});

describe('horizontal 2 length ship', () => {
  let board24 = Gameboard();
  let shipToAdd = Ship('shipA', 2, [0, 0], true);
  board24.addShipToBoard(shipToAdd);
  board24.receiveAttack(0, 0);
  test('expect(board[0][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[0][0]).toBe('shipA');
  });
  test('expect(board[1][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[1][0]).toBe('shipA');
  });
  test('expect(board[2][0]).toBe(shipA)', () => {
    expect(board24.boardShipLayout[2][0]).toBe(null);
  });
  test('shipToAdd.hits[0]).toBe("hit")', () => {
    expect(shipToAdd.hits[0]).toBe('hit');
  });

  board24.receiveAttack(0, 1);
  test('board24.boardHitAndMissLayout[0][1]).toBe("miss")', () => {
    expect(board24.boardHitAndMissLayout[0][1]).toBe('miss');
  });
});

// describe('gameboard', () => {
//   const board1 = Gameboard();
//   let shipToAdd = Ship('shipA', 2, [0, 0], true);
//   board1.addShipToBoard(shipToAdd);
//   test('add to board Ship(2, [0, 0], true)', () => {
//     expect(board1.board[0][1]).toBe('shipA');
//   });
// });
