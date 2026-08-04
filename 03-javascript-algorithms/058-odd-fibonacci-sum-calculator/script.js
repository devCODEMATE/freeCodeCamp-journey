function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }

    const next = previous + current;
    previous = current;
    current = next;
  }

  return sum;
}

console.log(sumFibs(1));  //2
console.log(sumFibs(1000));  //1785
console.log(sumFibs(4000000));  //4613732
console.log(sumFibs(4));  //5
console.log(sumFibs(75024));  //60696
console.log(sumFibs(75025));  //135721
