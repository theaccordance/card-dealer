# Card Dealer
[![Build Status](https://travis-ci.org/theaccordance/card-dealer.svg?branch=master)] (https://travis-ci.org/theaccordance/card-dealer)[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Card Dealer is a module that will generate a JavaScript array of playing card objects based on a standard 52 card deck.  

## Installation
Install for node.js using npm:

``` bash
$ npm install card-dealer
```

## Documentation
1. [Unpack](#unpack)
1. [Shuffle](#shuffle)

### Unpack
Returns an ordered array of playing card objects.  
- Suit Order: Club, Diamonds, Hearts, Spades
- Rank Order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace

``` javascript
var Dealer = require('./lib/card-dealer'),
    Game = Dealer.unpack();

console.log(Game[0]);
// { Suit: 'Clubs', Rank: '2' }

```

### Shuffle
Returns a shuffled array of playing card objects using the Fisher-Yates shuffle algorithm.  The Shuffle method accepts an optional array argument to shuffle existing card arrays. 

``` javascript
var Dealer = require('./lib/card-dealer'),
    Game = Dealer.shuffle();

console.log(Game[0]);
// { Suit: 'Hearts', Rank: '4' }

```

## Feature Requests
Have a suggestion for this npm module?  Submit an issue.  
