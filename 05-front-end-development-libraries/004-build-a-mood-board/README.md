# Build a Mood Board

This is exercise **004** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals lab focused on reusable components, props, component composition, inline styles and responsive layouts.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-mood-board)

---

## 🇪🇸 Español

Este laboratorio desarrolla un mood board de destinos turísticos utilizando React, JSX y CSS.

La aplicación presenta seis destinos mediante instancias reutilizables del componente `MoodBoardItem`. Cada elemento recibe un color, una imagen y una descripción a través de props.

## Funcionalidades

- Crea un componente reutilizable llamado `MoodBoardItem`.
- Crea un componente principal llamado `MoodBoard`.
- Exporta ambos componentes.
- Presenta seis destinos turísticos.
- Envía información mediante props.
- Utiliza desestructuración de props.
- Aplica un color diferente a cada tarjeta.
- Aplica estilos en línea mediante un objeto de JavaScript.
- Muestra una imagen para cada destino.
- Utiliza la descripción como texto alternativo.
- Organiza las tarjetas con CSS Grid.
- Adapta la cantidad de columnas al ancho de la pantalla.
- Renderiza la aplicación mediante ReactDOM.

## Destinos

El mood board contiene los siguientes destinos:

- Caribbean.
- Gwadar Beach.
- Cape Town.
- Suez Canal.
- Santorini.
- Istanbul.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Componentes reutilizables.
- Composición de componentes.
- Props.
- Desestructuración de objetos.
- Exportaciones con nombre.
- Importación de componentes.
- Expresiones de JavaScript en JSX.
- Estilos en línea en React.
- Objetos de JavaScript.
- `style`.
- `backgroundColor`.
- Imágenes.
- Texto alternativo.
- HTML semántico.
- ReactDOM.
- `createRoot()`.
- CSS Grid.
- Flexbox.
- `object-fit`.
- Media queries.
- Responsive Design.

## Componente MoodBoardItem

El componente reutilizable recibe tres props:

```jsx
export function MoodBoardItem({
  color,
  image,
  description
}) {
```

Las props representan:

- `color`: color de fondo de la tarjeta.
- `image`: dirección de la imagen del destino.
- `description`: nombre y descripción accesible del destino.

El componente devuelve una tarjeta:

```jsx
<article
  className="mood-board-item"
  style={{ backgroundColor: color }}
>
  <img
    className="mood-board-image"
    src={image}
    alt={description}
  />

  <h3 className="mood-board-text">
    {description}
  </h3>
</article>
```

## Reutilización

La misma estructura se utiliza para crear diferentes tarjetas:

```jsx
<MoodBoardItem
  color="#2da84f"
  image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
  description="Caribbean"
/>
```

Otra instancia puede recibir datos diferentes:

```jsx
<MoodBoardItem
  color="#9844b3"
  image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
  description="Gwadar Beach"
/>
```

Aunque ambas instancias utilizan el mismo componente, muestran contenidos y colores diferentes.

## Props

El componente padre envía los valores:

```jsx
<MoodBoardItem
  color="#379bd3"
  image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
  description="Cape Town"
/>
```

El componente hijo recibe esos valores:

```jsx
function MoodBoardItem({
  color,
  image,
  description
})
```

Este flujo de información ocurre desde el componente padre hacia el componente hijo.

## Desestructuración

Las props se desestructuran directamente en los parámetros:

```jsx
{ color, image, description }
```

Sin desestructuración, podría escribirse:

```jsx
function MoodBoardItem(props) {
  return (
    <img
      src={props.image}
      alt={props.description}
    />
  );
}
```

La desestructuración permite escribir:

```jsx
src={image}
alt={description}
```

y mantiene el componente más legible.

## Estilos en línea en React

Cada tarjeta recibe un color diferente mediante:

```jsx
style={{ backgroundColor: color }}
```

En React, el atributo `style` recibe un objeto de JavaScript.

Las dos llaves tienen funciones distintas:

```jsx
style={{ backgroundColor: color }}
```

- Las llaves exteriores permiten insertar JavaScript dentro de JSX.
- Las llaves interiores crean el objeto de estilos.

El objeto utilizado es equivalente a:

```js
{
  backgroundColor: color
}
```

## Propiedades CSS en JSX

En CSS tradicional se utiliza:

```css
background-color: green;
```

En un objeto de estilos de React se utiliza camelCase:

```jsx
backgroundColor: color
```

Los nombres con guiones se convierten a camelCase.

Otros ejemplos serían:

```text
font-size       → fontSize
text-align      → textAlign
border-radius   → borderRadius
```

## Imágenes dinámicas

La dirección de cada imagen llega mediante la prop `image`:

```jsx
src={image}
```

Esto permite que el componente muestre una imagen distinta en cada instancia.

## Texto alternativo

La descripción también se utiliza como texto alternativo:

```jsx
alt={description}
```

Si la imagen no puede verse, o si una persona utiliza un lector de pantalla, el texto alternativo comunica qué destino representa.

## Componente MoodBoard

El componente principal organiza el título y las tarjetas:

```jsx
export function MoodBoard() {
  return (
    <main>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <section className="mood-board">
        {/* MoodBoardItem components */}
      </section>
    </main>
  );
}
```

`MoodBoard` funciona como componente padre y `MoodBoardItem` como componente hijo.

## Composición de componentes

