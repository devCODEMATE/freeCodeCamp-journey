# 🛣️ Implement the Shortest Path Algorithm

## 🇪🇸 Español

Este es el ejercicio número **117** de mi recorrido de **JavaScript** en **freeCodeCamp**.

El objetivo de este workshop fue implementar un algoritmo para encontrar el **camino más corto entre nodos de un grafo ponderado**.

El grafo se representa mediante una **matriz de adyacencia**, donde cada valor indica la distancia entre dos nodos. Cuando dos nodos no están conectados directamente, se utiliza `Infinity`.

El algoritmo calcula las distancias mínimas desde un nodo inicial y también mantiene el recorrido necesario para llegar a cada nodo.

---

## 🚀 Funcionalidades

- Representar un grafo mediante una matriz de adyacencia.
- Utilizar `Infinity` para representar nodos sin conexión directa.
- Definir un nodo inicial.
- Definir opcionalmente un nodo objetivo.
- Inicializar las distancias de todos los nodos.
- Mantener un registro de nodos visitados.
- Buscar el nodo no visitado con la distancia conocida más pequeña.
- Comparar nuevas rutas con las distancias almacenadas.
- Actualizar una distancia cuando se encuentra un camino más corto.
- Guardar los nodos que forman cada camino.
- Mostrar la distancia mínima encontrada.
- Mostrar el recorrido completo mediante `->`.
- Devolver las distancias y caminos calculados.

---

## 🗺️ Representación del grafo

El grafo se representa mediante una matriz de adyacencia:

```javascript
const INF = Infinity;

const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];
```

Cada posición:

```text
matrix[i][j]
```

representa el peso o distancia entre el nodo `i` y el nodo `j`.

Por ejemplo:

```javascript
matrix[0][1] === 5
```

significa que existe una conexión entre los nodos `0` y `1` con una distancia de `5`.

Cuando aparece:

```javascript
Infinity
```

significa que no existe una conexión directa entre esos dos nodos.

---

## 📚 Conceptos practicados

- JavaScript
- Graphs
- Weighted Graphs
- Shortest Path Algorithms
- Adjacency Matrix
- Nodes
- Edges
- Edge Weights
- `Infinity`
- Arrays
- Nested Arrays
- `new Array()`
- `.fill()`
- `Array.from()`
- Spread syntax `...`
- `.keys()`
- `.join()`
- Template literals
- Default parameters
- `for` loops
- `for...of`
- Conditional statements
- Boolean arrays
- Distance tracking
- Path tracking
- Visited nodes
- Array destructuring concepts
- Algorithmic problem solving

---

## 🎯 Lo que aprendí

- Representar un grafo ponderado mediante una matriz de adyacencia.
- Interpretar los valores de una matriz como conexiones entre nodos.
- Utilizar `Infinity` para representar una distancia inicialmente desconocida o una conexión inexistente.
- Mantener un array con las distancias mínimas conocidas.
- Utilizar un array booleano para controlar qué nodos ya fueron visitados.
- Buscar el nodo disponible con la distancia más pequeña.
- Comparar una nueva ruta contra una distancia previamente conocida.
- Actualizar una distancia cuando se encuentra un recorrido más corto.
- Mantener el camino completo hacia cada nodo.
- Utilizar spread syntax para copiar y extender arrays.
- Trabajar con un nodo objetivo opcional.
- Mostrar los resultados de un algoritmo mediante template literals.
- Devolver múltiples estructuras de datos desde una función.

---

## ⚙️ Inicialización de distancias

La función recibe la matriz, el nodo inicial y opcionalmente un nodo objetivo:

```javascript
function shortestPath(matrix, startNode, targetNode = null)
```

Primero se obtiene la cantidad de nodos:

```javascript
const n = matrix.length;
```

Después se crea un array donde inicialmente todas las distancias son infinitas:

```javascript
const distances = new Array(n).fill(INF);
```

La distancia desde el nodo inicial hacia sí mismo es `0`:

```javascript
distances[startNode] = 0;
```

---

## 🧭 Seguimiento de caminos

También se crea una estructura para almacenar los caminos:

```javascript
const paths = Array.from({ length: n }, (_, i) => [i]);
```

Cada posición comienza conteniendo únicamente su propio número de nodo.

Cuando se encuentra un camino más corto, el recorrido se actualiza utilizando:

```javascript
paths[nodeNo] = [...paths[current], nodeNo];
```

