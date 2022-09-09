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
  const kA = Symbol('kA');
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


function getObjWithSymbol() {

  const kAObj = Symbol('kAObj');

  function ObjWithPrivateSymbol() {

  }

  ObjWithPrivateSymbol.prototype.test = function() {
    this[kAObj]();
  }
  ObjWithPrivateSymbol.prototype[kAObj] = function() {
    return 5;
  }

  return new ObjWithPrivateSymbol()
}


const size = 1000

const allOptions = Array.from(
  { length: size },
  () => [getClassWithJsPrivate(), getClassWithSymbol(), getObjWithSymbol()],
);
let index = 0;


// add tests
suite
  .add('Class | access to private property', function () {
    const clazz = allOptions[index % size][0];

    clazz.test();

    index++;
  })
  .add('Class | access to private symbol', function () {
    const clazz = allOptions[index % size][1];

    clazz.test();

    index++;
  })
  .add('object | access to private symbol', function () {
    const obj = allOptions[index % size][2];

    obj.test();

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
