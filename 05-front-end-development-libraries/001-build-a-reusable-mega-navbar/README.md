# Build a Reusable Mega Navbar

This is exercise **001** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is also my first documented workshop in the **React Fundamentals** section.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-reusable-mega-navbar)

---

## 🇪🇸 Español

Este workshop desarrolla una barra de navegación reutilizable utilizando React, JSX, HTML y CSS.

El componente `Navbar` contiene enlaces de navegación principales y un submenú desplegable para la sección de aplicaciones.

Este ejercicio representa el comienzo de una nueva etapa de mi recorrido en freeCodeCamp: el aprendizaje de React y las bibliotecas de desarrollo Frontend.

## Funcionalidades

- Crea una barra de navegación mediante un componente de React.
- Presenta enlaces para Dashboard y Widgets.
- Incluye un botón para acceder al menú Apps.
- Muestra un submenú con Calendar, Chat y Email.
- Abre el submenú mediante `hover`.
- Permite mostrarlo mediante `focus-within`.
- Utiliza una transición de opacidad.
- Adapta la posición del submenú mediante media queries.
- Utiliza variables CSS para definir los colores.
- Exporta el componente para poder reutilizarlo.
- Renderiza el componente en el elemento `root`.

## Conceptos practicados

- Fundamentos de React.
- Componentes funcionales.
- JSX.
- Exportaciones con nombre.
- Importación de componentes.
- Reutilización de componentes.
- Renderizado con ReactDOM.
- `createRoot()`.
- Atributos de JSX.
- `className`.
- Estructuras anidadas.
- Navegación semántica.
- Submenús.
- Accesibilidad básica.
- Atributos ARIA.
- Selectores CSS.
- Pseudoclases.
- `:hover`.
- `:focus-within`.
- Variables CSS.
- Flexbox.
- Posicionamiento absoluto.
- Transiciones CSS.
- Media queries.
- Responsive Design.

## Componente funcional

La barra de navegación se crea mediante un componente funcional:

```jsx
export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Contenido del componente */}
    </nav>
  );
};
```

Un componente funcional es una función de JavaScript que devuelve JSX.

En este caso, el componente se almacena en la constante:

```jsx
Navbar
```

El nombre comienza con mayúscula porque React diferencia los componentes personalizados de los elementos HTML mediante esa convención.

Por ejemplo:

```jsx
<Navbar />
```

representa un componente de React, mientras que:

```html
<nav></nav>
```

representa un elemento HTML.

## JSX

JSX permite escribir una estructura similar a HTML dentro de JavaScript:

```jsx
<nav className="navbar">
  <ul>
    <li className="nav-item">
      <a href="#">Dashboard</a>
    </li>
  </ul>
</nav>
```

Aunque se parece a HTML, JSX tiene algunas diferencias.

En HTML se utiliza:

```html
class="navbar"
```

En JSX se utiliza:

```jsx
className="navbar"
```

Esto ocurre porque `class` es una palabra reservada de JavaScript.

## Exportación del componente

El componente utiliza una exportación con nombre:

```jsx
export const Navbar = () => {
  // ...
};
```

La palabra `export` permite utilizar `Navbar` desde otro archivo.

Al tratarse de una exportación con nombre, debe importarse utilizando llaves:

```jsx
import { Navbar } from "./index.jsx";
```

El nombre utilizado en la importación debe coincidir con el nombre exportado.

## Renderizado con ReactDOM

El archivo HTML contiene el elemento raíz de la aplicación:

```html
<div id="root"></div>
```

React obtiene ese elemento mediante:

```jsx
document.getElementById("root")
```

Después crea una raíz de React:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
)
```

Finalmente, renderiza el componente:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<Navbar />);
```

El componente `Navbar` se transforma en contenido visible dentro del elemento `root`.

## Estructura de navegación

El componente utiliza el elemento semántico:

```jsx
<nav className="navbar">
```

Dentro del elemento `nav` se encuentra una lista con los enlaces principales:

```jsx
<ul>
  <li className="nav-item">
    <a href="#">Dashboard</a>
  </li>

  <li className="nav-item">
    <a href="#">Widgets</a>
  </li>
</ul>
```

El uso de `nav`, `ul` y `li` ayuda a representar correctamente una estructura de navegación.

## Submenú de aplicaciones

La opción Apps utiliza un botón:

