import { act } from '../../src/games/blackjack/bot';
import { HIT, STAND } from '../../src/games/blackjack/mixins';
import { sortCards } from '../../src/games/pepper/mixins';
console.log(sortCards([
  { suit: 'S', face: 'A' },
  { suit: 'S', face: 'J' },
  { suit: 'C', face: 'J' },
  { suit: 'S', face: 'Q' },
  { suit: 'S', face: 'K' },
  { suit: 'D', face: 'A' },
  { suit: 'H', face: 'K' },
  { suit: 'S', face: '9' },
  { suit: 'H', face: 'A' },
  { suit: 'S', face: 'T' },
  { suit: 'H', face: 'Q' },
], 'S'));
test('BlackJack Bot', () => {
  describe('should STAND with AS/JS', () => {
    expect(act({ hand: [
      {
        face: 'A',
        suit: 'S'
      },
      {
        face: 'J',
        suit: 'S'
      }
    ]})).toEqual(STAND);
  });
  describe('should HIT with 2S/JS', () => {
    expect(act({ hand: [
      {
        face: '2',
        suit: 'S'
      },
      {
        face: 'J',
        suit: 'S'
      }
    ]})).toEqual(HIT);
  });

});