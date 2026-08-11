# Implement the N-Queens Algorithm

## 🇪🇸 Español

Este laboratorio implementa una solución para el problema de las N reinas mediante búsqueda en profundidad, conocida como Depth-First Search o DFS, y backtracking.

El problema consiste en colocar `n` reinas sobre un tablero de ajedrez de `n × n` sin que ninguna pueda atacar a otra. Para conseguirlo, dos reinas no pueden compartir la misma fila, columna o diagonal.

Cada solución se representa mediante un arreglo. El índice de cada elemento representa una fila del tablero y su valor representa la columna en la que se encuentra la reina.

Por ejemplo:

```js
[1, 3, 0, 2]
```

Esta solución representa las siguientes posiciones:

- Fila `0`, columna `1`.
- Fila `1`, columna `3`.
- Fila `2`, columna `0`.
- Fila `3`, columna `2`.

Visualmente, el tablero sería:

```text
. Q . .
. . . Q
Q . . .
. . Q .
```

La letra `Q` representa una reina y el punto `.` representa una casilla vacía.

### Funcionalidades

- Define una función llamada `dfsNQueens`.
- Recibe exactamente un argumento llamado `n`.
- Devuelve un arreglo vacío cuando `n` es menor que `1`.
- Busca todas las distribuciones válidas de reinas.
- Coloca exactamente una reina en cada fila.
- Evita colocar dos reinas en la misma columna.
- Evita colocar dos reinas en la misma diagonal.
- Utiliza búsqueda en profundidad.
- Utiliza una función recursiva.
- Aplica backtracking para probar diferentes posiciones.
- Guarda cada solución como un arreglo de longitud `n`.
- Conserva una copia independiente de cada solución.
- Devuelve todas las soluciones encontradas.
- Encuentra las `2` soluciones existentes para un tablero de `4 × 4`.
- Encuentra las `10` soluciones existentes para un tablero de `5 × 5`.
- Encuentra las `92` soluciones existentes para un tablero de `8 × 8`.

### Conceptos practicados

- Depth-First Search.
- Búsqueda en profundidad.
- Backtracking.
- Recursión.
- Problema de las N reinas.
- Arreglos.
- Arreglos anidados.
- Funciones.
- Funciones internas.
- Parámetros.
- Ciclos `for`.
- Condicionales `if`.
- Variables booleanas.
- Método `push()`.
- Método `pop()`.
- Spread syntax.
- Método `Math.abs()`.
- Operadores `===`, `<`, `||` y `-`.
- Validación de posiciones.
- Comparación de filas y columnas.
- Detección de diagonales.
- Casos base.
- Exploración de posibilidades.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

El problema de las N reinas requiere colocar una reina en cada fila de un tablero sin que dos reinas compartan columna o diagonal.

No es necesario comprobar si dos reinas comparten fila porque el algoritmo coloca como máximo una reina en cada fila.

La función principal recibe el tamaño del tablero:

```js
function dfsNQueens(n) {
```

El parámetro `n` determina:

- La cantidad de filas.
- La cantidad de columnas.
- La cantidad de reinas que deben colocarse.

Primero se comprueba si `n` es menor que `1`:

```js
if (n < 1) {
  return [];
}
```

En ese caso, no existe un tablero válido sobre el cual colocar reinas, por lo que la función devuelve un arreglo vacío.

Después se crea el arreglo que almacenará todas las soluciones:

```js
const solutions = [];
```

Cada elemento de `solutions` será otro arreglo que describirá una distribución válida de las reinas.

Por ejemplo:

```js
[
  [1, 3, 0, 2],
  [2, 0, 3, 1]
]
```

Estas son las dos soluciones existentes para un tablero de `4 × 4`.

### La función recursiva

Dentro de `dfsNQueens` se define la función `dfs`:

```js
function dfs(row, placement) {
```

Esta función recibe dos argumentos:

- `row`: la fila que se está procesando.
- `placement`: las columnas elegidas para las filas anteriores.

Por ejemplo:

```js
[1, 3]
```

significa que:

- En la fila `0` se colocó una reina en la columna `1`.
- En la fila `1` se colocó una reina en la columna `3`.

La siguiente llamada recursiva intentará colocar una reina en la fila `2`.

### Caso base

El caso base ocurre cuando `row` es igual a `n`:

```js
if (row === n) {
  solutions.push([...placement]);
  return;
}
```

Esto significa que se pudo colocar una reina en cada fila sin producir conflictos.

La solución se guarda utilizando spread syntax:

```js
[...placement]
```

Esto crea una copia independiente del arreglo.

