import React from 'react';
import { Hand, Deck, Table } from 'react-casino';
export default () => {
  return (
    <main>
      <Table>
        <Deck size="52" />
        <Hand follow="C" trump="S" cards={[
          { suit: 'S', face: 'A' },
          { suit: 'S', face: 'K' },
          { suit: 'S', face: 'Q' },
          { suit: 'S', face: 'J' },
          { suit: 'S', face: 'T' },
          { suit: 'C', face: 'J' },
          // { suit: 'H', face: 'A' },
          // { suit: 'H', face: 'K' },
          // { suit: 'H', face: 'Q' },
          // { suit: 'H', face: 'J' },
          // { suit: 'H', face: 'T' },
          // { suit: 'D', face: 'J' },
          // { suit: 'D', face: 'A' },
        ]} onClick={(e,card) => console.log(`Clicked ${card.face}${card.suit}`)} />
      </Table>
    </main>
  );
};