React permite construir interfaces combinando componentes pequeños.

En este proyecto:

```text
MoodBoard
   ├── MoodBoardItem
   ├── MoodBoardItem
   ├── MoodBoardItem
   ├── MoodBoardItem
   ├── MoodBoardItem
   └── MoodBoardItem
```

El componente principal se ocupa de la composición general. Cada tarjeta se ocupa de presentar un destino.

## Exportaciones con nombre

Los dos componentes se exportan:

```jsx
export function MoodBoardItem() {
  // ...
}

export function MoodBoard() {
  // ...
}
```

El documento HTML importa `MoodBoard`:

```jsx
import { MoodBoard } from "./index.jsx";
```

Las llaves se utilizan porque es una exportación con nombre.

## Renderizado

El archivo HTML contiene:

```html
<div id="root"></div>
```

React encuentra ese elemento:

```jsx
document.getElementById("root")
```

Después renderiza el componente:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<MoodBoard />);
```

## Distribución con CSS Grid

El contenedor utiliza CSS Grid:

```css
.mood-board {
  display: grid;
  gap: 20px;
}
```

En pantallas pequeñas se muestra una columna:

```css
grid-template-columns: 1fr;
```

Desde `600px` se muestran dos:

```css
@media (min-width: 600px) {
  .mood-board {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

Desde `900px` se muestran tres:

```css
@media (min-width: 900px) {
  .mood-board {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Tratamiento de imágenes

Las imágenes utilizan:

```css
object-fit: cover;
```

Esta propiedad permite llenar el área asignada sin deformar la imagen. Si las proporciones no coinciden, se recortan sus bordes.

## Flujo de la aplicación

```text
El navegador carga index.html
              ↓
Se cargan React, ReactDOM y Babel
              ↓
Se importa MoodBoard
              ↓
ReactDOM renderiza MoodBoard
              ↓
MoodBoard crea seis MoodBoardItem
              ↓
Cada instancia recibe sus props
              ↓
MoodBoardItem aplica los datos
              ↓
CSS Grid organiza las tarjetas
```

## Complejidad

La versión actual renderiza una cantidad fija de seis componentes:

```text
O(1)
```

Si los destinos se almacenaran en un arreglo de `n` elementos y se generaran con `map()`, el renderizado sería:

```text
O(n)
```

---

## 🇺🇸 English

This lab builds a destination mood board using React, JSX and CSS.

The application displays six destinations through reusable instances of the `MoodBoardItem` component. Each instance receives a color, image and description through props.

## Features

- Creates a reusable `MoodBoardItem` component.
- Creates a main `MoodBoard` component.
- Exports both components.
- Displays six travel destinations.
- Passes information through props.
- Uses prop destructuring.
- Applies a different color to every card.
- Uses a JavaScript object for inline styles.
- Displays an image for every destination.
- Uses each description as alternative text.
- Organizes cards with CSS Grid.
- Adjusts the number of columns for different screen sizes.
- Renders the application with ReactDOM.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Reusable components.
- Component composition.
- Props.
- Object destructuring.
- Named exports.
- Component imports.
- JavaScript expressions in JSX.
- Inline styles in React.
- JavaScript objects.
- `style`.
- `backgroundColor`.
- Images.
- Alternative text.
- Semantic HTML.
- ReactDOM.
- `createRoot()`.
- CSS Grid.
- Flexbox.
- `object-fit`.
- Media queries.
- Responsive Design.

## Reusable component

`MoodBoardItem` receives three props:

```jsx
export function MoodBoardItem({
  color,
  image,
  description
}) {
```

The component uses these values to build a destination card:

```jsx
<article
  className="mood-board-item"
  style={{ backgroundColor: color }}
>
  <img
    className="mood-board-image"
    src={image}
    alt={description}
  />

  <h3 className="mood-board-text">
    {description}
  </h3>
</article>
```

## Component reuse

The same component can display different information:

```jsx
<MoodBoardItem
  color="#2da84f"
  image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
  description="Caribbean"
/>
```

Each instance has the same structure but receives different prop values.

## Inline styles

The background color is applied with:

```jsx
style={{ backgroundColor: color }}
```

In React, the `style` attribute receives a JavaScript object.

CSS properties with hyphens use camelCase in JSX:

```text
background-color → backgroundColor
```

## Component composition

The `MoodBoard` component combines six smaller `MoodBoardItem` components.

This demonstrates how React interfaces can be built by composing smaller reusable elements.

## Images and accessibility

The image URL is provided dynamically:

```jsx
src={image}
```

The destination description provides alternative text:

```jsx
alt={description}
```

This makes the image information available when the image cannot be displayed and to users of assistive technologies.

## Responsive grid

CSS Grid organizes the cards into:

- One column on small screens.
- Two columns on medium screens.
- Three columns on larger screens.

```css
@media (min-width: 900px) {
  .mood-board {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Rendering

The HTML document imports and renders the component:

```jsx
import { MoodBoard } from "./index.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(<MoodBoard />);
```

## 📁 Files

- `index.html`: Loads React, ReactDOM, Babel and renders the application.
- `index.jsx`: Contains the `MoodBoardItem` and `MoodBoard` components.
- `styles.css`: Defines the card design and responsive grid.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the fourth documented React Fundamentals exercise in my freeCodeCamp journey.

It practices reusable components, props, component composition, inline styles and responsive layouts.