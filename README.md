# React Casino

Component library for playing cards, chips, and other common casino game items.

## Usage

You can pass a `style`, and `className` attribute to any component. Expected behavior is default for styles. With classes, if you supply a string, only the string you supply will be used, overriding the default classes. If you supply an array, your supplied classes will be applied in addition to the default classes. You will see various styling components such as `CardStyles` in the examples; all styling components are optional and simply render CSS for default styling.

### Cards

Individual cards are rendered from high-quality PNGs and can be monitored with callbacks for all applicable player actions.

#### Examples

[Poker Table](https://adom.github.io/npm-react-casino/)

```js
import React from 'react';
import { Card, CardStyles } from 'react-casino';

const AceOfSpades = () => {
  return (
    <div>
      <CardStyles />
      <Card suit="S" face="A" />
    </div>
  );
};
```

#### Props

- `suit` - Suit of the card (spades, clubs, diamons, hearts) abbreviated with a single letter (eg: S, C, D, H); if none is specified the back of a card will be shown instead
- `face` - Face of the card (Ace, King, Queen, etc) abbreviated with a single letter (eg: A, K, Q, J, T, 9, etc); if none is specified the back of a card will be shown instead
- `width` - Width of the card
- `height` - Height of the card
- `onClick` - Callback that is executed when a card is clicked; receives `(event,card)` parameters
- `onHover` - Callback that is executed when a card is hovered over; receives `(event,card)` parameters
- `style` - styles object to apply to the wrapper
- `className` - When supplied with a string, only the string you supply will be used, overriding the default classes; if supplied with an array, your supplied classes will be applied in addition to the default classes

### Hands

Multiple cards can be maintained via a single component that has baked in functionality for most popular games such as card sorting, suit following, trump suits, card swapping, and more.

#### Example

Simple blackjack hand

```js
import React from 'react';
import { Hand, HandStyles, Games } from 'react-casino';

const BlackjackHand = () => {
  return (
    <div>
      <HandStyles />
      <Hand cards={[
        { suit: 'S', face: 'A' },
        { suit: 'S', face: 'K' }
      ]} />
    </div>
  );
};
```

Pepper hand sorted with spades as trump

```js
import React from 'react';
import { Hand, HandStyles, Games } from 'react-casino';

const PepperHand = () => {
  // array of cards for this hand
  const cards = [
    { suit: 'S', face: 'A' },
    { suit: 'S', face: 'J' },
    { suit: 'C', face: 'J' },
    { suit: 'D', face: 'A' },
    { suit: 'H', face: 'K' },
    { suit: 'S', face: '9' },
  ];
  // sort cards accoridng to game (optional)
  const sortedCards = Games.pepper.mixins.sortCards(cards, 'S');
  // define playable rules (optional)
  const playable = [
    {suit: 'H'},
    {suit: 'C', face: 'J'}
  ];
  return (
    <div>
      <HandStyles />
      <Hand cards={sortedCards} playable={playable} />
    </div>
  );
};
```

#### Props

- `cards` - Array of cards that the hand contains
- `playable` - Boolean or Array of conditions that playable cards must meet to be playable
- `strict` - Boolean if true (default) any card can be played when no cards in hand are playable
- `onClick` - Callback that is executed when a card in the hand is clicked; receives `(event,card)` parameters
- `onHover` - Callback that is executed when a card in the hand is hovered over; receives `(event,card)` parameters
- `style` - styles object to apply to the wrapper
- `className` - When supplied with a string, only the string you supply will be used, overriding the default classes; if supplied with an array, your supplied classes will be applied in addition to the default classes

### Tables

Tables automatically include all styling.

#### Example

```js
import React from 'react';
import { Card, CardStyles } from 'react-casino';

const PokerTable = () => {
  return (
    <Table>
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
  );
};
```

## Building

When modifying the package for testing or publishing run `npm run build` which will create the `dist/` folder from which the module is served.
