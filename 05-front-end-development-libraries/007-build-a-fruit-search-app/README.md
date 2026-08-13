# Build a Fruit Search App

This is exercise **007** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals workshop focused on state, effects, API requests, debouncing, cleanup functions and conditional rendering.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-fruit-search-app)

---

## 🇪🇸 Español

Este workshop desarrolla una aplicación de búsqueda de frutas utilizando React, los hooks `useState` y `useEffect`, la Fetch API y renderizado condicional.

La aplicación guarda el texto ingresado por el usuario, espera 700 milisegundos después del último cambio y consulta una API. Después muestra los nombres de las frutas que coinciden con la búsqueda.

## Funcionalidades

- Define y exporta el componente `FruitsSearch`.
- Utiliza los hooks `useState` y `useEffect`.
- Mantiene el texto de búsqueda en el estado.
- Mantiene los resultados en un arreglo de estado.
- Utiliza un input controlado.
- Evita el envío tradicional del formulario.
- Ignora consultas vacías.
- Espera 700 milisegundos antes de consultar la API.
- Cancela búsquedas pendientes mediante una función de limpieza.
- Consulta una API mediante `fetch()`.
- Convierte la respuesta a JSON.
- Extrae los nombres de las frutas mediante `map()`.
- Maneja errores con `try...catch`.
- Renderiza los resultados dinámicamente.
- Utiliza una `key` para cada resultado.
- Muestra un mensaje cuando no existen resultados.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- `useEffect`.
- Estado.
- Efectos secundarios.
- Arreglo de dependencias.
- Inputs controlados.
- Eventos.
- `onChange`.
- `onSubmit`.
- `preventDefault()`.
- Funciones asíncronas.
- Fetch API.
- Promesas.
- `async` y `await`.
- JSON.
- `try...catch`.
- Manejo de errores.
- `setTimeout()`.
- `clearTimeout()`.
- Debounce.
- Funciones de limpieza.
- `trim()`.
- `map()`.
- Renderizado de listas.
- Prop `key`.
- Operador ternario.
- Renderizado condicional.

## Importación de los hooks

Los hooks se obtienen desde el objeto global `React`:

```jsx
const { useState, useEffect } = React;
```

Esta expresión utiliza desestructuración de objetos.

Es equivalente a escribir:

```jsx
const useState = React.useState;
const useEffect = React.useEffect;
```

React está disponible globalmente porque la biblioteca se carga mediante un CDN en `index.html`.

## Componente FruitsSearch

El componente se define y exporta mediante:

```jsx
export function FruitsSearch() {
  // Estado, efecto y JSX
}
```

`export` permite utilizar el componente fuera de `index.jsx`.

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import { FruitsSearch } from "./index.jsx";
```

La relación entre los archivos es:

```text
index.jsx exporta FruitsSearch
                ↓
index.html importa FruitsSearch
                ↓
ReactDOM renderiza <FruitsSearch />
```

## Estados de la aplicación

El componente utiliza dos variables de estado:

```jsx
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
```

### Estado query

`query` almacena el texto ingresado en el buscador.

Su valor inicial es una cadena vacía:

```jsx
useState("")
```

`setQuery` permite actualizarlo.

### Estado results

`results` almacena los nombres obtenidos desde la API.

Su valor inicial es un arreglo vacío:

```jsx
useState([])
```

`setResults` permite reemplazar el arreglo cuando llegan nuevos datos.

## Input controlado

El input recibe su valor desde el estado:

```jsx
<input
  id="search-input"
  type="search"
  value={query}
  onChange={(event) =>
    setQuery(event.target.value)
  }
/>
```

El valor escrito se obtiene mediante:

```jsx
event.target.value
```

Luego se guarda con:

```jsx
setQuery(event.target.value)
```

El flujo es:

```text
El usuario escribe
        ↓
Se ejecuta onChange
        ↓
Se obtiene event.target.value
        ↓
setQuery actualiza el estado
        ↓
