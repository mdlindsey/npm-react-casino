import React from 'react';
import { Hand, Table, Games } from 'react-casino';
const cards = [
  { suit: 'S', face: 'A' },
  { suit: 'S', face: 'J' },
  { suit: 'C', face: 'J' },
  { suit: 'D', face: 'A' },
  { suit: 'H', face: 'K' },
  { suit: 'S', face: '9' },
];
const sortedCards = Games.pepper.mixins.sortCards(cards, 'S');
const playable = [
  {suit: 'C', _required: true},
  {suit: 'C', face: 'J', _required: true, _not: true}
];
export default () => {
  return (
    <main>
      <Table>
        <Hand cards={sortedCards} playable={playable} onClick={(e,card) => console.log(`Clicked ${card.face}${card.suit}`)} />
      </Table>
    </main>
  );
};
