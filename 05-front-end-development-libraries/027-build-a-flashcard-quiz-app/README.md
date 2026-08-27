# 🃏 Build a Flashcard Quiz App

A TypeScript **Certification Project** from the freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Una app de flashcards interactiva: cada tarjeta muestra una pregunta que se puede dar vuelta con un click para revelar la respuesta. Permite agregar nuevas tarjetas mediante un formulario, con validación de campos vacíos, y borrar la tarjeta actual mostrando la anterior en su lugar.

### 🎯 Objetivo

Practicar interfaces, colecciones tipadas, clases de error personalizadas heredando de `Error`, manejo de eventos del DOM, y manipulación de arrays (`push`, `splice`) en TypeScript puro.

### ✨ Funcionalidades

- Tarjeta con efecto de "flip" 3D: un click revela la respuesta, otro click vuelve a la pregunta.
- Formulario para agregar nuevas tarjetas a la colección.
- Validación: no se pueden agregar tarjetas con pregunta o respuesta vacías.
- Botón para borrar la tarjeta actual, mostrando automáticamente la anterior.

### 🧠 Conceptos practicados

- Interfaces de TypeScript
- Colecciones tipadas (`FlashCard[]`)
- Generics reutilizables (`getElement<T>`)
- Clases de error personalizadas (`extends Error`)
- `throw` y errores no capturados
- Manejo de eventos (`click`, `submit`)
- Métodos de array: `push()`, `splice()`
- Operador ternario
- `textContent` vs. `innerHTML`

### 🔍 Partes importantes

#### Interface y colección de flashcards

```typescript
interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

const currentCards: FlashCard[] = [
  { questionText: "What is the capital of France?", questionAnswer: "Paris" },
];
```

`FlashCard` describe la forma de cada tarjeta, y `currentCards` es la colección completa sobre la que trabaja toda la app.

#### Clase de error personalizada

```typescript
class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}
```

Hereda de `Error` con `extends`, y sobrescribe `this.name` para identificar claramente este tipo de error específico frente a otros errores genéricos.

#### Agregar y borrar tarjetas

```typescript
function addCard(questionText: string, questionAnswer: string): void {
  if (questionText.trim() === "" || questionAnswer.trim() === "") {
    throw new InvalidUserInputError("Question text and answer cannot be empty.");
  }
  currentCards.push({ questionText, questionAnswer });
  currentIndex = currentCards.length - 1;
  renderCard();
}

deleteBtnEl.addEventListener("click", () => {
  if (currentCards.length <= 1) return;
  currentCards.splice(currentIndex, 1);
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  renderCard();
});
```

`addCard` lanza `InvalidUserInputError` si algún campo está vacío; si no, agrega la tarjeta con `.push()`. Al borrar, `.splice()` elimina la tarjeta actual del array, y un operador ternario decide si retroceder a la anterior o quedarse en la primera posición.

### ✅ Qué aprendí

Aprendí a crear clases de error personalizadas extendiendo `Error`, a manejar una colección de datos tipada con operaciones de array como `push` y `splice`, y a distinguir entre atrapar un error dentro del propio código versus dejarlo propagarse sin capturar, según lo que la lógica de la app necesite en cada caso.

---

## 🇺🇸 English

### 📌 Description

An interactive flashcard app: each card shows a question that flips on click to reveal the answer. New cards can be added through a form, with validation for empty fields, and the current card can be deleted, automatically displaying the previous one.

### 🎯 Objective

Practice interfaces, typed collections, custom error classes extending `Error`, DOM event handling, and array manipulation (`push`, `splice`) in plain TypeScript.

### ✨ Features

- 3D "flip" effect card: one click reveals the answer, another click flips back to the question.
- Form to add new cards to the collection.
- Validation: cards with an empty question or answer cannot be added.
- Button to delete the current card, automatically showing the previous one.

### 🧠 Concepts Practiced

- TypeScript interfaces
- Typed collections (`FlashCard[]`)
- Reusable generics (`getElement<T>`)
- Custom error classes (`extends Error`)
- `throw` and uncaught errors
- Event handling (`click`, `submit`)
- Array methods: `push()`, `splice()`
- Ternary operator
- `textContent` vs. `innerHTML`

### 🔍 Important Parts

#### Flashcard interface and collection

```typescript
interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

const currentCards: FlashCard[] = [
  { questionText: "What is the capital of France?", questionAnswer: "Paris" },
];
```

`FlashCard` describes the shape of each card, and `currentCards` is the full collection the whole app operates on.

#### Custom error class

```typescript
class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}
```

Inherits from `Error` via `extends`, and overrides `this.name` to clearly identify this specific error type against other generic errors.

#### Adding and deleting cards

```typescript
function addCard(questionText: string, questionAnswer: string): void {
  if (questionText.trim() === "" || questionAnswer.trim() === "") {
    throw new InvalidUserInputError("Question text and answer cannot be empty.");
  }
  currentCards.push({ questionText, questionAnswer });
  currentIndex = currentCards.length - 1;
  renderCard();
}

deleteBtnEl.addEventListener("click", () => {
  if (currentCards.length <= 1) return;
  currentCards.splice(currentIndex, 1);
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  renderCard();
});
```

`addCard` throws `InvalidUserInputError` if either field is empty; otherwise it adds the card with `.push()`. When deleting, `.splice()` removes the current card from the array, and a ternary operator decides whether to step back to the previous card or stay at the first position.

### ✅ What I Learned

I learned how to create custom error classes by extending `Error`, how to manage a typed data collection with array operations like `push` and `splice`, and how to distinguish between catching an error inside your own code versus letting it propagate uncaught, depending on what the app's logic actually needs in each case.

---

## 📁 Files

```text
027-build-a-flashcard-quiz-app/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- TypeScript