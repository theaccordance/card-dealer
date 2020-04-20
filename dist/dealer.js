"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dealer {
  /**
   * Instantiates a Dealer instance to play games
   * @param deck - an array of card objects
   */
  constructor(deck) {
    // need to valdiate the deck first
    this._deck = [...deck];
    this._drawPile = [...deck];
    this._discardPile = [];
    // this._options = options;
  }
  /**
   * Randomizes the draw pile
   * @chainable
   */
  shuffle() {
    function shuffleDeck(deck) {
      for (let remaining = deck.length - 1; remaining > 0; remaining--) {
        const swap = Math.floor(Math.random() * remaining);
        [deck[remaining], deck[swap]] = [deck[swap], deck[remaining]];
      }
      return deck;
    }
    this._drawPile = shuffleDeck(this._deck);
    return this;
  }
  /**
   * Splits the deck & puts the top half on the bottom
   * @chainable
   * @param {number} count - The position of the deck to cut
   */
  cut(count = 1) {
    const top = this._drawPile.splice(0, count);
    this._drawPile.concat(top);
    return this;
  }
  /**
   * Draws cards from the draw pile
   * @param count
   * @return cards
   */
  draw(count = 1) {
    const drawnCards = this._drawPile.splice(0, count);
    this._discardPile.concat(drawnCards);
    return drawnCards;
  }
  /**
   * Moves cards from the draw pile to the discard pile
   * @chainable
   * @param {number} count - The number of cards to move from the draw pile to the discard pile
   */
  discard(count = 1) {
    const discardedCards = this._drawPile.splice(0, count);
    this._discardPile.concat(discardedCards);
    return this;
  }
  /**
   * Resets the dealer for a new game
   * @chainable
   */
  reset() {
    this._drawPile = [...this._deck];
    this._discardPile = [];
    return this;
  }
  /**
   * returns a count for the remaining cards in the draw pile
   * @returns count of remaining cards from draw pile
   */
  remainingCards() {
    return this._drawPile.length;
  }
}
exports.default = Dealer;
