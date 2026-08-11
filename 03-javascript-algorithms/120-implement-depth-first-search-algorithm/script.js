function dfs(graph, root) {
  const visited = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        if (graph[node][neighbor] === 1 && !visited.includes(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return visited;
}

console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ],
    1
  )
);

// Test 3
console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ],
    3
  )
);

// Test 4
console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    3
  )
);

// Test 5
console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ],
    3
  )
);

// Test 6
console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ],
    0
  )
);