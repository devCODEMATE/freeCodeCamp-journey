# Build a Tic-Tac-Toe Game

This is exercise **013** and a **Certification Project** from the **Front End Development Libraries** section of my freeCodeCamp learning journey.

The project builds a complete Tic-Tac-Toe game using React state, immutable array updates, derived values, conditional rendering and event handling.

🔗 [View the certification project on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-tic-tac-toe)

---

## 🇪🇸 Español

Este proyecto de certificación desarrolla un juego completo de tres en línea, también conocido como Tic-Tac-Toe, utilizando React, JSX y el hook `useState`.

Dos jugadores colocan alternativamente `X` y `O` en una cuadrícula de nueve casillas.

La aplicación detecta automáticamente victorias y empates, bloquea nuevas jugadas cuando termina la partida y permite comenzar una nueva mediante un botón de reinicio.

La interfaz fue personalizada con la identidad visual de CodeMate.

## Funcionalidades

- Define y exporta el componente `Board`.
- Renderiza exactamente nueve casillas.
- Organiza las casillas en una cuadrícula 3×3.
- Comienza cada partida con el jugador X.
- Alterna automáticamente entre X y O.
- Impide modificar casillas ocupadas.
- Evalúa las ocho combinaciones ganadoras.
- Detecta victorias horizontales.
- Detecta victorias verticales.
- Detecta victorias diagonales.
- Muestra el próximo jugador.
- Muestra `Winner: X` o `Winner: O`.
- Detecta y muestra los empates.
- Bloquea el tablero después de una victoria.
- Bloquea el tablero después de un empate.
- Reinicia el tablero completo.
- Restablece X como primer jugador.
- Aplica estilos diferentes a X y O.
- Utiliza nombres accesibles para las casillas.
- Anuncia dinámicamente el estado de la partida.
- Presenta un diseño responsive personalizado.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- Estado mediante arreglos.
- Estado booleano.
- Inmutabilidad.
- Spread syntax.
- `Array()`.
- `fill()`.
- `map()`.
- `every()`.
- Desestructuración.
- Bucles `for...of`.
- Funciones auxiliares.
- Valores derivados.
- Eventos `onClick`.
- Renderizado de listas.
- Prop `key`.
- Clases dinámicas.
- Template literals.
- Operadores ternarios.
- Renderizado condicional.
- Early return.
- CSS Grid.
- Accesibilidad.
- `aria-label`.
- `aria-live`.
- Responsive Design.

## Componente Board

El componente principal se define y exporta mediante:

```jsx
export function Board() {
  // Estado, lógica y tablero
}
```

La palabra `export` permite utilizar el componente fuera de `index.jsx`.

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import { Board } from "./index.jsx";
```

El flujo entre los archivos es:

```text
index.jsx exporta Board
              ↓
index.html importa Board
              ↓
ReactDOM renderiza <Board />
```

## Representación del tablero

El tablero se almacena en un arreglo con nueve posiciones:

```jsx
const [squares, setSquares] =
  useState(Array(9).fill(null));
```

`Array(9)` crea un arreglo con nueve posiciones.

`fill(null)` coloca `null` en todas:

```js
[
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]
```

Cada posición representa una casilla.

Sus valores posibles son:

```text
null → casilla vacía
"X"  → jugada de X
"O"  → jugada de O
```

## Estado del turno

El turno se controla mediante:

```jsx
const [isXNext, setIsXNext] =
  useState(true);
