function adjacencyListToMatrix(adjacencyList) {
  const numberOfNodes = Object.keys(adjacencyList).length;

  const matrix = Array.from(
    { length: numberOfNodes },
    () => new Array(numberOfNodes).fill(0)
  );

  for (const node in adjacencyList) {
    for (const neighbor of adjacencyList[node]) {
      matrix[Number(node)][neighbor] = 1;
    }
  }

  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}

adjacencyListToMatrix({
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
});

adjacencyListToMatrix({
  0: [1],
  1: [0]
});

adjacencyListToMatrix({
  0: [],
  1: [],
  2: []
});