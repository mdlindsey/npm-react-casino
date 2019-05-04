# React Casino

Component library for playing cards, chips, and other common casino game items.

## Usage

You can pass a `className` attribute to any component. If you supply a string, only the string you supply will be used, overriding the default classes. If you supply an array, your supplied classes will be applied in addition to the default classes. You will see various styling components such as `CardStyles` in the examples; all styling components are optional and simply render CSS for default styling.

### Cards

Individual cards are rendered from high-quality PNGs and can be monitored with callbacks for all applicable player actions.

#### Example

```js
import React from 'react';
import { Card, CardStyles } from 'react-casino';

const BlackJack = () => {
  return (
    <div>
      <CardStyles />
      <Card face="A" suit="S" />
      <Card face="K" suit="S" />
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
- `className` - When supplied with a string, only the string you supply will be used, overriding the default classes; if supplied with an array, your supplied classes will be applied in addition to the default classes

### Hands

Multiple cards can be maintained via a single component that has baked in functionality for most popular games such as card sorting, suit following, trump suits, card swapping, and more.

#### Example

```js
import React from 'react';
import { Card, CardStyles } from 'react-casino';

const PepperHand = () => {
  return (
    <div>
      <HandStyles />
      <Hand follow="C" cards={[
        { suit: 'S', face: 'A' },
        { suit: 'S', face: 'K' },
        { suit: 'S', face: 'Q' },
        { suit: 'S', face: 'J' },
        { suit: 'S', face: 'T' },
        { suit: 'C', face: '9' }
      ]} />
    </div>
  );
};
```

#### Props

- `cards` - Array of cards that the hand contains
- `follow` - Suit that must be followed if possible (if applicable - eg: Hearts, Spades, Pepper)
- `trump` - Trump suit (if applicable - eg: Spades, Pepper)
- `onClick` - Callback that is executed when a card in the hand is clicked; receives `(event,card)` parameters
- `onHover` - Callback that is executed when a card in the hand is hovered over; receives `(event,card)` parameters
- `className` - When supplied with a string, only the string you supply will be used, overriding the default classes; if supplied with an array, your supplied classes will be applied in addition to the default classes

## Building

When modifying the package for testing or publishing run `npm run build` which will create the `dist/` folder from which the module is served.
