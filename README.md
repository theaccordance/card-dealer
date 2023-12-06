# Card Dealer

![NPM Package](https://img.shields.io/badge/NPM-Package-red)
[![build](https://github.com/theaccordance/card-dealer/actions/workflows/build.yaml/badge.svg)](https://github.com/theaccordance/card-dealer/actions/workflows/build.yaml)
[![Coverage Status](https://coveralls.io/repos/github/theaccordance/card-dealer/badge.svg)](https://coveralls.io/github/theaccordance/card-dealer)
[![CodeFactor](https://www.codefactor.io/repository/github/theaccordance/card-dealer/badge/master)](https://www.codefactor.io/repository/github/theaccordance/card-dealer/overview/master)
![npm latest version](https://img.shields.io/npm/v/card-dealer/latest)
[![Known Vulnerabilities](https://snyk.io/test/github/theaccordance/card-dealer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/theaccordance/card-dealer?targetFile=package.json)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/card-dealer)
![License](https://img.shields.io/npm/l/card-dealer)

A robust card-dealing JavaScript Class written in TypeScript

## Table of Contents
- [Features](#features)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Usage](#usage)
  - [TypeScript](#typescript)
  - [JavaScript](#javascript)
- [API](#api)
  - [Dealer Class](#dealer-class)
  - [Shuffle](#shuffle)
  - [Cut](#cut-deck)
  - [Draw](#draw)
  - [Discard from Draw Pile](#discard)
  - [Reset Game](#reset-game)
  - [Remaining Cards](#remaining-cards)
- [License](#license)

## Features

- Use any card deck with the `Dealer` class
- Shuffle deck into a random order
- Draw cards for use
- Discard cards without revealing them
- Cut the deck
- Included Decks
  - Standard 52 Playing Cards
  - Uno

## Installation

### npm

```bash
$ npm install card-dealer --save
```

### yarn

```bash
$ yarn add card-dealer
```

## Usage

### TypeScript

```typescript
import { Dealer, standardDeck } from "card-dealer";

const dealer = new Dealer(standardDeck);
```

### JavaScript

```javascript
const Dealer = require("card-dealer/dealer");
const standardDeck = require("card-dealer/decks/standard");

const dealer = new cardDealer.Dealer(standardDeck);
```

## API

### Dealer Class

`Dealer()` takes a deck of cards to use for a game & places it on the draw pile.

```javascript
const dealer = new Dealer(standardDeck);
```

### Shuffle

Randomizes the dealer's draw pile order using the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm.

```javascript
dealer.shuffle(); // Deck is now randomized 
```

### Cut Deck

Cuts the deck at the specified position in the deck, moving the bottom half to the top of the draw pile.  If no value is passed to the method, Dealer will place the top card at the bottom of the deck.

```javascript
// Top card is now placed at the bottom of the deck
dealer.cut();

// Top 13 cards are now placed at the bottom of the deck
dealer.cut(13); 
```

### Draw

Returns the number of cards requested from the draw pile for use in the game.  If no value is passed to the method, Dealer will draw one card.

```javascript
// Returns the top card from the deck
dealer.draw();

// Returns the top 5 cards from the deck
dealer.draw(5); 
```

### Discard

Moves the number of cards specified from the draw pile to the discard pile without revealing the value to the game. If no value is passed to the method, Dealer will discard only the top card in the pile.

```javascript
// The first card in the draw pile is discarded
dealer.discard();

// The first 3 cards in the draw pile are discarded
dealer.discard(3); 
```

### Reset Game

Resets the draw & discard piles to the default deck position.

```javascript
dealer.reset();
```

### Remaining Cards
Returns a count for the remaining cards in the draw pile.

```javascript
dealer.remainingCards();
```

## License

Card-dealer is offered under the MIT license.
