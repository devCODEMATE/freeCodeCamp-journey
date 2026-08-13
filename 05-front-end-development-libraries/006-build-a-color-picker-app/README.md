# Build a Color Picker App

This is exercise **006** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals lab focused on the `useState` hook, controlled inputs, event handling and dynamic inline styles.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-color-picker)

---

## 🇪🇸 Español

Este laboratorio desarrolla una aplicación para seleccionar colores utilizando React y el hook `useState`.

La aplicación comienza con un fondo blanco. Cuando el usuario selecciona otro color mediante el input, React actualiza el estado del componente y cambia dinámicamente el fondo del contenedor.

## Funcionalidades

- Define y exporta el componente `ColorPicker`.
- Utiliza el hook `useState`.
- Inicializa el estado con el color blanco.
- Incluye un input de tipo `color`.
- Controla el valor del input mediante el estado.
- Escucha los cambios mediante `onChange`.
- Obtiene el nuevo color desde el objeto del evento.
- Actualiza el estado con `setColor`.
- Cambia dinámicamente el fondo del contenedor.
- Renderiza el componente mediante ReactDOM.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- Estado.
- Variables de estado.
- Funciones actualizadoras.
- Desestructuración de arreglos.
- Desestructuración de objetos.
- Eventos en React.
- `onChange`.
- Objetos de evento.
- `event.target.value`.
- Inputs controlados.
- Atributo `value`.
- Estilos en línea.
- Objetos de estilos.
- Renderizado dinámico.
- Re-renderizado.
- Exportaciones con nombre.
- Importación de componentes.
- ReactDOM.
- `createRoot()`.
- Flexbox.

## Importación de useState

El proyecto obtiene el hook `useState` desde el objeto global `React`:

```jsx
const { useState } = React;
```

Esta línea utiliza desestructuración de objetos.

Es equivalente a escribir:

```jsx
const useState = React.useState;
```

React está disponible como objeto global porque la biblioteca se carga en `index.html` mediante un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
```

Después de cargar ese script, es posible acceder a:

```jsx
React
```

y obtener el hook:

```jsx
React.useState
```

## Componente ColorPicker

La aplicación define un componente funcional llamado `ColorPicker`:

```jsx
export const ColorPicker = () => {
  // Lógica y JSX del componente
};
```

El nombre comienza con mayúscula porque React utiliza esta convención para diferenciar los componentes personalizados de los elementos HTML.

Por ejemplo:

```jsx
<ColorPicker />
```

representa un componente de React, mientras que:

```html
<div></div>
```

representa un elemento HTML.

## Exportación e importación del componente

En `index.jsx`, el componente se declara y se exporta:

```jsx
export const ColorPicker = () => {
  // Contenido del componente
};
```

La palabra `export` permite que `ColorPicker` pueda utilizarse fuera del archivo `index.jsx`.

Como se trata de una exportación con nombre, el componente debe importarse utilizando llaves:

```jsx
import { ColorPicker } from "./index.jsx";
```

Esta importación se realiza en el script principal de `index.html`:

```html
<script
  data-plugins="transform-modules-umd"
  type="text/babel"
  data-presets="react"
  data-type="module"
>
  import { ColorPicker } from "./index.jsx";

  ReactDOM.createRoot(
    document.getElementById("root")
  ).render(<ColorPicker />);
</script>
```

La relación entre ambos archivos es:

```text
index.jsx exporta ColorPicker
              ↓
index.html importa ColorPicker
              ↓
ReactDOM renderiza <ColorPicker />
```

Las llaves de la importación son necesarias porque se utilizó una exportación con nombre:

```jsx
export const ColorPicker = ...
```

## Creación del estado

El componente crea una variable de estado mediante:

```jsx
const [color, setColor] = useState("#ffffff");
```

`useState` devuelve un arreglo con dos valores:

- `color`: contiene el valor actual del estado.
- `setColor`: es la función utilizada para actualizarlo.

El valor inicial es:

```text
#ffffff
```

Este código hexadecimal representa el color blanco.

Por lo tanto, cuando el componente se renderiza por primera vez, el fondo comienza siendo blanco.

## Desestructuración del estado

La siguiente sintaxis utiliza desestructuración de arreglos:

```jsx
const [color, setColor] = useState("#ffffff");
```

Conceptualmente, `useState` devuelve algo similar a:

```js
[
  valorActual,
  funcionActualizadora
]
```

El primer elemento se guarda en:

```jsx
color
```

El segundo se guarda en:

```jsx
setColor
```

Por convención, el nombre de la función actualizadora comienza con `set`:

```text
color → setColor
```

## Input de color

La aplicación utiliza un input de tipo `color`:

```jsx
<input
  id="color-input"
  type="color"
  value={color}
  onChange={handleColorChange}
