# Implement the Breadth-First Search Algorithm

## 🇪🇸 Español

Este workshop implementa una búsqueda en amplitud, conocida como Breadth-First Search o BFS, para generar todas las combinaciones válidas de una cantidad determinada de pares de paréntesis.

La función comienza con una cadena vacía y utiliza una cola para explorar las posibles combinaciones nivel por nivel. Cada estado de la cola almacena la combinación actual, la cantidad de paréntesis de apertura utilizados y la cantidad de paréntesis de cierre utilizados.

Solamente se agrega un paréntesis de apertura cuando todavía quedan aperturas disponibles. Un paréntesis de cierre únicamente puede agregarse cuando su cantidad es menor que la cantidad de aperturas utilizadas. Esta condición impide generar combinaciones desbalanceadas.

### Funcionalidades

- Define una función llamada `genParentheses`.
- Recibe la cantidad de pares de paréntesis como argumento.
- Comprueba que el argumento sea un número entero.
- Comprueba que la cantidad de pares sea al menos `1`.
- Devuelve mensajes descriptivos cuando el argumento no es válido.
- Utiliza una cola para aplicar una búsqueda en amplitud.
- Comienza la búsqueda con una cadena vacía.
- Registra la cantidad de aperturas utilizadas.
- Registra la cantidad de cierres utilizados.
- Agrega paréntesis de apertura mientras no se supere la cantidad de pares.
- Agrega paréntesis de cierre únicamente cuando la combinación mantiene el balance.
- Detecta cuándo una combinación alcanza la longitud necesaria.
- Guarda todas las combinaciones válidas en un arreglo.
- Devuelve el arreglo con los resultados.
- Muestra las cinco combinaciones válidas para tres pares mediante `console.log()`.

### Conceptos practicados

- Breadth-First Search.
- Búsqueda en amplitud.
- Colas.
- Estructura FIFO.
- Arreglos.
- Funciones.
- Validación de argumentos.
- Método `Number.isInteger()`.
- Ciclo `while`.
- Condicionales `if` y `else`.
- Método `shift()`.
- Método `push()`.
- Desestructuración de arreglos.
- Concatenación de cadenas.
- Propiedad `length`.
- Operadores `<`, `>`, `===` y `!`.
- Multiplicación con `*`.
- Contadores.
- Generación de combinaciones.
- Balance de paréntesis.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Breadth-First Search es un algoritmo que explora las posibilidades por niveles. En este ejercicio, cada combinación parcial representa un estado y las posibles extensiones de esa combinación representan los estados siguientes.

La función recibe la cantidad de pares que se deben generar:

```js
function genParentheses(pairs) {
```

Primero se verifica que el valor recibido sea un número entero:

```js
if (!Number.isInteger(pairs)) {
  return 'The number of pairs should be an integer';
}
```

`Number.isInteger()` devuelve `true` cuando el valor es un número entero. El operador `!` invierte ese resultado. Por lo tanto, si el argumento no es un entero, la función termina y devuelve un mensaje de error.

Después se comprueba que la cantidad sea al menos `1`:

```js
if (pairs < 1) {
  return 'The number of pairs should be at least 1';
}
```

Esta validación evita intentar generar combinaciones para cero pares o para cantidades negativas.

La búsqueda comienza creando una cola:

```js
let queue = [['', 0, 0]];
```

El primer elemento de la cola representa el estado inicial y contiene tres datos:

```js
['', 0, 0]
```

- `''`: la combinación actual, inicialmente vacía.
- El primer `0`: la cantidad de aperturas utilizadas.
- El segundo `0`: la cantidad de cierres utilizados.

También se crea un arreglo para almacenar las combinaciones completas:

```js
let result = [];
```

El ciclo principal continúa mientras la cola contenga estados pendientes:

```js
while (queue.length > 0) {
```

En cada iteración se elimina el primer estado de la cola mediante `shift()`:

```js
let [current, opensUsed, closesUsed] = queue.shift();
```

La desestructuración permite guardar los tres componentes del estado en variables separadas:

- `current`: combinación construida hasta el momento.
- `opensUsed`: cantidad de paréntesis de apertura utilizados.
- `closesUsed`: cantidad de paréntesis de cierre utilizados.

Una combinación está completa cuando su longitud es igual al doble de la cantidad de pares:

```js
if (current.length === 2 * pairs) {
  result.push(current);
}
```

Se multiplica por `2` porque cada par está compuesto por un paréntesis de apertura y uno de cierre.

Cuando la combinación todavía no está completa, la función evalúa qué paréntesis puede agregar:

```js
else {
```

Un paréntesis de apertura puede agregarse mientras la cantidad utilizada sea menor que la cantidad total de pares:

```js
if (opensUsed < pairs) {
  queue.push([
    current + '(',
    opensUsed + 1,
    closesUsed
  ]);
}
```

El nuevo estado contiene:

- La combinación actual más un paréntesis de apertura.
- La cantidad de aperturas aumentada en uno.
- La misma cantidad de cierres.

Un paréntesis de cierre solo puede agregarse cuando existen más aperturas que cierres:

```js
if (closesUsed < opensUsed) {
  queue.push([
    current + ')',
    opensUsed,
    closesUsed + 1
  ]);
}
```

Esta condición es la que mantiene balanceadas las combinaciones. Evita, por ejemplo, que una combinación comience con `)` o que en algún momento tenga más cierres que aperturas.

Los nuevos estados se agregan al final de la cola mediante `push()`, mientras que los estados pendientes se retiran desde el principio mediante `shift()`. De esta manera, la cola mantiene el comportamiento FIFO:

```text
First In, First Out
```

Cuando ya no quedan estados pendientes, la función devuelve todas las combinaciones válidas:

```js
return result;
```

### Ejemplo del recorrido

Para dos pares, la búsqueda comienza con:

```js
['', 0, 0]
```

El primer paréntesis solamente puede ser de apertura:

```js
['(', 1, 0]
```

Desde ese estado se pueden generar dos posibilidades:

```js
['((', 2, 0]
['()', 1, 1]
```

La búsqueda continúa explorando cada nivel hasta obtener:

```js
[
  '(())',
  '()()'
]
```

### Ejemplo final

```js
genParentheses(3);
```

Devuelve:

```js
[
  '((()))',
  '(()())',
  '(())()',
  '()(())',
  '()()()'
]
```

Estas son las cinco combinaciones válidas que pueden construirse con tres pares de paréntesis.

### Validaciones

Si el argumento no es un número entero:

```js
genParentheses(2.5);
```

Devuelve:

```text
The number of pairs should be an integer
```

Si el argumento es menor que `1`:

```js
genParentheses(0);
```

Devuelve:

```text
The number of pairs should be at least 1
```

## 🇺🇸 English

This workshop implements a breadth-first search algorithm to generate every valid combination for a given number of pairs of parentheses.

The function begins with an empty string and uses a queue to explore the possible combinations level by level. Each state in the queue stores the current combination, the number of opening parentheses used, and the number of closing parentheses used.

An opening parenthesis is added only while more openings are available. A closing parenthesis can only be added when fewer closing parentheses than opening parentheses have been used. This condition prevents unbalanced combinations from being generated.

### Features

- Defines a function named `genParentheses`.
- Receives the number of parenthesis pairs as its argument.
- Checks that the argument is an integer.
- Checks that the number of pairs is at least `1`.
- Returns descriptive messages when the argument is invalid.
- Uses a queue to perform breadth-first search.
- Starts the search with an empty string.
- Tracks the number of opening parentheses used.
- Tracks the number of closing parentheses used.
- Adds opening parentheses without exceeding the requested number of pairs.
- Adds closing parentheses only when the combination remains balanced.
- Detects when a combination reaches the required length.
- Stores every valid combination in an array.
- Returns the result array.
- Displays the five valid combinations for three pairs using `console.log()`.

### Concepts Practiced

