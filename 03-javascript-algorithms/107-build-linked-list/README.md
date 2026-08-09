# 🔗 Build a Linked List

## 🇪🇸 Español

Este es el ejercicio número **107** de mi recorrido de **JavaScript Algorithms and Data Structures** en **freeCodeCamp**.

El objetivo fue implementar una **lista enlazada simple (Singly Linked List)** utilizando objetos y funciones de JavaScript, comprendiendo cómo se almacenan los datos mediante referencias entre nodos.

Cada nodo contiene un valor (`element`) y una referencia al siguiente nodo (`next`). La lista mantiene una referencia al primer nodo mediante `head` y lleva el control de la cantidad de elementos con `length`.

---

## 🚀 Funcionalidades

- Inicializar una lista enlazada vacía.
- Verificar si la lista está vacía.
- Crear nuevos nodos.
- Agregar nodos al final de la lista.
- Recorrer la lista nodo por nodo.
- Buscar un elemento dentro de la lista.
- Eliminar un nodo por su valor.
- Eliminar correctamente el primer nodo.
- Reconectar los nodos después de una eliminación.
- Actualizar automáticamente la longitud de la lista.

---

## 📂 Estructura inicial

La lista comienza con la siguiente estructura:

```javascript
{
  head: null,
  length: 0
}
```

Cada nodo tiene la siguiente forma:

```javascript
{
  element: value,
  next: null
}
```

Después de agregar los valores **42**, **43** y **44**, la estructura lógica queda así:

```text
head
 ↓
42 → 43 → 44 → null
```

---

## 📚 Conceptos practicados

- JavaScript
- Data Structures
- Linked Lists
- Singly Linked List
- Nodes
- References
- Objects
- Functions
- null
- while loops
- Conditional statements
- Object properties
- Traversal
- Pointer references
- State management
- JSON.stringify()

---

## 🎯 Lo que aprendí

- Comprender cómo funciona una Linked List.
- Representar una estructura de datos mediante objetos enlazados.
- Mantener una referencia al primer nodo utilizando `head`.
- Recorrer una lista utilizando un ciclo `while`.
- Detectar el final de la lista cuando `next` es `null`.
- Agregar nuevos nodos al final de la estructura.
- Buscar elementos recorriendo la lista.
- Mantener referencias al nodo actual y al nodo anterior.
- Eliminar correctamente el primer nodo.
- Eliminar nodos intermedios sin romper la estructura.
- Actualizar la longitud de la lista después de agregar o eliminar elementos.
- Visualizar estructuras complejas utilizando `JSON.stringify()`.

---

## ⚙️ ¿Cómo funciona `add()`?

Primero se crea un nuevo nodo:

```javascript
const node = {
  element: element,
  next: null
};
```

Si la lista está vacía, ese nodo pasa a ser el primer nodo (`head`).

```javascript
if (isEmpty(list)) {
  list.head = node;
}
```

Si ya existen elementos, se recorre la lista hasta llegar al último nodo.

```javascript
let current = list.head;

while (current.next !== null) {
  current = current.next;
}
```

Finalmente se conecta el nuevo nodo.

```javascript
current.next = node;
```

Y se incrementa la longitud.

```javascript
list.length++;
```

---

## ⚙️ ¿Cómo funciona `remove()`?

La función mantiene dos referencias:

```javascript
let previous = null;
let current = list.head;
```

Luego recorre la lista hasta encontrar el elemento buscado.

```javascript
while (current !== null && current.element !== element) {
  previous = current;
  current = current.next;
}
```

Si no encuentra el elemento simplemente termina.

```javascript
if (current === null) {
  return;
}
```

Si el nodo no es el primero:

```javascript
previous.next = current.next;
```

Si el nodo es el primero:

```javascript
list.head = current.next;
```

Por último, disminuye la longitud de la lista.

```javascript
list.length--;
```

---

## 💻 Salida esperada

```javascript
false

{
  head: {
    element: 42,
    next: {
      element: 43,
      next: {
        element: 44,
        next: null
      }
    }
  },
  length: 3
}

false

{
  "head": {
    "element": 43,
    "next": {
      "element": 44,
      "next": null
    }
  },
  "length": 2
}
```

---

## 📁 Archivos

```
107-build-linked-list/
│
├── script.js
└── README.md
```

---

## 🇺🇸 English

This is exercise **107** from my **JavaScript Algorithms and Data Structures** journey on **freeCodeCamp**.

The goal was to build a **Singly Linked List** using JavaScript objects and functions while learning how nodes are connected through references.

Each node stores a value (`element`) and a reference to the next node (`next`). The list keeps a reference to the first node using `head` and tracks the total number of nodes with `length`.

---

## 🚀 Features

- Initialize an empty linked list.
- Check whether the list is empty.
- Create new nodes.
- Add nodes to the end of the list.
- Traverse the list node by node.
- Search for a node.
- Remove a node by value.
- Correctly remove the first node.
- Reconnect nodes after deletion.
- Automatically update the list length.

---

## 📂 Initial Structure

The list starts as:

```javascript
{
  head: null,
  length: 0
}
```

Each node has the following structure:

```javascript
{
  element: value,
  next: null
}
```

After adding **42**, **43**, and **44**, the logical structure becomes:

```text
head
 ↓
42 → 43 → 44 → null
```

---

## 📚 Concepts Practiced

- JavaScript
- Data Structures
- Linked Lists
- Singly Linked List
- Nodes
- References
- Objects
- Functions
- null
- while loops
- Conditional statements
- Object properties
- Traversal
- Pointer references
- State management
- JSON.stringify()

---

## 🎯 What I Learned

- Understand how a Linked List works.
- Represent data using linked objects.
- Keep a reference to the first node with `head`.
- Traverse a linked list using a `while` loop.
- Detect the end of the list when `next` is `null`.
- Append new nodes to the end of the list.
- Search for nodes by value.
- Track both the current and previous nodes.
- Remove the first node correctly.
- Remove intermediate nodes without breaking the structure.
- Update the list length after modifications.
- Inspect nested data structures using `JSON.stringify()`.

---

## ⚙️ How `add()` Works

A new node is created.

```javascript
const node = {
  element: element,
  next: null
};
```

If the list is empty, the node becomes the new head.

```javascript
if (isEmpty(list)) {
  list.head = node;
}
```

Otherwise, the list is traversed until the last node.

```javascript
let current = list.head;

while (current.next !== null) {
  current = current.next;
}
```

Then the new node is attached.

```javascript
current.next = node;
```

Finally, the list length is increased.

```javascript
list.length++;
```

---

## ⚙️ How `remove()` Works

The function keeps two references.

```javascript
let previous = null;
let current = list.head;
```

The list is traversed until the target node is found.

```javascript
while (current !== null && current.element !== element) {
  previous = current;
  current = current.next;
}
```

If the node doesn't exist, the function returns.

```javascript
if (current === null) {
  return;
}
```

If the node is not the first one:

```javascript
previous.next = current.next;
```

Otherwise, the head is updated.

```javascript
list.head = current.next;
```

Finally, the list length is decreased.

```javascript
list.length--;
```

---

## 💻 Expected Output

```javascript
false

{
  head: {
    element: 42,
    next: {
      element: 43,
      next: {
        element: 44,
        next: null
      }
    }
  },
  length: 3
}

false

{
  "head": {
    "element": 43,
    "next": {
      "element": 44,
      "next": null
    }
  },
  "length": 2
}
```

---

## 📁 Files

```
107-build-linked-list/
│
├── script.js
└── README.md
```