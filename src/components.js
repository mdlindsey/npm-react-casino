import React from 'react';
import { cardClassNames } from './mixins';
import cardsCss from './assets/css/cards.css';
import handsCss from './assets/css/hands.css';

export const CardStyles = () => (
  <style dangerouslySetInnerHTML={{__html: cardsCss}} />
);
export const HandStyles = () => (
  <style dangerouslySetInnerHTML={{__html: handsCss}} />
);
export const Deck = ({ color, size=52 }) => {
  return (
    <div>Deck</div>
  );
};
export const Hand = ({ cards=[], trump=false, playable=false, fan=10, space=5 }) => {
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
      <img src={ require(`./assets/png/cards/${face}${suit}.png`) } alt={`${face}${suit}`} style={style} />
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