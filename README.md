# React Casino

Component library for playing cards, chips, and other common casino game items.

## Usage

You can pass a `className` attribute to any component. If you supply a string, only the string you supply will be used, overriding the default classes. If you supply an array, your supplied classes will be applied in addition to the default classes. You will see various styling components such as `CardStyles` in the examples; all styling components are optional and simply render CSS for default styling.

### Cards

Cards can accept width/height attributes. If no suit and/or face is supplied, the back of a card will be shown.

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
  )
}
```

## Building

When modifying the package for testing or publishing run `npm run build` which will create the `dist/` folder from which the module is served.
