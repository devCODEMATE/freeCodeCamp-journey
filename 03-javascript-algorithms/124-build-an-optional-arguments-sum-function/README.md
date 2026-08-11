# Build an Optional Arguments Sum Function

This is exercise **124** of my JavaScript learning journey.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-v9/#lab-optional-arguments-sum-function)

## 🇪🇸 Español

Este laboratorio implementa una función que suma dos números recibidos de dos maneras diferentes.

Los dos argumentos pueden proporcionarse en una misma llamada:

```js
addTogether(2, 3);
```

Resultado:

```js
5
```

También se puede proporcionar solamente el primer número. En ese caso, `addTogether` devuelve una función que espera recibir el segundo:

```js
const sumTwoAnd = addTogether(2);

sumTwoAnd(3);
```

Resultado:

```js
5
```

Si cualquiera de los argumentos no es un número válido, la función devuelve `undefined`.

### Funcionalidades

- Define una función llamada `addTogether`.
- Acepta argumentos mediante el parámetro rest `...args`.
- Suma dos números proporcionados en una misma llamada.
- Devuelve una función cuando recibe solamente un argumento.
- Permite proporcionar los números en dos llamadas separadas.
- Comprueba que ambos argumentos sean números.
- Rechaza strings, arreglos y valores `undefined`.
- Utiliza `Number.isFinite()` para rechazar valores no finitos.
- Devuelve `undefined` cuando algún argumento no es válido.
- Utiliza un closure para recordar el primer número.
- Cumple las diez pruebas del laboratorio.

### Conceptos practicados

- Funciones.
- Parámetros rest.
- Arreglos de argumentos.
- Funciones internas.
- Funciones de orden superior.
- Closures.
- Retorno de funciones.
- Validación de datos.
- Operador `typeof`.
- Método `Number.isFinite()`.
- Condicionales.
- Acceso mediante índices.
- Propiedad `length`.
- Retorno anticipado.
- Valores `undefined`.
- Operador de suma.
- Ámbito léxico.
- Llamadas de funciones encadenadas.

## Función principal

La función se declara utilizando un parámetro rest:

```js
function addTogether(...args) {
```

El parámetro:

```js
...args
```

reúne todos los argumentos recibidos dentro de un arreglo llamado `args`.

Por ejemplo:

```js
addTogether(2, 3);
```

produce internamente:

```js
args = [2, 3];
```

En cambio:

```js
addTogether(5);
```

produce:

```js
args = [5];
```

Esto permite conocer cuántos argumentos fueron proporcionados mediante:

```js
args.length
```

## Validación de números

Dentro de `addTogether` se declara una función auxiliar:

```js
const isValidNumber = (value) =>
  typeof value === "number" && Number.isFinite(value);
```

Esta función comprueba dos condiciones.

La primera es:

```js
typeof value === "number"
```

Esto verifica que el tipo de dato sea realmente numérico.

Por ejemplo:

```js
typeof 5 === "number";
```

Resultado:

```js
true
```

Pero:

```js
typeof "5" === "number";
```

Resultado:

```js
false
```

Aunque `"5"` contiene un carácter numérico, sigue siendo un string y no debe aceptarse.

La segunda condición es:

```js
Number.isFinite(value)
```

Esta comprobación garantiza que el valor sea un número finito.

Por ejemplo:

```js
Number.isFinite(5);
```

devuelve:

```js
true
```

Mientras que:

```js
Number.isFinite(Infinity);
Number.isFinite(-Infinity);
Number.isFinite(NaN);
```

devuelven:

```js
false
```

Las dos condiciones se unen mediante el operador lógico `&&`:

```js
typeof value === "number" && Number.isFinite(value)
```

Por lo tanto, el valor solamente es aceptado si cumple ambas condiciones.

## Obtención del primer argumento

El primer argumento se obtiene mediante su índice:

```js
const firstNumber = args[0];
```

Los arreglos comienzan en el índice `0`.

Si se ejecuta:

```js
addTogether(5, 7);
```

el arreglo de argumentos es:

```js
[5, 7]
```

Por lo tanto:

```js
args[0];
```

devuelve:

```js
5
```

## Validación del primer número

Antes de realizar cualquier operación, se comprueba el primer argumento:

```js
if (!isValidNumber(firstNumber)) {
  return undefined;
}
```

El operador `!` invierte el resultado de la validación.

Si `isValidNumber(firstNumber)` devuelve `false`, la condición se convierte en `true` y la función termina inmediatamente.

Por ejemplo:

```js
addTogether("2", 3);
```

El primer argumento es un string:

```js
typeof "2" === "number";
```

Resultado:

```js
false
```

Por eso la función devuelve:

```js
undefined
```

## Dos argumentos en una llamada

La función comprueba si recibió dos argumentos:

```js
if (args.length === 2) {
```

En una llamada como:

```js
addTogether(2, 3);
```

el arreglo es:

```js
[2, 3]
```

Su longitud es:

```js
2
```

Por lo tanto, se ejecuta este bloque.

El segundo número se obtiene mediante:

```js
const secondNumber = args[1];
```

