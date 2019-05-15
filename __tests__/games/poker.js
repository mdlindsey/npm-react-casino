import { hasPair } from '../../src/games/poker/mixins';

test('BlackJack Bot', () => {
  expect(hasPair([
    { face: 'A', suit: 'S' },
    { face: 'A', suit: 'D' },
    { face: 'T', suit: 'D' },
    { face: 'J', suit: 'C' },
    { face: 'J', suit: 'S' },
  ])).toEqual(true);
});