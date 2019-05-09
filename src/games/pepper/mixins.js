export const isBower = (card,trump,bowers={S: 'C', C: 'S', H: 'D', D: 'H'}) => trump && card.suit === bowers[trump] && card.face === 'J';
export const sortCards = (hand,trump=false) => {
  // group by suit
  let grouped = [];
  const getGroup = suit => grouped.filter(group => group.suit === suit)[0];
  const getGroupIndex = suit => {
    for(const i in grouped) {
      if (grouped[i].suit === suit)
        return i;
    }
    return -1;
  };
  for(const card of hand) {
    const suit = cardSuit(card,trump);
    const group = getGroup(suit);
    if (!group) 
      grouped.push({
        suit,
        cards: []
      });
    const groupIndex = getGroupIndex(suit);
    grouped[groupIndex] = {...grouped[groupIndex], cards: [...grouped[groupIndex].cards, card]};
  }
  return [].concat.apply([], grouped.map(group => ({...group, cards: group.cards.sort((a,b) => cardValue(b,trump) - cardValue(a,trump))})).sort((a,b) => a.cards.length < b.cards.length).map(group => group.cards));
};
export const cardSuit = (card,trump=false) => {
  return String((trump && isBower(card,trump)) ? trump : card.suit).toUpperCase();
};
export const cardValue = (card,trump=false) => {
  if (trump && String(trump).toUpperCase() === String(card.suit).toUpperCase() && String(card.face).toUpperCase() === 'J')
    return 16;
  if (isBower(card,trump))
    return 15;
  switch(card.face) {
    case 'A': return 14;
    case 'K': return 13;
    case 'Q': return 12;
    case 'J': return 11;
    case 'T': return 10;
    default: return Number(card.face);
  }
}
