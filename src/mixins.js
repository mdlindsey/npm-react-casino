import React from 'react';

export const cardValue = (face) => {
  switch(face) {
    case 'A': return 14;
    case 'K': return 13;
    case 'Q': return 12;
    case 'J': return 11;
    case '10': return 10;
    case '9': return 9;
    default: return 0;
  }
}

export const reducedClassNames = (defaultClasses=[], className=[]) => Array.isArray(className) ? [...className, ...defaultClasses].join(' ') : className || defaultClasses.join(' ');

export const isBower = (card,trump,bowers={S: 'C', C: 'S', H: 'D', D: 'H'}) => trump && card.suit === bowers[trump] && card.face === 'J';

export const isPlayable = (card,hand,suit,trump) => {
  const trumpBower = isBower(card,trump);
  const sameSuit = card.suit === suit;
  const noCardLed = !suit;
  let haveNoneOfSuit = true;
  hand.map(c => {
    if (c.suit === suit && !isBower(c,trump)) {
      haveNoneOfSuit = false;
    }
    return c;
  });
  const isPlayable = noCardLed || sameSuit || (trumpBower && suit === trump) || haveNoneOfSuit;
  return isPlayable;
};


export const cardClassNames = (card,hand,suit,trump,swaps=[]) => {
  let classNames = [];
  if (!isPlayable(card,hand,suit,trump)) {
    classNames.push('dim');
  } else {
    classNames.push('playable');
  }
  // check swaps
  if (swaps && swaps.length === 1 && swap) {
    const thisCardSwaps = swaps.filter(swap => swap.card.suit === card.suit && swap.card.face === card.face);
    if (thisCardSwaps.length) {
      classNames.push('swapped');
    }
  }
  return classNames.join(' ');
};

export const sortHand = (cards, trump=false) => {
  // console.log('[&] Sorting cards:', cards);
  let bySuit = {};
  for(let card of cards) {
    if (!bySuit[card.suit]) {
      bySuit[card.suit] = [];
    }
    bySuit[card.suit].push(card);
  }
  for(let suit in bySuit) {
    bySuit[suit].sort((a,b) => cardValue(b.face) - cardValue(a.face));
  }
  let sorted = [];
  if (bySuit['C']) {
    sorted = [
      ...sorted,
      ...bySuit['C'],
    ];
  }
  if (bySuit['S']) {
    sorted = [
      ...sorted,
      ...bySuit['S'],
    ];
  }
  if (bySuit['D']) {
    sorted = [
      ...sorted,
      ...bySuit['D'],
    ];
  }
  if (bySuit['H']) {
    sorted = [
      ...sorted,
      ...bySuit['H'],
    ];
  }
  // console.log('[&] Sorted cards:', sorted);
  return sorted;
};