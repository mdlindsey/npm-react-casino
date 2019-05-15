export const winningHand = (hands) => {

};

export const hasPair = (cards) => {
  let faceCounter = {};
  for(const card of cards) {
    if (!faceCounter[card.face])
      faceCounter[card.face] = 0;
    faceCounter[card.face]++;
  }
  for(const count of faceCounter) {
    if (count > 1)
      return true;
  }
  return false;
};