# Benchmark accessing private property vs accessing symbol

## Env:
**Node.js:** 18.4.0
**Machine:** Macbook Pro 2021 M1 Max with 10 cores

## Results:

```
Class | access to private property x 39,126,850 ops/sec ±0.30% (99 runs sampled)
Class | access to private symbol x 10,620,957 ops/sec ±0.41% (99 runs sampled)
object | access to private symbol x 11,811,610 ops/sec ±0.52% (99 runs sampled)
Fastest is Class | access to private property

```

## How to run:
```bash
npm i
npm start
```
