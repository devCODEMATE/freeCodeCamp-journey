# 🔮 Build a Fortune Telling App

A TypeScript workshop from the updated freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Una aplicación de tarot interactiva que carga un mazo de cartas desde una API externa y permite hacer tiradas de una o de tres cartas (Pasado, Presente y Futuro). Al hacer click sobre una carta revelada, se muestra su significado.

El HTML y el CSS fueron proporcionados por freeCodeCamp, mientras que toda la funcionalidad fue desarrollada con TypeScript.

### 🎯 Objetivo

Practicar interfaces, generics, enums, clases con modificadores de acceso, manejo de eventos del DOM, consumo de una API asincrónica y type narrowing con TypeScript.

### ✨ Funcionalidades

- Tirada de una sola carta ("Single Card Reading").
- Tirada de tres cartas: Pasado, Presente y Futuro ("Three Card Spread").
- Las cartas pueden salir invertidas de forma aleatoria.
- Estado de carga y manejo de errores en las imágenes, con imagen por defecto.
- Revela el significado de cada carta al hacer click sobre ella.
- Botón "New Reading" para reiniciar la consulta.

### 🧠 Conceptos practicados

- Interfaces de TypeScript
- Generics (funciones y firma de métodos)
- Enums de string
- Clases con propiedades y métodos `private`
- `async`/`await` y `fetch`
- Manejo de errores con `try...catch`
- Delegación de eventos (`document.addEventListener`)
- Type narrowing con `instanceof` y guard clauses
- Optional chaining (`?.`)
- Template literals anidados
- Métodos de array: `map()`, `find()`, `forEach()`, `join()`

### 🔍 Partes importantes

#### Interfaces del mazo

```ts
interface Card {
  name: string;
  name_short: string;
  value: string | number;
  value_int: number;
  suit: string;
  type: string;
  img: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

interface Deck {
  cards: Card[];
}
```

`Card` define la forma de cada carta del tarot, y `Deck` agrupa el mazo completo tal como llega desde la API.

#### Función genérica para buscar elementos

```ts
function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }
  return el;
}
```

`getElement<T>` reutiliza la misma lógica para buscar cualquier tipo de elemento del DOM, devolviendo un error claro si no lo encuentra.

#### Clase `Game`

```ts
class Game {
  cards: Card[] = [];
  private elements: { /* ... */ };

  constructor() {
    this.elements = { /* referencias al DOM */ };
    this.fetchCardsData();
    this.initializeEventListeners();
  }

  private async fetchCardsData() {
    try {
      const response = await fetch(`${CDN_URL}/card_data.json`);
      const data: Deck = await response.json();
      this.cards = data.cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }
}
```

`Game` centraliza toda la lógica de la app: carga las cartas desde la API, guarda referencias al DOM y expone métodos privados para cada acción (elegir tirada, mostrar la fortuna, reiniciar).

#### Type narrowing en el manejo de clicks

```ts
showFortune(e: Event) {
  const target = e.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const cardElement = target?.closest(".card_container");
  if (!(cardElement instanceof HTMLElement)) {
    return;
  }

  const cardId = cardElement.getAttribute("data-id");
  const foundCard = this.cards.find((card) => card.name_short === cardId);

  if (foundCard) {
    this.elements.cardTitle.textContent = foundCard.name;
    this.elements.description.textContent = foundCard.desc;
  }
}
```

Como el listener de clicks está en `document` (delegación de eventos), cada `if` con `instanceof` va acotando el tipo de `target` paso a paso hasta poder acceder de forma segura a sus propiedades.

### ✅ Qué aprendí

Aprendí a estructurar una aplicación TypeScript orientada a objetos desde cero: usar `private` para encapsular detalles internos, generics para escribir funciones reutilizables, y los patrones de manejo seguro de `null`/`undefined` propios de TypeScript (type narrowing, optional chaining) trabajando con el DOM real y una API asincrónica.

---

## 🇺🇸 English

### 📌 Description

An interactive tarot-reading app that fetches a deck of cards from an external API and supports single- and three-card readings (Past, Present, and Future). Clicking a revealed card shows its meaning.

The HTML and CSS were provided by freeCodeCamp, while all functionality was developed with TypeScript.

### 🎯 Objective

Practice interfaces, generics, enums, classes with access modifiers, DOM event handling, async API calls, and type narrowing with TypeScript.

### ✨ Features

- Single Card Reading.
- Three Card Spread: Past, Present, and Future.
- Cards can randomly appear reversed.
- Image loading state with error handling and a local fallback image.
- Reveals each card's meaning on click.
- "New Reading" button to reset the app.

### 🧠 Concepts Practiced

- TypeScript interfaces
- Generics (functions and method signatures)
- String enums
- Classes with `private` properties and methods
- `async`/`await` and `fetch`
- Error handling with `try...catch`
- Event delegation (`document.addEventListener`)
- Type narrowing with `instanceof` and guard clauses
- Optional chaining (`?.`)
- Nested template literals
- Array methods: `map()`, `find()`, `forEach()`, `join()`

### 🔍 Important Parts

#### Deck interfaces

```ts
interface Card {
  name: string;
  name_short: string;
  value: string | number;
  value_int: number;
  suit: string;
  type: string;
  img: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

interface Deck {
  cards: Card[];
}
```

`Card` defines the shape of each tarot card, and `Deck` groups the full deck as it arrives from the API.

#### Generic element getter

```ts
function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }
  return el;
}
```

`getElement<T>` reuses the same logic to look up any kind of DOM element, throwing a clear error if it isn't found.

#### The `Game` class

```ts
class Game {
  cards: Card[] = [];
  private elements: { /* ... */ };

  constructor() {
    this.elements = { /* DOM references */ };
    this.fetchCardsData();
    this.initializeEventListeners();
  }

  private async fetchCardsData() {
    try {
      const response = await fetch(`${CDN_URL}/card_data.json`);
      const data: Deck = await response.json();
      this.cards = data.cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }
}
```

`Game` centralizes all the app's logic: fetching the cards from the API, storing DOM references, and exposing private methods for each action (choosing a reading, showing the fortune, resetting).

#### Type narrowing when handling clicks

```ts
showFortune(e: Event) {
  const target = e.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const cardElement = target?.closest(".card_container");
  if (!(cardElement instanceof HTMLElement)) {
    return;
  }

  const cardId = cardElement.getAttribute("data-id");
  const foundCard = this.cards.find((card) => card.name_short === cardId);

  if (foundCard) {
    this.elements.cardTitle.textContent = foundCard.name;
    this.elements.description.textContent = foundCard.desc;
  }
}
```

Since the click listener lives on `document` (event delegation), each `instanceof` check progressively narrows the type of `target` until its properties can be accessed safely.

### ✅ What I Learned

I learned how to structure an object-oriented TypeScript app from scratch: using `private` to encapsulate internal details, generics to write reusable functions, and TypeScript's safe null/undefined handling patterns (type narrowing, optional chaining) while working with the real DOM and an async API.

---

## 📁 Files

```text
025-build-a-fortune-telling-app/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- TypeScript