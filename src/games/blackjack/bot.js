import { cardValue, HIT, STAND } from './mixins';
export const act = ({ hand }) => {
  const handValue = hand.map(card => cardValue(card.face)).reduce((total,faceValue) => total + faceValue);
  return handValue >= 17 ? STAND : HIT;
};