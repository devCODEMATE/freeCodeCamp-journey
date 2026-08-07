function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(10, 15));
console.log(rangeOfNumbers(2, 8));