import { cardValue  } from './mixins';
export const play = ({ hand }) => {
  const handValue = hand.map(card => cardValue(card.face)).reduce((total,faceValue) => total + faceValue);
  return handValue >= 17 ? true : false;
};