```jsx
<button aria-expanded="false">
  Apps
</button>
```

Después del botón se encuentra una lista anidada:

```jsx
<ul
  className="sub-menu"
  aria-label="Apps"
>
  <li>
    <a href="#">Calendar</a>
  </li>

  <li>
    <a href="#">Chat</a>
  </li>

  <li>
    <a href="#">Email</a>
  </li>
</ul>
```

Esta lista representa el submenú de aplicaciones.

## Accesibilidad

El botón incluye:

```jsx
aria-expanded="false"
```

Este atributo comunica que el menú se encuentra inicialmente cerrado.

El submenú utiliza:

```jsx
aria-label="Apps"
```

Esto proporciona un nombre accesible para la lista.

El workshop también utiliza:

```css
.nav-item:focus-within .sub-menu
```

`focus-within` permite mostrar el submenú cuando el botón o uno de sus enlaces internos recibe el foco mediante el teclado.

En una aplicación React más avanzada, el valor de `aria-expanded` debería cambiar dinámicamente entre `true` y `false` según el estado del menú. En este workshop todavía no se administra estado, por lo que se conserva el valor requerido por el ejercicio.

## Presentación del menú

La lista principal utiliza Flexbox:

```css
.navbar ul {
  display: flex;
  justify-content: space-around;
}
```

Esto distribuye los elementos principales a lo largo de la barra de navegación.

## Estado inicial del submenú

El submenú comienza oculto:

```css
.navbar ul .nav-item .sub-menu {
  visibility: hidden;
  opacity: 0;
  position: absolute;
}
```

Se utilizan dos propiedades:

```css
visibility: hidden;
opacity: 0;
```

`visibility` impide que el menú sea visible, mientras que `opacity` permite aplicar una transición visual.

## Presentación del submenú

El menú se muestra cuando el usuario pasa el cursor sobre el elemento o cuando uno de sus elementos recibe el foco:

```css
.navbar ul .nav-item:hover .sub-menu,
.navbar ul .nav-item:focus-within .sub-menu {
  visibility: visible;
  opacity: 1;
}
```

Esto combina interacción con mouse y navegación mediante teclado.

## Transición

El submenú utiliza una transición de opacidad:

```css
transition: opacity 0.5s ease;
```

La transición dura medio segundo y suaviza su aparición.

## Variables CSS

Los colores se almacenan en variables:

```css
:root {
  --white: #fff;
  --light-grey: #e1e0e0;
  --dark-purple: #7c0e7c;
  --black: #000;
}
```

Después pueden reutilizarse mediante `var()`:

```css
body {
  background-color: var(--light-grey);
}
```

Las variables ayudan a mantener una paleta consistente y facilitan futuros cambios de diseño.

## Diseño responsive

La posición del submenú cambia según el ancho de la pantalla:

```css
@media (min-width: 768px) {
  .navbar ul .nav-item .sub-menu {
    right: 15%;
  }
}
```

Para pantallas de al menos `1024px` se utiliza otra posición:

```css
@media (min-width: 1024px) {
  .navbar ul .nav-item .sub-menu {
    right: 13%;
  }
}
```

Las media queries permiten adaptar la interfaz a diferentes tamaños de pantalla.

## Flujo del proyecto

```text
El navegador carga index.html
              ↓
Se cargan React, ReactDOM y Babel
              ↓
Se importa Navbar desde index.jsx
              ↓
ReactDOM encuentra el elemento root
              ↓
Se crea la raíz de React
              ↓
Se renderiza el componente Navbar
              ↓
El usuario interactúa con el menú
              ↓
CSS muestra u oculta el submenú
```

## Reutilización

El componente está separado y exportado:

```jsx
export const Navbar = () => {
  // ...
};
```

Esto permite importarlo en otros archivos y utilizarlo mediante:

```jsx
<Navbar />
```

La reutilización de componentes es uno de los conceptos fundamentales de React.

En un proyecto de mayor tamaño, una barra de navegación como esta podría utilizarse en diferentes páginas sin tener que repetir toda su estructura.

## Complejidad

El componente renderiza una cantidad fija de enlaces y elementos.

Por lo tanto, su complejidad temporal y espacial local es constante:

```text
O(1)
```

Si en el futuro los enlaces se generaran dinámicamente desde un arreglo, la complejidad dependería de la cantidad de elementos de navegación.

