// const ship = require('../factories/shipFactory.js');
import { exportAllDeclaration } from '@babel/types';
// import { test } from 'picomatch';
import { Ship } from '../factories/shipFactory.js';

test('checks isHit is false', () => {
  expect(ship(34).isHit).toBe(false);
});
// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
