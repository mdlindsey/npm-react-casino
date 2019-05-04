export default ({ suit, face, width, height, className }) => {
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
      <img src={ require(`./components/png/cards/${face}${suit}.png`) } alt={`${face}${suit}`} style={style} />
    </span>
  );
};