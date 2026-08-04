function frankenSplice(arr1, arr2, n) {
  const copy = arr2.slice();      // copia para no mutar arr2
  copy.splice(n, 0, ...arr1);     // inserta arr1 dentro de copy desde índice n
  return copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));  //[ 4, 1, 2, 3, 5 ]
console.log(frankenSplice([1, 2], ["a", "b"], 1));  //[ 'a', 1, 2, 'b' ]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));  //[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
