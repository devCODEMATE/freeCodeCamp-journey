function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const solutions = [];

  function dfs(row, placement) {
    if (row === n) {
      solutions.push([...placement]);
      return;
    }

    for (let column = 0; column < n; column++) {
      let isSafe = true;

      for (let previousRow = 0; previousRow < row; previousRow++) {
        const previousColumn = placement[previousRow];

        const sameColumn = previousColumn === column;
        const sameDiagonal =
          Math.abs(previousColumn - column) === row - previousRow;

        if (sameColumn || sameDiagonal) {
          isSafe = false;
          break;
        }
      }

      if (isSafe) {
        placement.push(column);
        dfs(row + 1, placement);
        placement.pop();
      }
    }
  }

  dfs(0, []);

  return solutions;
}

console.log(dfsNQueens(1)); // [[0]]
console.log(dfsNQueens(2)); // []
console.log(dfsNQueens(3)); // []
console.log(dfsNQueens(4));
// [[1, 3, 0, 2], [2, 0, 3, 1]]

console.log(dfsNQueens(5));
console.log(dfsNQueens(5).length); // 10
console.log(dfsNQueens(8).length); // 92