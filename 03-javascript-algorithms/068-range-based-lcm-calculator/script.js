function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let result = min;

  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}


console.log(smallestCommons([1, 5]));  //60
console.log( smallestCommons([5, 1]));  //60
console.log(smallestCommons([2, 10]));  //2520
console.log(smallestCommons([1, 13]));  //360360
console.log(smallestCommons([23, 18]));  //6056820
