# Build a Reusable Profile Card Component

This is exercise **003** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals workshop focused on reusable components, props, array iteration and dynamic rendering.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-reusable-profile-card-component)

---

## 🇪🇸 Español

Este workshop desarrolla un conjunto de tarjetas de perfil reutilizables utilizando React, JSX, props y el método `map()`.

La aplicación almacena la información de diferentes perfiles en un arreglo de objetos. Después recorre ese arreglo para renderizar dinámicamente una instancia del componente `Card` por cada perfil.

## Funcionalidades

- Crea un componente reutilizable llamado `Card`.
- Recibe información mediante props.
- Utiliza desestructuración de props.
- Muestra el nombre, el cargo y la biografía de cada persona.
- Almacena los perfiles en un arreglo de objetos.
- Recorre los perfiles con el método `map()`.
- Genera una tarjeta para cada perfil.
- Asigna una prop `key` única a cada componente.
- Exporta los componentes `Card` y `App`.
- Renderiza la aplicación mediante ReactDOM.
- Organiza las tarjetas mediante Flexbox.
- Adapta el ancho de las tarjetas según el tamaño de la pantalla.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Componentes reutilizables.
- Props.
- Desestructuración de objetos.
- Exportaciones con nombre.
- Importación de componentes.
- Arreglos de objetos.
- Método `map()`.
- Renderizado dinámico.
- Prop `key`.
- Expresiones de JavaScript en JSX.
- ReactDOM.
- `createRoot()`.
- HTML semántico.
- Flexbox.
- Variables CSS.
- Media queries.
- Responsive Design.

## Componente reutilizable

El componente `Card` recibe tres props:

```jsx
export function Card({ name, title, bio }) {
```

Estas props contienen:

- `name`: nombre de la persona.
- `title`: puesto o título profesional.
- `bio`: breve descripción del perfil.

El componente devuelve una tarjeta:

```jsx
return (
  <article className="card">
    <h2>{name}</h2>

    <p className="card-title">
      {title}
    </p>

    <p>{bio}</p>
  </article>
);
```

La misma estructura puede utilizarse para mostrar diferentes personas sin duplicar manualmente el marcado JSX.

## Props

Las props permiten enviar información desde un componente padre hacia un componente hijo.

El componente `App` envía los datos:

```jsx
<Card
  name={profile.name}
  title={profile.title}
  bio={profile.bio}
/>
```

El componente `Card` los recibe:

```jsx
function Card({ name, title, bio })
```

Cada instancia de `Card` utiliza la misma estructura, pero muestra datos diferentes.

## Desestructuración de props

En lugar de escribir:

```jsx
export function Card(props) {
  return <h2>{props.name}</h2>;
}
```

se desestructuran directamente las propiedades:

```jsx
export function Card({ name, title, bio }) {
```

Esto permite utilizar:

```jsx
{name}
{title}
{bio}
```

y mantiene el componente más claro y legible.

## Expresiones de JavaScript en JSX

Las llaves permiten insertar expresiones de JavaScript dentro de JSX:

```jsx
<h2>{name}</h2>
```

React evalúa `name` y muestra su valor dentro del encabezado.

Lo mismo ocurre con:

```jsx
<p>{bio}</p>
```

## Arreglo de perfiles

El componente `App` contiene un arreglo de objetos:

```jsx
const profiles = [
  {
    id: 1,
    name: "Mark",
    title: "Front-End Developer",
    bio: "I like to work with different front-end technologies and play video games."
  },
  {
    id: 2,
    name: "Tiffany",
    title: "Engineering Manager",
    bio: "I have worked in tech for 15 years and love to help people grow in this industry."
  },
  {
    id: 3,
    name: "Doug",
    title: "Back-End Developer",
    bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
  }
];
```

Cada objeto representa un perfil independiente.

Todos los objetos poseen la misma estructura:

```text
id
name
title
bio
```

## Renderizado dinámico con map()

El método `map()` recorre el arreglo:

```jsx
profiles.map((profile) => (
  <Card
    key={profile.id}
    name={profile.name}
    title={profile.title}
    bio={profile.bio}
  />
))
```

Por cada objeto, `map()` devuelve una instancia del componente `Card`.

El proceso es:

```text
profiles
   ↓
map() recorre cada perfil
   ↓
Crea un componente Card
   ↓
Envía sus datos mediante props
   ↓
React renderiza la tarjeta
```

Si se agrega otro objeto al arreglo, React puede generar automáticamente otra tarjeta sin modificar la estructura del componente.

## Prop key

Cada componente generado dentro de una lista recibe una prop `key`:

```jsx
key={profile.id}
```

La `key` ayuda a React a identificar qué elementos:

- Cambiaron.
- Se agregaron.
- Se eliminaron.
- Deben volver a renderizarse.

Cada `key` debe ser estable y única entre los elementos de la misma lista.

En este proyecto se utiliza:

```jsx
profile.id
```

porque cada perfil posee un identificador diferente.

La prop `key` se coloca en el componente creado dentro de `map()`:

```jsx
<Card key={profile.id} />
```

React utiliza `key` internamente. No llega al componente como una prop normal.

## Componente App

El componente `App` administra los datos y genera las tarjetas:

```jsx
export function App() {
  const profiles = [
    // Perfiles
  ];

  return (
    <main className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </main>
  );
}
```

En este caso:

- `App` funciona como componente padre.
- `Card` funciona como componente hijo.
- `App` envía datos a `Card` mediante props.

## Separación de responsabilidades

Cada componente posee una responsabilidad concreta:

### `App`

- Almacena los datos.
- Recorre el arreglo.
- Genera las tarjetas.
- Envía las props.

### `Card`

- Recibe los datos.
- Define la estructura visual de un perfil.
- Muestra el nombre, el cargo y la biografía.

Esta separación permite mantener el código organizado y reutilizable.

## Exportaciones con nombre

Los dos componentes se exportan:

```jsx
export function Card() {
  // ...
}

export function App() {
  // ...
}
```

El documento principal importa `App`:

```jsx
import { App } from "./index.jsx";
```

Las llaves son necesarias porque `App` es una exportación con nombre.

## Renderizado de la aplicación

El archivo HTML contiene:

```html
<div id="root"></div>
```

React encuentra ese elemento y crea la raíz:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
)
```

Finalmente renderiza:

```jsx
.render(<App />);
```

El componente `App` genera las tres tarjetas y las inserta dentro de `root`.

## Diseño responsive

En dispositivos pequeños, las tarjetas utilizan todo el ancho disponible:

```css
.card {
  width: 100%;
}
```

A partir de `768px`, cada tarjeta posee un ancho de `300px`:

```css
@media (min-width: 768px) {
  .card {
    width: 300px;
  }
}
```

El contenedor utiliza Flexbox:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
```

`flex-wrap` permite que las tarjetas se distribuyan en varias filas cuando no existe suficiente espacio.

## Flujo de la aplicación

```text
El navegador carga index.html
              ↓
Se cargan React, ReactDOM y Babel
              ↓
Se importa el componente App
              ↓
ReactDOM renderiza App
              ↓
App crea el arreglo profiles
              ↓
map() recorre los perfiles
              ↓
Se crea un Card por cada perfil
              ↓
Los datos se envían mediante props
              ↓
Las tarjetas aparecen en pantalla
```

## Complejidad

Si el arreglo contiene `n` perfiles, `map()` recorre sus elementos una vez:

```text
O(n)
```

La aplicación genera una tarjeta por cada perfil, por lo que el espacio utilizado por los elementos renderizados también es:

```text
O(n)
```

---

## 🇺🇸 English

This workshop builds a collection of reusable profile cards using React, JSX, props and the `map()` method.

The application stores profile information in an array of objects and dynamically renders one `Card` component for every profile.

## Features

- Creates a reusable `Card` component.
- Receives information through props.
- Uses object destructuring.
- Displays each person's name, job title and biography.
- Stores profiles in an array of objects.
- Iterates through profiles with `map()`.
- Generates one card for every profile.
- Assigns a unique `key` prop to every component.
- Exports the `Card` and `App` components.
- Renders the application with ReactDOM.
- Organizes cards with Flexbox.
- Adapts card widths to different screen sizes.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Reusable components.
- Props.
- Object destructuring.
- Named exports.
- Component imports.
- Arrays of objects.
- `map()`.
- Dynamic rendering.
- The `key` prop.
- JavaScript expressions in JSX.
- ReactDOM.
- `createRoot()`.
- Semantic HTML.
- Flexbox.
- CSS custom properties.
- Media queries.
- Responsive Design.

## Reusable component

The `Card` component receives three props:

```jsx
export function Card({ name, title, bio }) {
```

These props provide the profile's name, professional title and biography.

The component returns the same visual structure for every person:

```jsx
return (
  <article className="card">
    <h2>{name}</h2>

    <p className="card-title">
      {title}
    </p>

    <p>{bio}</p>
  </article>
);
```

## Props

Props pass information from a parent component to a child component.

The `App` component provides the values:

```jsx
<Card
  name={profile.name}
  title={profile.title}
  bio={profile.bio}
/>
```

The `Card` component receives them:

```jsx
function Card({ name, title, bio })
```

Every card uses the same component structure while displaying different information.

## Array of profiles

The `profiles` array contains three objects.

Each object uses the same data structure:

```text
id
name
title
bio
```

This makes it possible to process all profiles consistently.

## Dynamic rendering with map()

The `map()` method iterates through the array:

```jsx
profiles.map((profile) => (
  <Card
    key={profile.id}
    name={profile.name}
    title={profile.title}
    bio={profile.bio}
  />
))
```

For every profile, it returns a new `Card` component.

Adding another profile object to the array would automatically produce another card.

## The key prop

Every component rendered from a list receives a unique `key`:

```jsx
key={profile.id}
```

Keys help React identify elements that have changed, been added or been removed.

The `key` is placed on the component generated directly inside `map()`:

```jsx
<Card key={profile.id} />
```

React uses `key` internally. It is not passed to `Card` as a regular prop.

## Parent and child components

In this application:

- `App` is the parent component.
- `Card` is the child component.
- `App` stores and processes the data.
- `Card` displays the data.
- Props connect both components.

This separation keeps the application organized and makes the card reusable.

## Responsive layout

The cards use the full available width on smaller screens:

```css
.card {
  width: 100%;
}
```

On screens at least `768px` wide, each card uses a fixed width:

```css
@media (min-width: 768px) {
  .card {
    width: 300px;
  }
}
```

## Complexity

For `n` profiles, `map()` performs one iteration per profile:

```text
O(n)
```

The number of rendered cards is also proportional to the number of profiles:

```text
O(n)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM, Babel and renders the application.
- `index.jsx`: Contains the `Card` and `App` components and the profile data.
- `styles.css`: Defines the cards, layout, colors and responsive behavior.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the third documented React Fundamentals exercise in my freeCodeCamp journey.

It introduces reusable components, props, object destructuring, list rendering and React keys.