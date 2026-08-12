# Build a Reusable Footer

This is exercise **002** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals lab focused on building and exporting a reusable footer component.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-reusable-footer)

---

## 🇪🇸 Español

Este laboratorio desarrolla un componente de pie de página reutilizable utilizando React, JSX, HTML y CSS.

El componente `Footer` contiene tres grupos de navegación, información de copyright y una sección de enlaces representados mediante iconos.

El contenido fue personalizado con referencias a CodeMate, desarrollo, Pokémon TCG, Lords TCG y Naga.

## Funcionalidades

- Crea un footer mediante un componente funcional de React.
- Exporta el componente para permitir su reutilización.
- Devuelve un único elemento raíz.
- Incluye tres listas de navegación.
- Incluye al menos dos elementos en cada lista.
- Presenta enlaces relacionados con proyectos y comunidades.
- Muestra un texto de copyright.
- Utiliza el símbolo `©`.
- Incluye tres enlaces representados con iconos.
- Incorpora etiquetas accesibles para los iconos.
- Utiliza estilos de interacción para mouse y teclado.
- Adapta la distribución a pantallas pequeñas.
- Renderiza el componente mediante ReactDOM.

## Conceptos practicados

- React.
- React Fundamentals.
- Componentes funcionales.
- Componentes reutilizables.
- JSX.
- Exportaciones con nombre.
- Importación de componentes.
- Renderizado con ReactDOM.
- `createRoot()`.
- Elemento raíz único.
- Fragmentación visual dentro de un componente.
- `className`.
- Atributos JSX.
- HTML semántico.
- Listas desordenadas.
- Enlaces.
- Entidades HTML.
- Accesibilidad.
- `aria-label`.
- Selectores CSS.
- Flexbox.
- Pseudoclases.
- `:hover`.
- `:focus-visible`.
- Media queries.
- Responsive Design.

## Componente Footer

El componente se declara mediante una función:

```jsx
export function Footer() {
  return (
    <footer className="footer">
      {/* Contenido */}
    </footer>
  );
}
```

Esta es una función de JavaScript que devuelve JSX.

El nombre `Footer` comienza con mayúscula porque React utiliza esta convención para reconocer los componentes personalizados.

## Exportación con nombre

La palabra `export` permite utilizar el componente desde otro archivo:

```jsx
export function Footer() {
  // ...
}
```

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import { Footer } from "./index.jsx";
```

El nombre importado debe coincidir con el nombre exportado.

## Elemento raíz único

El componente devuelve un único elemento raíz:

```jsx
<footer className="footer">
  {/* Todos los demás elementos */}
</footer>
```

Las listas, el párrafo, los enlaces y los contenedores se encuentran dentro del elemento `footer`.

Por lo tanto, el footer no tiene elementos hermanos externos dentro del retorno del componente.

## Elemento semántico footer

El elemento:

```jsx
<footer>
```

representa el pie de página de una aplicación o sección.

Puede contener información como:

- Navegación secundaria.
- Datos de contacto.
- Enlaces importantes.
- Redes sociales.
- Información legal.
- Copyright.

## Listas de navegación

El componente contiene tres listas desordenadas:

```jsx
<ul className="footer-links">
  <li>
    <a href="#">Projects</a>
  </li>

  <li>
    <a href="#">GitHub</a>
  </li>
</ul>
```

Cada lista contiene al menos dos elementos `li`, tal como exige el laboratorio.

Los grupos utilizados son:

1. Projects y GitHub.
2. Pokémon TCG y Lords TCG.
3. About y Contact.

## Copyright

El componente incluye un párrafo:

```jsx
<p className="footer-copyright">
  &copy; 2026 CodeMate. All Rights Reserved.
</p>
```

La entidad HTML:

```html
&copy;
```

se representa visualmente como:

```text
©
```

## Enlaces con iconos

La sección de iconos contiene tres enlaces:

```jsx
<div className="footer-icons">
  <a href="#" aria-label="Naga">
    🐈
  </a>

  <a href="#" aria-label="Development">
    💻
  </a>

  <a href="#" aria-label="Trading card games">
    🃏
  </a>
</div>
```

Los enlaces no están vacíos porque cada uno contiene un emoji.

## Accesibilidad

Los enlaces representados únicamente mediante iconos incluyen `aria-label`:

```jsx
aria-label="Naga"
```

Esto proporciona una descripción textual para tecnologías de asistencia.

Los estilos también contemplan la navegación mediante teclado:

```css
.footer-links a:hover,
.footer-links a:focus-visible {
  color: #6b9e93;
  text-decoration: underline;
}
```

`:focus-visible` muestra una respuesta visual cuando un enlace recibe el foco mediante el teclado.

## Clases en JSX

En HTML se utiliza el atributo:

```html
class="footer"
```

En JSX se utiliza:

```jsx
className="footer"
```

Por ejemplo:

```jsx
<footer className="footer">
```

Las clases conectan cada elemento del componente con sus estilos CSS.

## Distribución con Flexbox

Los grupos de enlaces se organizan con Flexbox:

```css
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 3rem;
}
```

`flex-wrap` permite que los grupos pasen a una nueva línea si no existe suficiente espacio horizontal.

La sección de iconos también utiliza Flexbox:

```css
.footer-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
```

## Diseño responsive

En pantallas pequeñas, las listas se presentan verticalmente:

```css
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
```

Esto mejora la lectura y la interacción desde dispositivos móviles.

## Renderizado

El documento HTML incluye un elemento raíz:

```html
<div id="root"></div>
```

Después importa el componente:

```jsx
import { Footer } from "./index.jsx";
```

Finalmente, React lo renderiza:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<Footer />);
```

