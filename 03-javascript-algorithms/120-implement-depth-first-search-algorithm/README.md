# Implement the Depth-First Search Algorithm

## 🇪🇸 Español

Este laboratorio implementa el algoritmo de búsqueda en profundidad, conocido como Depth-First Search o DFS, para recorrer los nodos conectados de un grafo.

El grafo está representado mediante una matriz de adyacencia. Cada fila y cada columna representa un nodo. El valor `1` indica que existe una conexión entre dos nodos, mientras que el valor `0` indica que no existe una conexión.

La función recibe el grafo y un nodo inicial. A partir de ese nodo, utiliza una pila para explorar en profundidad todos los nodos que pueden alcanzarse. Finalmente, devuelve un arreglo con los nodos visitados.

### Funcionalidades

- Define una función llamada `dfs`.
- Recibe una matriz de adyacencia como primer argumento.
- Recibe el nodo inicial como segundo argumento.
- Crea un arreglo para almacenar los nodos visitados.
- Utiliza una pila para controlar los nodos pendientes.
- Comienza el recorrido desde el nodo indicado.
- Extrae el último nodo agregado a la pila.
- Evita procesar un nodo más de una vez.
- Recorre todos los posibles vecinos del nodo actual.
- Detecta las conexiones representadas con el valor `1`.
- Agrega a la pila los vecinos que todavía no fueron visitados.
- Continúa hasta que la pila queda vacía.
- Funciona con grafos conectados y desconectados.
- Devuelve solamente los nodos alcanzables desde el nodo inicial.
- Retorna los nodos en el orden en el que fueron visitados.
- Muestra distintos resultados mediante `console.log()`.

### Conceptos practicados

- Grafos.
- Depth-First Search.
- Búsqueda en profundidad.
- Matrices de adyacencia.
- Arreglos bidimensionales.
- Pilas.
- Estructura LIFO.
- Funciones.
- Ciclo `while`.
- Ciclo `for`.
- Condicionales `if`.
- Método `push()`.
- Método `pop()`.
- Método `includes()`.
- Propiedad `length`.
- Acceso a elementos mediante índices.
- Operadores `>`, `<`, `===`, `&&` y `!`.
- Control de nodos visitados.
- Recorrido iterativo de grafos.
- Variables declaradas con `const` y `let`.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Depth-First Search es un algoritmo utilizado para recorrer grafos. Su objetivo es avanzar todo lo posible por una rama antes de regresar y explorar las conexiones pendientes.

En esta implementación, el algoritmo es iterativo y utiliza una pila.

La función recibe dos parámetros:

```js
function dfs(graph, root) {
```

- `graph`: matriz de adyacencia que representa el grafo.
- `root`: nodo desde el cual comienza el recorrido.

Primero se crea el arreglo que almacenará los nodos visitados:

```js
const visited = [];
```

Este arreglo cumple dos funciones:

1. Registra el orden del recorrido.
2. Evita que un mismo nodo sea procesado varias veces.

Después se crea la pila con el nodo inicial:

```js
const stack = [root];
```

Por ejemplo, si el recorrido comienza desde el nodo `1`, la pila inicial será:

```js
[1]
```

La pila utiliza una estructura LIFO:

```text
Last In, First Out
```

Esto significa que el último elemento agregado es el primero que se retira.

El algoritmo continúa ejecutándose mientras existan nodos pendientes en la pila:

```js
while (stack.length > 0) {
```

En cada iteración se retira el último nodo de la pila mediante `pop()`:

```js
const node = stack.pop();
```

Antes de procesarlo, la función comprueba que el nodo todavía no se encuentre en el arreglo `visited`:

```js
if (!visited.includes(node)) {
```

El método `includes()` verifica si el arreglo ya contiene el nodo. El operador `!` invierte el resultado.

Por lo tanto, el bloque solamente se ejecuta cuando el nodo aún no fue visitado.

El nodo se agrega al arreglo de visitados:

```js
visited.push(node);
```

Después se recorre la fila de la matriz correspondiente al nodo actual:

```js
for (
  let neighbor = 0;
  neighbor < graph[node].length;
  neighbor++
) {
```

Cada posición de esa fila representa un posible vecino.

Por ejemplo, la fila:

```js
[0, 1, 0, 0]
```

indica que el nodo correspondiente está conectado con el nodo `1`.

