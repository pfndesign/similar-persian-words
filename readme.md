# `similar-persian-words`
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

pre-calculated list of similar Persian words ordered by rating and best match.

## Install

[npm][]:

```sh
npm install similar-persian-words
```

## Use

```js
var { similarity } = require('similar-persian-words')

console.log(similarity("شهر"));
```

if finding similarity was successful will return :

```js
{
  total: 261,
  words: [
    { word: 'اشهر', rating: 0.8 },
    { word: 'بشهر', rating: 0.8 },
    { word: 'شهرب', rating: 0.8 },
    { word: 'شهرت', rating: 0.8 },
    { word: 'شهرخ', rating: 0.8 },
    { word: 'شهرد', rating: 0.8 },
    { word: 'شهرق', rating: 0.8 },
    { word: 'شهرک', rating: 0.8 },
    { word: 'شهرگ', rating: 0.8 },
    { word: 'شهرو', rating: 0.8 },
    { word: 'شهرة', rating: 0.8 },
    { word: 'شهره', rating: 0.8 },
    { word: 'شهری', rating: 0.8 },
    { word: 'نشهر', rating: 0.8 },
    { word: 'هرشه', rating: 0.8 },
    { word: 'مشهر', rating: 0.8 },
    { word: 'آق شهر', rating: 0.6666666666666666 },
    { word: 'اشهری', rating: 0.6666666666666666 },
    { word: 'برشهر', rating: 0.6666666666666666 },
    { word: 'بوشهر', rating: 0.6666666666666666 },
    { word: 'بهشهر', rating: 0.6666666666666666 },
    { word: 'بی شهر', rating: 0.6666666666666666 },
    { word: 'درشهر', rating: 0.6666666666666666 },
    { word: 'دمشهر', rating: 0.6666666666666666 },
    { word: 'ری شهر', rating: 0.6666666666666666 },
    // …and many more
  ],
  bestMatch: { word: 'اشهر', rating: 0.8 }
}
```
if finding similarity is not successful will return "undefined"

## API

### `anObjectOfSimilarPersianWords`

`object.<array|object>` — List of all similar words with rating in "words" array , best match word in "bestMatch" object.

## CLI

Install the CLI globally:

```sh
npm i -g similar-persian-words
```

Usage: persiansimilarwords <word> persian word to get similarty

```sh
persiansimilarwords آذر
```

Use `--help` for more info :

```sh
Options:
      --version  Show version number                                   [boolean]
  -r, --raw      return raw data                                       [boolean]
  -w, --words    return words list                                     [boolean]
  -l, --limit    limit words display                                    [number]
  -s, --string   return word string                                    [boolean]
      --help     Show help                                             [boolean]
```
## NOTICE
this library is heavy in size (around 3GB of JSON data for similarity db)
all of the data for this library is pre-calculated therefore the size of this library is large
because of that memory and CPU usage is very low and finding data is very fast but disk usage is high 
using compression and decompression is defeating the purpose of precalculation of data

[MIT][license] © [Peyman farahmand][author]

<!-- Definition -->

[downloads-badge]: https://img.shields.io/npm/dm/similar-persian-words.svg

[downloads]: https://www.npmjs.com/package/similar-persian-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/similar-persian-words.svg

[size]: https://bundlephobia.com/result?p=similar-persian-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://www.linkedin.com/in/pfndesign