# 🐝 Build a Bug Emoji Picker

A TypeScript workshop from the updated freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Selector de especies de insectos que permite elegir una abeja o una araña y mostrar el emoji correspondiente en pantalla.

El HTML y el CSS fueron proporcionados por freeCodeCamp. La funcionalidad fue desarrollada con TypeScript.

### 🎯 Objetivo

Practicar clases abstractas, tipos genéricos, herencia y manipulación del DOM con TypeScript.

### ✨ Funcionalidades

- Permite seleccionar una especie desde un elemento `<select>`.
- Relaciona cada opción con una instancia de una clase.
- Muestra el emoji correspondiente al cambiar la selección.
- Comprueba que el elemento que produjo el evento sea un `<select>`.

### 🧠 Conceptos practicados

- Clases abstractas
- Tipos genéricos
- Herencia con `extends`
- Constructores y `super()`
- Métodos abstractos
- Sobrescritura de métodos con `override`
- Operadores `instanceof` y `!`
- Type predicates
- Tipo utilitario `Record`
- Selección de elementos del DOM
- Eventos `change`

### 🔍 Partes importantes

#### Clase abstracta genérica

```ts
abstract class Bug<T> {
  emoji!: T;
  emojiElement!: HTMLParagraphElement;

  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement;
  }

  abstract render(): void;
}
```

`Bug<T>` funciona como clase base para las diferentes especies. El tipo genérico `T` permite definir el tipo de la propiedad `emoji`.

#### Herencia y sobrescritura

```ts
class Bee extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🐝";
  }

  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}
```

`Bee` hereda de `Bug<string>` e implementa su propia versión del método `render`.

#### Comprobación del elemento seleccionado

```ts
function isSelect(
  element: EventTarget | null
): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}
```

Esta función comprueba si el elemento que produjo el evento es un `HTMLSelectElement`.

#### Relación entre opciones e insectos

```ts
const bugMap: Record<string, Bug<string>> = {
  "bee": new Bee(bugEmojiElement),
  "spider": new Spider(bugEmojiElement),
};
```

`bugMap` relaciona cada valor del selector con una instancia de la clase correspondiente.

#### Evento de cambio

```ts
selectElement.addEventListener("change", (e) => {
  if (isSelect(e.target)) {
    bugMap[e.target.value].render();
  }
});
```

Cuando cambia la opción seleccionada, se busca el insecto correspondiente y se ejecuta su método `render()`.

### ✅ Qué aprendí

Aprendí a crear una clase abstracta genérica y a extenderla mediante clases específicas. También practiqué cómo sobrescribir métodos, organizar objetos con `Record` y comprobar tipos de elementos del DOM antes de utilizarlos.

---

## 🇺🇸 English

### 📌 Description

A bug species selector that lets users choose a bee or a spider and display the corresponding emoji.

The HTML and CSS were provided by freeCodeCamp. The functionality was developed with TypeScript.

### 🎯 Objective

Practice abstract classes, generic types, inheritance, and DOM manipulation with TypeScript.

### ✨ Features

- Selects a species from a `<select>` element.
- Maps each option to a class instance.
- Displays the corresponding emoji when the selection changes.
- Checks that the event target is a `<select>` element.

### 🧠 Concepts Practiced

- Abstract classes
- Generic types
- Inheritance with `extends`
- Constructors and `super()`
- Abstract methods
- Method overriding with `override`
- The `instanceof` and `!` operators
- Type predicates
- The `Record` utility type
- DOM element selection
- `change` events

### 🔍 Important Parts

#### Generic abstract class

```ts
abstract class Bug<T> {
  emoji!: T;
  emojiElement!: HTMLParagraphElement;

  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement;
  }

  abstract render(): void;
}
```

`Bug<T>` works as the base class for the different species. The generic type `T` defines the type used by the `emoji` property.

#### Inheritance and method overriding

```ts
class Spider extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🕷️";
  }

  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}
```

`Spider` inherits from `Bug<string>` and implements its own version of the `render` method.

#### Checking the selected element

```ts
function isSelect(
  element: EventTarget | null
): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}
```

This function checks whether the event target is an `HTMLSelectElement`.

#### Mapping options to bugs

```ts
const bugMap: Record<string, Bug<string>> = {
  "bee": new Bee(bugEmojiElement),
  "spider": new Spider(bugEmojiElement),
};
```

`bugMap` connects each selector value to an instance of the corresponding class.

#### Change event

```ts
selectElement.addEventListener("change", (e) => {
  if (isSelect(e.target)) {
    bugMap[e.target.value].render();
  }
});
```

When the selected option changes, the corresponding bug is found and its `render()` method is executed.

### ✅ What I Learned

I learned how to create a generic abstract class and extend it with specific subclasses. I also practiced method overriding, organizing objects with `Record`, and checking DOM element types before using them.

---

## 📁 Files

```text
023-build-a-bug-emoji-picker/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- TypeScript