React vuelve a renderizar
```

## Envío del formulario

El formulario utiliza:

```jsx
<form onSubmit={handleSubmit}>
```

La función correspondiente es:

```jsx
function handleSubmit(event) {
  event.preventDefault();
}
```

`preventDefault()` evita que el navegador recargue la página cuando se envía el formulario.

La búsqueda se controla mediante el cambio de `query`, por lo que no necesita ejecutarse desde el evento `submit`.

## Hook useEffect

El efecto se ejecuta cuando cambia `query`:

```jsx
useEffect(() => {
  // Efecto
}, [query]);
```

El arreglo:

```jsx
[query]
```

es el arreglo de dependencias.

Esto le indica a React que debe ejecutar el efecto después del renderizado inicial y cada vez que cambie el valor de `query`.

## Consultas vacías

Antes de solicitar datos, se verifica el texto:

```jsx
if (query.trim() === "") {
  setResults([]);
  return;
}
```

`trim()` elimina los espacios al principio y al final.

Por ejemplo:

```js
"   ".trim();
// ""
```

Si la consulta está vacía:

- Los resultados se limpian.
- No se programa una solicitud.
- El efecto termina mediante `return`.

## Debounce

La consulta no se ejecuta inmediatamente. Se programa con:

```jsx
const timeoutId = setTimeout(async () => {
  // Consulta
}, 700);
```

Esto espera 700 milisegundos antes de realizar la petición.

Si el usuario continúa escribiendo durante ese tiempo, React limpia el temporizador anterior y crea uno nuevo.

Esta técnica se conoce como debounce.

Su objetivo es evitar una solicitud por cada tecla presionada.

```text
El usuario escribe "a"
        ↓
Comienza una espera de 700 ms
        ↓
Escribe "p" antes de terminar
        ↓
Se cancela la espera anterior
        ↓
Comienza una nueva espera
        ↓
Deja de escribir durante 700 ms
        ↓
Se consulta la API
```

## Función de limpieza

El efecto devuelve:

```jsx
return () => clearTimeout(timeoutId);
```

Esta es una función de limpieza.

React la ejecuta antes de volver a ejecutar el efecto o cuando el componente deja de mostrarse.

`clearTimeout()` cancela el temporizador pendiente y evita que varias consultas retrasadas se acumulen.

## Consulta a la API

La solicitud utiliza:

```jsx
const response = await fetch(
  `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`
);
```

El valor de `query` se inserta dentro de la URL mediante un template literal.

Por ejemplo, si el usuario escribe:

```text
apple
```

la dirección será:

```text
https://fruit-search.freecodecamp.rocks/api/fruits?q=apple
```

## Conversión a JSON

La respuesta se convierte mediante:

```jsx
const data = await response.json();
```

`response.json()` devuelve una promesa, por eso se utiliza `await`.

El resultado es un arreglo de objetos que representa las frutas encontradas.

## Transformación de los resultados

La aplicación guarda solamente la propiedad `name` de cada fruta:

```jsx
setResults(
  data.map((fruit) => fruit.name)
);
```

`map()` transforma cada objeto en su nombre:

```text
[
  { name: "Apple" },
  { name: "Pineapple" }
]
          ↓ map()
[
  "Apple",
  "Pineapple"
]
```

El nuevo arreglo se guarda en el estado `results`.

## Manejo de errores

La solicitud se ejecuta dentro de:

```jsx
try {
  // Consulta y procesamiento
} catch (error) {
  console.error(
    "Error fetching data:",
    error
  );
}
```

Si la consulta o el procesamiento fallan, el error se registra en la consola.

## Renderizado condicional

La aplicación comprueba la cantidad de resultados:

```jsx
results.length > 0
```

Después utiliza el operador ternario:

```jsx
{results.length > 0 ? (
  // Mostrar resultados
) : (
  <p>No results found</p>
)}
```

Si el arreglo contiene elementos, muestra las frutas.

Si está vacío, muestra:

```text
No results found
```

## Renderizado de la lista

Los nombres se recorren mediante:

```jsx
results.map((item) => (
  <p
    key={item}
    className="result-item"
  >
    {item}
  </p>
))
```

Por cada nombre se genera un párrafo.

La expresión:

```jsx
{item}
```

muestra el nombre de la fruta.

## Prop key

Cada elemento generado recibe:

```jsx
key={item}
```

La `key` ayuda a React a identificar cada resultado dentro de la lista.

En este workshop, el nombre de la fruta funciona como identificador porque los resultados esperados poseen nombres diferentes.

## Renderizado del componente

El HTML contiene:

```html
<div id="root"></div>
```

Después importa el componente:

```jsx
import { FruitsSearch } from "./index.jsx";
```

Finalmente, ReactDOM lo renderiza:

```jsx
ReactDOM.createRoot(
  document.getElementById("root")
).render(<FruitsSearch />);
```

## Flujo completo

```text
React renderiza FruitsSearch
            ↓
El usuario escribe en el input
            ↓
setQuery actualiza query
            ↓
useEffect detecta el cambio
            ↓
