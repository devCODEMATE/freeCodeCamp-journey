# 📚 Implement a Stack

## 🇪🇸 Español

Este es el ejercicio número **109** de mi recorrido de **JavaScript Algorithms and Data Structures** en **freeCodeCamp**.

El objetivo fue implementar una estructura de datos **Stack** utilizando funciones y un array interno para almacenar los elementos.

Una pila sigue el principio **LIFO (Last-In, First-Out)**, lo que significa que el último elemento que entra es el primero que sale.

---

## 🚀 Funcionalidades

- Inicializar una pila vacía.
- Agregar elementos al tope de la pila.
- Eliminar y devolver el elemento superior.
- Consultar el elemento superior sin eliminarlo.
- Verificar si la pila está vacía.
- Vaciar completamente la pila.
- Manejar correctamente valores falsy como `0`, `false`, `""`, `null` o `undefined`.

---

## 📂 Estructura inicial

La pila se inicializa con:

```javascript
{
  collection: []
}
```

La propiedad `collection` contiene todos los elementos de la pila.

Ejemplo:

```text
Top
 ↓
[10, 20, 30]
         ↑
   último en entrar
```

En una estructura LIFO:

```text
push(10)
push(20)
push(30)

pop() → 30
pop() → 20
pop() → 10
```

---

## 📚 Conceptos practicados

- JavaScript
- Data Structures
- Stack
- LIFO
- Functions
- Objects
- Arrays
- `.push()`
- `.pop()`
- Array indexing
- `.length`
- Empty state validation
- State management
- Return values
- Falsy values

---

## 🎯 Lo que aprendí

- Comprender cómo funciona una estructura de datos Stack.
- Aplicar el principio **Last-In, First-Out**.
- Utilizar un array como almacenamiento interno.
- Agregar elementos con `.push()`.
- Eliminar y devolver el último elemento con `.pop()`.
- Consultar el elemento superior mediante su índice.
- Determinar si una pila está vacía utilizando `.length`.
- Reiniciar completamente el estado de una pila.
- Aprovechar el comportamiento de `.pop()` cuando un array está vacío.
- Manejar correctamente valores falsy sin confundirlos con una pila vacía.

---

## ⚙️ `initStack()`

La función `initStack()` crea una nueva pila:

```javascript
function initStack() {
  return {
    collection: [],
  };
}
```

Cada llamada devuelve un objeto independiente con un array vacío.

---

## ⚙️ `push()`

`push()` agrega un elemento al tope de la pila:

```javascript
function push(stack, element) {
  stack.collection.push(element);
}
```

Por ejemplo:

```javascript
const stack = initStack();

push(stack, 10);
push(stack, 20);
push(stack, 30);
```

La colección queda así:

```javascript
[10, 20, 30]
```

El elemento superior es `30`.

---

## ⚙️ `pop()`

`pop()` elimina y devuelve el elemento superior:

```javascript
function pop(stack) {
  return stack.collection.pop();
}
```

Ejemplo:

```javascript
pop(stack);
// 30
```

Luego la pila queda:

```javascript
[10, 20]
```

Si la pila está vacía, `.pop()` devuelve:

```javascript
undefined
```

---

## ⚙️ `peek()`

`peek()` devuelve el elemento superior sin eliminarlo:

```javascript
function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}
```

Ejemplo:

```javascript
peek(stack);
// 20
```

La colección permanece sin cambios.

Si la pila está vacía, el índice calculado no existe y JavaScript devuelve:

```javascript
undefined
```

---

## ⚙️ `isEmpty()`

`isEmpty()` verifica si la colección contiene elementos:

```javascript
function isEmpty(stack) {
  return stack.collection.length === 0;
}
```

Devuelve:

```javascript
true
```

cuando la pila está vacía, y:

```javascript
false
```

cuando contiene uno o más elementos.

---

## ⚙️ `clear()`

`clear()` elimina todos los elementos:

```javascript
function clear(stack) {
  stack.collection = [];
}
```

Después de ejecutarla:

```javascript
{
  collection: []
}
```

---

## ✅ Tests

Los **16 tests de freeCodeCamp** fueron superados.

Se verificaron:

- `push()`
- `pop()`
- `peek()`
- `isEmpty()`
- `clear()`
- manejo de pilas vacías
- manejo correcto de valores falsy

---

## 🇺🇸 English

This is exercise **109** in my **JavaScript Algorithms and Data Structures** journey on **freeCodeCamp**.

The goal was to implement a **Stack** data structure using functions and an internal array to store its elements.

A stack follows the **LIFO (Last-In, First-Out)** principle, meaning the last element added is the first one removed.

---

## 🚀 Features

- Initialize an empty stack.
- Add elements to the top of the stack.
- Remove and return the top element.
- Inspect the top element without removing it.
- Check whether the stack is empty.
- Clear the entire stack.
- Correctly handle falsy values such as `0`, `false`, `""`, `null`, or `undefined`.

---

## 📂 Initial Structure

The stack is initialized as:

```javascript
{
  collection: []
}
```

The `collection` property stores all stack elements.

Example:

```text
Top
 ↓
[10, 20, 30]
         ↑
     last added
```

With LIFO behavior:

```text
push(10)
push(20)
push(30)

pop() → 30
pop() → 20
pop() → 10
```

---

## 📚 Concepts Practiced

- JavaScript
- Data Structures
- Stack
- LIFO
- Functions
- Objects
- Arrays
- `.push()`
- `.pop()`
- Array indexing
- `.length`
- Empty state validation
- State management
- Return values
- Falsy values

---

## 🎯 What I Learned

- Understand how a Stack data structure works.
- Apply the **Last-In, First-Out** principle.
- Use an array as internal storage.
- Add elements with `.push()`.
- Remove and return the last element with `.pop()`.
- Read the top element using array indexing.
- Determine whether a stack is empty using `.length`.
- Completely reset the state of a stack.
- Use the built-in behavior of `.pop()` on an empty array.
- Correctly handle falsy values without confusing them with an empty stack.

---

## ⚙️ `initStack()`

`initStack()` creates a new stack:

```javascript
function initStack() {
  return {
    collection: [],
  };
}
```

Each call returns an independent object containing an empty array.

---

## ⚙️ `push()`

`push()` adds an element to the top of the stack:

```javascript
function push(stack, element) {
  stack.collection.push(element);
}
```

Example:

```javascript
const stack = initStack();

push(stack, 10);
push(stack, 20);
push(stack, 30);
```

The collection becomes:

```javascript
[10, 20, 30]
```

The top element is `30`.

---

## ⚙️ `pop()`

`pop()` removes and returns the top element:

```javascript
function pop(stack) {
  return stack.collection.pop();
}
```

Example:

```javascript
pop(stack);
// 30
```

The stack becomes:

```javascript
[10, 20]
```

If the stack is empty, `.pop()` returns:

```javascript
undefined
```

---

## ⚙️ `peek()`

`peek()` returns the top element without removing it:

```javascript
function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}
```

Example:

```javascript
peek(stack);
// 20
```

The collection remains unchanged.

If the stack is empty, JavaScript returns:

```javascript
undefined
```

---

## ⚙️ `isEmpty()`

`isEmpty()` checks whether the stack contains elements:

```javascript
function isEmpty(stack) {
  return stack.collection.length === 0;
}
```

It returns:

```javascript
true
```

when the stack is empty, and:

```javascript
false
```

when it contains one or more elements.

---

## ⚙️ `clear()`

`clear()` removes every element from the stack:

```javascript
function clear(stack) {
  stack.collection = [];
}
```

After running it:

```javascript
{
  collection: []
}
```

---

## ✅ Tests

All **16 freeCodeCamp tests** passed.

The tests covered:

- `push()`
- `pop()`
- `peek()`
- `isEmpty()`
- `clear()`
- empty stack behavior
- correct handling of falsy values

---

## 📁 Files

```text
109-implement-stack/
│
├── script.js
└── README.md
```