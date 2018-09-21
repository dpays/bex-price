# BEX Price (USD)

Fetches [BEX](https://cryptofresh.com/a/BEX) price from BitShares via CryptoFresh

## Installation

```
npm i bex-price --save
```

## Import
```javascript
import getBexPrice from 'bex-price'
```

## Usage

Simple usage:

```javascript
  getBexPrice().then((r) => {
    console.log(r);
  }).catch(function(error) {
    console.error(error);
  });
```

Usage with options:

```javascript
  const opts = {
    api: 'https://cryptofresh.com/api/asset/markets?asset=',
    bridge: 'BTS',
    token: 'BEX'
  };
  getBexPrice('USD', opts).then((r) => {
    console.log(r);
  }).catch(function(error) {
    console.error(error);
  });
```

## license

MIT
