# Implement the Quicksort Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de ordenamiento quicksort para ordenar un arreglo de números enteros de menor a mayor.

La función selecciona el último elemento del arreglo como pivote. Luego distribuye los demás valores en dos arreglos: uno para los elementos menores o iguales al pivote y otro para los elementos mayores. Finalmente, ordena recursivamente ambas partes y las combina en un nuevo arreglo.

### Funcionalidades

- Recibe un arreglo de números enteros.
- Utiliza el último elemento como pivote.
- Separa los valores menores o iguales al pivote.
- Separa los valores mayores que el pivote.
- Llama recursivamente a la función para ordenar ambas partes.
- Combina la parte izquierda, el pivote y la parte derecha.
- Conserva todos los números del arreglo original.
- Devuelve un nuevo arreglo ordenado de menor a mayor.
- Realiza el ordenamiento sin utilizar el método `.sort()`.
- Muestra el resultado mediante `console.log()`.

### Conceptos practicados

- Algoritmo quicksort.
- Divide y vencerás.
- Funciones.
- Recursión.
- Caso base.
- Arreglos.
- Ciclo `for`.
- Condicionales `if` y `else`.
- Método `push()`.
- Propiedad `length`.
- Acceso a elementos mediante índices.
- Spread syntax (`...`).
- Comparaciones numéricas.
- Variables declaradas con `const` y `let`.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Quicksort utiliza una estrategia recursiva de divide y vencerás. El arreglo se divide en partes más pequeñas alrededor de un valor llamado pivote.

La función comienza con un caso base:

```js
if (array.length <= 1) {
  return array;
}
```

Cuando el arreglo está vacío o contiene un solo elemento, ya se considera ordenado. Por eso se devuelve directamente y se detienen las llamadas recursivas para esa parte.

En esta implementación, el último elemento se selecciona como pivote:

```js
const pivot = array[array.length - 1];
```

Después se crean dos arreglos vacíos:

```js
const leftArray = [];
const rightArray = [];
```

- `leftArray` almacena los elementos menores o iguales al pivote.
- `rightArray` almacena los elementos mayores que el pivote.

El ciclo `for` recorre todos los elementos excepto el pivote:

```js
for (let i = 0; i < array.length - 1; i++) {
```

Cada valor se compara con el pivote. Si es menor o igual, se agrega a `leftArray`:

```js
if (array[i] <= pivot) {
  leftArray.push(array[i]);
}
```

Si es mayor, se agrega a `rightArray`:

```js
else {
  rightArray.push(array[i]);
}
```

Finalmente, la función llama recursivamente a `quicksort()` para ordenar ambos arreglos:

```js
quicksort(leftArray)
quicksort(rightArray)
```

Los resultados se combinan utilizando spread syntax:

```js
return [
  ...quicksort(leftArray),
  pivot,
  ...quicksort(rightArray)
];
```

El orden de la combinación es:

1. Los elementos ordenados menores o iguales al pivote.
2. El pivote.
3. Los elementos ordenados mayores que el pivote.

A diferencia de algunas implementaciones de otros algoritmos de ordenamiento, esta función no modifica directamente el arreglo original. Devuelve un nuevo arreglo con los elementos ordenados.

### Ejemplo

```js
quicksort([
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

Quicksort tiene una complejidad temporal promedio de `O(n log n)`. Sin embargo, la elección del pivote puede afectar su rendimiento y producir una complejidad de `O(n²)` en el peor caso.

## 🇺🇸 English

This exercise implements the quicksort algorithm to arrange an array of integers from smallest to largest.

The function selects the last element of the array as the pivot. It then distributes the remaining values into two arrays: one for elements less than or equal to the pivot and another for elements greater than the pivot. Finally, it recursively sorts both parts and combines them into a new array.

### Features

- Receives an array of integers.
- Uses the last element as the pivot.
- Separates values less than or equal to the pivot.
- Separates values greater than the pivot.
- Recursively calls the function to sort both parts.
- Combines the left part, the pivot, and the right part.
- Preserves all the numbers from the original array.
- Returns a new array sorted from smallest to largest.
- Performs the sorting without using the `.sort()` method.
- Displays the result using `console.log()`.

### Concepts Practiced

- Quicksort algorithm.
- Divide and conquer.
- Functions.
- Recursion.
- Base case.
- Arrays.
- `for` loop.
- `if` and `else` conditionals.
- `push()` method.
- `length` property.
- Accessing elements by index.
- Spread syntax (`...`).
- Numeric comparisons.
- Variables declared with `const` and `let`.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

Quicksort uses a recursive divide-and-conquer strategy. The array is divided into smaller parts around a value called the pivot.

The function begins with a base case:

```js
if (array.length <= 1) {
  return array;
}
```

When the array is empty or contains only one element, it is already considered sorted. Therefore, it is returned directly, stopping the recursive calls for that part.

In this implementation, the last element is selected as the pivot:

```js
const pivot = array[array.length - 1];
```

Two empty arrays are then created:

```js
const leftArray = [];
const rightArray = [];
```

- `leftArray` stores the elements less than or equal to the pivot.
- `rightArray` stores the elements greater than the pivot.

The `for` loop traverses every element except the pivot:

```js
for (let i = 0; i < array.length - 1; i++) {
```

Each value is compared with the pivot. If it is less than or equal to the pivot, it is added to `leftArray`:

```js
if (array[i] <= pivot) {
  leftArray.push(array[i]);
}
```

If it is greater, it is added to `rightArray`:

```js
else {
  rightArray.push(array[i]);
}
```

Finally, the function recursively calls `quicksort()` to sort both arrays:

```js
quicksort(leftArray)
quicksort(rightArray)
```

The results are combined using spread syntax:

```js
return [
  ...quicksort(leftArray),
  pivot,
  ...quicksort(rightArray)
];
```

The combination follows this order:

1. The sorted elements less than or equal to the pivot.
2. The pivot.
3. The sorted elements greater than the pivot.

Unlike some implementations of other sorting algorithms, this function does not directly modify the original array. It returns a new array containing the sorted elements.

### Example

```js
quicksort([
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

Quicksort has an average time complexity of `O(n log n)`. However, the choice of pivot can affect its performance and produce a worst-case time complexity of `O(n²)`.

## 📁 Files

- `script.js`: Contains the quicksort implementation and its console example.
- `README.md`: Contains the bilingual documentation for the exercise.