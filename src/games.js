import * as pepperBot from './games/pepper/bot';
import * as pepperMixins from './games/pepper/mixins';
import * as pepperController from './games/pepper/controller';
// import * as pokerBot from './games/poker/bot';
import * as pokerMixins from './games/poker/mixins';
// import * as pokerController from './games/poker/controller';
import * as blackjackBot from './games/blackjack/bot';
import * as blackjackMixins from './games/blackjack/mixins';
import * as blackjackController from './games/blackjack/controller';

export const pepper = {
  bot: pepperBot,
  mixins: pepperMixins,
  controller: pepperController
};

export const blackjack = {
  bot: blackjackBot,
  mixins: blackjackMixins,
  controller: blackjackController
};

export const poker = {
  mixins: pokerMixins
};