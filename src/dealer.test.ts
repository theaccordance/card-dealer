import Dealer from "./dealer";
import standardDeck from "./decks/standard";

describe("Dealer Class", () => {
   it("export exists", () => expect(Dealer).not.toBeUndefined());

   it("Throws an error if instantiated without a deck", () => {
      try {
         const game = new Dealer();
      } catch (e) {
         console.log(e);
         expect(e).not.toBeUndefined();
      }
   });

   it("Throws an error if passed a non-array value as a deck", () => {
      try {
         const game = new Dealer("foo");
      } catch (e) {
         console.log(e);
         expect(e).not.toBeUndefined();
      }
   });
});
