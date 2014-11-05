'use strict';

var DeckConfig = {
    Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
    Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
};

function unpackDeck() {
    var array = [];
    DeckConfig.Suit.forEach(function (suit) {
        DeckConfig.Rank.forEach(function (rank) {
            array.push({
                Suit: suit,
                Rank: rank
            });
        });
    });
    return array;
}

function shuffleDeck(input) {
    var array = (!input) ? unpackDeck() : input,
        currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


module.exports = {
    unpack : unpackDeck,
    shuffle : shuffleDeck
};
