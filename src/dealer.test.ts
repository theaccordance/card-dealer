import { standardDeck, StandardPlayingCard } from "./decks/standard";
import Dealer from "./dealer";

describe("Dealer Class", () => {
    it("export exists", () => expect(Dealer).not.toBeUndefined());

    it("draw() returns 1 card by default", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        const result = dealer.draw();
        expect(result).toHaveLength(1);
    });

    it("draw() returns the number of cards specified", () => {
        const qty = 5;
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        const result = dealer.draw(qty);
        expect(result).toHaveLength(qty);
    });

    it("remainingCards() returns a count of the cards left in the draw pile", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        const remaining = dealer.remainingCards();
        expect(remaining).toBe(standardDeck.length);
    });

    it("discard() shifts 1 card from the draw pile to the discard pile by default", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        expect(dealer.remainingCards()).toBe(standardDeck.length);
        dealer.discard();
        expect(dealer.remainingCards()).toBe(standardDeck.length - 1);
    });

    it("discard() shifts the number of cards specified from the draw pile to the discard pile", () => {
        const discardQty = 13;
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        expect(dealer.remainingCards()).toBe(standardDeck.length);
        dealer.discard(discardQty);
        expect(dealer.remainingCards()).toBe(standardDeck.length - discardQty);
    });

    it("shuffle() returns a deck in a randomized order", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        dealer.shuffle();
        const shuffledDeck = dealer.draw(standardDeck.length);
        const result = shuffledDeck.some((card: StandardPlayingCard, index) => {
            const compare = standardDeck[index];
            return card.suit !== compare.suit ||
                card.rank !== compare.rank;
        });
        expect(result).toBeTruthy();
    });

    it("dealer should return cards in provided order if shuffle() isn't invoked", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        const drawnDeck = dealer.draw(standardDeck.length);
        const result = drawnDeck.every((card: StandardPlayingCard, index) => {
            const compare = standardDeck[index];
            return card.suit === compare.suit ||
                card.rank === compare.rank;
        });
        expect(result).toBeTruthy();
    });

    it("cut() moves 1 card from the top of the draw pile by default", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        dealer.cut();
        const [topCard] = dealer.draw();
        expect(topCard.rank).not.toBe(standardDeck[0].rank);
    });

    it("cut() moves N cards specified to the bottom of the draw pile", () => {
        const cutPosition = 42;
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        dealer.cut(cutPosition);
        const [topCard] = dealer.draw();
        expect(topCard.rank).toBe(standardDeck[cutPosition].rank);
        expect(topCard.suit).toBe(standardDeck[cutPosition].suit);
    });

    it("reset() replenishes the draw pile", () => {
        const dealer = new Dealer<StandardPlayingCard>(standardDeck);
        const playerHand = dealer.draw(5);
        expect(dealer.remainingCards()).not.toBe(standardDeck.length);
        dealer.reset();
        expect(dealer.remainingCards()).toBe(standardDeck.length);
    });
});