Luego se valida:

```js
if (!isValidNumber(secondNumber)) {
  return undefined;
}
```

Si ambos valores son válidos, se devuelve la suma:

```js
return firstNumber + secondNumber;
```

Ejemplo:

```js
addTogether(23.4, 30);
```

Operación:

```text
23.4 + 30 = 53.4
```

Resultado:

```js
53.4
```

## Segundo argumento inválido

La validación también se aplica al segundo argumento.

Por ejemplo:

```js
addTogether(2, "3");
```

El primer argumento es válido, pero el segundo es un string.

La comprobación:

```js
isValidNumber("3");
```

devuelve:

```js
false
```

Por eso el resultado es:

```js
undefined
```

Lo mismo sucede con:

```js
addTogether(5, undefined);
```

El segundo argumento no es un número válido, por lo que la función devuelve `undefined`.

## Un argumento y retorno de una función

Cuando `addTogether` recibe solamente un argumento, no puede realizar todavía la suma.

En ese caso, devuelve otra función:

```js
return function (secondNumber) {
  if (!isValidNumber(secondNumber)) {
    return undefined;
  }

  return firstNumber + secondNumber;
};
```

Esta función espera recibir el segundo número.

Por ejemplo:

```js
addTogether(5);
```

no devuelve todavía un resultado numérico. Devuelve una función.

Esa función puede guardarse en una variable:

```js
const sumFiveAnd = addTogether(5);
```

Después puede ejecutarse con el segundo número:

```js
sumFiveAnd(7);
```

Resultado:

```js
12
```

## Llamadas encadenadas

También es posible ejecutar las dos funciones de manera encadenada:

```js
addTogether(5)(7);
```

La primera llamada es:

```js
addTogether(5);
```

Esta devuelve una función.

La segunda parte:

```js
(7)
```

ejecuta esa función con `7` como segundo argumento.

La operación final es:

```text
5 + 7 = 12
```

Por lo tanto:

```js
addTogether(5)(7);
```

devuelve:

```js
12
```

## Closures

Un closure ocurre cuando una función interna conserva acceso a las variables del ámbito en el que fue creada.

En este código, la función interna utiliza:

```js
firstNumber
```

aunque `firstNumber` fue declarado en la función exterior:

```js
const firstNumber = args[0];
```

Ejemplo:

```js
const sumTwoAnd = addTogether(2);
```

La función devuelta recuerda que:

```js
firstNumber = 2
```

Más adelante, cuando se ejecuta:

```js
sumTwoAnd(3);
```

la función todavía puede acceder al valor `2` y realizar:

```text
2 + 3 = 5
```

Esto es posible gracias al closure.

## Validación en la función interna

El segundo argumento de una llamada encadenada también debe ser validado:

```js
if (!isValidNumber(secondNumber)) {
  return undefined;
}
```

Por ejemplo:

```js
addTogether(2)([3]);
```

Aunque el arreglo contiene el número `3`, su tipo de dato es `object`:

```js
typeof [3];
```

Resultado:

```js
"object"
```

Por lo tanto, no se considera un número válido y el resultado es:

```js
undefined
```

## Retorno anticipado

La solución utiliza retornos anticipados para detener la ejecución cuando encuentra un dato inválido:

```js
if (!isValidNumber(firstNumber)) {
  return undefined;
}
```

y:

```js
if (!isValidNumber(secondNumber)) {
  return undefined;
}
```

Esto evita ejecutar una suma con valores incorrectos y mantiene el flujo de la función fácil de seguir.

## Ejemplos

### Dos números enteros

```js
addTogether(2, 3);
```

Resultado:

```js
5
```

### Número decimal

```js
addTogether(23.4, 30);
```

Resultado:

```js
53.4
```

### Primer argumento inválido

```js
addTogether("2", 3);
```

Resultado:

```js
undefined
```

### Segundo argumento explícitamente indefinido

```js
addTogether(5, undefined);
```

Resultado:

```js
undefined
```

### Un string como único argumento

```js
addTogether(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
);
```

Resultado:

```js
undefined
```

### Un número como único argumento

```js
addTogether(5);
```

Resultado:

```text
Una función
```

### Dos llamadas consecutivas

```js
addTogether(5)(7);
```

Resultado:

```js
12
```

### Arreglo como segundo argumento

```js
addTogether(2)([3]);
```

Resultado:

```js
undefined
```

### String numérico como segundo argumento

```js
addTogether(2, "3");
```

Resultado:

```js
undefined
```

## Diferencia entre los dos modos de ejecución

### Dos argumentos simultáneos

```js
addTogether(2, 3);
```

Flujo:

```text
args = [2, 3]
firstNumber = 2
secondNumber = 3
resultado = 5
```

### Argumentos separados

```js
addTogether(2)(3);
```

Flujo:

```text
Primera llamada:
firstNumber = 2
se devuelve una función

Segunda llamada:
secondNumber = 3
resultado = 5
```

Ambas formas producen el mismo resultado.

## Resultados esperados

