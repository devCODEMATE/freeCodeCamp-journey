function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(element => num <= element);

  if (index === -1) {
    return arr.length;
  }

  return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2
console.log(getIndexToIns([40, 60], 50)); //1
console.log(getIndexToIns([3, 10, 5], 3)); //0
console.log(getIndexToIns([5, 3, 20, 3], 5)); //2
console.log(getIndexToIns([2, 20, 10], 19)); //2
console.log(getIndexToIns([3, 10, 5], 11)); //3
console.log(getIndexToIns([], 5)); //0
