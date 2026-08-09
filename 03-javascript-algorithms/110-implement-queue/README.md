# 🚶 Implement a Queue

## 🇪🇸 Español

Este es el ejercicio número **110** de mi recorrido de **JavaScript Algorithms and Data Structures** en **freeCodeCamp**.

El objetivo fue implementar una estructura de datos **Queue** utilizando funciones y un array interno.

Una cola sigue el principio **FIFO (First-In, First-Out)**, lo que significa que el primer elemento que entra es también el primero que sale.

---

## 🚀 Funcionalidades

- Inicializar una cola vacía.
- Mostrar el contenido actual de la cola.
- Agregar elementos al final de la cola.
- Eliminar y devolver el primer elemento.
- Consultar el elemento que se encuentra al frente sin eliminarlo.
- Obtener la cantidad de elementos almacenados.
- Verificar si la cola está vacía.
- Mantener instancias de colas independientes entre sí.
- Continuar agregando elementos correctamente después de realizar eliminaciones.

---

## 📂 Estructura inicial

La cola se inicializa con:

```javascript
{
  collection: []
}
```

La propiedad `collection` almacena los elementos.

Ejemplo:

```text
Front                  Back
  ↓                      ↓
[10, 20, 30, 40]
```

En una estructura FIFO:

```text
enqueue(10)
enqueue(20)
enqueue(30)

dequeue() → 10
dequeue() → 20
dequeue() → 30
```

El primer elemento agregado es el primero que se elimina.

---

## 📚 Conceptos practicados

- JavaScript
- Data Structures
- Queue
- FIFO
- Functions
- Objects
- Arrays
- `.push()`
- `.shift()`
- Array indexing
- `.length`
- State management
- Return values
- Empty state validation
- Independent instances

---

## 🎯 Lo que aprendí

- Comprender cómo funciona una estructura de datos Queue.
- Aplicar el principio **First-In, First-Out**.
- Utilizar un array como almacenamiento interno.
- Agregar elementos al final con `.push()`.
- Eliminar el primer elemento con `.shift()`.
- Consultar el frente de la cola mediante el índice `0`.
- Obtener la cantidad de elementos con `.length`.
- Verificar si una cola está vacía.
- Comprender que cada llamada a `initQueue()` crea una cola independiente.
- Manejar correctamente una cola después de múltiples operaciones de entrada y salida.
- Aprovechar el comportamiento de `.shift()` en arrays vacíos, que devuelve `undefined`.

---

## ⚙️ `initQueue()`

`initQueue()` crea una nueva cola:

```javascript
function initQueue() {
  return {
    collection: []
  };
}
```

Cada llamada devuelve un objeto independiente con su propia colección.

Ejemplo:

```javascript
const firstQueue = initQueue();
const secondQueue = initQueue();
```

Ambas colas mantienen estados separados.

---

## ⚙️ `print()`

La función `print()` muestra el contenido actual de la cola:

```javascript
function print(queue) {
  console.log(queue.collection);
}
```

Por ejemplo:

```javascript
enqueue(queue, 10);
enqueue(queue, 20);

print(queue);
```

Resultado:

```javascript
[10, 20]
```

---

## ⚙️ `enqueue()`

`enqueue()` agrega un elemento al final de la cola:

```javascript
function enqueue(queue, element) {
  queue.collection.push(element);
}
```

Ejemplo:

```javascript
enqueue(queue, 10);
enqueue(queue, 20);
enqueue(queue, 30);
```

La colección queda:

```javascript
[10, 20, 30]
```

---

## ⚙️ `dequeue()`

`dequeue()` elimina y devuelve el primer elemento:

```javascript
function dequeue(queue) {
  return queue.collection.shift();
}
```

Ejemplo:

```javascript
dequeue(queue);
// 10
```

Después:

```javascript
[20, 30]
```

Si la cola está vacía, `.shift()` devuelve:

```javascript
undefined
```

---

## ⚙️ `front()`

`front()` devuelve el primer elemento sin eliminarlo:

```javascript
function front(queue) {
  return queue.collection[0];
}
```

Ejemplo:

```javascript
front(queue);
// 20
```

La cola permanece sin cambios:

```javascript
[20, 30]
```

Si no hay elementos, devuelve:

```javascript
undefined
```

---

## ⚙️ `size()`

`size()` devuelve la cantidad de elementos:

```javascript
function size(queue) {
  return queue.collection.length;
}
```

Ejemplo:

```javascript
size(queue);
// 2
```

---

## ⚙️ `isEmpty()`

`isEmpty()` verifica si la cola contiene elementos:

```javascript
function isEmpty(queue) {
  return queue.collection.length === 0;
}
```

Devuelve:

```javascript
true
```

si la cola está vacía.

Devuelve:

```javascript
false
```