Esto copia el camino del nodo actual y agrega el nuevo nodo al final.

---

## 👀 Nodos visitados

Se utiliza otro array para saber qué nodos ya fueron procesados:

```javascript
const visited = new Array(n).fill(false);
```

Inicialmente:

```text
[false, false, false, false, false, false]
```

Cuando un nodo es seleccionado:

```javascript
visited[current] = true;
```

De esta manera, no vuelve a ser procesado como nodo actual.

---

## 🔎 Buscar el nodo más cercano

En cada iteración se busca el nodo no visitado que tenga la distancia conocida más pequeña:

```javascript
let minDistance = INF;
let current = -1;

for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
    minDistance = distances[nodeNo];
    current = nodeNo;
  }
}
```

Si no existe ningún nodo disponible:

```javascript
if (current === -1) {
  break;
}
```

el algoritmo termina.

---

## 📏 Actualización de distancias

Después de seleccionar un nodo, se analizan sus conexiones:

```javascript
for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  const distance = matrix[current][nodeNo];

  if (distance !== INF && !visited[nodeNo]) {
    const newDistance = distances[current] + distance;

    if (newDistance < distances[nodeNo]) {
      distances[nodeNo] = newDistance;
      paths[nodeNo] = [...paths[current], nodeNo];
    }
  }
}
```

La nueva distancia se calcula mediante:

```javascript
const newDistance = distances[current] + distance;
```

Si esa distancia es menor que la conocida:

```javascript
if (newDistance < distances[nodeNo])
```

se actualizan tanto la distancia como el camino.

---

## 🎯 Nodo objetivo opcional

La función permite buscar un nodo específico o trabajar con todos los nodos:

```javascript
const targets =
  targetNode !== null
    ? [targetNode]
    : [...Array(n).keys()];
```

Si existe `targetNode`, solamente se utiliza ese nodo como objetivo.

Si no existe, se generan todos los índices de los nodos.

---

## 🖥️ Mostrar el camino

El array correspondiente al camino se transforma en una representación legible:

```javascript
const path = paths[nodeNo].join(" -> ");
```

Por ejemplo:

```text
0 -> 2 -> 1 -> 5
```

Después se muestra junto con la distancia:

```javascript
console.log(
  `\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`
);
```

---

## 🔄 Retorno de resultados

Al finalizar, la función devuelve:

```javascript
return [distances, paths];
```

Esto permite utilizar programáticamente tanto:

- las distancias calculadas;
- como los caminos encontrados.

---

## ▶️ Ejecución

En este ejercicio la función se ejecuta con:

```javascript
shortestPath(adjMatrix, 0, 5);
```

Esto busca el camino más corto:

```text
Nodo inicial: 0
Nodo objetivo: 5
```

Con la matriz utilizada en el ejercicio, uno de los caminos mínimos es:

```text
0 -> 2 -> 1 -> 5
```

con una distancia total de:

```text
6
```

---

# 🇺🇸 English

This is exercise **117** in my **JavaScript** journey on **freeCodeCamp**.

The goal of this workshop was to implement an algorithm for finding the **shortest path between nodes in a weighted graph**.

The graph is represented using an **adjacency matrix**, where each value represents the distance between two nodes. When two nodes are not directly connected, `Infinity` is used.

The algorithm calculates the minimum distances from a starting node while also keeping track of the path required to reach each node.

---

## 🚀 Features

- Represent a graph using an adjacency matrix.
- Use `Infinity` for nodes without a direct connection.
- Define a starting node.
- Optionally define a target node.
- Initialize distances for every node.
- Keep track of visited nodes.
- Find the unvisited node with the smallest known distance.
- Compare new routes with stored distances.
- Update a distance when a shorter path is found.
- Store the nodes that make up each path.
- Display the minimum distance found.
- Display the complete path using `->`.
- Return the calculated distances and paths.

---

## 🗺️ Graph Representation

The graph is represented using an adjacency matrix:

```javascript
const INF = Infinity;

const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];
```

Each position:

```text
matrix[i][j]
```

represents the weight or distance between node `i` and node `j`.

For example:

```javascript
matrix[0][1] === 5
```

means that nodes `0` and `1` are connected with a distance of `5`.

When the matrix contains:

```javascript
Infinity
```

there is no direct connection between those nodes.

---

## 📚 Concepts Practiced

