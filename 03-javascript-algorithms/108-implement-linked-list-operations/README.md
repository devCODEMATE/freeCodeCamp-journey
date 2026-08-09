# 🔗 Implement Linked List Operations

## 🇪🇸 Español

Este es el ejercicio número **108** de mi recorrido de **JavaScript Algorithms and Data Structures** en **freeCodeCamp**.

El objetivo fue ampliar una implementación de una **lista enlazada simple (Singly Linked List)** agregando operaciones de búsqueda, acceso por índice, inserción, eliminación por posición y limpieza completa de la estructura.

Este ejercicio continúa el trabajo realizado en el ejercicio anterior sobre Linked Lists, profundizando en cómo recorrer y modificar nodos utilizando referencias.

---

## 🚀 Funcionalidades

- Inicializar una lista enlazada vacía.
- Verificar si la lista está vacía.
- Agregar elementos al final de la lista.
- Eliminar elementos por valor.
- Verificar si un elemento existe en la lista.
- Obtener un elemento mediante su índice.
- Insertar un elemento en una posición específica.
- Eliminar un elemento mediante su índice.
- Limpiar completamente la lista.
- Mantener actualizado el valor de `length`.
- Manejar índices fuera de rango.

---

## 📂 Estructura de la lista

La lista se inicializa con:

```javascript
{
  head: null,
  length: 0
}
```

Cada nodo mantiene esta estructura:

```javascript
{
  element: value,
  next: null
}
```

Por ejemplo:

```text
head
 ↓
10 → 20 → 30 → null
```

La propiedad `head` apunta al primer nodo y cada propiedad `next` apunta al siguiente.

---

## 📚 Conceptos practicados

- JavaScript
- Data Structures
- Linked Lists
- Singly Linked List
- Nodes
- References
- Traversal
- Objects
- Functions
- `null`
- `while` loops
- Conditionals
- Index validation
- Boundary checking
- Search operations
- Insert operations
- Delete operations
- State management
- Head manipulation
- Length tracking

---

## 🎯 Lo que aprendí

- Recorrer una linked list utilizando referencias.
- Buscar un valor sin utilizar arrays.
- Acceder a un nodo según su posición.
- Validar índices antes de modificar la estructura.
- Insertar nodos al inicio, en el medio o al final.
- Eliminar nodos según su índice.
- Modificar correctamente la referencia `head`.
- Reconectar nodos después de una inserción o eliminación.
- Mantener sincronizado el valor de `length`.
- Reiniciar completamente una estructura de datos.
- Comprender mejor cómo funcionan las estructuras enlazadas internamente.

---

## ⚙️ `contains()`

La función `contains()` recorre la lista buscando un elemento específico:

```javascript
function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}
```

Devuelve:

```text
true
```

si encuentra el elemento, o:

```text
false
```

si llega al final de la lista sin encontrarlo.

---

## ⚙️ `getAt()`

`getAt()` permite recuperar un elemento según su índice.

Primero valida que el índice sea válido:

```javascript
if (index < 0 || index >= list.length) {
  return undefined;
}
```

Luego recorre la lista hasta alcanzar la posición indicada.

```javascript
let current = list.head;
let currentIndex = 0;

while (currentIndex < index) {
  current = current.next;
  currentIndex++;
}
```

Finalmente devuelve:

```javascript
return current.element;
```

---

## ⚙️ `insertAt()`

`insertAt()` permite insertar un nuevo nodo en una posición específica.

Primero valida el índice:

```javascript
if (index < 0 || index > list.length) {
  return;
}
```

Si el índice es `0`, el nuevo nodo pasa a ser el nuevo `head`:

```javascript
node.next = list.head;
list.head = node;
```

Para otras posiciones, se busca el nodo anterior:

```javascript
while (currentIndex < index - 1) {
  previous = previous.next;
  currentIndex++;
}
```

Después se conectan las referencias:

```javascript
node.next = previous.next;
previous.next = node;
```

---

## ⚙️ `removeAt()`

`removeAt()` elimina un nodo según su posición.

Primero se valida que el índice exista:

```javascript
if (index < 0 || index >= list.length) {
  return;
}
```

Si se elimina el primer nodo:

```javascript
list.head = list.head.next;
```

