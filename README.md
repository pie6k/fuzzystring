# fuzzystring

Simple fuzzy search library written in TypeScript

Alows partial matching of requested string. Useful for searching large sets of data without requesting acureate and full user input.

## Demo

[Click here for demo](https://pie6k.github.io/fuzzystring/)

![screen recording 2018-12-05 at 21 35 33](https://user-images.githubusercontent.com/7311462/49559878-ed6f0a80-f8d5-11e8-8cf6-fd5734512f9f.gif)

## Install

`yarn add fuzzystring`

```ts
import { fuzzyString } from 'fuzzystring';

// or if you prefer default 🤮exports
import fuzzyString from 'fuzzystring';
```

## Api

```ts
fuzzyString('liolor', 'lorem ipsum dolor sit');

// returns
{
  parts: [
    { content: 'l', type: 'input' },
    { content: 'orem ', type: 'fuzzy' },
    { content: 'i', type: 'input' },
    { content: 'psum d', type: 'fuzzy' },
    { content: 'olor', type: 'input' },
    { content: ' sit', type: 'suggestion' },
  ],
  score: 0.87,
}
```

## Performance

```js
console.time('measure');
for (let i = 0; i < 100000; i++) {
  fuzzyString(`ive ${i} lles`, `i have ${i} apples`);
}
console.timeEnd('measure');
// measure: 271.169921875ms
```

~200k ops/s [jsperf](https://jsperf.com/fuzzystring2)

## Development

Test

`yarn test`

Build

`yarn build`

## Toodo

- [x] Demo page
- [ ] Solid performance test
- [ ] Memoized cache for the same inputs
- [ ] CI test cov etc