## Flujo del proyecto

```text
El navegador carga index.html
              ↓
Se cargan React, ReactDOM y Babel
              ↓
Se importa Footer desde index.jsx
              ↓
ReactDOM encuentra el elemento root
              ↓
Se crea la raíz de React
              ↓
Se renderiza el componente Footer
              ↓
El footer aparece en la página
```

## Reutilización

El componente puede importarse y utilizarse en diferentes páginas:

```jsx
<Footer />
```

Esto evita repetir manualmente toda la estructura del pie de página.

En una aplicación de mayor tamaño, el mismo componente podría mostrarse en todas las páginas para mantener una navegación y una identidad visual consistentes.

## Complejidad

El componente presenta una cantidad fija de listas, elementos y enlaces.

Por lo tanto, el trabajo local de renderizado tiene una complejidad constante:

```text
O(1)
```

Si los enlaces se generaran dinámicamente desde un arreglo, la complejidad dependería de la cantidad de elementos recibidos.

---

## 🇺🇸 English

This lab builds a reusable footer component using React, JSX, HTML and CSS.

The `Footer` component contains three navigation groups, copyright information and a collection of icon links.

Its content was personalized with references to CodeMate, development, Pokémon TCG, Lords TCG and Naga.

## Features

- Creates a footer with a functional React component.
- Exports the component for reuse.
- Returns a single root element.
- Provides three unordered lists.
- Includes at least two items in every list.
- Displays project and community links.
- Shows copyright information.
- Uses the `©` symbol.
- Includes three icon links.
- Provides accessible labels for icon-only links.
- Supports mouse and keyboard interaction.
- Adapts its layout to smaller screens.
- Renders the component with ReactDOM.

## Concepts practiced

- React.
- React Fundamentals.
- Functional components.
- Reusable components.
- JSX.
- Named exports.
- Component imports.
- ReactDOM.
- `createRoot()`.
- Single root elements.
- `className`.
- JSX attributes.
- Semantic HTML.
- Unordered lists.
- Links.
- HTML entities.
- Accessibility.
- `aria-label`.
- CSS selectors.
- Flexbox.
- Pseudo-classes.
- `:hover`.
- `:focus-visible`.
- Media queries.
- Responsive Design.

## Footer component

The component is declared and exported as a function:

```jsx
export function Footer() {
  return (
    <footer className="footer">
      {/* Content */}
    </footer>
  );
}
```

A functional component is a JavaScript function that returns JSX.

## Named export

The component uses a named export:

```jsx
export function Footer() {
  // ...
}
```

It is imported with curly braces:

```jsx
import { Footer } from "./index.jsx";
```

## Single root element

The component returns only one root element:

```jsx
<footer className="footer">
  {/* All remaining elements */}
</footer>
```

Every list, paragraph, link and internal container is nested inside the footer.

## Navigation lists

The component includes three unordered lists.

Each list contains at least two list items:

```jsx
<ul className="footer-links">
  <li>
    <a href="#">Projects</a>
  </li>

  <li>
    <a href="#">GitHub</a>
  </li>
</ul>
```

## Copyright

The copyright information is included in a paragraph:

```jsx
<p className="footer-copyright">
  &copy; 2026 CodeMate. All Rights Reserved.
</p>
```

The `&copy;` HTML entity renders the `©` symbol.

## Icon links and accessibility

Each icon is placed inside a link with `href="#"`:

```jsx
<a href="#" aria-label="Development">
  💻
</a>
```

The `aria-label` provides an accessible description for a link whose visible content is an icon.

## JSX classes

JSX uses `className` instead of the HTML `class` attribute:

```jsx
<footer className="footer">
```

These classes connect the component elements to the CSS rules.

## Responsive layout

Flexbox organizes the navigation groups and icon links.

A media query changes the navigation groups to a vertical layout on smaller screens:

```css
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
```

## Rendering the component

React imports and renders the component inside the root element:

```jsx
import { Footer } from "./index.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(<Footer />);
```

## Reusability

The exported component can be rendered wherever a footer is needed:

```jsx
<Footer />
```

This helps maintain a consistent structure and design across an application.

## 📁 Files

- `index.html`: Loads React, ReactDOM, Babel and the root element.
- `index.jsx`: Contains and exports the reusable `Footer` component.
- `styles.css`: Defines the layout, colors, interactions and responsive behavior.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the second documented React Fundamentals exercise and the first React lab in this stage of my freeCodeCamp journey.