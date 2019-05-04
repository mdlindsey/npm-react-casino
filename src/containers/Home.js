import React from 'react';
import { Hand, CardStyles, HandStyles } from 'react-casino';
export default () => {
  return (
    <main>
      <CardStyles />
      <HandStyles />
      <Hand follow="C" trump="S" cards={[
        { suit: 'S', face: 'A' },
        { suit: 'S', face: 'K' },
        { suit: 'S', face: 'Q' },
        { suit: 'S', face: 'J' },
        { suit: 'S', face: 'T' },
        { suit: 'C', face: 'J' }
      ]} onClick={(e,card) => alert(`${card.face}${card.suit}`)} />
    </main>
  );
};
