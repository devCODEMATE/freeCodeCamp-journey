function steamrollArray(arr) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    flatten(arr[i]);
  }

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));  //[ 'a', 'b' ]
console.log( steamrollArray([1, [2], [3, [[4]]]]));  //[ 1, 2, 3, 4 ]
console.log(steamrollArray([1, [], [3, [[4]]]]));  //[ 1, 3, 4 ]
console.log(steamrollArray([1, {}, [3, [[4]]]]));  //[ 1, {}, 3, 4 ]