si contiene uno o más elementos.

---

## ✅ Tests

Los **16 tests de freeCodeCamp** fueron superados.

Se verificaron:

- `enqueue()`
- `dequeue()`
- `front()`
- `size()`
- `isEmpty()`
- comportamiento con colas vacías
- operaciones después de múltiples `dequeue()`
- independencia entre distintas instancias de Queue

---

## 🇺🇸 English

This is exercise **110** in my **JavaScript Algorithms and Data Structures** journey on **freeCodeCamp**.

The goal was to implement a **Queue** data structure using functions and an internal array.

A queue follows the **FIFO (First-In, First-Out)** principle, meaning the first element added is also the first element removed.

---

## 🚀 Features

- Initialize an empty queue.
- Print the current queue contents.
- Add elements to the back of the queue.
- Remove and return the front element.
- Inspect the front element without removing it.
- Get the current number of elements.
- Check whether the queue is empty.
- Keep different queue instances independent.
- Continue adding elements correctly after dequeuing items.

---

## 📂 Initial Structure

The queue starts as:

```javascript
{
  collection: []
}
```

The `collection` property stores all elements.

Example:

```text
Front                  Back
  ↓                      ↓
[10, 20, 30, 40]
```

With FIFO behavior:

```text
enqueue(10)
enqueue(20)
enqueue(30)

dequeue() → 10
dequeue() → 20
dequeue() → 30
```

The first element added is the first one removed.

---

## 📚 Concepts Practiced

- JavaScript
- Data Structures
- Queue
- FIFO
- Functions
- Objects
- Arrays
- `.push()`
- `.shift()`
- Array indexing
- `.length`
- State management
- Return values
- Empty state validation
- Independent instances

---

## 🎯 What I Learned

- Understand how a Queue data structure works.
- Apply the **First-In, First-Out** principle.
- Use an array as internal storage.
- Add elements to the back with `.push()`.
- Remove the first element with `.shift()`.
- Inspect the front of the queue using index `0`.
- Get the number of elements using `.length`.
- Check whether a queue is empty.
- Understand that every call to `initQueue()` creates an independent queue.
- Correctly manage a queue after multiple enqueue and dequeue operations.
- Use the built-in behavior of `.shift()` on an empty array, which returns `undefined`.

---

## ⚙️ `initQueue()`

`initQueue()` creates a new queue:

```javascript
function initQueue() {
  return {
    collection: []
  };
}
```

Each call returns a separate queue object with its own collection.

Example:

```javascript
const firstQueue = initQueue();
const secondQueue = initQueue();
```

Both queues keep independent state.

---

## ⚙️ `print()`

`print()` displays the current queue contents:

```javascript
function print(queue) {
  console.log(queue.collection);
}
```

Example:

```javascript
enqueue(queue, 10);
enqueue(queue, 20);

print(queue);
```

Result:

```javascript
[10, 20]
```

---

## ⚙️ `enqueue()`

`enqueue()` adds an element to the back of the queue:

```javascript
function enqueue(queue, element) {
  queue.collection.push(element);
}
```

Example:

```javascript
enqueue(queue, 10);
enqueue(queue, 20);
enqueue(queue, 30);
```

The collection becomes:

```javascript
[10, 20, 30]
```

---

## ⚙️ `dequeue()`

`dequeue()` removes and returns the front element:

```javascript
function dequeue(queue) {
  return queue.collection.shift();
}
```

Example:

```javascript
dequeue(queue);
// 10
```

The queue becomes:

```javascript
[20, 30]
```

If the queue is empty, `.shift()` returns:

```javascript
undefined
```

---

## ⚙️ `front()`

`front()` returns the front element without removing it:

```javascript
function front(queue) {
  return queue.collection[0];
}
```

Example:

```javascript
front(queue);
// 20
```

The queue remains:

```javascript
[20, 30]
```

If the queue is empty, it returns:

```javascript
undefined
```

---

## ⚙️ `size()`

`size()` returns the current number of elements:

```javascript
function size(queue) {
  return queue.collection.length;
}
```

Example:

```javascript
size(queue);
// 2
```

---

## ⚙️ `isEmpty()`

`isEmpty()` checks whether the queue contains any elements:

```javascript
function isEmpty(queue) {
  return queue.collection.length === 0;
}
```

It returns:

```javascript
true
```

when the queue is empty.

It returns:

```javascript
false
```

when the queue contains one or more elements.

---

## ✅ Tests

All **16 freeCodeCamp tests** passed.

The tests covered:

- `enqueue()`
- `dequeue()`
- `front()`
- `size()`
- `isEmpty()`
- empty queue behavior
- queue behavior after multiple dequeues
- independence between different Queue instances

---

## 📁 Files

```text
110-implement-queue/
│
├── script.js
└── README.md
```