Es necesario guardar una copia porque el arreglo `placement` continuará modificándose durante el backtracking. Si se guardara directamente, las soluciones almacenadas también podrían cambiar.

Después de guardar la solución, `return` finaliza esa rama de la búsqueda:

```js
return;
```

### Exploración de las columnas

Para cada fila se prueban todas las columnas del tablero:

```js
for (let column = 0; column < n; column++) {
```

Si `n` es igual a `4`, las columnas posibles son:

```text
0, 1, 2, 3
```

Antes de colocar una reina, se supone inicialmente que la posición es segura:

```js
let isSafe = true;
```

Luego se comparará esa posición con todas las reinas colocadas anteriormente.

### Comprobación de posiciones

El segundo ciclo recorre las filas anteriores:

```js
for (
  let previousRow = 0;
  previousRow < row;
  previousRow++
) {
```

La columna de la reina colocada en la fila anterior se obtiene desde `placement`:

```js
const previousColumn = placement[previousRow];
```

Por ejemplo, si:

```js
placement = [1, 3];
```

entonces:

```js
placement[0] === 1;
placement[1] === 3;
```

### Misma columna

Dos reinas se atacan cuando se encuentran en la misma columna:

```js
const sameColumn = previousColumn === column;
```

Si una reina anterior ya ocupa la columna que se está evaluando, la nueva reina no puede colocarse allí.

Por ejemplo:

```text
Q . . .
Q . . .
```

Las dos reinas se encuentran en la columna `0`, por lo que la posición no es válida.

### Misma diagonal

Dos posiciones se encuentran en la misma diagonal cuando la diferencia absoluta entre sus columnas es igual a la diferencia entre sus filas:

```js
const sameDiagonal =
  Math.abs(previousColumn - column) ===
  row - previousRow;
```

Por ejemplo, las posiciones:

```text
Fila 0, columna 1
Fila 2, columna 3
```

tienen una diferencia de filas igual a:

```text
2 - 0 = 2
```

La diferencia absoluta entre sus columnas también es:

```text
|3 - 1| = 2
```

Como ambas diferencias son iguales, las reinas se encuentran en la misma diagonal.

`Math.abs()` devuelve el valor absoluto de un número. De esta manera, la comparación funciona tanto para diagonales hacia la izquierda como hacia la derecha.

### Posición insegura

Si las reinas comparten columna o diagonal, la posición no es segura:

```js
if (sameColumn || sameDiagonal) {
  isSafe = false;
  break;
}
```

El operador `||` significa que basta con que una de las dos condiciones sea verdadera.

Cuando se detecta un conflicto:

1. `isSafe` cambia a `false`.
2. `break` interrumpe el ciclo.
3. El algoritmo deja de comparar esa posición porque ya se sabe que no es válida.

### Colocación de una reina

Si no se encontraron conflictos, la columna se agrega al arreglo:

```js
if (isSafe) {
  placement.push(column);
```

Esto representa la colocación de una reina en la fila actual.

Después se llama nuevamente a `dfs` para procesar la fila siguiente:

```js
dfs(row + 1, placement);
```

La búsqueda continúa hasta colocar todas las reinas o hasta encontrar una fila sin posiciones posibles.

### Backtracking

Después de explorar una posición, se elimina la última columna agregada:

```js
placement.pop();
```

Esta operación es el paso principal del backtracking.

El algoritmo:

1. Elige una columna.
2. Coloca temporalmente una reina.
3. Explora las filas siguientes.
4. Regresa a la fila anterior.
5. Retira la reina.
6. Prueba la siguiente columna.

De esta manera, puede explorar todas las combinaciones posibles sin conservar decisiones que pertenecen a ramas anteriores.

### Inicio de la búsqueda

La búsqueda comienza desde la fila `0` y con un arreglo vacío:

```js
dfs(0, []);
```

El arreglo está vacío porque todavía no se colocó ninguna reina.

Cuando la búsqueda termina, la función devuelve todas las soluciones:

```js
return solutions;
```

### Ejemplo con una reina

```js
dfsNQueens(1);
```

Devuelve:

```js
[[0]]
```

Existe una sola casilla, por lo que la reina debe colocarse en la fila `0`, columna `0`.

### Tableros sin solución

```js
dfsNQueens(2);
```

Devuelve:

```js
[]
```

También:

```js
dfsNQueens(3);
```

Devuelve:

```js
[]
```

No es posible colocar `2` reinas en un tablero de `2 × 2` ni `3` reinas en un tablero de `3 × 3` sin que se ataquen.

### Tablero de 4 × 4

```js
dfsNQueens(4);
```

Devuelve:

```js
[
  [1, 3, 0, 2],
  [2, 0, 3, 1]
]
```

La primera solución:

```js
[1, 3, 0, 2]
```

se representa de esta forma:

```text
. Q . .
. . . Q
Q . . .
. . Q .
```

La segunda solución:

```js
[2, 0, 3, 1]
```

se representa de esta forma:

```text
. . Q .
Q . . .
. . . Q
. Q . .
```

### Tablero de 5 × 5

```js
dfsNQueens(5);
```

Devuelve:

```js
[
  [0, 2, 4, 1, 3],
  [0, 3, 1, 4, 2],
  [1, 3, 0, 2, 4],
  [1, 4, 2, 0, 3],
  [2, 0, 3, 1, 4],
  [2, 4, 1, 3, 0],
  [3, 0, 2, 4, 1],
  [3, 1, 4, 2, 0],
  [4, 1, 3, 0, 2],
  [4, 2, 0, 3, 1]
]
```

La cantidad total de soluciones es:

```js
dfsNQueens(5).length;
// 10
```

Para un tablero de `8 × 8`:

```js
dfsNQueens(8).length;
// 92
```

### Complejidad

El algoritmo prueba diferentes posiciones para las reinas y descarta las configuraciones que producen conflictos.

En el peor caso, la cantidad de posibilidades crece de manera factorial. Su complejidad temporal puede expresarse aproximadamente como:

```text
O(n!)
```

Para cada posición también se comparan las reinas colocadas anteriormente.

El arreglo `placement` puede contener hasta `n` elementos y la profundidad máxima de la recursión también es `n`.

Sin contar el espacio utilizado para guardar todas las soluciones, la complejidad espacial es:

```text
O(n)
```

## 🇺🇸 English

This lab implements a solution to the N-Queens problem using Depth-First Search, also known as DFS, and backtracking.

The problem consists of placing `n` queens on an `n × n` chessboard without allowing any queen to attack another. Therefore, two queens cannot share the same row, column, or diagonal.

Each solution is represented by an array. The index of each element represents a board row, and its value represents the column where the queen is placed.

For example:

```js
[1, 3, 0, 2]
```

This solution represents the following positions:

- Row `0`, column `1`.
- Row `1`, column `3`.
- Row `2`, column `0`.
- Row `3`, column `2`.

The board would look like this:

```text
. Q . .
. . . Q
Q . . .
. . Q .
```

The letter `Q` represents a queen, and the period `.` represents an empty square.

### Features

- Defines a function named `dfsNQueens`.
- Receives exactly one argument named `n`.
- Returns an empty array when `n` is less than `1`.
- Finds every valid queen arrangement.
- Places exactly one queen in each row.
- Prevents two queens from sharing a column.
- Prevents two queens from sharing a diagonal.
- Uses Depth-First Search.
- Uses a recursive function.
- Applies backtracking to test different positions.
- Stores each solution as an array of length `n`.
- Preserves an independent copy of each solution.
- Returns every solution found.
- Finds the `2` solutions for a `4 × 4` board.
- Finds the `10` solutions for a `5 × 5` board.
- Finds the `92` solutions for an `8 × 8` board.

### Concepts Practiced

- Depth-First Search.
- Backtracking.
- Recursion.
- N-Queens problem.
- Arrays.
- Nested arrays.
- Functions.
- Inner functions.
- Parameters.
- `for` loops.
- `if` conditionals.
- Boolean variables.
- `push()` method.
- `pop()` method.
- Spread syntax.
- `Math.abs()` method.
- `===`, `<`, `||`, and `-` operators.
- Position validation.
- Row and column comparison.
- Diagonal detection.
- Base cases.
- Exploring possible states.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

The N-Queens problem requires placing one queen in each row without allowing two queens to share a column or diagonal.

It is unnecessary to check whether two queens share a row because the algorithm places no more than one queen in each row.

The main function receives the size of the board:

```js
function dfsNQueens(n) {
```

The `n` parameter determines:

- The number of rows.
- The number of columns.
- The number of queens to place.

The function first checks whether `n` is less than `1`:

```js
if (n < 1) {
  return [];
}
```

In that case, no valid board is available, so the function returns an empty array.

An array is then created to store every solution:

```js
const solutions = [];
```

Each element in `solutions` will be another array describing a valid queen arrangement.

For example:

```js
[
  [1, 3, 0, 2],
  [2, 0, 3, 1]
]
```

These are the two solutions for a `4 × 4` board.

### The Recursive Function

The `dfs` function is defined inside `dfsNQueens`:

```js
function dfs(row, placement) {
```

It receives two arguments:

- `row`: the row currently being processed.
- `placement`: the columns selected for the preceding rows.

For example:

```js
[1, 3]
```

means that:

- A queen was placed in column `1` of row `0`.
- A queen was placed in column `3` of row `1`.

The next recursive call will try to place a queen in row `2`.

### Base Case

The base case occurs when `row` is equal to `n`:

```js
if (row === n) {
  solutions.push([...placement]);
  return;
}
```

This means that one queen was successfully placed in every row without producing conflicts.

The solution is stored using spread syntax:

```js
[...placement]
```

This creates an independent copy of the array.

Saving a copy is necessary because `placement` continues to change during backtracking. If the array were stored directly, previously recorded solutions could also be modified.

The `return` statement then ends that search branch.

### Exploring the Columns

For every row, the algorithm tries each board column:

```js
for (let column = 0; column < n; column++) {
```

If `n` is `4`, the possible columns are:

```text
0, 1, 2, 3
```

Before placing a queen, the position is initially considered safe:

```js
let isSafe = true;
```

The algorithm then compares it with every queen placed in a preceding row.

### Checking Positions

The second loop traverses the preceding rows:

```js
for (
  let previousRow = 0;
  previousRow < row;
  previousRow++
) {
```

The column of the queen in a preceding row is obtained from `placement`:

```js
const previousColumn = placement[previousRow];
```

For example, if:

```js
placement = [1, 3];
```

then:

```js
placement[0] === 1;
placement[1] === 3;
```

### Same Column

Two queens attack each other when they share a column:

```js
const sameColumn = previousColumn === column;
```

If a preceding queen already occupies the column being evaluated, the new queen cannot be placed there.

### Same Diagonal

Two positions share a diagonal when the absolute difference between their columns is equal to the difference between their rows:

```js
const sameDiagonal =
  Math.abs(previousColumn - column) ===
  row - previousRow;
```

For example, these positions:

```text
Row 0, column 1
Row 2, column 3
```

have a row difference of:

```text
2 - 0 = 2
```

Their absolute column difference is also:

```text
|3 - 1| = 2
```

Because both differences are equal, the queens share a diagonal.

`Math.abs()` returns the absolute value of a number. This allows the comparison to work for diagonals extending in either direction.

### Unsafe Position

If the queens share a column or diagonal, the position is unsafe:

```js
if (sameColumn || sameDiagonal) {
  isSafe = false;
  break;
}
```

The `||` operator means that only one of these conditions needs to be true.

When a conflict is found:

1. `isSafe` becomes `false`.
2. `break` stops the loop.
3. The algorithm rejects that position.

### Placing a Queen

If no conflicts are detected, the column is added to the placement array:

```js
if (isSafe) {
  placement.push(column);
```

This represents placing a queen in the current row.

The function then calls itself to process the next row:

```js
dfs(row + 1, placement);
```

The search continues until every queen has been placed or no valid position exists in the current branch.

### Backtracking

After exploring a position, the last column is removed:

```js
placement.pop();
```

This operation performs the main backtracking step.

The algorithm:

1. Selects a column.
2. Temporarily places a queen.
3. Explores the following rows.
4. Returns to the preceding row.
5. Removes the queen.
6. Tries the next column.

This makes it possible to explore every valid arrangement without retaining choices from previous branches.

### Starting the Search

The search begins at row `0` with an empty placement:

```js
dfs(0, []);
```

The array is empty because no queen has been placed yet.

When the search finishes, the function returns every solution:

```js
return solutions;
```

### Examples

```js
dfsNQueens(1);
```

Returns:

```js
[[0]]
```

For boards with no solutions:

```js
dfsNQueens(2);
// []

dfsNQueens(3);
// []
```

For a `4 × 4` board:

```js
dfsNQueens(4);
```

Returns:

```js
[
  [1, 3, 0, 2],
  [2, 0, 3, 1]
]
```

For a `5 × 5` board:

```js
dfsNQueens(5).length;
// 10
```

For an `8 × 8` board:

```js
dfsNQueens(8).length;
// 92
```

### Complexity

The algorithm tries different queen positions and rejects arrangements that produce conflicts.

In the worst case, the number of possible arrangements grows factorially. Its time complexity can be approximated as:

```text
O(n!)
```

For every position, the algorithm also compares the queen with those placed in preceding rows.

The `placement` array can contain up to `n` elements, and the maximum recursion depth is also `n`.

Excluding the space required to store every solution, the space complexity is:

```text
O(n)
```

## 📁 Files

- `script.js`: Contains the DFS and backtracking solution for the N-Queens problem.
- `README.md`: Contains the bilingual documentation for the lab.