Para comprobar si existe una conexión, se evalúa si el valor de la matriz es igual a `1`:

```js
graph[node][neighbor] === 1
```

También se verifica que el vecino todavía no haya sido visitado:

```js
!visited.includes(neighbor)
```

Ambas condiciones se combinan mediante el operador lógico `&&`:

```js
if (
  graph[node][neighbor] === 1 &&
  !visited.includes(neighbor)
) {
```

Cuando existe una conexión y el vecino todavía no fue visitado, se agrega a la pila:

```js
stack.push(neighbor);
```

Como los vecinos se recorren desde el índice más pequeño hasta el más grande, se agregan a la pila en orden ascendente. Sin embargo, debido al comportamiento LIFO, el vecino agregado en último lugar será procesado primero.

Por ejemplo, si el nodo `1` se conecta con los nodos `0` y `2`, la pila recibe primero el `0` y después el `2`:

```js
[0, 2]
```

El método `pop()` retira primero el nodo `2`, por lo que la búsqueda continúa desde ese nodo antes de regresar al nodo `0`.

Cuando la pila queda vacía, significa que ya se recorrieron todos los nodos alcanzables desde el nodo inicial.

Finalmente, la función devuelve el arreglo:

```js
return visited;
```

### Ejemplo principal

Grafo:

```js
[
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
]
```

Este grafo contiene las siguientes conexiones:

- El nodo `0` está conectado con el nodo `1`.
- El nodo `1` está conectado con los nodos `0` y `2`.
- El nodo `2` está conectado con los nodos `1` y `3`.
- El nodo `3` está conectado con el nodo `2`.

Llamada:

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ],
  1
);
```

Devuelve:

```js
[1, 2, 3, 0]
```

El recorrido comienza en el nodo `1`. Los nodos `0` y `2` se agregan a la pila, pero el nodo `2` se procesa primero porque fue el último en agregarse.

### Grafo con un nodo aislado

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ],
  3
);
```

Devuelve:

```js
[3]
```

El nodo `3` no tiene conexiones. Por ese motivo, el recorrido solamente contiene el nodo inicial.

### Grafo desconectado

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
  ],
  3
);
```

Devuelve:

```js
[3, 2]
```

Este grafo posee dos componentes separados:

- Los nodos `0` y `1`.
- Los nodos `2` y `3`.

Como la búsqueda comienza desde el nodo `3`, solamente puede visitar los nodos `3` y `2`.

Si el recorrido comienza desde el nodo `0`:

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
  ],
  0
);
```

Devuelve:

```js
[0, 1]
```

DFS no atraviesa espacios sin conexiones. Solamente visita los nodos que pueden alcanzarse desde el nodo inicial.

### Complejidad

Para cada nodo visitado, la función recorre una fila completa de la matriz de adyacencia.

Si el grafo contiene `V` nodos, la complejidad temporal de esta implementación es:

```text
O(V²)
```

El arreglo de nodos visitados y la pila pueden almacenar hasta `V` elementos, por lo que la complejidad espacial es:

```text
O(V)
```

## 🇺🇸 English

This lab implements the Depth-First Search algorithm, also known as DFS, to traverse the connected nodes of a graph.

The graph is represented using an adjacency matrix. Each row and column represents a node. A value of `1` indicates that an edge exists between two nodes, while a value of `0` indicates that no edge exists.

The function receives the graph and a starting node. From that node, it uses a stack to explore every reachable node in depth-first order. Finally, it returns an array containing the visited nodes.

### Features

- Defines a function named `dfs`.
- Receives an adjacency matrix as its first argument.
- Receives the starting node as its second argument.
- Creates an array to store visited nodes.
- Uses a stack to manage pending nodes.
- Begins the traversal from the specified node.
- Removes the last node added to the stack.
- Prevents a node from being processed more than once.
- Traverses every possible neighbor of the current node.
- Detects connections represented by the value `1`.
- Adds unvisited neighbors to the stack.
- Continues until the stack is empty.
- Works with connected and disconnected graphs.
- Returns only the nodes reachable from the starting node.
- Returns the nodes in the order in which they were visited.
- Displays different results using `console.log()`.

### Concepts Practiced

- Graphs.
- Depth-First Search.
- Adjacency matrices.
- Two-dimensional arrays.
- Stacks.
- LIFO structure.
- Functions.
- `while` loop.
- `for` loop.
- `if` conditionals.
- `push()` method.
- `pop()` method.
- `includes()` method.
- `length` property.
- Accessing elements by index.
- `>`, `<`, `===`, `&&`, and `!` operators.
- Tracking visited nodes.
- Iterative graph traversal.
- Variables declared with `const` and `let`.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

