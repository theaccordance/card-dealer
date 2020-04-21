# Card Dealer

![Build](https://github.com/theaccordance/card-dealer/workflows/Build/badge.svg?branch=master)
![Test Coverage](https://github.com/theaccordance/card-dealer/workflows/coverage/badge.svg?branch=master)
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
