# Build an Nth Fibonacci Number Calculator

## 🇪🇸 Español

Este laboratorio implementa una calculadora capaz de obtener el número ubicado en la posición `n` de la secuencia de Fibonacci.

La secuencia de Fibonacci comienza con los números `0` y `1`. Cada número posterior se obtiene sumando los dos números anteriores.

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
```

Por ejemplo:

```text
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
```

La función utiliza un enfoque iterativo de programación dinámica. Los números calculados se almacenan en un arreglo para poder reutilizarlos en los siguientes cálculos.

### Funcionalidades

- Define una función llamada `fibonacci`.
- Recibe un único parámetro llamado `n`.
- Utiliza un arreglo llamado `sequence`.
- Inicializa `sequence` con los valores `[0, 1]`.
- Calcula el número de Fibonacci correspondiente a la posición `n`.
- Utiliza programación dinámica.
- Almacena cada número calculado en el arreglo `sequence`.
- Suma los dos números anteriores de la secuencia.
- Utiliza un ciclo `for`.
- Devuelve el resultado mediante `return`.
- No utiliza recursión.
- Devuelve `0` para la posición `0`.
- Devuelve `1` para las posiciones `1` y `2`.
- Devuelve `55` para la posición `10`.
- Devuelve `610` para la posición `15`.

### Conceptos practicados

- Secuencia de Fibonacci.
- Programación dinámica.
- Enfoque iterativo.
- Arreglos.
- Índices de arreglos.
- Funciones.
- Parámetros.
- Variables.
- Ciclos `for`.
- Método `push()`.
- Propiedad `length`.
- Operador de suma `+`.
- Operador de resta `-`.
- Operador menor o igual que `<=`.
- Operador de incremento `++`.
- Acceso a elementos mediante índices.
- Almacenamiento de resultados intermedios.
- Reutilización de valores calculados.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

La secuencia de Fibonacci es una sucesión numérica en la que cada número se obtiene sumando los dos números anteriores.

Sus primeros valores son:

```text
Índice:  0  1  2  3  4  5  6  7  8   9   10
Valor:   0  1  1  2  3  5  8  13 21  34  55
```

Por lo tanto:

```js
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(5); // 5
fibonacci(10); // 55
```

La función comienza con la siguiente declaración:

```js
function fibonacci(n) {
```

El parámetro `n` representa la posición del número que se desea obtener.

Por ejemplo:

```js
fibonacci(5);
```

En esta llamada, `n` es igual a `5`. El resultado será el número que se encuentra en la posición `5` de la secuencia:

```text
0, 1, 1, 2, 3, 5
               ↑
            índice 5
```

Por lo tanto, la función devuelve:

```js
5
```

### Arreglo inicial

Dentro de la función se declara un arreglo llamado `sequence`:

```js
const sequence = [0, 1];
```

Este arreglo contiene los dos primeros valores de Fibonacci:

```text
F(0) = 0
F(1) = 1
```

Estos valores funcionan como los casos iniciales necesarios para calcular el resto de la secuencia.

El índice `0` contiene el número `0`:

```js
sequence[0]; // 0
```

El índice `1` contiene el número `1`:

```js
sequence[1]; // 1
```

### Ciclo para calcular la secuencia

El ciclo comienza desde el índice `2`:

```js
for (let i = 2; i <= n; i++) {
```

Comienza en `2` porque los valores de las posiciones `0` y `1` ya existen dentro de `sequence`.

La condición:

```js
i <= n
```

hace que el ciclo continúe hasta calcular el número solicitado.

Por ejemplo, si `n` es igual a `5`, el ciclo procesa los índices:

```text
2, 3, 4, 5
```

### Cálculo del siguiente número

Dentro del ciclo, se suman los dos números anteriores:

```js
const nextNumber = sequence[i - 1] + sequence[i - 2];
```

Si `i` es igual a `2`, la operación es:

```js
sequence[1] + sequence[0]
```

Los valores almacenados son:

```js
1 + 0
```

El resultado es:

```js
1
```

El arreglo pasa a ser:

```js
[0, 1, 1]
```

En la siguiente iteración, `i` es igual a `3`:

```js
sequence[2] + sequence[1]
```

Esto equivale a:

```js
1 + 1
```

El resultado es `2` y el arreglo pasa a ser:

```js
[0, 1, 1, 2]
```

### Agregar el número al arreglo

Cada número calculado se añade a `sequence` utilizando el método `push()`:

```js
sequence.push(nextNumber);
```

Este método agrega el nuevo número al final del arreglo.

Por ejemplo:

```js
const sequence = [0, 1];

sequence.push(1);
```

El arreglo queda así:

```js
[0, 1, 1]
```

Después:

```js
sequence.push(2);
```

El resultado es:

```js
[0, 1, 1, 2]
```

De esta manera, cada valor calculado queda disponible para las iteraciones siguientes.

### Programación dinámica

Esta solución utiliza programación dinámica porque guarda los resultados intermedios dentro del arreglo `sequence`.

Cuando el algoritmo necesita calcular un nuevo número, no vuelve a calcular toda la secuencia desde el principio. Utiliza directamente los dos valores anteriores que ya se encuentran almacenados.

La fórmula de Fibonacci es:

```text
F(n) = F(n - 1) + F(n - 2)
```

En el código se representa mediante:

```js
sequence[i - 1] + sequence[i - 2]
```

Por ejemplo, para calcular `F(6)`:

```text
F(6) = F(5) + F(4)
F(6) = 5 + 3
F(6) = 8
```

Como `5` y `3` ya se encuentran guardados en el arreglo, el algoritmo solamente necesita sumarlos.

### Retorno del resultado

Cuando termina el ciclo, la función devuelve el elemento almacenado en la posición `n`:

```js
return sequence[n];
```

Por ejemplo, si el arreglo calculado es:

```js
[0, 1, 1, 2, 3, 5]
```

y `n` es igual a `5`, la función devuelve:

```js
sequence[5];
```

El resultado es:

```js
5
```

### Casos iniciales

Cuando se llama a la función con `0`:

```js
fibonacci(0);
```

El ciclo no se ejecuta porque comienza con `i = 2`.

La función devuelve directamente:

```js
sequence[0];
```

Resultado:

```js
0
```

Cuando se llama con `1`:

```js
fibonacci(1);
```

El ciclo tampoco se ejecuta y la función devuelve:

```js
sequence[1];
```

Resultado:

```js
1
```

Esto permite manejar los dos primeros números sin agregar condiciones adicionales.

### Ejemplo con `fibonacci(5)`

El arreglo comienza así:

```js
[0, 1]
```

Primera iteración:

```text
i = 2
0 + 1 = 1
```

Arreglo:

```js
[0, 1, 1]
```

Segunda iteración:

```text
i = 3
1 + 1 = 2
```

Arreglo:

```js
[0, 1, 1, 2]
```

Tercera iteración:

```text
i = 4
1 + 2 = 3
```

Arreglo:

```js
[0, 1, 1, 2, 3]
```

Cuarta iteración:

```text
i = 5
2 + 3 = 5
```

Arreglo final:

```js
[0, 1, 1, 2, 3, 5]
```

La función devuelve:

```js
5
```

### Resultados esperados

```js
fibonacci(0);
// 0

fibonacci(1);
// 1

fibonacci(2);
// 1

fibonacci(3);
// 2

fibonacci(5);
// 5

fibonacci(10);
// 55

fibonacci(15);
// 610
```

### Solución sin recursión

Esta implementación no utiliza recursión.

Una solución recursiva sería aquella en la que la función se llamara a sí misma, por ejemplo:

```js
fibonacci(n - 1);
```

Sin embargo, este laboratorio requiere una solución iterativa con programación dinámica.

Por eso se utiliza:

```js
for (let i = 2; i <= n; i++) {
```

El ciclo permite construir la secuencia paso a paso sin realizar llamadas recursivas.

### Complejidad

El ciclo calcula los números desde la posición `2` hasta la posición `n`.

Por eso, la complejidad temporal es:

```text
O(n)
```

El arreglo `sequence` almacena todos los números calculados hasta la posición `n`.

Por lo tanto, la complejidad espacial es:

```text
O(n)
```

## 🇺🇸 English

This lab implements a calculator that returns the number located at position `n` in the Fibonacci sequence.

The Fibonacci sequence begins with `0` and `1`. Every following number is calculated by adding the two preceding numbers.

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
```

For example:

```text
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
```

The function uses an iterative dynamic-programming approach. The calculated numbers are stored in an array so they can be reused in subsequent calculations.

### Features

- Defines a function named `fibonacci`.
- Receives exactly one parameter named `n`.
- Uses an array named `sequence`.
- Initializes `sequence` with `[0, 1]`.
- Calculates the Fibonacci number at position `n`.
- Uses dynamic programming.
- Stores every calculated number in the `sequence` array.
- Adds the two preceding numbers.
- Uses a `for` loop.
- Returns the result using `return`.
- Does not use recursion.
- Returns `0` for position `0`.
- Returns `1` for positions `1` and `2`.
- Returns `55` for position `10`.
- Returns `610` for position `15`.

### Concepts Practiced

- Fibonacci sequence.
- Dynamic programming.
- Iterative algorithms.
- Arrays.
- Array indexes.
- Functions.
- Parameters.
- Variables.
- `for` loops.
- `push()` method.
- `length` property.
- Addition operator `+`.
- Subtraction operator `-`.
- Less-than-or-equal operator `<=`.
- Increment operator `++`.
- Accessing elements by index.
- Storing intermediate results.
- Reusing calculated values.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

The Fibonacci sequence is a number sequence in which every number is obtained by adding the two preceding numbers.

Its first values are:

```text
Index:  0  1  2  3  4  5  6  7  8   9   10
Value:  0  1  1  2  3  5  8  13 21  34  55
```

The function begins with the following declaration:

```js
function fibonacci(n) {
```

The `n` parameter represents the position of the number that the function should return.

For example:

```js
fibonacci(5);
```

In this call, `n` is `5`. The function returns the number stored at position `5`:

```text
0, 1, 1, 2, 3, 5
               ↑
             index 5
```

The result is:

```js
5
```

### Initial Array

The function declares an array named `sequence`:

```js
const sequence = [0, 1];
```

This array contains the first two Fibonacci values:

```text
F(0) = 0
F(1) = 1
```

These values are the initial cases required to calculate the rest of the sequence.

### Calculating the Sequence

The loop begins at index `2`:

```js
for (let i = 2; i <= n; i++) {
```

It begins at `2` because the values at indexes `0` and `1` already exist in `sequence`.

The following expression adds the two preceding numbers:

```js
const nextNumber = sequence[i - 1] + sequence[i - 2];
```

For example, when `i` is `2`:

```js
sequence[1] + sequence[0];
```

This is equivalent to:

```text
1 + 0 = 1
```

The result is then added to the array:

```js
sequence.push(nextNumber);
```

The array becomes:

```js
[0, 1, 1]
```

During the following iteration:

```text
1 + 1 = 2
```

The array becomes:

```js
[0, 1, 1, 2]
```

This process continues until the value at position `n` has been calculated.

### Dynamic Programming

This solution uses dynamic programming because it stores intermediate results in the `sequence` array.

When the algorithm needs to calculate a new number, it reuses the two previously calculated values instead of recalculating the entire sequence.

The Fibonacci formula is:

```text
F(n) = F(n - 1) + F(n - 2)
```

The code represents this formula with:

```js
sequence[i - 1] + sequence[i - 2]
```

For example:

```text
F(6) = F(5) + F(4)
F(6) = 5 + 3
F(6) = 8
```

### Returning the Result

After the loop finishes, the function returns the value stored at index `n`:

```js
return sequence[n];
```

For example, when `n` is `5`, the final array is:

```js
[0, 1, 1, 2, 3, 5]
```

The function returns:

```js
sequence[5];
```

Result:

```js
5
```

### Initial Cases

When the function receives `0`:

```js
fibonacci(0);
```

The loop does not execute because it begins at `2`.

The function directly returns:

```js
sequence[0];
```

Result:

```js
0
```

When the function receives `1`:

```js
fibonacci(1);
```

The loop also does not execute, and the function returns:

```js
sequence[1];
```

Result:

```js
1
```

### Example with `fibonacci(5)`

The array begins as:

```js
[0, 1]
```

First iteration:

```text
i = 2
0 + 1 = 1
```

Array:

```js
[0, 1, 1]
```

Second iteration:

```text
i = 3
1 + 1 = 2
```

Array:

```js
[0, 1, 1, 2]
```

Third iteration:

```text
i = 4
1 + 2 = 3
```

Array:

```js
[0, 1, 1, 2, 3]
```

Fourth iteration:

```text
i = 5
2 + 3 = 5
```

Final array:

```js
[0, 1, 1, 2, 3, 5]
```

The function returns:

```js
5
```

### Expected Results

```js
fibonacci(0);
// 0

fibonacci(1);
// 1

fibonacci(2);
// 1

fibonacci(3);
// 2

fibonacci(5);
// 5

fibonacci(10);
// 55

fibonacci(15);
// 610
```

### Iterative Solution

This implementation does not use recursion.

A recursive solution would call the function from within itself, for example:

```js
fibonacci(n - 1);
```

This laboratory requires an iterative dynamic-programming solution. Therefore, the sequence is built using a loop:

```js
for (let i = 2; i <= n; i++) {
```

### Complexity

The loop calculates the numbers from position `2` through position `n`.

Therefore, the time complexity is:

```text
O(n)
```

The `sequence` array stores every calculated value through position `n`.

Therefore, the space complexity is:

```text
O(n)
```

## 📁 Files

- `script.js`: Contains the iterative Fibonacci calculator.
- `README.md`: Contains the bilingual documentation for the laboratory.