Depth-First Search is an algorithm used to traverse graphs. Its purpose is to move as far as possible along one branch before returning to explore the remaining connections.

This implementation is iterative and uses a stack.

The function receives two parameters:

```js
function dfs(graph, root) {
```

- `graph`: the adjacency matrix representing the graph.
- `root`: the node where the traversal begins.

First, an array is created to store the visited nodes:

```js
const visited = [];
```

This array performs two functions:

1. It records the traversal order.
2. It prevents the same node from being processed multiple times.

A stack is then created with the starting node:

```js
const stack = [root];
```

For example, if the traversal begins from node `1`, the initial stack is:

```js
[1]
```

A stack uses a LIFO structure:

```text
Last In, First Out
```

This means that the last element added is the first element removed.

The algorithm continues while the stack contains pending nodes:

```js
while (stack.length > 0) {
```

During each iteration, the last node is removed from the stack using `pop()`:

```js
const node = stack.pop();
```

Before processing it, the function checks whether the node is already included in the `visited` array:

```js
if (!visited.includes(node)) {
```

The `includes()` method checks whether the array contains the node. The `!` operator reverses the result.

Therefore, the block only executes when the node has not been visited.

The node is added to the visited array:

```js
visited.push(node);
```

The function then traverses the adjacency-matrix row corresponding to the current node:

```js
for (
  let neighbor = 0;
  neighbor < graph[node].length;
  neighbor++
) {
```

Each position in the row represents a possible neighbor.

For example, this row:

```js
[0, 1, 0, 0]
```

indicates that the corresponding node is connected to node `1`.

To determine whether an edge exists, the function checks whether the matrix value is equal to `1`:

```js
graph[node][neighbor] === 1
```

It also checks that the neighbor has not already been visited:

```js
!visited.includes(neighbor)
```

Both conditions are combined using the logical `&&` operator:

```js
if (
  graph[node][neighbor] === 1 &&
  !visited.includes(neighbor)
) {
```

When an edge exists and the neighbor is unvisited, the neighbor is added to the stack:

```js
stack.push(neighbor);
```

Because the neighbors are traversed from the smallest index to the largest, they are added to the stack in ascending order. However, due to LIFO behavior, the neighbor added last is processed first.

For example, when node `1` is connected to nodes `0` and `2`, the stack first receives `0` and then `2`:

```js
[0, 2]
```

The `pop()` method removes node `2` first, so the search continues from that node before returning to node `0`.

When the stack becomes empty, every node reachable from the starting node has been traversed.

Finally, the function returns the array:

```js
return visited;
```

### Main Example

Graph:

```js
[
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
]
```

This graph contains the following connections:

- Node `0` is connected to node `1`.
- Node `1` is connected to nodes `0` and `2`.
- Node `2` is connected to nodes `1` and `3`.
- Node `3` is connected to node `2`.

Function call:

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ],
  1
);
```

Returns:

```js
[1, 2, 3, 0]
```

The traversal begins at node `1`. Nodes `0` and `2` are added to the stack, but node `2` is processed first because it was added last.

### Graph with an Isolated Node

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ],
  3
);
```

Returns:

```js
[3]
```

Node `3` has no connections. Therefore, the traversal only contains the starting node.

### Disconnected Graph

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
  ],
  3
);
```

Returns:

```js
[3, 2]
```

This graph contains two separate components:

- Nodes `0` and `1`.
- Nodes `2` and `3`.

Since the search begins at node `3`, it can only visit nodes `3` and `2`.

If the traversal begins at node `0`:

```js
dfs(
  [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
  ],
  0
);
```

Returns:

```js
[0, 1]
```

DFS cannot cross gaps without edges. It only visits nodes reachable from the starting node.

### Complexity

For every visited node, the function traverses an entire row of the adjacency matrix.

If the graph contains `V` nodes, the time complexity of this implementation is:

```text
O(V²)
```

The visited array and the stack can each store up to `V` elements, so the space complexity is:

```text
O(V)
```

## 📁 Files

- `script.js`: Contains the iterative Depth-First Search implementation and its console examples.
- `README.md`: Contains the bilingual documentation for the lab.