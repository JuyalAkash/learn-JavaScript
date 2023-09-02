console.log("hello world");

let primes = [2, 3, 5, 7];

console.log(primes);
console.log(primes[primes.length - 1]);
console.log(primes[1] + primes[2]);

function fact(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}
console.log(fact(5));

// Optional Semicolons
// let a = 3;
// let b = 4;

// let a = 3;
// b = 4;
// console.log(a, b);

// let a;
// a = 3;
// console.log(a);

// let y = x + f(a + b).toString();

// let x = 0;
// [x, x + 1, x + 2].forEach(console.log);
