# Build an Adjacency List to Matrix Converter

## 🇪🇸 Español

Este ejercicio implementa una función que convierte la lista de adyacencia de un grafo en una matriz de adyacencia.

La lista de adyacencia se representa mediante un objeto. Cada propiedad identifica un nodo y su valor es un arreglo que contiene los nodos vecinos con los que existe una conexión.

La matriz de adyacencia se representa mediante un arreglo bidimensional. El valor ubicado en la posición `[i][j]` es `1` cuando existe una conexión desde el nodo `i` hasta el nodo `j`, y es `0` cuando esa conexión no existe.

### Funcionalidades

- Recibe un objeto que representa una lista de adyacencia.
- Determina la cantidad de nodos del grafo.
- Crea una matriz cuadrada con una fila y una columna por cada nodo.
- Inicializa todas las posiciones de la matriz con el valor `0`.
- Recorre todos los nodos incluidos en la lista.
- Recorre los vecinos correspondientes a cada nodo.
- Cambia a `1` las posiciones que representan conexiones existentes.
- Funciona con grafos dirigidos y no dirigidos.
- Imprime individualmente cada fila de la matriz.
- Devuelve la matriz de adyacencia completa.

### Conceptos practicados

- Grafos.
- Lista de adyacencia.
- Matriz de adyacencia.
- Objetos.
- Arreglos bidimensionales.
- Funciones.
- Método `Object.keys()`.
- Método `Array.from()`.
- Constructor `Array`.
- Método `fill()`.
- Ciclo `for...in`.
- Ciclo `for...of`.
- Ciclos anidados.
- Acceso a propiedades de objetos.
- Acceso a elementos mediante índices.
- Conversión de texto a número con `Number()`.
- Propiedad `length`.
- Variables declaradas con `const`.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Una lista de adyacencia almacena las conexiones de cada nodo mediante un objeto. Por ejemplo:

```js
{
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}
```

Esta representación indica las siguientes conexiones:

- El nodo `0` se conecta con los nodos `1` y `2`.
- El nodo `1` se conecta con el nodo `2`.
- El nodo `2` se conecta con los nodos `0` y `3`.
- El nodo `3` se conecta con el nodo `2`.

La función comienza determinando la cantidad de nodos a partir de las propiedades del objeto:

```js
const numberOfNodes = Object.keys(adjacencyList).length;
```

`Object.keys(adjacencyList)` devuelve un arreglo con las claves de la lista de adyacencia. Su propiedad `length` permite conocer cuántos nodos contiene el grafo.

Después se crea la matriz:

```js
const matrix = Array.from(
  { length: numberOfNodes },
  () => new Array(numberOfNodes).fill(0)
);
```

`Array.from()` genera un arreglo con una fila por cada nodo. Cada fila es un nuevo arreglo que también contiene una posición por cada nodo.

El método `fill(0)` inicializa todas las posiciones con cero, indicando inicialmente que no existe ninguna conexión:

```js
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
```

Es importante crear cada fila mediante una función:

```js
() => new Array(numberOfNodes).fill(0)
```

De esta manera, cada fila es un arreglo independiente.

El ciclo `for...in` recorre las propiedades del objeto:

```js
for (const node in adjacencyList) {
```

Las claves de los objetos se obtienen como cadenas de texto. Por eso, cuando se utilizan como índice de una fila, se convierten explícitamente a números:

```js
Number(node)
```

El segundo ciclo recorre todos los vecinos del nodo actual:

```js
for (const neighbor of adjacencyList[node]) {
```

Por cada conexión encontrada, la posición correspondiente de la matriz se cambia a `1`:

```js
matrix[Number(node)][neighbor] = 1;
```

El primer índice representa el nodo de origen y el segundo representa el nodo de destino.

Por ejemplo:

```js
matrix[0][2] = 1;
```

indica que existe una conexión desde el nodo `0` hasta el nodo `2`.

Una vez construida la matriz, otro ciclo `for...of` imprime cada fila:

```js
for (const row of matrix) {
  console.log(row);
}
```

Finalmente, la función devuelve la matriz completa:

```js
return matrix;
```

### Ejemplo 1

Lista de adyacencia:

```js
adjacencyListToMatrix({
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
});
```

Matriz obtenida:

```js
[
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
]
```

### Ejemplo 2

Lista de adyacencia:

