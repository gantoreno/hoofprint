<div align="center">
  <img src=".github/horsehoe.png" width="300" />
</div>

# Hoofprint

![https://img.shields.io/npm/v/hoofprint](https://img.shields.io/npm/v/hoofprint) ![https://img.shields.io/github/issues/gantoreno/hoofprint](https://img.shields.io/github/issues/gantoreno/hoofprint) ![https://img.shields.io/github/forks/gantoreno/hoofprint](https://img.shields.io/github/forks/gantoreno/hoofprint) ![https://img.shields.io/github/stars/gantoreno/hoofprint](https://img.shields.io/github/stars/gantoreno/hoofprint) ![https://img.shields.io/github/license/gantoreno/hoofprint](https://img.shields.io/github/license/gantoreno/hoofprint)

A simple [Node.js](https://nodejs.org/en) logger.

## Installation

Simply install with any of the available package managers:

```sh
$ npm install hoofprint # or...
$ yarn add hoofprint
```

## Usage

Import it, and create a `Hoofprint` instance:

```js
const Hoofprint = require("hoofprint");

const logger = new Hoofprint();

logger.info("Normal message");
logger.warn("Warning message");
logger.error("Error message");
logger.debug("Debug message");
```

## License

This project is licensed under the [MIT](https://opensource.org/license/mit/) license.
