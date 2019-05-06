import React from 'react';
import { Hand, Card, Stack, Deck, Table } from 'react-casino';
export default () => {
  return (
    <main>
      <Table>
        {/* <Chip color="black" /> */}
        <Stack size="20" color="blue" style={{left: '20vw', bottom: '5vh'}} />
        <Stack size="15" color="black" style={{left: '25vw', bottom: '5vh'}} />
        <Stack size="10" color="green" style={{left: '30vw', bottom: '5vh'}} />
        <Stack size="10" color="red" style={{left: '35vw', bottom: '5vh'}} />
        <Stack size="10" color="white" style={{left: '40vw', bottom: '5vh'}} />
        <Deck size="40" style={{left: '10vw'}} />
        <Deck size="5" style={{left: '22vw'}} />
        <div style={{position: 'absolute', left: '35vw'}}>
          <Card face="A" suit="C" />
          <Card face="A" suit="H" />
          <Card face="K" suit="H" />
          <Card face="K" suit="C" />
          <Card face="K" suit="D" />
        </div>
        <Hand follow="C" trump="S" cards={[
          { suit: 'S', face: 'A' },
          { suit: 'D', face: 'A' }
        ]} onClick={(e,card) => console.log(`Clicked ${card.face}${card.suit}`)} />
      </Table>
    </main>
  );
};
