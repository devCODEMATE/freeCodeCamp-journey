# Build a Shopping List App

This is exercise **011** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals workshop focused on state, filtering, memoized values, memoized callbacks and render optimization.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-shopping-list-app)

---

## 🇪🇸 Español

Este workshop desarrolla una lista de compras interactiva utilizando React y los hooks `useState`, `useMemo` y `useCallback`.

La aplicación permite buscar productos, filtrar la lista y seleccionar o deseleccionar artículos mediante checkboxes. Los elementos seleccionados aparecen tachados.

También utiliza herramientas de optimización para evitar cálculos y recreaciones de funciones innecesarias.

## Funcionalidades

- Define y exporta el componente `ShoppingList`.
- Mantiene la búsqueda en el estado.
- Mantiene los productos seleccionados en un arreglo de estado.
- Utiliza un input de búsqueda controlado.
- Filtra los artículos según la consulta.
- Ignora diferencias entre mayúsculas y minúsculas.
- Memoriza el resultado del filtrado con `useMemo`.
- Memoriza la función de selección con `useCallback`.
- Renderiza los artículos dinámicamente con `map()`.
- Utiliza checkboxes controlados.
- Permite seleccionar y deseleccionar artículos.
- Tacha visualmente los productos seleccionados.
- Utiliza una actualización funcional del estado.
- Agrega elementos mediante spread syntax.
- Elimina elementos mediante `filter()`.
- Utiliza mensajes de consola para demostrar las optimizaciones.
- Incluye una descripción accesible para el buscador.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- `useMemo`.
- `useCallback`.
- Memoización.
- Optimización de renderizados.
- Arreglos de dependencias.
- Estado.
- Inputs controlados.
- Checkboxes controlados.
- Renderizado de listas.
- `map()`.
- `filter()`.
- `includes()`.
- `toLowerCase()`.
- Spread syntax.
- Actualizaciones funcionales.
- Prop `key`.
- Renderizado condicional.
- Estilos en línea.
- Accesibilidad.
- `aria-describedby`.

## Importación de hooks

Los hooks se obtienen desde el objeto global de React:

```jsx
const {
  useState,
  useMemo,
  useCallback
} = React;
```

Esta expresión utiliza desestructuración de objetos.

Es equivalente a escribir:

```jsx
const useState = React.useState;
const useMemo = React.useMemo;
const useCallback = React.useCallback;
```

## Componente ShoppingList

El componente se define y exporta mediante:

```jsx
export const ShoppingList = () => {
  // Estados, valores memorizados y JSX
};
```

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import { ShoppingList } from "./index.jsx";
```

La relación entre los archivos es:

```text
index.jsx exporta ShoppingList
                 ↓
index.html importa ShoppingList
                 ↓
ReactDOM renderiza <ShoppingList />
```

## Lista de productos

Los artículos se almacenan en un arreglo externo:

```jsx
const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap"
];
```

El arreglo está fuera del componente porque sus valores no necesitan crearse nuevamente en cada renderizado.

## Estados de la aplicación

El componente utiliza dos estados:

```jsx
const [query, setQuery] =
  useState("");

const [
  selectedItems,
  setSelectedItems
] = useState([]);
```

### Estado query

`query` contiene el texto escrito en el buscador.

Comienza como una cadena vacía:

```jsx
useState("")
```

### Estado selectedItems

`selectedItems` contiene los nombres de los productos seleccionados.

Comienza como un arreglo vacío:

```jsx
useState([])
```

## Input controlado

El campo de búsqueda utiliza:

```jsx
<input
  id="search"
  type="search"
  value={query}
  onChange={(event) =>
    setQuery(event.target.value)
  }
