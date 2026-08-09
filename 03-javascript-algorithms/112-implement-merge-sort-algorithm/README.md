# Implement the Merge Sort Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de ordenamiento merge sort para organizar los elementos de un arreglo numérico de menor a mayor.

La función divide recursivamente el arreglo en partes más pequeñas. Después, compara los elementos de cada parte y los combina nuevamente en el arreglo original siguiendo el orden correcto.

### Funcionalidades

- Recibe un arreglo numérico.
- Detiene la recursión cuando el arreglo tiene uno o ningún elemento.
- Divide el arreglo en una parte izquierda y una parte derecha.
- Ordena recursivamente ambas partes.
- Compara los elementos de las dos partes.
- Combina los valores en orden ascendente.
- Modifica el arreglo original con los elementos ordenados.
- Muestra en la consola el arreglo antes y después del ordenamiento.

### Conceptos practicados

- Algoritmo merge sort.
- Funciones.
- Recursión.
- Caso base.
- Arreglos.
- División de un arreglo.
- Método `slice()`.
- Método `Math.floor()`.
- Propiedad `length`.
- Ciclos `while`.
- Condicionales `if` y `else`.
- Acceso a elementos mediante índices.
- Modificación de elementos de un arreglo.
- Variables con `const` y `let`.
- Comparaciones numéricas.
- Incremento de contadores.
- Uso de `console.log()`.

### Lo que aprendí

Merge sort utiliza la estrategia de dividir un arreglo en partes más pequeñas para después ordenarlas y combinarlas.

La función comienza con un caso base que detiene las llamadas recursivas cuando el arreglo contiene uno o ningún elemento:

```js
if (array.length <= 1) {
  return;
}
```

Luego calcula el punto medio del arreglo:

```js
const middlePoint = Math.floor(array.length / 2);
```

El método `slice()` permite crear la parte izquierda y la parte derecha:

```js
const leftPart = array.slice(0, middlePoint);
const rightPart = array.slice(middlePoint);
```

Cada parte se envía nuevamente a `mergeSort()` para continuar dividiendo y ordenando sus elementos:

```js
mergeSort(leftPart);
mergeSort(rightPart);
```

Para combinar las partes se utilizan tres índices:

- `leftArrayIndex` controla la posición actual en `leftPart`.
- `rightArrayIndex` controla la posición actual en `rightPart`.
- `sortedIndex` controla la posición que se modifica en el arreglo original.

Mientras ambas partes tengan elementos pendientes, sus valores actuales se comparan:

```js
while (
  leftArrayIndex < leftPart.length &&
  rightArrayIndex < rightPart.length
) {
  if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
  } else {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
  }

  sortedIndex += 1;
}
```

Después de esa comparación, pueden quedar elementos pendientes en alguna de las dos partes. Los ciclos restantes los agregan al arreglo:

```js
while (leftArrayIndex < leftPart.length) {
  array[sortedIndex] = leftPart[leftArrayIndex];
  leftArrayIndex += 1;
  sortedIndex += 1;
}

while (rightArrayIndex < rightPart.length) {
  array[sortedIndex] = rightPart[rightArrayIndex];
  rightArrayIndex += 1;
  sortedIndex += 1;
}
```

El arreglo utilizado en el ejercicio es:

```js
const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
```

Después de ejecutar:

```js
mergeSort(numbers);
```

El arreglo original queda ordenado:

```js
[1, 2, 4, 5, 6, 8, 10, 14]
```

## 🇺🇸 English

This exercise implements the merge sort algorithm to arrange the elements of a numeric array from smallest to largest.

The function recursively divides the array into smaller parts. It then compares the elements from each part and merges them back into the original array in the correct order.

### Features

- Receives a numeric array.
- Stops the recursion when the array has one element or is empty.
- Divides the array into a left part and a right part.
- Recursively sorts both parts.
- Compares the elements from the two parts.
- Merges the values in ascending order.
- Modifies the original array with the sorted elements.
- Displays the array in the console before and after sorting.

### Concepts Practiced

- Merge sort algorithm.
- Functions.
- Recursion.
- Base case.
- Arrays.
- Dividing an array.
- `slice()` method.
- `Math.floor()` method.
- `length` property.
- `while` loops.
- `if` and `else` conditionals.
- Accessing elements by index.
- Modifying array elements.
- Variables declared with `const` and `let`.
- Numeric comparisons.
- Incrementing counters.
- Using `console.log()`.

### What I Learned

Merge sort uses the strategy of dividing an array into smaller parts before sorting and combining them.

The function begins with a base case that stops the recursive calls when the array contains one element or is empty:

```js
if (array.length <= 1) {
  return;
}
```

It then calculates the middle point of the array:

```js
const middlePoint = Math.floor(array.length / 2);
```

The `slice()` method creates the left and right parts:

```js
const leftPart = array.slice(0, middlePoint);
const rightPart = array.slice(middlePoint);
```

Each part is passed back to `mergeSort()` to continue dividing and sorting its elements:

```js
mergeSort(leftPart);
mergeSort(rightPart);
```

Three indexes are used to merge the parts:

- `leftArrayIndex` controls the current position in `leftPart`.
- `rightArrayIndex` controls the current position in `rightPart`.
- `sortedIndex` controls the position being modified in the original array.

While both parts have remaining elements, their current values are compared:

```js
while (
  leftArrayIndex < leftPart.length &&
  rightArrayIndex < rightPart.length
) {
  if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
  } else {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
  }

  sortedIndex += 1;
}
```

After this comparison, either part may still contain remaining elements. The final loops add them to the array:

```js
while (leftArrayIndex < leftPart.length) {
  array[sortedIndex] = leftPart[leftArrayIndex];
  leftArrayIndex += 1;
  sortedIndex += 1;
}

while (rightArrayIndex < rightPart.length) {
  array[sortedIndex] = rightPart[rightArrayIndex];
  rightArrayIndex += 1;
  sortedIndex += 1;
}
```

The array used in the exercise is:

```js
const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
```

After running:

```js
mergeSort(numbers);
```

The original array is sorted:

```js
[1, 2, 4, 5, 6, 8, 10, 14]
```

## 📁 Files

- `script.js`: Contains the merge sort implementation and the console output.
- `README.md`: Contains the bilingual documentation for the exercise.