- JavaScript
- Graphs
- Weighted Graphs
- Shortest Path Algorithms
- Adjacency Matrix
- Nodes
- Edges
- Edge Weights
- `Infinity`
- Arrays
- Nested Arrays
- `new Array()`
- `.fill()`
- `Array.from()`
- Spread syntax `...`
- `.keys()`
- `.join()`
- Template literals
- Default parameters
- `for` loops
- `for...of`
- Conditional statements
- Boolean arrays
- Distance tracking
- Path tracking
- Visited nodes
- Algorithmic problem solving

---

## 🎯 What I Learned

- Represent a weighted graph using an adjacency matrix.
- Interpret matrix values as connections between nodes.
- Use `Infinity` to represent an initially unknown distance or missing direct connection.
- Maintain an array containing the shortest known distances.
- Use a boolean array to track visited nodes.
- Find the available node with the smallest known distance.
- Compare a new route against a previously known distance.
- Update distances when shorter paths are discovered.
- Keep track of the complete path to each node.
- Use spread syntax to copy and extend arrays.
- Work with an optional target node.
- Display algorithm results using template literals.
- Return multiple data structures from a function.

---

## ⚙️ Distance Initialization

The function receives the matrix, starting node, and an optional target node:

```javascript
function shortestPath(matrix, startNode, targetNode = null)
```

First, the number of nodes is obtained:

```javascript
const n = matrix.length;
```

An array is then created with every distance initially set to infinity:

```javascript
const distances = new Array(n).fill(INF);
```

The distance from the starting node to itself is `0`:

```javascript
distances[startNode] = 0;
```

---

## 🧭 Path Tracking

Another structure stores the paths:

```javascript
const paths = Array.from({ length: n }, (_, i) => [i]);
```

Each position initially contains its own node number.

When a shorter path is found, the path is updated using:

```javascript
paths[nodeNo] = [...paths[current], nodeNo];
```

This copies the current node's path and appends the new node.

---

## 👀 Visited Nodes

Another array keeps track of which nodes have already been processed:

```javascript
const visited = new Array(n).fill(false);
```

Initially:

```text
[false, false, false, false, false, false]
```

When a node is selected:

```javascript
visited[current] = true;
```

This prevents it from being processed again as the current node.

---

## 🔎 Finding the Closest Node

During each iteration, the algorithm finds the unvisited node with the smallest known distance:

```javascript
let minDistance = INF;
let current = -1;

for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
    minDistance = distances[nodeNo];
    current = nodeNo;
  }
}
```

If no available node can be found:

```javascript
if (current === -1) {
  break;
}
```

the algorithm stops.

---

## 📏 Updating Distances

After selecting a node, its connections are inspected:

```javascript
for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  const distance = matrix[current][nodeNo];

  if (distance !== INF && !visited[nodeNo]) {
    const newDistance = distances[current] + distance;

    if (newDistance < distances[nodeNo]) {
      distances[nodeNo] = newDistance;
      paths[nodeNo] = [...paths[current], nodeNo];
    }
  }
}
```

The possible new distance is calculated with:

```javascript
const newDistance = distances[current] + distance;
```

If this value is smaller than the currently stored distance:

```javascript
if (newDistance < distances[nodeNo])
```

both the distance and path are updated.

---

## 🎯 Optional Target Node

The function can work with a specific target or with all nodes:

```javascript
const targets =
  targetNode !== null
    ? [targetNode]
    : [...Array(n).keys()];
```

When `targetNode` is provided, only that node is used as the output target.

Otherwise, indexes for all nodes are generated.

---

## 🖥️ Displaying the Path

The path array is converted into a readable representation using:

```javascript
const path = paths[nodeNo].join(" -> ");
```

For example:

```text
0 -> 2 -> 1 -> 5
```

The path and distance are then displayed:

```javascript
console.log(
  `\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`
);
```

---

## 🔄 Returning the Results

The function returns:

```javascript
return [distances, paths];
```

This makes both structures available for further use:

- calculated distances;
- calculated paths.

---

## ▶️ Execution

In this exercise, the function is called with:

```javascript
shortestPath(adjMatrix, 0, 5);
```

This calculates the shortest path between:

```text
Starting node: 0
Target node: 5
```

With the graph used in the exercise, one shortest path is:

```text
0 -> 2 -> 1 -> 5
```

with a total distance of:

```text
6
```

---

## 📁 Files

```text
117-implement-shortest-path-algorithm/
│
├── script.js
└── README.md
```

---

## 🛠️ Technologies

- JavaScript
