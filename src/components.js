import React from 'react';
import Card from './components/Card';
import Hand from './components/Hand';
import Deck from './components/Deck';
import Chip from './components/Chip';
import Dice from './components/Dice';
import cardsCss from './components/css/cards.css';
import handsCss from './components/css/hands.css';


const CardStyles = () => (
  <style dangerouslySetInnerHTML={{__html: cardsCss}} />
);
const HandStyles = () => (
  <style dangerouslySetInnerHTML={{__html: handsCss}} />
);
export default { Card, Hand, Deck, Chip, Dice, CardStyles, HandStyles }
