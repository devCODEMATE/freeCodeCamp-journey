# 🔀 Permutation Generator

## 🇪🇸 Español

Este es el ejercicio número **106** de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue construir una función que genere todas las permutaciones posibles de los caracteres de un string.

La solución utiliza **recursividad**, un prefijo acumulado y un `Set` para evitar generar permutaciones duplicadas cuando el string contiene caracteres repetidos.

### Ejemplos

```javascript
permuteString("far");
// ["far", "fra", "afr", "arf", "rfa", "raf"]

permuteString("fcc");
// genera únicamente permutaciones únicas

permuteString("p");
// ["p"]

permuteString("");
// [""]
```

### Funcionalidades

- Recibir un string como argumento.
- Generar todas sus permutaciones posibles.
- Construir cada combinación mediante recursividad.
- Mantener un prefijo con los caracteres ya seleccionados.
- Reducir el string restante en cada llamada.
- Guardar los resultados dentro de un array.
- Evitar permutaciones duplicadas cuando existen caracteres repetidos.
- Manejar strings de un solo carácter.
- Manejar correctamente un string vacío.

### Conceptos practicados

- JavaScript
- Functions
- Recursion
- Base Case
- Recursive Case
- Default Parameters
- Arrays
- `.push()`
- Strings
- `.slice()`
- String concatenation
- `Set`
- `new Set()`
- `.has()`
- `.add()`
- `for` loop
- `continue`
- Backtracking
- State tracking
- Duplicate prevention

### Lo que aprendí

- Crear un algoritmo recursivo para generar combinaciones.
- Usar un caso base para detectar cuándo una permutación está completa.
- Mantener un prefijo acumulado durante la recursión.
- Eliminar temporalmente un carácter del string mediante `.slice()`.
- Construir el string restante concatenando dos secciones.
- Utilizar un `Set` para evitar procesar el mismo carácter más de una vez en un mismo nivel.
- Comprender cómo funciona el backtracking.
- Mantener un array compartido de resultados entre las llamadas recursivas.
- Trabajar con parámetros por defecto.
- Resolver un problema combinatorio mediante recursividad.

### Cómo funciona

La función recibe tres parámetros:

```javascript
function permuteString(str, prefix = "", results = [])
```

- `str`: caracteres que todavía faltan utilizar.
- `prefix`: parte de la permutación que ya fue construida.
- `results`: array donde se almacenan las permutaciones completas.

El caso base ocurre cuando ya no quedan caracteres:

```javascript
if (str.length === 0) {
  results.push(prefix);
  return results;
}
```

En cada nivel se crea un `Set`:

```javascript
const used = new Set();
```

Este conjunto evita utilizar dos veces el mismo carácter en una misma posición de la permutación.

Luego se recorre el string:

```javascript
for (let i = 0; i < str.length; i++)
```

Se obtiene el carácter actual y, si ya fue utilizado en ese nivel, se salta:

```javascript
if (used.has(char)) {
  continue;
}
```

Después se crea un nuevo string sin el carácter seleccionado:

```javascript
const remaining =
  str.slice(0, i) + str.slice(i + 1);
```

Y se realiza una nueva llamada recursiva:

```javascript
permuteString(
  remaining,
  prefix + char,
  results
);
```

De esta manera, la función explora todas las posibles elecciones hasta construir cada permutación.

---

## 🇺🇸 English

This is exercise **106** in my freeCodeCamp JavaScript journey.

The goal was to build a function that generates every possible permutation of the characters in a string.

The solution uses **recursion**, an accumulated prefix, and a `Set` to prevent duplicate permutations when the input contains repeated characters.

### Examples

```javascript
permuteString("far");
// ["far", "fra", "afr", "arf", "rfa", "raf"]

permuteString("fcc");
// generates unique permutations only

permuteString("p");
// ["p"]

permuteString("");
// [""]
```

### Features

- Accept a string as input.
- Generate all possible character permutations.
- Build each combination recursively.
- Maintain a prefix containing selected characters.
- Reduce the remaining string on every call.
- Store completed permutations in an array.
- Prevent duplicate permutations when characters repeat.
- Handle single-character strings.
- Correctly handle an empty string.

### Concepts practiced

- JavaScript
- Functions
- Recursion
- Base Case
- Recursive Case
- Default Parameters
- Arrays
- `.push()`
- Strings
- `.slice()`
- String concatenation
- `Set`
- `new Set()`
- `.has()`
- `.add()`
- `for` loop
- `continue`
- Backtracking
- State tracking
- Duplicate prevention

### What I learned

- Build a recursive algorithm for generating combinations.
- Use a base case to detect when a permutation is complete.
- Maintain an accumulated prefix during recursion.
- Temporarily remove a character from a string with `.slice()`.
- Build the remaining string by concatenating two sections.
- Use a `Set` to avoid processing the same character more than once at the same recursive level.
- Understand how backtracking works.
- Share a results array between recursive calls.
- Work with default parameters.
- Solve a combinatorial problem with recursion.

### How it works

The function receives three parameters:

```javascript
function permuteString(str, prefix = "", results = [])
```

- `str`: characters that still need to be used.
- `prefix`: the part of the permutation already built.
- `results`: the array storing completed permutations.

The base case happens when no characters remain:

```javascript
if (str.length === 0) {
  results.push(prefix);
  return results;
}
```

A new `Set` is created at each recursive level:

```javascript
const used = new Set();
```

This prevents the same character from being used twice in the same position.

The function then loops through the current string:

```javascript
for (let i = 0; i < str.length; i++)
```

If the current character was already processed at that level, it is skipped:

```javascript
if (used.has(char)) {
  continue;
}
```

A new string is then created without the selected character:

```javascript
const remaining =
  str.slice(0, i) + str.slice(i + 1);
```

Finally, the function calls itself again:

```javascript
permuteString(
  remaining,
  prefix + char,
  results
);
```

This explores every possible character choice until all permutations have been generated.

---

## 📁 Files

- `script.js`