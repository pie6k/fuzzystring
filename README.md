# fuzzystring

Simple fuzzy search library written in TypeScript

Alows partial matching of requested string. Useful for searching large sets of data without requesting acureate and full user input.

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
[
  { content: 'l', type: 'input' },
  { content: 'orem ', type: 'fuzzy' },
  { content: 'i', type: 'input' },
  { content: 'psum d', type: 'fuzzy' },
  { content: 'olor', type: 'input' },
  { content: ' sit', type: 'suggestion' },
];
```

## Performance

```js
console.time('measure')
for (let i = 0; i < 100000; i++) {
  fuzzyString(`ive ${i} lles`,`i have ${i} apples`);
}
console.timeEnd('measure')
// measure: 271.169921875ms
```

## Development

Test

`yarn test`

Build 

`yarn build`

## Toodo

- [ ] Demo page
- [ ] Solid performance test
- [ ] Memoized cache for the same inputs 
- [ ] CI test cov etc
