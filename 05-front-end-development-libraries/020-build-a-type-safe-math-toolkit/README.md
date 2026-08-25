# Build a Type-Safe Math Toolkit

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![TypeScript](https://img.shields.io/badge/TypeScript-Type_Safety-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 020
- **Title | Título:** Build a Type-Safe Math Toolkit
- **Type | Tipo:** Workshop
- **Topic | Tema:** TypeScript
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Workshop:** [Build a Type-Safe Math Toolkit](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-type-safe-math-toolkit)

---

## English

### Project Description

In this workshop, I built a small type-safe mathematical toolkit using TypeScript.

The toolkit contains three functions:

- `square()`: calculates the square of a number.
- `getAverage()`: calculates the average of an array of numbers.
- `raiseTo()`: raises a number to an optional exponent or squares it when the exponent is omitted.

The project demonstrates how TypeScript can define parameter types, return types, typed arrays, and optional parameters.

### Final TypeScript Code

```ts
function square(num: number) {
  return num * num;
}

const result = square(5);

console.log(result);

function getAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  return sum / numbers.length;
}

const avgResult = getAverage([2, 14, 26, 8]);

console.log(avgResult);

function raiseTo(base: number, exponent?: number): number {
  if (exponent !== undefined) {
    return base ** exponent;
  }

  return base ** 2;
}

const raisedResult = raiseTo(3);

console.log(raisedResult);
```

### TypeScript Configuration

The project includes the original `tsconfig.json` provided by freeCodeCamp:

```json
{
  "compilerOptions": {
    "noCheck": true
  }
}
```

`tsconfig.json` is the TypeScript configuration file. It tells the compiler how the `.ts` files in the project should be processed.

The following option is used in this workshop:

```json
"noCheck": true
```

This disables full type checking during compilation. It is part of the original freeCodeCamp configuration, so it is preserved without changes in this repository.

### 1. Typed Function Parameters

The `square()` function accepts a parameter called `num`:

```ts
function square(num: number) {
  return num * num;
}
```

The annotation `num: number` means that the function expects a numeric argument.

A valid call is:

```ts
square(5);
```

Passing a string would not match the declared parameter type:

```ts
square("5");
```

### 2. Type Inference

The `square()` function does not explicitly declare a return type:

```ts
function square(num: number) {
  return num * num;
}
```

TypeScript analyzes the returned expression and infers that the function returns a `number`.

This inferred type works because multiplying two numbers produces another number.

### 3. Explicit Return Types

The `getAverage()` function explicitly declares its return type:

```ts
function getAverage(numbers: number[]): number {
```

The final `: number` means that the function must return a number.

Its complete structure is:

```ts
function getAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  return sum / numbers.length;
}
```

### 4. Typed Arrays

The parameter used by `getAverage()` has this type:

```ts
numbers: number[]
```

`number[]` means that the argument must be an array containing numbers.

A valid call is:

```ts
getAverage([2, 14, 26, 8]);
```

An array containing text would not match the declared type:

```ts
getAverage([2, "14", 26, 8]);
```

### 5. Calculating a Sum with `reduce()`

The function uses `reduce()` to add all the array values:

```ts
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

In this expression:

- `acc` is the accumulated total.
- `n` is the current number.
- `0` is the initial accumulator value.
- `acc + n` adds each number to the total.

For this array:

```ts
[2, 14, 26, 8]
```

The sum is:

```text
50
```

The function then divides the sum by the number of elements:

```ts
return sum / numbers.length;
```

The resulting average is:

```text
12.5
```

### 6. Optional Parameters

The `raiseTo()` function has an optional parameter:

```ts
function raiseTo(base: number, exponent?: number): number {
```

The question mark in:

```ts
exponent?: number
```

means that the `exponent` argument can be provided or omitted.

Both calls are valid:

```ts
raiseTo(3);
raiseTo(3, 4);
```

### 7. Checking an Optional Value

Before using the optional parameter, the function checks whether it was provided:

```ts
if (exponent !== undefined) {
  return base ** exponent;
}
```

If `exponent` is not `undefined`, the function raises `base` to that exponent.

For example:

```ts
raiseTo(3, 4);
```

This calculates:

```text
3⁴ = 81
```

### 8. Default Behavior

If no exponent is provided, the function squares the base:

```ts
return base ** 2;
```

The workshop calls:

```ts
raiseTo(3);
```

Because no exponent is supplied, the result is:

```text
3² = 9
```

### 9. Exponentiation Operator

The exponentiation operator is written with two asterisks:

```ts
**
```

For example:

```ts
base ** exponent
```

It raises the value on the left to the power specified on the right.

```ts
3 ** 2;
```

The result is:

```text
9
```

### 10. Console Output

The results are displayed using `console.log()`:

```ts
console.log(result);
console.log(avgResult);
console.log(raisedResult);
```

The expected output is:

```text
25
12.5
9
```

### What I Learned

In this workshop, I learned:

- How to add type annotations to function parameters.
- How TypeScript infers return types.
- How to declare explicit function return types.
- How to work with arrays typed as `number[]`.
- How to calculate a total using `reduce()`.
- How to calculate the average of an array.
- How to declare optional parameters using `?`.
- How to check whether an optional value is `undefined`.
- How to use the exponentiation operator `**`.
- How to configure a TypeScript project with `tsconfig.json`.
- How to inspect results with `console.log()`.

---

## Español

### Descripción del proyecto

En este workshop construí un pequeño conjunto de herramientas matemáticas con seguridad de tipos utilizando TypeScript.

El toolkit contiene tres funciones:

- `square()`: calcula el cuadrado de un número.
- `getAverage()`: calcula el promedio de un array de números.
- `raiseTo()`: eleva un número a un exponente opcional o lo eleva al cuadrado cuando no se proporciona el exponente.

El proyecto demuestra cómo TypeScript permite definir tipos para parámetros, valores de retorno, arrays y parámetros opcionales.

### Código final de TypeScript

```ts
function square(num: number) {
  return num * num;
}

const result = square(5);

console.log(result);

function getAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  return sum / numbers.length;
}

const avgResult = getAverage([2, 14, 26, 8]);

console.log(avgResult);

function raiseTo(base: number, exponent?: number): number {
  if (exponent !== undefined) {
    return base ** exponent;
  }

  return base ** 2;
}

const raisedResult = raiseTo(3);

console.log(raisedResult);
```

### Configuración de TypeScript

El proyecto incluye el archivo `tsconfig.json` original proporcionado por freeCodeCamp:

```json
{
  "compilerOptions": {
    "noCheck": true
  }
}
```

`tsconfig.json` es el archivo de configuración de TypeScript. Le indica al compilador cómo debe procesar los archivos `.ts` del proyecto.

Este workshop utiliza:

```json
"noCheck": true
```

Esta opción desactiva la comprobación completa de tipos durante la compilación. Forma parte de la configuración original de freeCodeCamp, por lo que se conserva sin modificaciones.

### 1. Parámetros tipados

La función `square()` recibe un parámetro llamado `num`:

```ts
function square(num: number) {
  return num * num;
}
```

La anotación `num: number` indica que la función espera recibir un número.

Esta llamada es válida:

```ts
square(5);
```

En cambio, un texto no coincide con el tipo declarado:

```ts
square("5");
```

### 2. Inferencia de tipos

La función `square()` no declara explícitamente su tipo de retorno:

```ts
function square(num: number) {
  return num * num;
}
```

TypeScript analiza la expresión retornada y deduce que la función devuelve un `number`.

Esto se conoce como inferencia de tipos.

### 3. Tipos de retorno explícitos

La función `getAverage()` declara explícitamente su tipo de retorno:

```ts
function getAverage(numbers: number[]): number {
```

El último `: number` significa que la función debe devolver un número.

### 4. Arrays tipados

El parámetro de `getAverage()` utiliza el siguiente tipo:

```ts
numbers: number[]
```

`number[]` significa que el argumento debe ser un array compuesto por números.

Esta llamada es válida:

```ts
getAverage([2, 14, 26, 8]);
```

Este array no sería compatible:

```ts
getAverage([2, "14", 26, 8]);
```

El valor `"14"` es un texto y no un número.

### 5. Cálculo de la suma con `reduce()`

La función utiliza `reduce()` para sumar los números:

```ts
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

En esta expresión:

- `acc` guarda el total acumulado.
- `n` representa el número actual.
- `0` es el valor inicial del acumulador.
- `acc + n` agrega el número actual al total.

El array:

```ts
[2, 14, 26, 8]
```

produce la suma:

```text
50
```

Después, la suma se divide por la cantidad de elementos:

```ts
return sum / numbers.length;
```

El resultado es:

```text
12.5
```

### 6. Parámetros opcionales

La función `raiseTo()` contiene un parámetro opcional:

```ts
function raiseTo(base: number, exponent?: number): number {
```

El signo de pregunta en:

```ts
exponent?: number
```

indica que el argumento puede ser proporcionado o puede ser omitido.

Estas dos llamadas son válidas:

```ts
raiseTo(3);
raiseTo(3, 4);
```

### 7. Comprobación de un valor opcional

Antes de utilizar `exponent`, la función comprueba que no sea `undefined`:

```ts
if (exponent !== undefined) {
  return base ** exponent;
}
```

Si el exponente fue proporcionado, la función realiza la potencia correspondiente.

Por ejemplo:

```ts
raiseTo(3, 4);
```

produce:

```text
81
```

### 8. Comportamiento predeterminado

Si no se proporciona un exponente, la función eleva la base al cuadrado:

```ts
return base ** 2;
```

La llamada utilizada en el workshop es:

```ts
raiseTo(3);
```

El resultado es:

```text
9
```

### 9. Operador de exponenciación

El operador de exponenciación se escribe utilizando dos asteriscos:

```ts
**
```

Por ejemplo:

```ts
3 ** 2;
```

Esto representa tres elevado al cuadrado y produce:

```text
9
```

### 10. Salida en consola

Los resultados se muestran mediante:

```ts
console.log(result);
console.log(avgResult);
console.log(raisedResult);
```

La salida esperada es:

```text
25
12.5
9
```

### Lo que aprendí

En este workshop aprendí:

- A agregar anotaciones de tipo a los parámetros.
- Cómo TypeScript infiere tipos de retorno.
- A declarar tipos de retorno explícitos.
- A trabajar con arrays `number[]`.
- A sumar valores mediante `reduce()`.
- A calcular el promedio de un array.
- A declarar parámetros opcionales mediante `?`.
- A comprobar si un valor opcional es `undefined`.
- A utilizar el operador de exponenciación `**`.
- A configurar TypeScript mediante `tsconfig.json`.
- A mostrar resultados con `console.log()`.

La enseñanza principal es que TypeScript permite definir claramente qué datos acepta y devuelve cada función, ayudando a prevenir llamadas incorrectas.

---

## Project Files | Archivos del proyecto

- `index.ts`: contains the mathematical functions and their type annotations.
- `tsconfig.json`: contains the TypeScript configuration provided by freeCodeCamp.
- `README.md`: documents the objective, code, and concepts learned.

---

- `index.ts`: contiene las funciones matemáticas y sus anotaciones de tipo.
- `tsconfig.json`: contiene la configuración de TypeScript proporcionada por freeCodeCamp.
- `README.md`: documenta el objetivo, el código y los conceptos aprendidos.

## Project Structure | Estructura del proyecto

```text
020-build-a-type-safe-math-toolkit/
├── README.md
├── index.ts
└── tsconfig.json
```

## Technologies | Tecnologías

- TypeScript
- Typed functions / Funciones tipadas
- Typed arrays / Arrays tipados
- Optional parameters / Parámetros opcionales
- Type inference / Inferencia de tipos
- `Array.prototype.reduce()`
- `tsconfig.json`

## Running the Project | Cómo ejecutar el proyecto

The TypeScript source code is stored in `index.ts`.

El código fuente de TypeScript se encuentra en `index.ts`.

To compile the project with its configuration:

```bash
tsc
```

After compiling, the generated JavaScript can be executed with Node.js:

```bash
node index.js
```

The code can also be run inside the freeCodeCamp workshop environment.

El código también se puede ejecutar dentro del entorno del workshop de freeCodeCamp.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.