# React Casino

Component library for playing cards, chips, and other common casino game items including game logic for Poker, Blackjack, Spades, Hearts, Pepper, and more.

For demos check out our [GitHub Pages Demo](https://adom.github.io/npm-react-casino/).

## Usage

You can pass a `style`, and `className` attribute to any component. Expected behavior is default for styles. With classes, if you supply a string, only the string you supply will be used, overriding the default classes. If you supply an array, your supplied classes will be applied in addition to the default classes. You will see various styling components such as `CardStyles` in the examples; all styling components are optional and simply render CSS for default styling.

### Cards

Individual cards are rendered from high-quality PNGs and can be monitored with callbacks for all applicable player actions.

#### Example

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
- `onClick` - Callback that is executed when a card is clicked; receives `(event,card)` parameters
- `onHover` - Callback that is executed when a card is hovered over; receives `(event,card)` parameters
- `style` - Styles object to apply to the card image
- `className` - Classes array to apply to the wrapper; when supplied with a string, only the string you supply will be used, overriding the default classes; if supplied with an array, your supplied classes will be applied in addition to the default classes

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

Pepper hand with spades as trump and a club led

```js
import React from 'react';
import { Hand, Table, Games } from 'react-casino';
const cards = [
  { suit: 'S', face: 'A' },
  { suit: 'S', face: 'J' },
  { suit: 'C', face: 'J' },
  { suit: 'C', face: 'A' },
  { suit: 'H', face: 'K' },
  { suit: 'S', face: '9' },
];
const sortedCards = Games.pepper.mixins.sortCards(cards, 'S');
const playable = [ // find cards that are clubs but not JC
  {suit: 'C', _required: true},
  {suit: 'C', face: 'J', _required: true, _not: true}
];
export default () => {
  return (
    <main>
      <HandStyles />
      <Hand cards={sortedCards} playable={playable} onClick={(e,card) => console.log(`Clicked ${card.face}${card.suit}`)} />
    </main>
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

Tables automatically include all styling unless the `noStyle` prop is passed.

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

### Bots

Bots are available to make gameplay decisions based on the current state of the game.

#### Blackjack

```js
import { Games } from 'react-casino';
const { act } = Games.blackjack.bot;
```

### Controllers

...

### Mixins

Mixins are available for commonly used functionality specific to each game such as sorting cards, determining card value, etc.

#### Blackjack

```js
import { Games } from 'react-casino';
const { HIT, STAND, cardValue, handValue } = Games.blackjack.mixins;
```

#### Pepper

```js
import { Games } from 'react-casino';
const { isBower, sortCards, cardSuit, cardValue } = Games.pepper.mixins;
```

## Building

When modifying the package for testing or publishing run `npm run build` which will create the `dist/` folder from which the module is served.
