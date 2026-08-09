function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temporaryValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporaryValue;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));