/>
```

El valor procede del estado `query`.

Cada cambio actualiza el estado y provoca un nuevo renderizado.

## Filtrado de productos

La lista se filtra mediante:

```jsx
items.filter((item) =>
  item
    .toLowerCase()
    .includes(query.toLowerCase())
);
```

Tanto el producto como la consulta se convierten a minúsculas.

Esto permite que búsquedas como:

```text
APPLE
apple
Apple
```

encuentren el mismo producto.

## Hook useMemo

El resultado del filtrado se memoriza:

```jsx
const filteredItems = useMemo(() => {
  console.log("Filtering items...");

  return items.filter((item) =>
    item
      .toLowerCase()
      .includes(query.toLowerCase())
  );
}, [query]);
```

`useMemo()` recibe dos argumentos:

1. Una función que calcula un valor.
2. Un arreglo de dependencias.

En este caso, la dependencia es:

```jsx
[query]
```

Por lo tanto, React vuelve a filtrar solamente cuando cambia `query`.

Seleccionar un checkbox modifica `selectedItems`, pero no cambia `query`. En ese caso, React puede reutilizar el resultado memorizado.

## ¿Qué memoriza useMemo?

`useMemo()` memoriza un valor:

```jsx
filteredItems
```

El flujo es:

```text
query cambia
    ↓
Se ejecuta el filtrado
    ↓
Se guarda filteredItems
    ↓
Otro estado cambia
    ↓
query permanece igual
    ↓
React reutiliza filteredItems
```

## Hook useCallback

La función `toggleItem` se memoriza mediante:

```jsx
const toggleItem = useCallback(
  (item) => {
    // Actualización del estado
  },
  [setSelectedItems]
);
```

`useCallback()` también recibe:

1. Una función.
2. Un arreglo de dependencias.

A diferencia de `useMemo`, no memoriza el resultado de ejecutar una función. Memoriza la propia función.

## Diferencia entre useMemo y useCallback

| Hook | Memoriza | Uso en el proyecto |
|---|---|---|
| `useMemo` | Un valor calculado | Lista filtrada |
| `useCallback` | Una función | Función `toggleItem` |

## Actualización funcional

La selección utiliza:

```jsx
setSelectedItems((previousItems) => {
  // Nuevo arreglo
});
```

React proporciona el valor más reciente mediante `previousItems`.

Esto evita depender directamente de una copia anterior del estado capturada por la función.

## Seleccionar un producto

Primero se comprueba si el producto ya existe:

```jsx
previousItems.includes(item)
```

Si no está seleccionado, se agrega:

```jsx
[...previousItems, item]
```

El spread operator copia los elementos anteriores y añade el nuevo producto.

## Deseleccionar un producto

Si el artículo ya está seleccionado, se elimina mediante:

```jsx
previousItems.filter(
  (currentItem) =>
    currentItem !== item
)
```

`filter()` crea un arreglo nuevo sin el producto indicado.

La actualización completa es:

```jsx
setSelectedItems((previousItems) =>
  previousItems.includes(item)
    ? previousItems.filter(
        (currentItem) =>
          currentItem !== item
      )
    : [...previousItems, item]
);
```

## Verificación de la función

La variable externa:

```jsx
let prevToggleItem = null;
```

permite comparar la referencia actual de la función con la anterior.

```jsx
if (prevToggleItem !== toggleItem) {
  console.log("New toggleItem function");
  prevToggleItem = toggleItem;
} else {
  console.log("Current toggleItem function");
}
```

Esto demuestra que `useCallback()` puede conservar la misma referencia entre renderizados mientras no cambien sus dependencias.

Este bloque cumple una finalidad educativa y de observación. No sería necesario para el funcionamiento normal de una lista de compras.

## Renderizado de la lista

Los productos filtrados se recorren mediante:

```jsx
filteredItems.map((item) => {
  // Elemento de la lista
});
```

Cada producto recibe:

```jsx
key={item}
```

La `key` ayuda a React a identificar cada elemento.

## Checkbox controlado

Para cada producto se comprueba:

```jsx
const isChecked =
  selectedItems.includes(item);
```

El resultado controla el checkbox:

```jsx
checked={isChecked}
```

Cuando cambia:

```jsx
onChange={() => toggleItem(item)}
```

se agrega o elimina el producto del arreglo.

## Estilo condicional

El elemento utiliza:

```jsx
style={{
  textDecoration: isChecked
    ? "line-through"
    : "none"
}}
```

Si está seleccionado, aplica:

```css
text-decoration: line-through;
```

Si no está seleccionado, utiliza:

```css
text-decoration: none;
```

## Accesibilidad

El buscador utiliza:

```jsx
aria-describedby="search-description"
```

Este atributo lo relaciona con:

```jsx
<p id="search-description">
  Type to filter the list below:
</p>
```

Las tecnologías de asistencia pueden comunicar esa descripción al interactuar con el campo.

## Flujo de la aplicación

```text
React renderiza ShoppingList
              ↓
useMemo calcula filteredItems
              ↓
El usuario escribe una búsqueda
              ↓
setQuery actualiza query
              ↓
useMemo vuelve a filtrar
              ↓
El usuario marca un producto
              ↓
toggleItem actualiza selectedItems
              ↓
El artículo aparece tachado
              ↓
query no cambió
              ↓
React reutiliza filteredItems
```

## Complejidad

Si existen `n` productos, el filtrado utiliza:

```text
O(n)
```

La comprobación mediante `includes()` y la actualización mediante `filter()` también pueden recorrer el arreglo:

```text
O(n)
```

El estado de productos seleccionados necesita espacio proporcional a la cantidad de selecciones:

```text
O(n)
```

---

## 🇺🇸 English

This workshop builds an interactive shopping list using React and the `useState`, `useMemo` and `useCallback` hooks.

Users can search for products, filter the list and select or deselect items through controlled checkboxes. Selected products are displayed with a line through their names.

## Features

- Defines and exports a `ShoppingList` component.
- Stores the search query in state.
- Stores selected products in an array state.
- Uses a controlled search input.
- Filters products by their names.
- Performs case-insensitive searches.
- Memoizes the filtered list with `useMemo`.
- Memoizes the selection handler with `useCallback`.
- Renders products dynamically with `map()`.
- Uses controlled checkboxes.
- Adds and removes selected items.
- Applies conditional inline styles.
- Uses functional state updates.
- Demonstrates function-reference preservation.
- Includes an accessible search description.

## Concepts practiced

- React.
- JSX.
- Functional components.
- `useState`.
- `useMemo`.
- `useCallback`.
- Memoization.
- Render optimization.
- Dependency arrays.
- Controlled inputs.
- Controlled checkboxes.
- Arrays.
- `map()`.
- `filter()`.
- `includes()`.
- `toLowerCase()`.
- Spread syntax.
- Functional updates.
- React keys.
- Conditional styles.
- Accessibility.

## Memoizing the filtered list

The filtered value is created with:

```jsx
const filteredItems = useMemo(() => {
  return items.filter((item) =>
    item
      .toLowerCase()
      .includes(query.toLowerCase())
  );
}, [query]);
```

React recalculates this value only when `query` changes.

## Memoizing the callback

The selection function uses:

```jsx
const toggleItem = useCallback(
  (item) => {
    // State update
  },
  [setSelectedItems]
);
```

`useCallback()` preserves the function reference while its dependencies remain unchanged.

## useMemo versus useCallback

- `useMemo()` memoizes a calculated value.
- `useCallback()` memoizes a function.

In this application:

```text
useMemo     → filteredItems
useCallback → toggleItem
```

## Managing selections

The application uses a functional state update:

```jsx
setSelectedItems((previousItems) =>
  previousItems.includes(item)
    ? previousItems.filter(
        (currentItem) =>
          currentItem !== item
      )
    : [...previousItems, item]
);
```

If the item already exists, it is removed. Otherwise, it is added.

## Controlled checkboxes

Each checkbox receives:

```jsx
checked={isChecked}
```

and updates the state through:

```jsx
onChange={() => toggleItem(item)}
```

## Conditional styling

Selected products receive:

```jsx
textDecoration: "line-through"
```

Unselected products receive:

```jsx
textDecoration: "none"
```

## Complexity

Filtering `n` products requires:

```text
O(n)
```

Selection checks and array updates may also require:

```text
O(n)
```

The selected-items array requires:

```text
O(n)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel and renders the application.
- `index.jsx`: Contains state, filtering, selection and optimization logic.
- `styles.css`: Defines the shopping-list presentation.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the eleventh documented React Fundamentals exercise in my freeCodeCamp journey.

It introduces memoization and render optimization through `useMemo` and `useCallback`.