/>
```

El atributo:

```jsx
type="color"
```

indica al navegador que debe mostrar una interfaz para seleccionar colores.

El input se encuentra dentro del elemento:

```jsx
<div id="color-picker-container">
```

Esto cumple la estructura requerida por el laboratorio.

## Input controlado

El valor del input está conectado al estado:

```jsx
value={color}
```

Esto convierte al elemento en un input controlado.

En un input controlado, React administra el valor mostrado por el elemento:

```text
Estado color
     ↓
Prop value del input
     ↓
Color mostrado en el selector
```

Cuando el estado cambia, el valor del input también se actualiza.

## Manejo del evento

La función `handleColorChange` procesa los cambios realizados en el input:

```jsx
const handleColorChange = (event) => {
  setColor(event.target.value);
};
```

El parámetro:

```jsx
event
```

representa el objeto del evento generado por el input.

El elemento que originó el evento se obtiene mediante:

```jsx
event.target
```

El nuevo color seleccionado se encuentra en:

```jsx
event.target.value
```

Por ejemplo, el valor podría ser:

```text
#3498db
```

## Evento onChange

El input conecta el evento con la función:

```jsx
onChange={handleColorChange}
```

Cuando el usuario elige otro color, React ejecuta:

```jsx
handleColorChange(event);
```

No se incluyen paréntesis en:

```jsx
onChange={handleColorChange}
```

porque se está pasando una referencia a la función. React será quien la ejecute cuando ocurra el cambio.

## Actualización del estado

Dentro de la función se ejecuta:

```jsx
setColor(event.target.value);
```

`setColor` guarda el nuevo valor en el estado.

El estado no debe modificarse directamente de esta forma:

```jsx
color = event.target.value;
```

En React, debe utilizarse la función actualizadora proporcionada por `useState`.

## Re-renderizado

Cuando se ejecuta:

```jsx
setColor(nuevoColor);
```

React actualiza el estado y vuelve a renderizar el componente.

Durante el nuevo renderizado:

- `color` contiene el nuevo valor.
- El input recibe el nuevo valor.
- El fondo utiliza el nuevo color.

El flujo es:

```text
El usuario selecciona un color
              ↓
El input genera el evento onChange
              ↓
handleColorChange recibe el evento
              ↓
event.target.value obtiene el color
              ↓
setColor actualiza el estado
              ↓
React vuelve a renderizar
              ↓
El fondo muestra el nuevo color
```

## Fondo dinámico

El contenedor recibe un estilo en línea:

```jsx
style={{ backgroundColor: color }}
```

El valor de `backgroundColor` depende de la variable de estado `color`.

En el primer renderizado:

```jsx
color === "#ffffff"
```

Por lo tanto, React aplica un fondo blanco.

Si el usuario selecciona:

```text
#ff0000
```

el objeto de estilos pasa a representar:

```jsx
{
  backgroundColor: "#ff0000"
}
```

y el fondo cambia a rojo.

## Estilos en línea en React

En React, el atributo `style` recibe un objeto de JavaScript:

```jsx
style={{ backgroundColor: color }}
```

Los dos pares de llaves cumplen funciones diferentes:

- Las llaves exteriores insertan JavaScript dentro de JSX.
- Las llaves interiores crean el objeto de estilos.

El objeto utilizado es:

```js
{
  backgroundColor: color
}
```

En CSS tradicional, la propiedad se escribe con un guion:

```css
background-color: #ffffff;
```

En un objeto de estilos de React se escribe en camelCase:

```jsx
backgroundColor: color
```

## Identificadores requeridos

El contenedor utiliza el identificador:

```jsx
id="color-picker-container"
```

El selector utiliza:

```jsx
id="color-input"
```

La estructura es:

```jsx
<div id="color-picker-container">
  <input id="color-input" />
</div>
```

Estos identificadores permiten que las pruebas de freeCodeCamp encuentren los elementos requeridos.

También permiten aplicar los estilos CSS:

```css
#color-picker-container {
  background-color: #ffffff;
}

#color-input {
  height: 40px;
}
```

## Código completo del componente

```jsx
const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      id="color-picker-container"
      style={{ backgroundColor: color }}
    >
      <input
        id="color-input"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};
```

## Renderizado del componente

El documento HTML contiene el elemento raíz:

```html
<div id="root"></div>
```

React obtiene ese elemento mediante:

```jsx
document.getElementById("root")
```

Después crea la raíz de React:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
)
```

Finalmente renderiza el componente:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<ColorPicker />);
```

## Flujo completo de la aplicación

```text
El navegador carga index.html
              ↓
Se cargan React, ReactDOM y Babel
              ↓
index.html importa ColorPicker
              ↓
ReactDOM renderiza <ColorPicker />
              ↓
useState establece #ffffff
              ↓
El contenedor aparece con fondo blanco
              ↓
El usuario selecciona otro color
              ↓
