# React Casino

Component library for playing cards, chips, and other common casino game items.

## Useage

You can pass a `className` attribute to any component. If you supply a string, only the string you supply will be used, overriding the default classes. If you supply an array, your supplied classes will be applied in addition to the default classes.

### Cards

Cards can accept width/height attributes. If no suit and/or face is supplied, the back of a card will be shown.

```js
import React from 'react';
import { Card } from 'react-casino';

const PlayingCard = () => {
  return (
    <Card face="A" suit="S" />
  );
};
```
