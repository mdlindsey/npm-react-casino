import { cardClassNames } from '..//mixins';
export default ({ cards=[], trump=false, playable=false, fan=10, space=5 }) => {
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