```js
addTogether(2, 3);
// 5

addTogether(23.4, 30);
// 53.4

addTogether("2", 3);
// undefined

addTogether(5, undefined);
// undefined

addTogether(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
);
// undefined

addTogether(5);
// function

addTogether(5)(7);
// 12

addTogether(2)([3]);
// undefined

addTogether(2, "3");
// undefined
```

## Complejidad

La función realiza una cantidad fija de comprobaciones y una única suma.

Por lo tanto, su complejidad temporal es:

```text
O(1)
```

No crea estructuras cuyo tamaño dependa de la cantidad de datos procesados.

Su complejidad espacial también es:

```text
O(1)
```

## 🇺🇸 English

This lab implements a function that adds two numbers supplied in two different ways.

Both arguments can be passed in the same call:

```js
addTogether(2, 3);
```

Result:

```js
5
```

The first number can also be passed separately. In that case, `addTogether` returns a function that waits for the second number:

```js
const sumTwoAnd = addTogether(2);

sumTwoAnd(3);
```

Result:

```js
5
```

If either argument is not a valid number, the function returns `undefined`.

### Features

- Defines a function named `addTogether`.
- Collects arguments using a rest parameter.
- Adds two numbers received in the same call.
- Returns a function when only one number is received.
- Supports chained function calls.
- Validates both arguments.
- Rejects strings, arrays and `undefined`.
- Uses `Number.isFinite()` to reject non-finite values.
- Returns `undefined` for invalid arguments.
- Uses a closure to remember the first number.
- Passes all ten laboratory tests.

### Concepts Practiced

- Functions.
- Rest parameters.
- Arguments.
- Arrays.
- Higher-order functions.
- Returning functions.
- Closures.
- Lexical scope.
- Type validation.
- `typeof`.
- `Number.isFinite()`.
- Conditional statements.
- Early returns.
- `undefined`.
- Array indexes.
- The `length` property.
- Chained function calls.
- The addition operator.

## Rest parameter

The function uses a rest parameter:

```js
function addTogether(...args) {
```

The rest syntax collects the supplied arguments in an array.

For example:

```js
addTogether(2, 3);
```

creates:

```js
args = [2, 3];
```

While:

```js
addTogether(5);
```

creates:

```js
args = [5];
```

The number of arguments can then be checked with:

```js
args.length
```

## Number validation

The helper function validates every supplied value:

```js
const isValidNumber = (value) =>
  typeof value === "number" && Number.isFinite(value);
```

The `typeof` check rejects values of other types:

```js
typeof "2" === "number";
// false
```

The `Number.isFinite()` check ensures that the numeric value is finite:

```js
Number.isFinite(5);
// true

Number.isFinite(Infinity);
// false

Number.isFinite(NaN);
// false
```

A value is accepted only when both conditions are true.

## Adding two arguments

When two arguments are supplied:

```js
if (args.length === 2) {
```

the function obtains and validates the second value:

```js
const secondNumber = args[1];

if (!isValidNumber(secondNumber)) {
  return undefined;
}
```

If both numbers are valid, their sum is returned:

```js
return firstNumber + secondNumber;
```

Example:

```js
addTogether(23.4, 30);
```

Result:

```js
53.4
```

## Returning a function

When only one number is supplied, the function returns another function:

```js
return function (secondNumber) {
  if (!isValidNumber(secondNumber)) {
    return undefined;
  }

  return firstNumber + secondNumber;
};
```

The returned function receives, validates and adds the second number.

Example:

```js
const sumFiveAnd = addTogether(5);

sumFiveAnd(7);
```

Result:

```js
12
```

## Closures

The returned function remembers the first number because it forms a closure.

When this statement runs:

```js
const sumTwoAnd = addTogether(2);
```

the returned function retains access to:

```js
firstNumber = 2
```

It can therefore use that value later:

```js
sumTwoAnd(3);
```

Result:

```js
5
```

## Chained calls

Because the first call returns a function, both calls can be written together:

```js
addTogether(5)(7);
```

The first call stores `5`, and the second call supplies `7`.

The final calculation is:

```text
5 + 7 = 12
```

## Invalid values

Strings are rejected even when they contain numeric characters:

```js
addTogether("2", 3);
// undefined
```

An explicitly supplied `undefined` value is rejected:

```js
addTogether(5, undefined);
// undefined
```

Arrays are also rejected:

```js
addTogether(2)([3]);
// undefined
```

The function does not perform automatic type conversion. Both arguments must already be valid numbers.

## Expected Results

```js
addTogether(2, 3);
// 5

addTogether(23.4, 30);
// 53.4

addTogether("2", 3);
// undefined

addTogether(5, undefined);
// undefined

addTogether(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
);
// undefined

addTogether(5);
// function

addTogether(5)(7);
// 12

addTogether(2)([3]);
// undefined

addTogether(2, "3");
// undefined
```

## Complexity

The function performs a constant number of validations and additions.

Its time complexity is:

```text
O(1)
```

Its additional space complexity is:

```text
O(1)
```

## 📁 Files

- `script.js`: Contains the optional-arguments sum function and console tests.
- `README.md`: Contains the bilingual documentation for the laboratory.