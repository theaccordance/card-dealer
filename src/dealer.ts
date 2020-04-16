class Dealer {
    private _deck: any[];
    private _drawPile: any[];
    private _discardPile: any[];

    // private _options: any;

    /**
     * Instantiates a Dealer instance to play games
     * @param deck
     * @param options
     */
    public constructor(deck: any[]) {

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

        function shuffleDeck(deck: any[]) {
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
    public cut() {
        // splits the deck into two and puts the top half on the bottom
    }

    /**
     * Draws cards from the draw pile
     * @param count
     */
    public draw(count: number = 1) {
        const drawnCards: any[] = this._drawPile.splice(0, count);
        this._discardPile.concat(drawnCards);
        return drawnCards;
    }

    /**
     * Moves cards from the draw pile to the discard pile
     * @param count
     */
    public discard(count: number = 1) {
        const discardedCards: any[] = this._drawPile.splice(0, count);
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
