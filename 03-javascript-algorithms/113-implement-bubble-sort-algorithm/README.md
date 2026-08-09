# Implement the Bubble Sort Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de ordenamiento bubble sort para ordenar un arreglo de números enteros de menor a mayor.

La función compara elementos adyacentes y los intercambia cuando se encuentran en el orden incorrecto. El proceso se repite hasta completar una pasada sin realizar ningún intercambio.

### Funcionalidades

- Recibe un arreglo de números enteros.
- Compara cada elemento con el siguiente.
- Intercambia dos valores adyacentes cuando el primero es mayor.
- Repite el recorrido mientras se produzcan intercambios.
- Modifica el orden de los elementos del arreglo recibido.
- Devuelve el arreglo ordenado de menor a mayor.
- Realiza el ordenamiento sin utilizar el método incorporado `.sort()`.
- Muestra el resultado mediante `console.log()`.

### Conceptos practicados

- Algoritmo bubble sort.
- Arreglos.
- Funciones.
- Ciclo `do...while`.
- Ciclo `for`.
- Condicional `if`.
- Comparación de elementos adyacentes.
- Acceso a elementos mediante índices.
- Intercambio de valores.
- Variable booleana de control.
- Variables declaradas con `let` y `const`.
- Propiedad `length`.
- Incremento de contadores.
- Retorno de valores con `return`.
- Uso de `console.log()`.

### Lo que aprendí

Bubble sort recorre un arreglo comparando cada elemento con el que se encuentra inmediatamente después:

```js
if (array[i] > array[i + 1]) {
```

Si el primer valor es mayor que el segundo, ambos intercambian sus posiciones. Para conservar temporalmente uno de los valores se utiliza la constante `temporaryValue`:

```js
const temporaryValue = array[i];
array[i] = array[i + 1];
array[i + 1] = temporaryValue;
```

La variable `swapped` registra si ocurrió al menos un intercambio durante el recorrido:

```js
let swapped;
```

Al comenzar cada pasada, su valor se establece en `false`:

```js
swapped = false;
```

Cuando se intercambian dos elementos, cambia a `true`:

```js
swapped = true;
```

El ciclo `do...while` permite realizar al menos un recorrido completo y repetirlo mientras continúen ocurriendo intercambios:

```js
do {
  // Comparaciones e intercambios
} while (swapped);
```

El ciclo `for` llega hasta la penúltima posición porque cada elemento se compara con `array[i + 1]`:

```js
for (let i = 0; i < array.length - 1; i++) {
```

Cuando se completa una pasada sin intercambios, significa que los elementos ya están ordenados. Finalmente, la función devuelve el arreglo:

```js
return array;
```

El arreglo utilizado en el ejercicio es:

```js
[1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
```

Después de ejecutar `bubbleSort()`, el resultado es:

```js
[1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
```

Bubble sort puede necesitar varias pasadas sobre el arreglo. En los casos promedio y más desfavorables, presenta una complejidad temporal cuadrática.

## 🇺🇸 English

This exercise implements the bubble sort algorithm to arrange an array of integers from smallest to largest.

The function compares adjacent elements and swaps them when they are in the wrong order. The process repeats until an entire pass is completed without performing any swaps.

### Features

- Receives an array of integers.
- Compares each element with the following element.
- Swaps two adjacent values when the first one is greater.
- Repeats the traversal while swaps continue to occur.
- Modifies the order of the elements in the received array.
- Returns the array sorted from smallest to largest.
- Performs the sorting without using the built-in `.sort()` method.
- Displays the result using `console.log()`.

### Concepts Practiced

- Bubble sort algorithm.
- Arrays.
- Functions.
- `do...while` loop.
- `for` loop.
- `if` conditional.
- Comparing adjacent elements.
- Accessing elements by index.
- Swapping values.
- Boolean control variable.
- Variables declared with `let` and `const`.
- `length` property.
- Incrementing counters.
- Returning values with `return`.
- Using `console.log()`.

### What I Learned

Bubble sort traverses an array by comparing each element with the element immediately after it:

```js
if (array[i] > array[i + 1]) {
```

If the first value is greater than the second, their positions are swapped. The `temporaryValue` constant temporarily preserves one of the values:

```js
const temporaryValue = array[i];
array[i] = array[i + 1];
array[i + 1] = temporaryValue;
```

The `swapped` variable records whether at least one swap occurred during the traversal:

```js
let swapped;
```

At the beginning of each pass, its value is set to `false`:

```js
swapped = false;
```

When two elements are swapped, it changes to `true`:

```js
swapped = true;
```

The `do...while` loop performs at least one complete traversal and repeats it while swaps continue to occur:

```js
do {
  // Comparisons and swaps
} while (swapped);
```

The `for` loop stops at the second-to-last position because each element is compared with `array[i + 1]`:

```js
for (let i = 0; i < array.length - 1; i++) {
```

When a complete pass finishes without any swaps, the elements are already sorted. Finally, the function returns the array:

```js
return array;
```

The array used in the exercise is:

```js
[1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
```

After running `bubbleSort()`, the result is:

```js
[1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
```

Bubble sort may require multiple passes through the array. In average and worst-case scenarios, it has quadratic time complexity.

## 📁 Files

- `script.js`: Contains the bubble sort implementation and its console example.
- `README.md`: Contains the bilingual documentation for the exercise.