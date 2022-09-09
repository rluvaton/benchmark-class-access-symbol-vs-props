# Benchmark accessing private property vs accessing symbol

## Env:
**Node.js:** 18.4.0
**Machine:** Macbook Pro 2021 M1 Max with 10 cores

## Results:

```
access to private property x 42,378,801 ops/sec ±0.14% (99 runs sampled)
access to private symbol x 10,833,453 ops/sec ±0.44% (93 runs sampled)
Fastest is access to private property
```

## How to run:
```bash
npm i
npm start
```
