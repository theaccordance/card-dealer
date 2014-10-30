/*jslint node:true es5:true*/
'use strict';

var KnuthShuffle = require('knuth-shuffle').knuthShuffle,
    DeckConfig = require('./standard');

function cdUnpack() {
    var deck = [];
    DeckConfig.Suit.forEach(function(suit) {
        DeckConfig.Rank.forEach(function(rank) {
            deck.push({
                Suit: suit,
                Rank: rank
            });
        });
    });
    return deck;
}

function cdShuffle(input) {
    var deck = (!input) ? cdUnpack() : input;
    return KnuthShuffle(deck.slice(0));
}


module.exports = {
    unpack : cdUnpack,
    shuffle : cdShuffle
};
