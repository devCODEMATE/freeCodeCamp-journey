# Implement the Binary Search Algorithm

## 🇪🇸 Español

Este ejercicio implementa el algoritmo de búsqueda binaria para encontrar un valor dentro de un arreglo ordenado.

La función reduce progresivamente el área de búsqueda comparando el valor buscado con el elemento ubicado en la posición central del arreglo. También registra los valores visitados durante el proceso.

### Funcionalidades

* Busca un valor dentro de un arreglo ordenado.
* Calcula el índice central del área de búsqueda.
* Compara el valor central con el valor buscado.
* Descarta la mitad izquierda o derecha del arreglo en cada iteración.
* Registra los valores visitados en `pathToTarget`.
* Devuelve el recorrido y el índice cuando encuentra el valor.
* Devuelve un arreglo vacío y un mensaje cuando el valor no existe.

### Conceptos practicados

* Algoritmo de búsqueda binaria.
* Arreglos.
* Funciones.
* Ciclo `while`.
* Condicionales `if`, `else if` y `else`.
* Variables con `let`.
* Acceso a elementos mediante índices.
* Método `push()`.
* Propiedad `length`.
* Método `Math.floor()`.
* Template literals.
* Retorno de valores con `return`.
* Comparaciones numéricas.

### Lo que aprendí

La búsqueda binaria trabaja con un arreglo ordenado y utiliza dos límites:

* `low` representa el inicio del área de búsqueda.
* `high` representa el final del área de búsqueda.

En cada iteración se calcula el índice central:

```js
let mid = Math.floor((low + high) / 2);
```

Después se obtiene el valor ubicado en esa posición y se agrega al recorrido:

```js
let valueAtMiddle = searchList[mid];
pathToTarget.push(valueAtMiddle);
```

Si el valor central coincide con el valor buscado, la función devuelve el recorrido y el índice donde fue encontrado:

```js
return [pathToTarget, `Value found at index ${mid}`];
```

Si el valor buscado es mayor que el valor central, la búsqueda continúa en la mitad derecha:

```js
low = mid + 1;
```

Si es menor, continúa en la mitad izquierda:

```js
high = mid - 1;
```

El ciclo se mantiene activo mientras `low` sea menor o igual que `high`. Si los límites se cruzan sin encontrar el valor, la función devuelve:

```js
[[], "Value not found"]
```

### Ejemplos

```js
binarySearch([1, 2, 3, 4, 5], 3);
```

Resultado:

```js
[[3], "Value found at index 2"]
```

```js
binarySearch([1, 2, 3, 4, 5, 9], 4);
```

Resultado:

```js
[[3, 5, 4], "Value found at index 3"]
```

```js
binarySearch([1, 3, 5, 9, 14, 22], 10);
```

Resultado:

```js
[[], "Value not found"]
```

## 🇺🇸 English

This exercise implements the binary search algorithm to find a value inside a sorted array.

The function progressively reduces the search area by comparing the target value with the element located at the middle position of the array. It also records the values visited during the process.

### Features

* Searches for a value inside a sorted array.
* Calculates the middle index of the search area.
* Compares the middle value with the target value.
* Discards the left or right half of the array during each iteration.
* Records the visited values in `pathToTarget`.
* Returns the search path and index when the value is found.
* Returns an empty array and a message when the value does not exist.

### Concepts Practiced

* Binary search algorithm.
* Arrays.
* Functions.
* `while` loop.
* `if`, `else if`, and `else` conditionals.
* Variables declared with `let`.
* Accessing elements by index.
* `push()` method.
* `length` property.
* `Math.floor()` method.
* Template literals.
* Returning values with `return`.
* Numeric comparisons.

### What I Learned

Binary search works with a sorted array and uses two boundaries:

* `low` represents the beginning of the search area.
* `high` represents the end of the search area.

During each iteration, the middle index is calculated:

```js
let mid = Math.floor((low + high) / 2);
```

The value at that position is then retrieved and added to the search path:

```js
let valueAtMiddle = searchList[mid];
pathToTarget.push(valueAtMiddle);
```

If the middle value matches the target value, the function returns the search path and the index where it was found:

```js
return [pathToTarget, `Value found at index ${mid}`];
```

If the target value is greater than the middle value, the search continues in the right half:

```js
low = mid + 1;
```

If it is smaller, the search continues in the left half:

```js
high = mid - 1;
```

The loop continues while `low` is less than or equal to `high`. If the boundaries cross without finding the value, the function returns:

```js
[[], "Value not found"]
```

### Examples

```js
binarySearch([1, 2, 3, 4, 5], 3);
```

Result:

```js
[[3], "Value found at index 2"]
```

```js
binarySearch([1, 2, 3, 4, 5, 9], 4);
```

Result:

```js
[[3, 5, 4], "Value found at index 3"]
```

```js
binarySearch([1, 3, 5, 9, 14, 22], 10);
```

Result:

```js
[[], "Value not found"]
```

## 📁 Files

* `script.js`: Contains the binary search function and its usage examples.
* `README.md`: Contains the bilingual documentation for the exercise.
