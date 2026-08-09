# Implement the Selection Sort Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de ordenamiento selection sort para ordenar los elementos de un arreglo de menor a mayor.

La función recorre el arreglo buscando el valor más pequeño dentro de la parte que todavía no está ordenada. Después, coloca ese valor en su posición correcta mediante un intercambio.

### Funcionalidades

- Recibe un arreglo como parámetro.
- Recorre las posiciones del arreglo.
- Busca el elemento más pequeño dentro de la sección no ordenada.
- Guarda el índice del valor mínimo encontrado.
- Intercambia los elementos cuando encuentra un valor menor.
- Evita realizar un intercambio si el valor ya está en la posición correcta.
- Modifica el orden de los elementos del arreglo recibido.
- Devuelve el arreglo ordenado de menor a mayor.
- Realiza el ordenamiento sin utilizar el método `.sort()`.

### Conceptos practicados

- Algoritmo selection sort.
- Arreglos.
- Funciones.
- Ciclos `for` anidados.
- Condicionales `if`.
- Acceso a elementos mediante índices.
- Comparación de valores.
- Intercambio de elementos.
- Variables declaradas con `let` y `const`.
- Propiedad `length`.
- Operadores `<` y `!==`.
- Retorno de valores con `return`.

### Lo que aprendí

Selection sort divide conceptualmente el arreglo en una parte ordenada y otra que todavía necesita ser revisada.

El primer ciclo recorre el arreglo hasta la penúltima posición:

```js
for (let i = 0; i < array.length - 1; i++) {
```

Al comenzar cada recorrido, se considera que el elemento ubicado en la posición `i` es el menor:

```js
let minimumIndex = i;
```

El segundo ciclo comienza en la posición siguiente y busca un valor más pequeño dentro del resto del arreglo:

```js
for (let j = i + 1; j < array.length; j++) {
  if (array[j] < array[minimumIndex]) {
    minimumIndex = j;
  }
}
```

Cuando encuentra un elemento menor, guarda su índice en `minimumIndex`. De esta manera, al finalizar el ciclo interno, esa variable contiene la posición del menor valor encontrado.

Antes de realizar el intercambio, la función comprueba que el valor mínimo no se encuentre ya en la posición correcta:

```js
if (minimumIndex !== i) {
```

Si las posiciones son diferentes, se utiliza `temporaryValue` para conservar temporalmente el valor actual mientras se intercambian los elementos:

```js
const temporaryValue = array[i];
array[i] = array[minimumIndex];
array[minimumIndex] = temporaryValue;
```

En cada recorrido del ciclo externo queda colocado un nuevo elemento en su posición ordenada. Finalmente, la función devuelve el arreglo:

```js
return array;
```

Por ejemplo:

```js
selectionSort([4, 2, 8, 1, 5]);
```

Devuelve:

```js
[1, 2, 4, 5, 8]
```

## 🇺🇸 English

This exercise implements the selection sort algorithm to arrange the elements of an array from smallest to largest.

The function traverses the array and searches for the smallest value within the section that has not been sorted yet. It then places that value in its correct position by swapping the elements.

### Features

- Receives an array as a parameter.
- Traverses the positions of the array.
- Searches for the smallest element in the unsorted section.
- Stores the index of the minimum value found.
- Swaps elements when a smaller value is found.
- Avoids performing a swap when the value is already in the correct position.
- Modifies the order of the elements in the received array.
- Returns the array sorted from smallest to largest.
- Performs the sorting without using the `.sort()` method.

### Concepts Practiced

- Selection sort algorithm.
- Arrays.
- Functions.
- Nested `for` loops.
- `if` conditionals.
- Accessing elements by index.
- Comparing values.
- Swapping elements.
- Variables declared with `let` and `const`.
- `length` property.
- `<` and `!==` operators.
- Returning values with `return`.

### What I Learned

Selection sort conceptually divides the array into a sorted section and another section that still needs to be checked.

The first loop traverses the array up to the second-to-last position:

```js
for (let i = 0; i < array.length - 1; i++) {
```

At the beginning of each pass, the element located at position `i` is considered the smallest:

```js
let minimumIndex = i;
```

The second loop starts at the following position and searches for a smaller value in the rest of the array:

```js
for (let j = i + 1; j < array.length; j++) {
  if (array[j] < array[minimumIndex]) {
    minimumIndex = j;
  }
}
```

When a smaller element is found, its index is stored in `minimumIndex`. Therefore, when the inner loop finishes, this variable contains the position of the smallest value found.

Before performing the swap, the function checks whether the minimum value is already in the correct position:

```js
if (minimumIndex !== i) {
```

If the positions are different, `temporaryValue` preserves the current value while the elements are swapped:

```js
const temporaryValue = array[i];
array[i] = array[minimumIndex];
array[minimumIndex] = temporaryValue;
```

During each pass of the outer loop, another element is placed in its sorted position. Finally, the function returns the array:

```js
return array;
```

For example:

```js
selectionSort([4, 2, 8, 1, 5]);
```

Returns:

```js
[1, 2, 4, 5, 8]
```

## 📁 Files

- `script.js`: Contains the selection sort implementation.
- `README.md`: Contains the bilingual documentation for the exercise.