Para otras posiciones, se encuentra el nodo anterior y se salta el nodo que debe eliminarse:

```javascript
previous.next = previous.next.next;
```

Finalmente se reduce:

```javascript
list.length--;
```

---

## ⚙️ `clear()`

La función `clear()` reinicia completamente la lista:

```javascript
function clear(list) {
  list.head = null;
  list.length = 0;
}
```

Después de ejecutarla:

```javascript
{
  head: null,
  length: 0
}
```

---

## 🇺🇸 English

This is exercise **108** in my **JavaScript Algorithms and Data Structures** journey on **freeCodeCamp**.

The goal was to expand a **Singly Linked List** implementation by adding search, index access, insertion, index-based removal, and clear operations.

This exercise continues the Linked List work from the previous exercise and goes deeper into traversing and modifying nodes through references.

---

## 🚀 Features

- Initialize an empty linked list.
- Check whether the list is empty.
- Add elements to the end of the list.
- Remove elements by value.
- Check whether an element exists.
- Retrieve an element by index.
- Insert an element at a specific position.
- Remove an element by index.
- Clear the entire list.
- Keep `length` synchronized.
- Handle out-of-bounds indexes.

---

## 📂 List Structure

The list starts with:

```javascript
{
  head: null,
  length: 0
}
```

Each node has this structure:

```javascript
{
  element: value,
  next: null
}
```

Example:

```text
head
 ↓
10 → 20 → 30 → null
```

The `head` property points to the first node, while each `next` property points to the following node.

---

## 📚 Concepts Practiced

- JavaScript
- Data Structures
- Linked Lists
- Singly Linked List
- Nodes
- References
- Traversal
- Objects
- Functions
- `null`
- `while` loops
- Conditionals
- Index validation
- Boundary checking
- Search operations
- Insert operations
- Delete operations
- State management
- Head manipulation
- Length tracking

---

## 🎯 What I Learned

- Traverse a linked list using references.
- Search for values without using arrays.
- Access a node based on its position.
- Validate indexes before modifying the structure.
- Insert nodes at the beginning, middle, or end.
- Remove nodes by index.
- Correctly update the `head` reference.
- Reconnect nodes after insertions and deletions.
- Keep the `length` property synchronized.
- Completely reset a data structure.
- Better understand how linked data structures work internally.

---

## ⚙️ `contains()`

The `contains()` function traverses the list looking for a specific element:

```javascript
function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}
```

It returns:

```text
true
```

when the value is found, or:

```text
false
```

when the end of the list is reached.

---

## ⚙️ `getAt()`

`getAt()` retrieves an element by index.

The index is validated first:

```javascript
if (index < 0 || index >= list.length) {
  return undefined;
}
```

Then the list is traversed until the requested position is reached:

```javascript
let current = list.head;
let currentIndex = 0;

while (currentIndex < index) {
  current = current.next;
  currentIndex++;
}
```

The element is then returned:

```javascript
return current.element;
```

---

## ⚙️ `insertAt()`

`insertAt()` inserts a node at a specific position.

First, the index is validated:

```javascript
if (index < 0 || index > list.length) {
  return;
}
```

If the index is `0`, the new node becomes the new head:

```javascript
node.next = list.head;
list.head = node;
```

For other positions, the previous node is located:

```javascript
while (currentIndex < index - 1) {
  previous = previous.next;
  currentIndex++;
}
```

Then the references are connected:

```javascript
node.next = previous.next;
previous.next = node;
```

---

## ⚙️ `removeAt()`

`removeAt()` removes a node by position.

First, the index is validated:

```javascript
if (index < 0 || index >= list.length) {
  return;
}
```

If the first node is removed:

```javascript
list.head = list.head.next;
```

For other positions, the previous node is located and the target node is skipped:

```javascript
previous.next = previous.next.next;
```

Finally:

```javascript
list.length--;
```

---

## ⚙️ `clear()`

The `clear()` function completely resets the linked list:

```javascript
function clear(list) {
  list.head = null;
  list.length = 0;
}
```

After running it:

```javascript
{
  head: null,
  length: 0
}
```

---

## 📁 Files

```text
108-implement-linked-list-operations/
│
├── script.js
└── README.md
```