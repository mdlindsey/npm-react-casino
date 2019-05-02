import React from 'react';
import cardsCss from './css/cards.css';
import handsCss from './css/hands.css';
const insertCss = require('insert-css');

const cardValue = (face) => {
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

const isPlayable = (card,hand,suit,trump) => {
  const bowers = {S: 'C', C: 'S', H: 'D', D: 'H'};
  const trumpBower = trump && card.suit === bowers[trump] && card.face === 'J';
  const sameSuit = card.suit === suit;
  const noCardLed = !suit;
  let haveNoneOfSuit = true;
  hand.map(c => {
    if (c.suit === suit) {
      haveNoneOfSuit = false;
    }
    return c;
  });
  const isPlayable = noCardLed || sameSuit || (trumpBower && suit === trump) || haveNoneOfSuit;
  return isPlayable;
};


const cardClassNames = (card,hand,suit,trump,swaps) => {
  let classNames = [];
  // if (!isPlayable(card,hand,suit,trump)) {
  //   classNames.push('dim');
  // } else {
  //   classNames.push('playable');
  // }
  // check swaps
  // if (swaps && swaps.length === 1 && swap) {
  //   const thisCardSwaps = this.props.swaps.filter(swap => swap.card.suit === card.suit && swap.card.face === card.face);
  //   if (thisCardSwaps.length) {
  //     classNames.push('swapped');
  //   }
  // }
  return classNames.join(' ');
};

const sortHand = (cards, trump=false) => {
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
}

export const Deck = ({ color, size=52 }) => {
  return (
    <div>Deck</div>
  );
};
export const Hand = ({ cards=[], trump=false, playable=false, fan=10, space=5 }) => {
  insertCss(handsCss);
  return (
    <ul className="hand">
      {
        cards.map((card,i) => (
          <li key={i} className={cardClassNames(card)}>
            <Card suit={card.suit} face={card.face} playable={playable} />
          </li>
        ))
      }
    </ul>
  );
};
export const Card = ({ suit, face, width, height, className }) => {
  insertCss(cardsCss);
  const defaultClasses = ['playing-card'];
  let style = {};
  if (width)
    style.width = width;
  if (height)
    style.height = height;
  if (!width && !height)
    style.width = 150;
  suit = String(suit).toUpperCase();
  face = String(face).toUpperCase();
  switch(suit) {
    case 'C':
    case 'D':
    case 'H':
    case 'S':
      break;
    default: 
      suit = '';
  }
  switch(suit.length && face) {
    case 'A':
    case 'K':
    case 'Q':
    case 'J':
    case 'T':
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
      break;
    default: 
      face = 'BACK';
  }
  return (
    <span className={ Array.isArray(className) ? [...className, ...defaultClasses].join(' ') : className || defaultClasses.join(' ') }>
      <img src={ require(`./png/cards/${face}${suit}.png`) } alt={`${face}${suit}`} style={style} />
    </span>
  );
};
export const Chip = ({ color, value }) => {
  return (
    <div>Chip</div>
  );
};
export const Dice = ({ color, value }) => {
  return (
    <div>Dice</div>
  );
};
