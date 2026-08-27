# ⚽ Build a Football Player Card Builder

A React + TypeScript (TSX) workshop from the updated freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Un generador interactivo de tarjetas de jugador de fútbol, al estilo FIFA/FUT. Un formulario permite editar el nombre, posición, rating, club, imagen y las seis estadísticas del jugador, con una vista previa que se actualiza en tiempo real. Los datos persisten entre recargas de página gracias a `localStorage`.

El HTML y el CSS fueron proporcionados por freeCodeCamp, mientras que toda la funcionalidad fue desarrollada con React y TSX (la extensión de sintaxis TypeScript equivalente a JSX).

### 🎯 Objetivo

Practicar TSX, componentes funcionales con props tipadas mediante interfaces, `useState`, `useEffect`, generics aplicados a hooks de React, tipos literales derivados (`as const`), y persistencia de datos con `localStorage`.

### ✨ Funcionalidades

- Vista previa de la tarjeta que se actualiza en tiempo real a medida que se completa el formulario.
- El color y la etiqueta de tier (Elite, Gold, Silver, Bronze) cambian automáticamente según el rating general del jugador.
- Selector de posición restringido a las 11 posiciones válidas de fútbol.
- Seis estadísticas del jugador (PAC, SHO, PAS, DRI, DEF, PHY) editables.
- Los datos se guardan automáticamente en `localStorage` y persisten al recargar la página.

### 🧠 Conceptos practicados

- TSX (JSX + TypeScript)
- Componentes funcionales de React
- Props tipadas con interfaces
- Destructuring de props
- `useState` con generics
- `useEffect` y manejo de efectos secundarios
- Spread operator para actualizaciones inmutables de estado
- `as const` y tipos derivados (`typeof arr[number]`)
- Type assertions (`as Position`)
- Componentes controlados (`value` + `onChange`)
- Renderizado de listas con `.map()`
- Persistencia con `localStorage` (`getItem`, `setItem`, `JSON.stringify`/`parse`)
- Manejo de errores con `try...catch`

### 🔍 Partes importantes

#### Interface de datos del jugador

```tsx
interface PlayerData {
  name: string;
  overallRating: number;
  position: Position;
  club: string;
  imageUrl: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}
```

`PlayerData` describe toda la forma de un jugador, incluyendo `position` tipada con el tipo literal derivado `Position`, en vez de un `string` genérico.

#### Tipo literal derivado de un array

```tsx
const POSITIONS = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST", "CF"] as const;

type Position = typeof POSITIONS[number];
```

`as const` convierte el array en una tupla de solo lectura con literales exactos, y `typeof POSITIONS[number]` deriva de ahí un tipo de unión con esas 11 posiciones válidas — sin duplicar la información en dos lugares distintos.

#### Componente controlado conectado al estado

```tsx
<input
  id="name"
  className="input"
  type="text"
  value={player.name}
  onChange={(e) => setPlayer({ ...player, name: e.target.value })}
/>
```

Cada input usa el patrón de componente controlado: `value` refleja el estado actual, y `onChange` actualiza ese estado con el spread operator, creando un objeto nuevo en vez de mutar el original.

#### Persistencia con `localStorage`

```tsx
function loadPlayer(): PlayerData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultPlayer, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}

useEffect(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  } catch (error) {
    console.log("Failed to save player data:", error);
  }
}, [player]);
```

`loadPlayer` intenta recuperar datos guardados al iniciar la app (mergeados con `defaultPlayer` como respaldo de propiedades faltantes), y el `useEffect` guarda automáticamente el estado cada vez que `player` cambia.

### ✅ Qué aprendí

Aprendí a construir un formulario interactivo completo en React usando TypeScript: tipar props y estado con interfaces y generics, derivar tipos literales a partir de arrays con `as const`, manejar componentes controlados de forma inmutable con el spread operator, y persistir datos en el navegador combinando `useEffect` con `localStorage`.

---

## 🇺🇸 English

### 📌 Description

An interactive FIFA/FUT-style football player card builder. A form lets you edit the player's name, position, rating, club, image, and six stats, with a live preview that updates in real time. Data persists across page reloads thanks to `localStorage`.

The HTML and CSS were provided by freeCodeCamp, while all functionality was developed with React and TSX (TypeScript's syntax extension equivalent to JSX).

### 🎯 Objective

Practice TSX, functional components with props typed via interfaces, `useState`, `useEffect`, generics applied to React hooks, derived literal types (`as const`), and data persistence with `localStorage`.

### ✨ Features

- Live preview card that updates in real time as the form is filled in.
- The tier color and badge (Elite, Gold, Silver, Bronze) automatically change based on the player's overall rating.
- Position selector restricted to the 11 valid football positions.
- Six editable player stats (PAC, SHO, PAS, DRI, DEF, PHY).
- Data automatically saves to `localStorage` and persists across page reloads.

### 🧠 Concepts Practiced

- TSX (JSX + TypeScript)
- React functional components
- Props typed with interfaces
- Props destructuring
- `useState` with generics
- `useEffect` and side effect handling
- Spread operator for immutable state updates
- `as const` and derived types (`typeof arr[number]`)
- Type assertions (`as Position`)
- Controlled components (`value` + `onChange`)
- Rendering lists with `.map()`
- Persistence with `localStorage` (`getItem`, `setItem`, `JSON.stringify`/`parse`)
- Error handling with `try...catch`

### 🔍 Important Parts

#### Player data interface

```tsx
interface PlayerData {
  name: string;
  overallRating: number;
  position: Position;
  club: string;
  imageUrl: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}
```

`PlayerData` describes the full shape of a player, with `position` typed as the derived literal type `Position`, instead of a generic `string`.

#### Deriving a literal type from an array

```tsx
const POSITIONS = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST", "CF"] as const;

type Position = typeof POSITIONS[number];
```

`as const` turns the array into a readonly tuple of exact literals, and `typeof POSITIONS[number]` derives a union type of those 11 valid positions from it — avoiding duplicated information across two places.

#### Controlled component wired to state

```tsx
<input
  id="name"
  className="input"
  type="text"
  value={player.name}
  onChange={(e) => setPlayer({ ...player, name: e.target.value })}
/>
```

Every input follows the controlled component pattern: `value` mirrors the current state, and `onChange` updates that state using the spread operator, creating a new object instead of mutating the original.

#### Persistence with `localStorage`

```tsx
function loadPlayer(): PlayerData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultPlayer, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}

useEffect(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  } catch (error) {
    console.log("Failed to save player data:", error);
  }
}, [player]);
```

`loadPlayer` attempts to retrieve saved data on startup (merged with `defaultPlayer` as a fallback for missing properties), and the `useEffect` automatically saves state every time `player` changes.

### ✅ What I Learned

I learned how to build a complete interactive React form using TypeScript: typing props and state with interfaces and generics, deriving literal types from arrays with `as const`, handling controlled components immutably with the spread operator, and persisting data in the browser by combining `useEffect` with `localStorage`.

---

## 📁 Files

```text
026-build-a-football-player-card-builder/
├── README.md
├── index.html
├── index.tsx
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- React
- TypeScript (TSX)