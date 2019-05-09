
export const HIT = true;
export const STAND = false;

export const cardValue = (face) => {
  switch(face) {
    case 'A': return 11; // or 1
    case 'K':
    case 'Q':
    case 'J':
    case 'T': return 10;
    default: return Number(face);
  }
}

export const handValue = hand => hand.map(card => cardValue(card.face)).reduce((total,faceValue) => total + faceValue);