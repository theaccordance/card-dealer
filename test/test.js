(function() {
    var assert = require('assert'),
        should = require('should'),
        Dealer = require('../lib/card-dealer');

    describe('Card Dealer', function () {
        var deck = [];
        describe('Unpack', function () {
            it('deck var should have length of 52 after applying unpack method', function (done) {
                deck = Dealer.unpack();
                deck.should.have.length(52);
                done();
            });
            it('First index of deck should return 2 of clubs', function (done) {
                deck[0].Suit.should.be.exactly('Clubs');
                deck[0].Rank.should.be.exactly('2');
                done();
            });
        });
        describe('Shuffle', function() {
            var shuffledDeck = Dealer.shuffle();
            it('shuffledDeck var should have length of 52 after applying shuffle method', function (done) {
                shuffledDeck.should.have.length(52);
                done();
            });
        });
    });
}).call(this);
