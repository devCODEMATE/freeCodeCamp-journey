# 🔄 Toggle Text App

## 🇪🇸 Español

Este es el **Workshop 005** de mi recorrido por **Front End Development Libraries** en freeCodeCamp.

En este ejercicio construí una pequeña aplicación con **React** que permite mostrar y ocultar un mensaje utilizando un botón.

El objetivo principal fue practicar el manejo de **estado con `useState`**, eventos en React y renderizado condicional.

---

## 🚀 Funcionalidades

- Mostrar inicialmente el mensaje oculto.
- Cambiar el estado al hacer clic en un botón.
- Mostrar u ocultar un mensaje dependiendo del estado.
- Cambiar dinámicamente el texto del botón entre `Show Message` y `Hide Message`.
- Utilizar JSX para construir la interfaz.
- Renderizar el componente React dentro del elemento `#root`.

---

## ⚛️ Estado con useState

El componente utiliza el hook `useState`:

```jsx
const [isVisible, setIsVisible] = useState(false);
```

El estado comienza con:

```javascript
false
```

por lo que el mensaje está oculto inicialmente.

`isVisible` contiene el estado actual y `setIsVisible` permite actualizarlo.

---

## 🖱️ Manejo del evento

Se creó la función:

```jsx
const handleToggleVisibility = () => {
  setIsVisible(!isVisible);
};
```

Cada vez que se ejecuta, cambia `isVisible` al valor booleano contrario.

Si actualmente es:

```text
false
```

pasa a:

```text
true
```

y viceversa.

La función se conecta al botón mediante:

```jsx
onClick={handleToggleVisibility}
```

---

## 🔀 Texto condicional

El texto del botón cambia utilizando un operador ternario:

```jsx
{isVisible ? "Hide" : "Show"} Message
```

Cuando `isVisible` es `false`, muestra:

```text
Show Message
```

Cuando es `true`, muestra:

```text
Hide Message
```

---

## 👁️ Renderizado condicional

El mensaje se muestra utilizando:

```jsx
{isVisible && <p id="message">I love freeCodeCamp!</p>}
```

El operador `&&` permite renderizar el elemento `<p>` solamente cuando `isVisible` es `true`.

---

## 🧩 Componente

La aplicación está organizada dentro del componente:

```jsx
export const ToggleApp = () => {
  // component logic
};
```

El componente se renderiza dentro del elemento:

```html
<div id="root"></div>
```

utilizando:

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<ToggleApp />);
```

---

## 📚 Conceptos practicados

- React
- JSX
- React components
- `useState`
- State management
- Event handling
- `onClick`
- Conditional rendering
- Ternary operator
- Logical AND (`&&`)
- Dynamic UI updates
- ReactDOM
- CSS styling

---

## 🎯 Lo que aprendí

- Cómo crear un componente funcional en React.
- Cómo utilizar `useState` para almacenar un valor booleano.
- Cómo actualizar el estado como respuesta a una interacción del usuario.
- Cómo conectar una función a un evento `onClick`.
- Cómo utilizar el estado para modificar dinámicamente la interfaz.
- Cómo utilizar un operador ternario dentro de JSX.
- Cómo utilizar `&&` para renderizar elementos condicionalmente.
- Cómo renderizar un componente React dentro del DOM.

---

# 🇺🇸 English

This is **Workshop 005** of my **Front End Development Libraries** journey on freeCodeCamp.

In this exercise, I built a small **React** application that allows the user to show and hide a message using a button.

The main goal was to practice **state management with `useState`**, React events, and conditional rendering.

---

## 🚀 Features

- Start with the message hidden.
- Change the application state when a button is clicked.
- Show or hide a message depending on the current state.
- Dynamically change the button text between `Show Message` and `Hide Message`.
- Build the interface using JSX.
- Render the React component inside the `#root` element.

---

## ⚛️ State with useState

The component uses the `useState` hook:

```jsx
const [isVisible, setIsVisible] = useState(false);
```

The initial value is:

```javascript
false
```

so the message starts hidden.

`isVisible` stores the current state, while `setIsVisible` is used to update it.

---

## 🖱️ Event Handling

The following function handles the state change:

```jsx
const handleToggleVisibility = () => {
  setIsVisible(!isVisible);
};
```

Every time the function runs, the boolean state is changed to its opposite value.

The function is connected to the button using:

```jsx
onClick={handleToggleVisibility}
```

---

## 🔀 Conditional Button Text

The button text is dynamically generated using a ternary operator:

```jsx
{isVisible ? "Hide" : "Show"} Message
```

When `isVisible` is `false`, the button displays:

```text
Show Message
```

When it is `true`, it displays:

```text
Hide Message
```

---

## 👁️ Conditional Rendering

The message is conditionally rendered with:

```jsx
{isVisible && <p id="message">I love freeCodeCamp!</p>}
```

The logical `&&` operator renders the paragraph only when `isVisible` is `true`.

---

## 🧩 Component

The application is contained inside the functional component:

```jsx
export const ToggleApp = () => {
  // component logic
};
```

It is rendered inside:

```html
<div id="root"></div>
```

using:

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<ToggleApp />);
```

---

## 📚 Concepts Practiced

- React
- JSX
- React components
- `useState`
- State management
- Event handling
- `onClick`
- Conditional rendering
- Ternary operator
- Logical AND (`&&`)
- Dynamic UI updates
- ReactDOM
- CSS styling

---

## 🎯 What I Learned

- How to create a functional React component.
- How to use `useState` to store boolean state.
- How to update state after a user interaction.
- How to connect a function to an `onClick` event.
- How to use state to dynamically update the interface.
- How to use a ternary operator inside JSX.
- How to use `&&` for conditional rendering.
- How to render a React component into the DOM.

---

## 📁 Files

```text
005-toggle-text-app/
├── README.md
├── index.html
├── index.jsx
└── styles.css
```

---

## 🛠️ Technologies

- HTML
- CSS
- JavaScript
- React
- JSX
- Babel
- freeCodeCamp