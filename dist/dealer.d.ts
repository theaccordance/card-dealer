declare class Dealer<D extends object> {
  private _deck;
  private _drawPile;
  private _discardPile;
  /**
   * Instantiates a Dealer instance to play games
   * @param deck - an array of card objects
   */
  constructor(deck: D[]);
  /**
   * Randomizes the draw pile
   * @chainable
   */
  shuffle(): this;
  /**
   * Splits the deck & puts the top half on the bottom
   * @chainable
   * @param {number} count - The position of the deck to cut
   */
  cut(count?: number): this;
  /**
   * Draws cards from the draw pile
   * @param count
   * @return cards
   */
  draw(count?: number): D[];
  /**
   * Moves cards from the draw pile to the discard pile
   * @chainable
   * @param {number} count - The number of cards to move from the draw pile to the discard pile
   */
  discard(count?: number): this;
  /**
   * Resets the dealer for a new game
   * @chainable
   */
  reset(): this;
  /**
   * returns a count for the remaining cards in the draw pile
   * @returns count of remaining cards from draw pile
   */
  remainingCards(): number;
}
export default Dealer;
