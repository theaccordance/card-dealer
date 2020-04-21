# Card Dealer

![Build](https://github.com/theaccordance/card-dealer/workflows/Build/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/theaccordance/card-dealer/badge.svg)](https://coveralls.io/github/theaccordance/card-dealer)
[![CodeFactor](https://www.codefactor.io/repository/github/theaccordance/card-dealer/badge/master)](https://www.codefactor.io/repository/github/theaccordance/card-dealer/overview/master)
![npm latest version](https://img.shields.io/npm/v/card-dealer/latest)
[![Known Vulnerabilities](https://snyk.io/test/github/theaccordance/card-dealer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/theaccordance/card-dealer?targetFile=package.json)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/card-dealer)
![License](https://img.shields.io/npm/l/card-dealer)

A robust card-dealing JavaScript Class written in TypeScript

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

### const dealer = new Dealer(cardArray)

`Dealer()` takes a deck of cards to use for a game & places it on the draw pile.

### dealer.shuffle()

Randomizes the dealer's draw pile order using the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm.

### dealer.cut(index)

Cuts the deck at the specified position in the deck, moving the bottom half to the top of the draw pile.

### dealer.draw(count)

Returns the number of cards requested from the draw pile for use in the game.

### dealer.discard(count)

Moves the number of cards specified from the draw pile to the discard pile without revealing the value to the game.

### dealer.reset()

Resets the draw & discard piles to the default deck position.

### dealer.remainingCards()

Returns a count for the remaining cards in the draw pile.