```js
adjacencyListToMatrix({
  0: [1],
  1: [0]
});
```

Matriz obtenida:

```js
[
  [0, 1],
  [1, 0]
]
```

En este caso, ambos nodos están conectados entre sí.

### Ejemplo 3

Lista de adyacencia:

```js
adjacencyListToMatrix({
  0: [],
  1: [],
  2: []
});
```

Matriz obtenida:

```js
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
```

Como ninguno de los nodos posee vecinos, todas las posiciones permanecen en `0`.

## 🇺🇸 English

This exercise implements a function that converts the adjacency list of a graph into an adjacency matrix.

The adjacency list is represented by an object. Each property identifies a node, and its value is an array containing the neighboring nodes to which it has a connection.

The adjacency matrix is represented by a two-dimensional array. The value at position `[i][j]` is `1` when there is an edge from node `i` to node `j`, and `0` when that edge does not exist.

### Features

- Receives an object representing an adjacency list.
- Determines the number of nodes in the graph.
- Creates a square matrix with one row and one column for each node.
- Initializes every matrix position with the value `0`.
- Traverses all nodes included in the adjacency list.
- Traverses the neighbors of each node.
- Changes positions representing existing edges to `1`.
- Works with directed and undirected graphs.
- Prints each row of the matrix individually.
- Returns the complete adjacency matrix.

### Concepts Practiced

- Graphs.
- Adjacency lists.
- Adjacency matrices.
- Objects.
- Two-dimensional arrays.
- Functions.
- `Object.keys()` method.
- `Array.from()` method.
- `Array` constructor.
- `fill()` method.
- `for...in` loop.
- `for...of` loop.
- Nested loops.
- Accessing object properties.
- Accessing elements by index.
- Converting text to a number with `Number()`.
- `length` property.
- Variables declared with `const`.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

An adjacency list stores the connections of each node using an object. For example:

```js
{
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}
```

This representation indicates the following connections:

- Node `0` connects to nodes `1` and `2`.
- Node `1` connects to node `2`.
- Node `2` connects to nodes `0` and `3`.
- Node `3` connects to node `2`.

The function begins by determining the number of nodes from the object properties:

```js
const numberOfNodes = Object.keys(adjacencyList).length;
```

`Object.keys(adjacencyList)` returns an array containing the keys from the adjacency list. Its `length` property provides the number of nodes in the graph.

The matrix is then created:

```js
const matrix = Array.from(
  { length: numberOfNodes },
  () => new Array(numberOfNodes).fill(0)
);
```

`Array.from()` generates an array with one row for each node. Every row is another array containing one position for each node.

The `fill(0)` method initializes every position with zero, initially indicating that no connections exist:

```js
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
```

It is important to create each row using a function:

```js
() => new Array(numberOfNodes).fill(0)
```

This ensures that every row is an independent array.

The `for...in` loop traverses the properties of the object:

```js
for (const node in adjacencyList) {
```

Object keys are retrieved as strings. Therefore, they are explicitly converted to numbers when used as row indexes:

```js
Number(node)
```

The second loop traverses all the neighbors of the current node:

```js
for (const neighbor of adjacencyList[node]) {
```

For every edge found, the corresponding matrix position is changed to `1`:

```js
matrix[Number(node)][neighbor] = 1;
```

The first index represents the source node, and the second represents the destination node.

For example:

```js
matrix[0][2] = 1;
```

indicates that there is an edge from node `0` to node `2`.

After the matrix has been constructed, another `for...of` loop prints each row:

```js
for (const row of matrix) {
  console.log(row);
}
```

Finally, the function returns the complete matrix:

```js
return matrix;
```

### Example 1

Adjacency list:

```js
adjacencyListToMatrix({
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
});
```

Resulting matrix:

```js
[
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
]
```

### Example 2

Adjacency list:

```js
adjacencyListToMatrix({
  0: [1],
  1: [0]
});
```

Resulting matrix:

```js
[
  [0, 1],
  [1, 0]
]
```

In this case, both nodes are connected to each other.

### Example 3

Adjacency list:

```js
adjacencyListToMatrix({
  0: [],
  1: [],
  2: []
});
```

Resulting matrix:

```js
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
```

Since none of the nodes have neighbors, every position remains `0`.

## 📁 Files

- `script.js`: Contains the adjacency list to matrix converter and its console examples.
- `README.md`: Contains the bilingual documentation for the exercise.