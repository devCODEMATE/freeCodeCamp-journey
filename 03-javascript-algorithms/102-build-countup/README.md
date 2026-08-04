# 🔢 Countup

## 🇪🇸 Español

Este es el ejercicio número **102** de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue crear una función recursiva que reciba un número y devuelva un array con todos los números desde `1` hasta el valor indicado, en orden ascendente.

La solución se construyó usando recursividad, sin depender de variables globales para guardar el resultado.

### Ejemplo

```javascript
countup(5);
// [1, 2, 3, 4, 5]
```

### Funcionalidades

- Recibir un número como argumento.
- Retornar un array vacío cuando el número es menor que `1`.
- Generar una secuencia ascendente desde `1`.
- Agregar el número actual al final del array.
- Construir el resultado mediante llamadas recursivas.
- Crear un resultado independiente en cada ejecución.

### Conceptos practicados

- JavaScript
- Funciones
- Recursividad
- Caso base
- Caso recursivo
- Arrays
- `.push()`
- Variables locales
- Valores de retorno
- Pila de llamadas
- Descomposición de problemas

### Lo que aprendí

- Crear una función que se llama a sí misma.
- Definir un caso base para detener la recursión.
- Reducir el valor en cada llamada usando `number - 1`.
- Construir un array mientras las llamadas recursivas regresan.
- Agregar elementos al final de un array con `.push()`.
- Mantener el resultado dentro del alcance local de la función.
- Comprender cómo se forma una secuencia ascendente mediante recursividad.
- Evitar el uso de variables globales para almacenar resultados.

### Cómo funciona

La función comienza verificando el caso base:

```javascript
if (number < 1) {
  return [];
}
```

Cuando el número es menor que `1`, retorna un array vacío.

Luego ejecuta la llamada recursiva:

```javascript
countArray = countup(number - 1);
```

Cada llamada usa un número más pequeño hasta llegar al caso base.

Finalmente, agrega el número actual al array:

```javascript
countArray.push(number);
```

Para `countup(5)`, las llamadas bajan hasta `0`:

```text
countup(5)
countup(4)
countup(3)
countup(2)
countup(1)
countup(0)
```

Luego el resultado se construye al regresar:

```text
[]
[1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[1, 2, 3, 4, 5]
```

---

## 🇺🇸 English

This is exercise **102** in my freeCodeCamp JavaScript journey.

The goal was to create a recursive function that receives a number and returns an array containing every number from `1` up to the given value in ascending order.

The solution was built using recursion without relying on global variables to store the result.

### Example

```javascript
countup(5);
// [1, 2, 3, 4, 5]
```

### Features

- Accept a number as an argument.
- Return an empty array when the number is less than `1`.
- Generate an ascending sequence starting at `1`.
- Add the current number to the end of the array.
- Build the result through recursive calls.
- Create an independent result for every execution.

### Concepts practiced

- JavaScript
- Functions
- Recursion
- Base case
- Recursive case
- Arrays
- `.push()`
- Local variables
- Return values
- Call stack
- Problem decomposition

### What I learned

- Create a function that calls itself.
- Define a base case to stop recursion.
- Reduce the value on each call using `number - 1`.
- Build an array while recursive calls return.
- Add elements to the end of an array with `.push()`.
- Keep the result inside the function’s local scope.
- Understand how recursion can generate an ascending sequence.
- Avoid using global variables to store results.

### How it works

The function starts by checking the base case:

```javascript
if (number < 1) {
  return [];
}
```

When the number is less than `1`, it returns an empty array.

Then it makes the recursive call:

```javascript
countArray = countup(number - 1);
```

Each call uses a smaller number until the base case is reached.

Finally, it adds the current number to the array:

```javascript
countArray.push(number);
```

For `countup(5)`, the calls go down to `0`:

```text
countup(5)
countup(4)
countup(3)
countup(2)
countup(1)
countup(0)
```

Then the result is built while the calls return:

```text
[]
[1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[1, 2, 3, 4, 5]
```

---

## 📁 Files

- `script.js`