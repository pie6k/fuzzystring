# fuzzystring

## Install

`yarn add fuzzystring`

`import { fuzzyString } from 'fuzzystring';`

## Api

```ts
fuzzyString('liolor','lorem ipsum dolor sit');

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
