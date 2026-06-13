function uniteUnique(...arrays) {
  const result = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (!result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }
    }
  }

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));  //[ 1, 3, 2, 5, 4 ]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));  //[ 1, 2, 3, 5 ]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));  //[ 1, 2, 3, 5, 4, 6, 7, 8 ]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));  //[ 1, 3, 2, 5, 4, 6 ]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));  //[ 1, 3, 2, 5, 4 ]