- Breadth-first search.
- Queues.
- FIFO structure.
- Arrays.
- Functions.
- Argument validation.
- `Number.isInteger()` method.
- `while` loop.
- `if` and `else` conditionals.
- `shift()` method.
- `push()` method.
- Array destructuring.
- String concatenation.
- `length` property.
- `<`, `>`, `===`, and `!` operators.
- Multiplication with `*`.
- Counters.
- Combination generation.
- Balanced parentheses.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

Breadth-first search is an algorithm that explores possibilities one level at a time. In this exercise, each partial combination represents a state, and the possible extensions of that combination represent its next states.

The function receives the number of pairs to generate:

```js
function genParentheses(pairs) {
```

It first verifies that the received value is an integer:

```js
if (!Number.isInteger(pairs)) {
  return 'The number of pairs should be an integer';
}
```

`Number.isInteger()` returns `true` when the value is an integer. The `!` operator reverses that result. Therefore, when the argument is not an integer, the function stops and returns an error message.

The function then checks that the number is at least `1`:

```js
if (pairs < 1) {
  return 'The number of pairs should be at least 1';
}
```

This validation prevents attempts to generate combinations for zero or negative quantities.

The search begins by creating a queue:

```js
let queue = [['', 0, 0]];
```

The first element in the queue represents the initial state and contains three values:

```js
['', 0, 0]
```

- `''`: the current combination, initially empty.
- The first `0`: the number of opening parentheses used.
- The second `0`: the number of closing parentheses used.

An array is also created to store the completed combinations:

```js
let result = [];
```

The main loop continues while the queue contains pending states:

```js
while (queue.length > 0) {
```

During each iteration, the first state is removed from the queue using `shift()`:

```js
let [current, opensUsed, closesUsed] = queue.shift();
```

Array destructuring stores the three components of the state in separate variables:

- `current`: the combination built so far.
- `opensUsed`: the number of opening parentheses used.
- `closesUsed`: the number of closing parentheses used.

A combination is complete when its length is equal to twice the requested number of pairs:

```js
if (current.length === 2 * pairs) {
  result.push(current);
}
```

The number of pairs is multiplied by `2` because every pair consists of one opening and one closing parenthesis.

When the combination is not complete, the function evaluates which parenthesis can be added:

```js
else {
```

An opening parenthesis can be added while the number used remains below the total number of pairs:

```js
if (opensUsed < pairs) {
  queue.push([
    current + '(',
    opensUsed + 1,
    closesUsed
  ]);
}
```

The new state contains:

- The current combination followed by an opening parenthesis.
- The opening-parenthesis counter increased by one.
- The unchanged closing-parenthesis counter.

A closing parenthesis can only be added when more opening than closing parentheses have been used:

```js
if (closesUsed < opensUsed) {
  queue.push([
    current + ')',
    opensUsed,
    closesUsed + 1
  ]);
}
```

This condition keeps the combinations balanced. For example, it prevents a combination from starting with `)` or having more closing than opening parentheses at any point.

New states are added to the end of the queue with `push()`, while pending states are removed from the beginning with `shift()`. Therefore, the queue follows FIFO behavior:

```text
First In, First Out
```

When no pending states remain, the function returns all the valid combinations:

```js
return result;
```

### Traversal Example

For two pairs, the search begins with:

```js
['', 0, 0]
```

The first character can only be an opening parenthesis:

```js
['(', 1, 0]
```

From this state, two possibilities can be generated:

```js
['((', 2, 0]
['()', 1, 1]
```

The search continues exploring each level until it obtains:

```js
[
  '(())',
  '()()'
]
```

### Final Example

```js
genParentheses(3);
```

Returns:

```js
[
  '((()))',
  '(()())',
  '(())()',
  '()(())',
  '()()()'
]
```

These are the five valid combinations that can be built using three pairs of parentheses.

### Validations

If the argument is not an integer:

```js
genParentheses(2.5);
```

Returns:

```text
The number of pairs should be an integer
```

If the argument is less than `1`:

```js
genParentheses(0);
```

Returns:

```text
The number of pairs should be at least 1
```

## 📁 Files

- `script.js`: Contains the breadth-first search implementation and its console example.
- `README.md`: Contains the bilingual documentation for the workshop.