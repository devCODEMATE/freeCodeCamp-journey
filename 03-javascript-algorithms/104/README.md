# 🔢 Range of Numbers Generator

## 🇪🇸 Español

Este es el ejercicio número **104** de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue crear una función recursiva que genere un array de números enteros dentro de un rango, comenzando en `startNum` y terminando en `endNum`, incluyendo ambos valores.

La solución debía usar recursividad y no depender de bucles ni variables globales.

### Ejemplos

```javascript
rangeOfNumbers(1, 5);
// [1, 2, 3, 4, 5]

rangeOfNumbers(6, 9);
// [6, 7, 8, 9]

rangeOfNumbers(10, 15);
// [10, 11, 12, 13, 14, 15]

rangeOfNumbers(2, 8);
// [2, 3, 4, 5, 6, 7, 8]
```

### Funcionalidades

- Recibir un número inicial y un número final.
- Retornar un array con todos los números del rango.
- Incluir tanto `startNum` como `endNum`.
- Construir el resultado mediante recursividad.
- Incrementar el valor inicial en cada llamada.
- Detener la recursión cuando ambos números son iguales.
- Crear un resultado independiente en cada ejecución.

### Conceptos practicados

- JavaScript
- Funciones
- Recursividad
- Caso base
- Caso recursivo
- Arrays
- `.concat()`
- Valores de retorno
- Parámetros
- Call Stack
- Incremento
- Descomposición de problemas

### Lo que aprendí

- Crear una función recursiva con dos parámetros.
- Definir un caso base usando una comparación.
- Reducir el problema en cada llamada recursiva.
- Incrementar `startNum` hasta alcanzar `endNum`.
- Construir un array sin utilizar loops.
- Combinar arrays mediante `.concat()`.
- Mantener cada llamada independiente.
- Comprender cómo se construye el resultado al regresar de la recursión.

### Cómo funciona

La función comienza verificando el caso base:

```javascript
if (startNum === endNum) {
  return [startNum];
}
```

Cuando ambos valores son iguales, la función devuelve un array con ese único número.

Luego ejecuta el caso recursivo:

```javascript
return [startNum].concat(
  rangeOfNumbers(startNum + 1, endNum)
);
```

En cada llamada:

- se guarda el número actual;
- se incrementa `startNum` en `1`;
- se vuelve a llamar a la función;
- se concatena el resultado.

Para `rangeOfNumbers(1, 4)`, el proceso es:

```text
rangeOfNumbers(1, 4)
[1].concat(rangeOfNumbers(2, 4))

rangeOfNumbers(2, 4)
[2].concat(rangeOfNumbers(3, 4))

rangeOfNumbers(3, 4)
[3].concat(rangeOfNumbers(4, 4))

rangeOfNumbers(4, 4)
[4]
```

Luego se construye el resultado:

```text
[4]
[3, 4]
[2, 3, 4]
[1, 2, 3, 4]
```

---

## 🇺🇸 English

This is exercise **104** in my freeCodeCamp JavaScript journey.

The goal was to create a recursive function that generates an array of integers within a range, starting at `startNum` and ending at `endNum`, including both values.

The solution had to use recursion without relying on loops or global variables.

### Examples

```javascript
rangeOfNumbers(1, 5);
// [1, 2, 3, 4, 5]

rangeOfNumbers(6, 9);
// [6, 7, 8, 9]

rangeOfNumbers(10, 15);
// [10, 11, 12, 13, 14, 15]

rangeOfNumbers(2, 8);
// [2, 3, 4, 5, 6, 7, 8]
```

### Features

- Accept a starting number and an ending number.
- Return an array containing every number in the range.
- Include both `startNum` and `endNum`.
- Build the result through recursion.
- Increase the starting value on every call.
- Stop recursion when both values are equal.
- Create an independent result for every execution.

### Concepts practiced

- JavaScript
- Functions
- Recursion
- Base case
- Recursive case
- Arrays
- `.concat()`
- Return values
- Parameters
- Call stack
- Incrementing values
- Problem decomposition

### What I learned

- Create a recursive function with two parameters.
- Define a base case using a comparison.
- Reduce the problem during every recursive call.
- Increment `startNum` until it reaches `endNum`.
- Build an array without loops.
- Combine arrays using `.concat()`.
- Keep every function call independent.
- Understand how the result is built while recursion returns.

### How it works

The function starts by checking the base case:

```javascript
if (startNum === endNum) {
  return [startNum];
}
```

When both values are equal, the function returns an array containing that number.

Then it runs the recursive case:

```javascript
return [startNum].concat(
  rangeOfNumbers(startNum + 1, endNum)
);
```

On every call:

- the current number is stored;
- `startNum` is increased by `1`;
- the function calls itself again;
- the result is concatenated.

For `rangeOfNumbers(1, 4)`, the process is:

```text
rangeOfNumbers(1, 4)
[1].concat(rangeOfNumbers(2, 4))

rangeOfNumbers(2, 4)
[2].concat(rangeOfNumbers(3, 4))

rangeOfNumbers(3, 4)
[3].concat(rangeOfNumbers(4, 4))

rangeOfNumbers(4, 4)
[4]
```

Then the result is built:

```text
[4]
[3, 4]
[2, 3, 4]
[1, 2, 3, 4]
```

---

## 📁 Files

- `script.js`