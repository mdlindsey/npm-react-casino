import React, { useState } from 'react';
import cardsCss from './assets/css/cards.css';
import handsCss from './assets/css/hands.css';
import tableCss from './assets/css/table.css';
import chipsCss from './assets/css/chips.css';
const reducedClassNames = (defaultClasses=[], className=[]) => Array.isArray(className) ? [...className, ...defaultClasses].join(' ') : className || defaultClasses.join(' ');
/******************************************************************
 * Styles
 ******************************************************************/
export const CardStyles = () => (
  <style dangerouslySetInnerHTML={{__html: cardsCss}} />
);
export const HandStyles = () => (
  <style dangerouslySetInnerHTML={{__html: handsCss}} />
);
export const ChipStyles = () => (
  <style dangerouslySetInnerHTML={{__html: chipsCss}} />
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
  let [styles, setStyles] = useState([]);
  if (!styles.length) {
    for(let i = 0; i++ < Number(size) || cards.length;)
      styles.push({});
  }
  const defaultClasses = ['deck'];
  const newStyle = !style ? { left: `calc(50vw - 90px`, top: `calc(50vh - 80px)` } : style;
  const setStyle = (i,s,styles) => {
    let arr = [...styles];
    arr[i] = s;
    setStyles(arr);
  };
  return (
    <ul className={ reducedClassNames(defaultClasses, className) } style={newStyle}>
      {
        styles.map((style,i) => {
          return (
            <li key={i} style={style} onClick={() => setStyle(i, { left: `calc(250px + ${i/3}px`, bottom: `calc(250px - ${i/3}px)` }, styles)}>
              { <Card onClick={onClick} onMouseOver={onHover} style={{bottom: i/3, left: i/3, zIndex: i+1}} /> }
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
export const Hand = ({ cards=[], playable=[], strict=false, className, style, onClick=()=>{}, onHover=()=>{} }) => {
  const isPlayable = card => {
    let matches = 0;
    if (!playable)
      return false;
    if (playable && (!Array.isArray(playable) || !playable.length))
      return true;
    if (Array.isArray(playable) && playable.length) {
      for(const condition of playable) {
        let conditionMatches = 0;
        for(const prop in condition) {
          if (card[prop] && card[prop] === condition[prop])
            conditionMatches++;
        }
        if (conditionMatches === Object.keys(condition).length)
          matches++ && console.log(card, condition);
      }
    }
    return matches > 0;
  };
  
  const playableCards = cards.filter(card => isPlayable(card));
  const cardClasses = card => [isPlayable(card) || (!playableCards.length && !strict) ? 'playable' : 'dim'];
  const defaultClasses = ['hand', `cards-${cards.length}`];
  const newStyle = !style ? { left: `calc(50vw - ${70 + 20 * (cards.length - 1)}px` } : style;
  return (
    <ul className={ reducedClassNames(defaultClasses, className) } style={newStyle}>
      {
        cards.map((card,i) => {
          const classes = cardClasses(card);
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
  if (!width && !height) {
    imgStyle.width = 150;
    imgStyle.height = 217;
  }
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
export const Chip = ({ color, value, width, height, className, style, onClick=()=>{}, onHover=()=>{} }) => {
  const defaultClasses = ['chip'];
  let imgStyle = {};
  if (width)
    imgStyle.width = width;
  if (height)
    imgStyle.height = height;
  if (!width && !height) {
    imgStyle.width = 64;
    imgStyle.height = 64;
  }
  switch(color) {
    case 'red':
    case 'blue':
    case 'black':
    case 'white':
    case 'green':
      break;
    default:
      color = 'white';
  }
  const click = (e,card) => {
    onClick(e,card);
  };
  const hover = (e,card) => {
    onHover(e,card);
  };
  return (
    <span onClick={e => click(e,{color,value})} onMouseOver={e => hover(e,{color,value})}
      className={ reducedClassNames(defaultClasses,className) } style={style}>
      <img src={ require(`./assets/png/chips/${color}.png`) } alt={`${color}`} style={imgStyle} />
    </span>
  );
};
/******************************************************************
 * Chip Stack
 ******************************************************************/
export const Stack = ({ color, size, value, className, style, onClick=()=>{}, onHover=()=>{}  }) => {
  let [styles, setStyles] = useState([]);
  if (!styles.length) {
    for(let i = 0; i++ < Number(size);)
    styles.push({});
  }
  const defaultClasses = ['stack'];
  const newStyle = !style ? { left: `calc(50vw - 190px`, bottom: `5vh` } : style;
  const setStyle = (i,s,styles) => {
    let arr = [...styles];
    arr[i] = s;
    setStyles(arr);
  };
  console.log('chips:', styles.length);
  return (
    <ul className={ reducedClassNames(defaultClasses, className) } style={newStyle}>
      {
        styles.map((style,i) => {
          return (
            <li key={i} style={style} onClick={() => setStyle(i, { left: `calc(250px + ${i}px`, bottom: `calc(250px - ${i}px)` }, styles)}>
              { <Chip color={color} onClick={onClick} onMouseOver={onHover} style={{bottom: i, left: i/2, zIndex: i+1}} /> }
            </li>
          );
        })
      }
    </ul>
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
      <ChipStyles />
      <TableStyles />
      <IcomoonStyles />
      { children }
    </div>
  );
};