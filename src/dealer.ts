class Dealer<D extends object> {
    private _deck: D[];
    private _drawPile: D[];
    private _discardPile: D[];

    // private _options: any;

    /**
     * Instantiates a Dealer instance to play games
     * @param deck
     * @param options
     */
    public constructor(deck: D[]) {

        // need to valdiate the deck first
        this._deck = [...deck];
        this._drawPile = [...deck];
        this._discardPile = [];
        // this._options = options;
    }

    /**
     * Randomizes the draw pile
     */
    public shuffle() {

        function shuffleDeck(deck: D[]) {
            for (let index = deck.length - 1; index > 0; index--) {
                const swap = Math.floor(Math.random() * index);
                [deck[index], deck[swap]] = [deck[swap], deck[index]];
            }
            return deck;
        }

        this._drawPile = shuffleDeck(this._deck);
    }

    /**
     * Splits the deck & puts the top half on the bottom
     */
    public cut(count: number = 1) {
        const top = this._drawPile.splice(0, count);
        this._drawPile.concat(top);
    }

    /**
     * Draws cards from the draw pile
     * @param count
     */
    public draw(count: number = 1) {
        const drawnCards: D[] = this._drawPile.splice(0, count);
        this._discardPile.concat(drawnCards);
        return drawnCards;
    }

    /**
     * Moves cards from the draw pile to the discard pile
     * @param count
     */
    public discard(count: number = 1) {
        const discardedCards: D[] = this._drawPile.splice(0, count);
        this._discardPile.concat(discardedCards);
        return;
    }

    /**
     * Resets the dealer for a new game
     */
    public reset() {
        this._drawPile = [...this._deck];
        this._discardPile = [];
    }

    /**
     * returns a count for the remaining cards in the draw pile
     */
    public remainingCards() {
        return this._drawPile.length;
    }
}

export default Dealer;