onChange ejecuta handleColorChange
              ↓
setColor actualiza el estado
              ↓
React vuelve a renderizar el componente
              ↓
El contenedor muestra el nuevo color
```

## Complejidad

Cada interacción actualiza una cantidad fija de datos y elementos.

Por lo tanto, la complejidad temporal de cada cambio es:

```text
O(1)
```

El componente utiliza una única variable de estado, por lo que el espacio adicional también es constante:

```text
O(1)
```

---

## 🇺🇸 English

This lab builds a color picker application using React and the `useState` hook.

The application starts with a white background. When the user selects another color through the input, React updates the component state and dynamically changes the container background.

## Features

- Defines and exports a `ColorPicker` component.
- Uses the `useState` hook.
- Initializes the state with white.
- Includes a color input.
- Controls the input value through state.
- Handles changes with `onChange`.
- Reads the new color from the event object.
- Updates the state with `setColor`.
- Dynamically changes the container background.
- Renders the component with ReactDOM.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Hooks.
- `useState`.
- State variables.
- State updater functions.
- Array destructuring.
- Object destructuring.
- React events.
- `onChange`.
- Event objects.
- `event.target.value`.
- Controlled inputs.
- Inline styles.
- JavaScript style objects.
- Dynamic rendering.
- Re-rendering.
- Named exports.
- Component imports.
- ReactDOM.
- `createRoot()`.
- Flexbox.

## Importing useState

The project obtains `useState` from the global React object:

```jsx
const { useState } = React;
```

This line uses object destructuring.

It is equivalent to:

```jsx
const useState = React.useState;
```

The global `React` object is available because the React library is loaded from a CDN in `index.html`.

## ColorPicker component

The application defines and exports a functional component:

```jsx
export const ColorPicker = () => {
  // Component logic and JSX
};
```

The component name begins with an uppercase letter because React uses this convention to distinguish custom components from HTML elements.

## Exporting and importing the component

The component is exported from `index.jsx`:

```jsx
export const ColorPicker = () => {
  // Component content
};
```

The `export` keyword makes the component available outside that file.

Because this is a named export, it is imported using curly braces:

```jsx
import { ColorPicker } from "./index.jsx";
```

The relationship between the files is:

```text
index.jsx exports ColorPicker
              ↓
index.html imports ColorPicker
              ↓
ReactDOM renders <ColorPicker />
```

## Creating state

The component creates state with:

```jsx
const [color, setColor] = useState("#ffffff");
```

`useState` provides two values:

- `color`: the current state value.
- `setColor`: the function used to update the state.

The initial value is:

```text
#ffffff
```

which represents white.

## Controlled input

The color input receives its value from the state:

```jsx
<input
  id="color-input"
  type="color"
  value={color}
  onChange={handleColorChange}
/>
```

Because its `value` is connected to `color`, React controls the value displayed by the input.

## Event handling

The input uses:

```jsx
onChange={handleColorChange}
```

When the user selects another color, React calls the event handler:

```jsx
const handleColorChange = (event) => {
  setColor(event.target.value);
};
```

The expression:

```jsx
event.target.value
```

provides the new hexadecimal color value.

## Updating state

The state is updated with:

```jsx
setColor(event.target.value);
```

State should not be modified by directly assigning another value to `color`.

Calling `setColor` tells React that the state changed and that the component needs to render again.

## Dynamic background

The container background depends on the current state:

```jsx
style={{ backgroundColor: color }}
```

When `color` changes, React applies the new value to the inline style.

The `style` attribute receives a JavaScript object:

```js
{
  backgroundColor: color
}
```

React style properties use camelCase:

```text
background-color → backgroundColor
```

## Re-rendering flow

```text
The user selects a color
          ↓
The input triggers onChange
          ↓
handleColorChange reads the event
          ↓
setColor updates state
          ↓
React renders the component again
          ↓
The background displays the new color
```

## Required identifiers

The container uses:

```jsx
id="color-picker-container"
```

The input uses:

```jsx
id="color-input"
```

The input is nested inside the container, as required by the lab:

```jsx
<div id="color-picker-container">
  <input id="color-input" />
</div>
```

## Rendering the component

The HTML document imports the component:

```jsx
import { ColorPicker } from "./index.jsx";
```

ReactDOM then renders it inside the root element:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<ColorPicker />);
```

## Complexity

Every interaction updates a fixed number of values and elements:

```text
O(1)
```

The component uses one state variable, so its additional space is also constant:

```text
O(1)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel, imports the component and renders it.
- `index.jsx`: Contains the `ColorPicker` component and its state logic.
- `styles.css`: Defines the full-screen layout and visual presentation.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the sixth documented React Fundamentals exercise in my freeCodeCamp journey.

It introduces React state, the `useState` hook, controlled inputs, event handling, re-rendering and dynamic inline styles.