# Implement the Insertion Sort Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de ordenamiento insertion sort para ordenar un arreglo de números enteros de menor a mayor.

La función recorre el arreglo desde el segundo elemento. En cada iteración, guarda el valor actual, desplaza hacia la derecha los elementos anteriores que sean mayores y coloca el valor en la posición correspondiente.

### Funcionalidades

- Recibe un arreglo como parámetro.
- Comienza el recorrido desde el segundo elemento.
- Guarda temporalmente el valor que se debe insertar.
- Compara el valor actual con los elementos anteriores.
- Desplaza hacia la derecha los valores que sean mayores.
- Inserta el valor actual en su posición ordenada.
- Modifica el arreglo recibido.
- Devuelve el arreglo ordenado de menor a mayor.
- Conserva los mismos elementos y solo cambia su orden.
- Realiza el ordenamiento sin utilizar el método `.sort()`.
- Muestra dos ejemplos mediante `console.log()`.

### Conceptos practicados

- Algoritmo insertion sort.
- Arreglos.
- Funciones.
- Ciclo `for`.
- Ciclo `while`.
- Condiciones combinadas con `&&`.
- Acceso a elementos mediante índices.
- Modificación de elementos de un arreglo.
- Desplazamiento de valores.
- Variables declaradas con `const` y `let`.
- Propiedad `length`.
- Operadores `>=` y `>`.
- Incremento y decremento de índices.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Insertion sort construye progresivamente una sección ordenada al comienzo del arreglo.

El ciclo `for` comienza en el índice `1` porque el primer elemento se considera inicialmente como la parte ordenada:

```js
for (let i = 1; i < array.length; i++) {
```

En cada iteración, `currentValue` guarda el elemento que debe colocarse en la posición correspondiente:

```js
const currentValue = array[i];
```

La variable `j` comienza en la posición anterior al elemento actual:

```js
let j = i - 1;
```

El ciclo `while` continúa mientras `j` sea un índice válido y el elemento anterior sea mayor que `currentValue`:

```js
while (j >= 0 && array[j] > currentValue) {
```

Dentro del ciclo, cada valor mayor se desplaza una posición hacia la derecha:

```js
array[j + 1] = array[j];
j--;
```

Cuando termina el desplazamiento, `currentValue` se coloca en el espacio correspondiente:

```js
array[j + 1] = currentValue;
```

Este proceso se repite hasta recorrer todo el arreglo. Finalmente, la función devuelve el mismo arreglo con sus elementos ordenados:

```js
return array;
```

### Ejemplos

```js
insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643,
  63, 123, 43, 2, 55, 1, 234, 92
]);
```

Devuelve:

```js
[
  1, 1, 2, 2, 4, 8, 32, 43, 43,
  55, 63, 92, 123, 123, 234, 345, 5643
]
```

Segundo ejemplo:

```js
insertionSort([5, 4, 33, 2, 8]);
```

Devuelve:

```js
[2, 4, 5, 8, 33]
```

## 🇺🇸 English

This exercise implements the insertion sort algorithm to arrange an array of integers from smallest to largest.

The function traverses the array starting with the second element. During each iteration, it stores the current value, shifts greater previous elements to the right, and inserts the value into its correct position.

### Features

- Receives an array as a parameter.
- Starts traversing from the second element.
- Temporarily stores the value that must be inserted.
- Compares the current value with previous elements.
- Shifts greater values one position to the right.
- Inserts the current value into its sorted position.
- Modifies the received array.
- Returns the array sorted from smallest to largest.
- Preserves the same elements and only changes their order.
- Performs the sorting without using the `.sort()` method.
- Displays two examples using `console.log()`.

### Concepts Practiced

- Insertion sort algorithm.
- Arrays.
- Functions.
- `for` loop.
- `while` loop.
- Conditions combined with `&&`.
- Accessing elements by index.
- Modifying array elements.
- Shifting values.
- Variables declared with `const` and `let`.
- `length` property.
- `>=` and `>` operators.
- Incrementing and decrementing indexes.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

Insertion sort progressively builds a sorted section at the beginning of the array.

The `for` loop starts at index `1` because the first element is initially considered the sorted section:

```js
for (let i = 1; i < array.length; i++) {
```

During each iteration, `currentValue` stores the element that must be placed in the correct position:

```js
const currentValue = array[i];
```

The `j` variable starts at the position immediately before the current element:

```js
let j = i - 1;
```

The `while` loop continues while `j` is a valid index and the previous element is greater than `currentValue`:

```js
while (j >= 0 && array[j] > currentValue) {
```

Inside the loop, each greater value is shifted one position to the right:

```js
array[j + 1] = array[j];
j--;
```

When the shifting process finishes, `currentValue` is placed in the available position:

```js
array[j + 1] = currentValue;
```

This process repeats until the entire array has been traversed. Finally, the function returns the same array with its elements sorted:

```js
return array;
```

### Examples

```js
insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643,
  63, 123, 43, 2, 55, 1, 234, 92
]);
```

Returns:

```js
[
  1, 1, 2, 2, 4, 8, 32, 43, 43,
  55, 63, 92, 123, 123, 234, 345, 5643
]
```

Second example:

```js
insertionSort([5, 4, 33, 2, 8]);
```

Returns:

```js
[2, 4, 5, 8, 33]
```

## 📁 Files

- `script.js`: Contains the insertion sort implementation and its console examples.
- `README.md`: Contains the bilingual documentation for the exercise.