```

El valor inicial es `true`, por lo que X realiza la primera jugada.

La marca que debe colocarse se decide mediante:

```jsx
isXNext ? "X" : "O"
```

Después de cada jugada válida, el turno cambia:

```jsx
setIsXNext(!isXNext);
```

## Combinaciones ganadoras

Las posibles victorias se guardan en:

```jsx
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
```

Las primeras tres combinaciones representan filas:

```text
0 1 2
3 4 5
6 7 8
```

Las siguientes tres representan columnas:

```text
0 3 6
1 4 7
2 5 8
```

Las últimas dos representan diagonales:

```text
0 4 8
2 4 6
```

## Detección del ganador

La función auxiliar recibe el tablero:

```jsx
function calculateWinner(squares) {
```

Después recorre las combinaciones:

```jsx
for (
  const [
    first,
    second,
    third
  ] of winningCombinations
) {
```

Cada combinación se desestructura en tres índices.

La función comprueba:

```jsx
if (
  squares[first] &&
  squares[first] === squares[second] &&
  squares[first] === squares[third]
)
```

La primera condición verifica que la casilla no esté vacía.

Las siguientes comprueban que las tres casillas posean la misma marca.

Si encuentra una combinación ganadora, devuelve:

```jsx
return squares[first];
```

El resultado será `"X"` u `"O"`.

Si nadie ganó, devuelve:

```jsx
return null;
```

## Valor derivado winner

El ganador se calcula mediante:

```jsx
const winner =
  calculateWinner(squares);
```

`winner` no necesita otro estado porque se obtiene directamente a partir del tablero.

Por eso se considera un valor derivado.

## Detección del empate

Existe un empate cuando no hay ganador y todas las casillas están ocupadas:

```jsx
const isDraw =
  !winner &&
  squares.every(
    (square) => square !== null
  );
```

`every()` devuelve `true` solamente si todas las posiciones cumplen la condición.

## Manejo de las jugadas

Cada botón ejecuta:

```jsx
onClick={() =>
  handleSquareClick(index)
}
```

El índice identifica qué posición debe actualizarse.

La función comienza verificando si la jugada es válida:

```jsx
if (
  squares[index] ||
  winner ||
  isDraw
) {
  return;
}
```

La función termina sin realizar cambios si:

- La casilla ya está ocupada.
- Ya existe un ganador.
- La partida terminó en empate.

## Actualización inmutable

El estado no se modifica directamente.

Primero se crea una copia:

```jsx
const updatedSquares = [
  ...squares
];
```

Después se modifica esa copia:

```jsx
updatedSquares[index] =
  isXNext ? "X" : "O";
```

Finalmente se guarda el arreglo nuevo:

```jsx
setSquares(updatedSquares);
```

Esto mantiene la inmutabilidad del estado.

No debe hacerse:

```jsx
squares[index] = "X";
```

porque modificaría directamente el arreglo almacenado por React.

## Alternancia entre X y O

Después de guardar la jugada se ejecuta:

```jsx
setIsXNext(!isXNext);
```

La secuencia es:

```text
true  → X
false → O
true  → X
false → O
```

## Mensajes de la partida

Durante una partida activa se muestra:

```jsx
let statusMessage =
  `Next player: ${
    isXNext ? "X" : "O"
  }`;
```

Si existe un ganador:

```jsx
statusMessage =
  `Winner: ${winner}`;
```

Los resultados posibles son:

```text
Winner: X
Winner: O
```

Si se completa el tablero sin ganador:

```jsx
statusMessage = "Draw";
```

## Renderizado de las casillas

Las nueve casillas se generan mediante:

```jsx
squares.map((square, index) => (
  <button
    className="square"
    key={index}
  >
    {square}
  </button>
))
```

Como `squares` contiene nueve posiciones, se crean exactamente nueve botones.

## Prop key

Cada casilla utiliza:

```jsx
key={index}
```

La estructura y el orden del tablero son fijos, por lo que el índice puede identificar cada posición.

## Clases dinámicas

Todos los botones conservan la clase requerida:

```text
square
```

Según su contenido, también pueden recibir:

```text
square-x
square-o
```

La lógica es:

```jsx
className={`square ${
  square === "X"
    ? "square-x"
    : square === "O"
      ? "square-o"
      : ""
}`}
```

Esto permite aplicar colores diferentes para X y O.

## Cuadrícula 3×3

El tablero utiliza CSS Grid:

```css
.board {
  display: grid;
  grid-template-columns:
    repeat(3, 90px);
  grid-template-rows:
    repeat(3, 90px);
}
```

El resultado es una cuadrícula con tres columnas y tres filas:

```text
□ □ □
□ □ □
□ □ □
```

## Reinicio de la partida

El botón requerido utiliza:

```jsx
<button
  id="reset"
  type="button"
  onClick={resetGame}
>
  Reset Game
</button>
```

La función restablece el tablero:

```jsx
setSquares(
  Array(9).fill(null)
);
```

También establece nuevamente el primer turno:

```jsx
setIsXNext(true);
```

`winner` e `isDraw` se recalculan automáticamente a partir del tablero vacío.

## Accesibilidad

Cada casilla utiliza un nombre accesible:

```jsx
aria-label={
  `Square ${index + 1}${
    square
      ? `: ${square}`
      : ""
  }`
}
```

Una casilla vacía puede anunciarse como:

```text
Square 1
```

Una casilla ocupada puede anunciarse como:

```text
Square 1: X
```

El mensaje de estado utiliza:

```jsx
aria-live="polite"
```

Esto permite anunciar cambios de turno, victorias y empates mediante tecnologías de asistencia.

## Flujo de la aplicación

```text
React renderiza Board
           ↓
Se crean nueve casillas vacías
           ↓
X selecciona una casilla
           ↓
Se copia el tablero
           ↓
Se coloca X
           ↓
El turno cambia a O
           ↓
Se evalúan las combinaciones
           ↓
Los jugadores continúan
           ↓
Se detecta una victoria o empate
           ↓
El tablero deja de aceptar jugadas
           ↓
Reset Game comienza otra partida
```

## Complejidad

El tablero siempre contiene nueve posiciones y solamente existen ocho combinaciones ganadoras.

Por lo tanto, el trabajo práctico realizado en cada jugada es constante:

```text
O(1)
```

Si el tablero se generalizara a `n` posiciones, copiarlo y recorrerlo tendría una complejidad aproximada de:

```text
O(n)
```

---

## 🇺🇸 English

This certification project builds a complete Tic-Tac-Toe game using React, JSX and the `useState` hook.

Two players alternate between X and O on a nine-square board. The application detects victories and draws, blocks additional moves after the game ends and provides a reset button.

The interface uses a custom responsive CodeMate design.

## Features

- Defines and exports a `Board` component.
- Renders exactly nine square buttons.
- Organizes the buttons in a 3×3 grid.
- Starts every game with player X.
- Alternates between X and O.
- Prevents occupied squares from changing.
- Checks all eight winning combinations.
- Detects horizontal victories.
- Detects vertical victories.
- Detects diagonal victories.
- Displays the next player.
- Displays `Winner: X` or `Winner: O`.
- Detects and displays a draw.
- Blocks moves after the game ends.
- Resets the board and starting player.
- Applies different styles to X and O.
- Provides accessible square labels.
- Announces dynamic game messages.
- Uses a responsive layout.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- `useState`.
- Array state.
- Boolean state.
- Immutability.
- Spread syntax.
- `Array()`.
- `fill()`.
- `map()`.
- `every()`.
- Destructuring.
- `for...of`.
- Helper functions.
- Derived values.
- Event handling.
- React keys.
- Dynamic classes.
- Template literals.
- Ternary operators.
- Early returns.
- CSS Grid.
- Accessibility.
- Responsive Design.

## Board state

The board is represented by an array:

```jsx
const [squares, setSquares] =
  useState(Array(9).fill(null));
```

Every position can contain:

```text
null
"X"
"O"
```

## Turn state

The active player is controlled through:

```jsx
const [isXNext, setIsXNext] =
  useState(true);
```

Because the initial value is `true`, X plays first.

After each valid move:

```jsx
setIsXNext(!isXNext);
```

switches the active player.

## Winner calculation

The `calculateWinner()` helper checks every possible winning combination:

```jsx
function calculateWinner(squares) {
  for (
    const [
      first,
      second,
      third
    ] of winningCombinations
  ) {
    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return squares[first];
    }
  }

  return null;
}
```

It returns `"X"`, `"O"` or `null`.

## Draw detection

A draw requires no winner and a completely occupied board:

```jsx
const isDraw =
  !winner &&
  squares.every(
    (square) => square !== null
  );
```

## Immutable updates

Every move creates a new array:

```jsx
const updatedSquares = [
  ...squares
];
```

The selected position is updated in the copy, and that new array is passed to `setSquares`.

## Blocking invalid moves

The click handler stops when:

```jsx
if (
  squares[index] ||
  winner ||
  isDraw
) {
  return;
}
```

This prevents:

- Overwriting occupied squares.
- Playing after a victory.
- Playing after a draw.

## Dynamic status

The application can display:

```text
Next player: X
Next player: O
Winner: X
Winner: O
Draw
```

The correct value is derived from the board and turn state.

## Rendering the board

The buttons are generated with:

```jsx
squares.map((square, index) => (
  <button
    className="square"
    key={index}
  >
    {square}
  </button>
))
```

Nine array positions produce nine buttons.

## Resetting the game

The reset function creates another empty board and restores X as the starting player:

```jsx
function resetGame() {
  setSquares(
    Array(9).fill(null)
  );

  setIsXNext(true);
}
```

## Accessibility

Every square receives an accessible label.

The status message uses:

```jsx
aria-live="polite"
```

This helps assistive technologies announce turns, winners and draws.

## Complexity

Because the board contains a fixed number of positions, the practical work per move is constant:

```text
O(1)
```

For a generalized board with `n` positions, copying and checking the board would require:

```text
O(n)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel and renders the board.
- `index.jsx`: Contains the board state, turn logic, winner detection and reset behavior.
- `styles.css`: Defines the responsive CodeMate game interface.
- `README.md`: Contains the bilingual project documentation.

## Certification milestone

This is the thirteenth documented React Fundamentals exercise and a freeCodeCamp certification project.

It combines state management, immutable array updates, derived values, conditional behavior, list rendering and interactive game logic.