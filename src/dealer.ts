

class Dealer {
    private _deck: any[];
    // private _drawPile: any[] = [];
    // private _discardPile: any[] = [];
    private _options: any;

    /**
     * Instantiates a Dealer instance to play games
     * @param deck
     * @param options
     */
    public constructor(deck: any[], options: any) {
        // need to valdiate the deck first
        this._deck = deck;
        this._options = options;
    }

    /**
     * Randomizes the draw pile
     */
    public shuffle() {
        // randomly shuffles the deck for a game
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
        // Pulls cards from the top of the deck, defaults to 1 card
    }

    /**
     * Moves cards from the draw pile to the discard pile
     * @param count
     */
    public discard(count: number = 1) {
        // cards are moved to the burn pile
    }

    /**
     * Resets the dealer for a new game
     */
    public reset() {
        this._drawPile = this._deck;
        this._discardPile = [];
    }
}

export default Dealer;