---

## 🇺🇸 English

This workshop builds a reusable navigation bar using React, JSX, HTML and CSS.

The `Navbar` component includes primary navigation links and a dropdown submenu for the applications section.

This exercise marks the beginning of a new stage in my freeCodeCamp journey: learning React and Front End Development Libraries.

## Features

- Builds a navigation bar with a React component.
- Displays Dashboard and Widgets links.
- Includes an Apps menu button.
- Provides Calendar, Chat and Email submenu links.
- Displays the submenu on hover.
- Supports keyboard focus with `focus-within`.
- Applies an opacity transition.
- Adjusts the submenu position using media queries.
- Uses CSS custom properties for colors.
- Exports the component for reuse.
- Renders the component inside the root element.

## Concepts practiced

- React fundamentals.
- Functional components.
- JSX.
- Named exports.
- Component imports.
- Reusable components.
- ReactDOM rendering.
- `createRoot()`.
- JSX attributes.
- `className`.
- Nested structures.
- Semantic navigation.
- Submenus.
- Basic accessibility.
- ARIA attributes.
- CSS selectors.
- Pseudo-classes.
- `:hover`.
- `:focus-within`.
- CSS custom properties.
- Flexbox.
- Absolute positioning.
- CSS transitions.
- Media queries.
- Responsive Design.

## Functional component

The navigation bar is created with a functional component:

```jsx
export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Component content */}
    </nav>
  );
};
```

A functional component is a JavaScript function that returns JSX.

The component name begins with an uppercase letter because React uses this convention to distinguish custom components from HTML elements.

```jsx
<Navbar />
```

represents a React component, while:

```html
<nav></nav>
```

represents an HTML element.

## JSX

JSX makes it possible to write an HTML-like structure inside JavaScript:

```jsx
<nav className="navbar">
  <ul>
    <li className="nav-item">
      <a href="#">Dashboard</a>
    </li>
  </ul>
</nav>
```

JSX uses `className` instead of the HTML `class` attribute:

```jsx
className="navbar"
```

## Exporting and importing the component

The component uses a named export:

```jsx
export const Navbar = () => {
  // ...
};
```

It is imported with curly braces:

```jsx
import { Navbar } from "./index.jsx";
```

Named exports allow components to be shared and reused across different files.

## Rendering with ReactDOM

The HTML document provides the root element:

```html
<div id="root"></div>
```

React creates a root and renders the component inside it:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<Navbar />);
```

## Submenu behavior

The submenu is initially hidden:

```css
.navbar ul .nav-item .sub-menu {
  visibility: hidden;
  opacity: 0;
}
```

It becomes visible when the navigation item is hovered or receives focus:

```css
.navbar ul .nav-item:hover .sub-menu,
.navbar ul .nav-item:focus-within .sub-menu {
  visibility: visible;
  opacity: 1;
}
```

This supports mouse interaction and keyboard navigation.

## Accessibility

The Apps button contains:

```jsx
aria-expanded="false"
```

The submenu contains:

```jsx
aria-label="Apps"
```

The workshop uses `focus-within` so the submenu remains accessible through keyboard focus.

In a more advanced React application, `aria-expanded` should be updated dynamically according to the menu state. This workshop does not manage React state yet, so the static value required by the exercise is preserved.

## Responsive Design

Media queries adjust the position of the submenu:

```css
@media (min-width: 768px) {
  .navbar ul .nav-item .sub-menu {
    right: 15%;
  }
}
```

Another position is applied on screens at least `1024px` wide:

```css
@media (min-width: 1024px) {
  .navbar ul .nav-item .sub-menu {
    right: 13%;
  }
}
```

## Reusability

Because `Navbar` is exported as an independent component, it can be imported and rendered in different parts of an application:

```jsx
<Navbar />
```

Component reuse is one of the core ideas behind React.

## 📁 Files

- `index.html`: Loads React, ReactDOM, Babel and the application root.
- `styles.css`: Defines the navigation layout, interaction and responsive styles.
- `index.jsx`: Contains and exports the reusable `Navbar` component.
- `README.md`: Contains the bilingual project documentation.

## First React milestone

This is the first workshop documented in the Front End Development Libraries stage of my freeCodeCamp journey.

After completing JavaScript Algorithms & Data Structures, this exercise introduces component-based interface development with React.