Se programa un temporizador
            ↓
El usuario deja de escribir 700 ms
            ↓
fetch consulta la API
            ↓
La respuesta se convierte a JSON
            ↓
map() extrae los nombres
            ↓
setResults actualiza el estado
            ↓
React renderiza los resultados
```

## Complejidad

Si la API devuelve `n` frutas, `map()` recorre los resultados una vez:

```text
O(n)
```

El renderizado también crea un elemento por cada fruta:

```text
O(n)
```

El arreglo de nombres necesita espacio proporcional a los resultados:

```text
O(n)
```

---

## 🇺🇸 English

This workshop builds a fruit search application using React, the `useState` and `useEffect` hooks, the Fetch API and conditional rendering.

The application stores the user's search query, waits 700 milliseconds after the latest change and requests matching fruits from an API.

## Features

- Defines and exports a `FruitsSearch` component.
- Uses `useState` and `useEffect`.
- Stores the search query in state.
- Stores API results in state.
- Uses a controlled search input.
- Prevents the form's default submission.
- Ignores empty queries.
- Waits 700 milliseconds before fetching.
- Cancels pending timeouts with a cleanup function.
- Retrieves information with `fetch()`.
- Parses a JSON response.
- Extracts fruit names with `map()`.
- Handles errors with `try...catch`.
- Dynamically renders matching fruits.
- Assigns a `key` to every result.
- Displays a message when there are no results.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Hooks.
- `useState`.
- `useEffect`.
- State.
- Side effects.
- Dependency arrays.
- Controlled inputs.
- React events.
- `onChange`.
- `onSubmit`.
- `preventDefault()`.
- Asynchronous functions.
- Fetch API.
- Promises.
- `async` and `await`.
- JSON.
- Error handling.
- `setTimeout()`.
- `clearTimeout()`.
- Debouncing.
- Effect cleanup.
- `trim()`.
- `map()`.
- List rendering.
- React keys.
- Ternary operators.
- Conditional rendering.

## State

The application creates two state values:

```jsx
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
```

`query` contains the text entered by the user.

`results` contains the fruit names returned by the API.

## Controlled search input

The search field receives its value from `query`:

```jsx
<input
  id="search-input"
  type="search"
  value={query}
  onChange={(event) =>
    setQuery(event.target.value)
  }
/>
```

Every change updates the state through `setQuery`.

## The useEffect hook

The effect depends on `query`:

```jsx
useEffect(() => {
  // Search effect
}, [query]);
```

React runs it whenever the query changes.

If the trimmed query is empty, the results are cleared and no request is scheduled.

## Debouncing

The request is delayed by 700 milliseconds:

```jsx
const timeoutId = setTimeout(async () => {
  // API request
}, 700);
```

The effect returns a cleanup function:

```jsx
return () => clearTimeout(timeoutId);
```

If the query changes before the delay ends, React cancels the previous timeout.

This prevents unnecessary requests while the user is still typing.

## Fetching the data

The application requests matching fruits:

```jsx
const response = await fetch(
  `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`
);
```

It then parses the JSON response:

```jsx
const data = await response.json();
```

## Transforming results

Only the fruit names are stored:

```jsx
setResults(
  data.map((fruit) => fruit.name)
);
```

`map()` creates a new array containing the `name` property from every returned object.

## Conditional rendering

The component checks whether results exist:

```jsx
results.length > 0
```

When results are available, it renders them with `map()`.

Otherwise, it displays:

```text
No results found
```

## Rendering lists and keys

Every fruit is rendered as a paragraph:

```jsx
results.map((item) => (
  <p
    key={item}
    className="result-item"
  >
    {item}
  </p>
))
```

The `key` helps React identify each item in the rendered list.

## Effect flow

```text
The user types a query
          ↓
setQuery updates state
          ↓
useEffect detects the change
          ↓
A 700 ms timeout begins
          ↓
Previous timeouts are cancelled
          ↓
The API request runs
          ↓
The response is parsed
          ↓
Fruit names are stored
          ↓
React renders the results
```

## Complexity

For `n` returned fruits, mapping and rendering require:

```text
O(n)
```

The array of stored names also requires:

```text
O(n)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel, imports the component and renders it.
- `index.jsx`: Contains the states, effect, API request and rendering logic.
- `styles.css`: Defines the search interface and result list.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the seventh documented React Fundamentals exercise in my freeCodeCamp journey.

It introduces effects, dependency arrays, API requests, debouncing, effect cleanup and asynchronous data rendering.