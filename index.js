const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

function getClassWithJsPrivate() {
  class A {
    #a() {
      return 5;
    }

    test() {
      return this.#a();
    }
  }

  return new A()
}

function getClassWithSymbol() {
  const kA = Symbol('a');
  class A {
    [kA]() {
      return 5;
    }

    test() {
      return this[kA]();
    }
  }

  return new A()
}


const size = 1000

const allOptions = Array.from(
  { length: size },
  () => [getClassWithJsPrivate(), getClassWithSymbol()],
);
let index = 0;


// add tests
suite
  .add('access to private property', function () {
    const clazz = allOptions[index % size][0];

    clazz.test();

    index++;
  })
  .add('access to private symbol', function () {
    const clazz = allOptions[index % size][1];

    clazz.test();

    index++;
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run(/*{ 'async': true }*/);
