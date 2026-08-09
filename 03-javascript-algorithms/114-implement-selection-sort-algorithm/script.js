function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      const temporaryValue = array[i];
      array[i] = array[minimumIndex];
      array[minimumIndex] = temporaryValue;
    }
  }

  return array;
}