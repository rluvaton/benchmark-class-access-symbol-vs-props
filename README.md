# Benchmark accessing private property in class vs accessing symbol in class vs accessing symbol in object

| Node version | Fastest                          |
|--------------|----------------------------------|
| 18.4.0       | Class access to private property |
| 16.17.0      | Class access to private property |
| 14.20.0      | Class access to private property |

## Env:
**Machine:** Macbook Pro 2021 M1 Max with 10 cores

## Results:

**Node version:** 18.4.0

```
Class | access to private property x 39,126,850 ops/sec ±0.30% (99 runs sampled)
Class | access to private symbol x 10,620,957 ops/sec ±0.41% (99 runs sampled)
object | access to private symbol x 11,811,610 ops/sec ±0.52% (99 runs sampled)
Fastest is Class | access to private property
```

**Node version:** 16.17.0

```
Class | access to private property x 26,915,359 ops/sec ±0.47% (97 runs sampled)
Class | access to private symbol x 8,818,710 ops/sec ±0.52% (97 runs sampled)
object | access to private symbol x 9,642,820 ops/sec ±0.52% (96 runs sampled)
Fastest is Class | access to private property
```

**Node version:** 14.20.0

```
Class | access to private property x 24,904,230 ops/sec ±0.41% (98 runs sampled)
Class | access to private symbol x 8,859,141 ops/sec ±0.70% (91 runs sampled)
object | access to private symbol x 9,292,622 ops/sec ±0.45% (100 runs sampled)
Fastest is Class | access to private property
```

## How to run:
```bash
npm i
npm start
```
