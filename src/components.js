import React, { useState } from 'react';
import { cardClassNames, reducedClassNames } from './mixins';
import cardsCss from './assets/css/cards.css';
import handsCss from './assets/css/hands.css';
import tableCss from './assets/css/table.css';
/******************************************************************
 * Styles
 ******************************************************************/
export const CardStyles = () => (
  <style dangerouslySetInnerHTML={{__html: cardsCss}} />
);
export const HandStyles = () => (
  <style dangerouslySetInnerHTML={{__html: handsCss}} />
);
export const TableStyles = () => (
  <style dangerouslySetInnerHTML={{__html: tableCss}} />
);
export const IcomoonStyles = () => (
  <link rel="stylesheet" href="https://cdn.adom.co/fonts/icomoon/style.css" />
);
/******************************************************************
 * Deck
 ******************************************************************/
export const Deck = ({ cards=[], size=52, className, style, onClick=()=>{}, onHover=()=>{}  }) => {
  const defaultClasses = ['deck'];
  let [styles, setStyles] = useState(!style ? { left: `calc(50vw - 90px`, top: `calc(50vh - 80px)` } : style);
  const c = [];
  for(let i = 0; i++ < Number(size) || cards.length;)
    c.push(i);
  return (
    <ul className={ reducedClassNames(defaultClasses, className) } style={style}>
      {
        c.map((i) => {
          return (
            <li key={i} style={styles} onClick={() => setStyles({ left: `calc(50vw - 90px`, top: `calc(30vh - ${i*2}px)` } )}>
              { <Card onClick={onClick} onMouseOver={onHover} style={{bottom: i/3, left: i/3, zIndex: i}} /> }
            </li>
          );
        })
      }
    </ul>
  );
};
/******************************************************************
 * Hand
 ******************************************************************/
export const Hand = ({ cards=[], trump=false, follow=false, className, style, onClick=()=>{}, onHover=()=>{} }) => {
  const defaultClasses = ['hand', `cards-${cards.length}`];
  const newStyle = !style ? { left: `calc(50vw - ${70 + 20 * (cards.length - 1)}px` } : style;
  return (
    <ul className={ reducedClassNames(defaultClasses, className) } style={newStyle}>
      {
        cards.map((card,i) => {
          const classes = cardClassNames(card,cards,follow,trump);
          return (
            <li key={i} className={classes}>
              <Card suit={card.suit} face={card.face} playable={classes.includes('playable')} onClick={onClick} onMouseOver={onHover} />
            </li>
          );
        })
      }
    </ul>
  );
};
/******************************************************************
 * Card
 ******************************************************************/
export const Card = ({ suit, face, width, height, className, style, onClick=()=>{}, onHover=()=>{} }) => {
  const defaultClasses = ['playing-card'];
  let imgStyle = {};
  if (width)
    imgStyle.width = width;
  if (height)
    imgStyle.height = height;
  if (!width && !height)
    imgStyle.width = 150;
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
  const click = (e,card) => {
    onClick(e,card);
  };
  const hover = (e,card) => {
    onHover(e,card);
  };
  return (
    <span onClick={e => click(e,{face,suit})} onMouseOver={e => hover(e,{face,suit})}
      className={ reducedClassNames(defaultClasses,className) } style={style}>
      <img src={ require(`./assets/png/cards/${face}${suit}.png`) } alt={`${face}${suit}`} style={imgStyle} />
    </span>
  );
};
/******************************************************************
 * Chip
 ******************************************************************/
export const Chip = ({ color, value }) => {
  return (
    <div>Chip</div>
  );
};
/******************************************************************
 * Dice
 ******************************************************************/
export const Dice = ({ color, value }) => {
  return (
    <div>Dice</div>
  );
};
/******************************************************************
 * Table
 ******************************************************************/
export const Table = ({ children, background }) => {
  let texture;
  switch(String(background).toLowerCase()) {
    case 'light':
      texture = 'default-light';
      break;
    case 'subtle':
      texture = 'subtle';
      break;
    case 'felt':
      texture = 'felt';
      break;
    case 'fabric':
      texture = 'fabric';
      break;
    case 'pinstripe':
      texture = 'pinstripe';
      break;
    case 'noise':
      texture = 'noise';
      break;
    case 'paper':
      texture = 'paper';
      break;
    case 'leather':
      texture = 'leather';
      break;
    case 'slate':
      texture = 'slate';
      break;
    case 'suede':
      texture = 'suede';
      break;
    case 'twill':
      texture = 'twill';
      break;
    case 'burlap':
      texture = 'burlap';
      break;
    case 'cardboard':
      texture = 'cardboard';
      break;
    case 'default':
    default:
      texture = 'default';
  }
  return (
    <div className="table-background" style={{backgroundImage: `url(${require(`./assets/png/textures/${texture}.png`)})`}}>
      <CardStyles />
      <HandStyles />
      <TableStyles />
      <IcomoonStyles />
      { children }
    </div>
  );
};