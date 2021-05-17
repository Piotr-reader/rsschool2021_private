import delay from '../../shared/delay';
import BaseComponent from '../base-components';
import Card from '../card/card';
import CardsField from '../cards-field/cards-field';

const FLIP_DELAY = 1000;

export default class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => card.element.addEventListener('mousedown', () => {
      this.cardHendler(card);
    }));
    this.cardsField.addCards(cards);
  }

  private async cardHendler(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      //    добавить красный фон и крестик
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    // else зеленый фон
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
