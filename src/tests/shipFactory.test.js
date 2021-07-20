// const ship = require('../factories/shipFactory.js');
// import { exportAllDeclaration } from '@babel/types';
// import { test } from 'picomatch';
// import { Ship } from '../factories/shipFactory.js';
import Ship from '../factories/shipFactory.js';

// test('hit(1)', () => {
//   expect(Ship(4).hit(1)).toBe(false);
// });

describe('Ship factory', () => {
  const ship = Ship('shipB', 3, [0, 0], true);
  ship.hit(1);
  test('hit(1)', () => {
    expect(ship.hits[1]).toBe('hit');
  });
  test('isSunk() with one hit should be false', () => {
    expect(ship.isSunk()).toBe(false);
  });
});

describe('Ship factory sunk 2length', () => {
  const ship = Ship('shipC', 2, [0, 0], true);
  ship.hit(0);
  ship.hit(1);
  test('isSunk() with two hit should be true', () => {
    expect(ship.isSunk()).toBe(true);
  });
});

// REMEMBER you only have to test your object’s public interface.
// Only methods or properties that are used outside of your ‘ship’
// object need unit tests.
