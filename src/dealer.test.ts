import { standardDeck, StandardPlayingCard } from "./decks/standard";
import Dealer from "./dealer";

describe("Dealer Class", () => {
   it("export exists", () => expect(Dealer).not.toBeUndefined());

   it("draw method returns 1 card by default", () => {
      const dealer = new Dealer(standardDeck);
      const result = dealer.draw();
      expect(result).toHaveLength(1);
   });

   it("draw method returns the number of cards specified", ()=> {
      const qty = 5;
      const dealer = new Dealer(standardDeck);
      const result = dealer.draw(qty);
      expect(result).toHaveLength(qty);
   });
});
