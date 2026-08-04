function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  let sum = 0;

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(10)); //17
console.log(sumPrimes(5)); //10
console.log(sumPrimes(2)); //2
console.log(sumPrimes(0)); //0
console.log(sumPrimes(977)); //73156
