# Build a Sorting Visualizer

This is exercise **125** of my JavaScript learning journey.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-v9/#lab-sorting-visualizer)

## 🇪🇸 Español

Este laboratorio implementa un visualizador del algoritmo de ordenamiento Bubble Sort utilizando JavaScript y manipulación del DOM.

La aplicación genera un arreglo con cinco números aleatorios entre `1` y `100`. Después, representa visualmente cada comparación realizada por Bubble Sort hasta obtener el arreglo ordenado.

Los dos números comparados en cada paso se resaltan con un borde rojo discontinuo.

### Funcionalidades

- Genera cinco números aleatorios entre `1` y `100`.
- Muestra los números utilizando elementos `<span>`.
- Genera un nuevo arreglo mediante un botón.
- Elimina las visualizaciones anteriores al generar otro arreglo.
- Ordena los números utilizando Bubble Sort.
- Compara elementos adyacentes.
- Intercambia los elementos desordenados.
- Modifica el arreglo original durante los intercambios.
- Crea un contenedor para cada paso del algoritmo.
- Muestra el estado del arreglo antes de cada comparación.
- Resalta los dos elementos que se están comparando.
- Representa el arreglo inicial y el arreglo ordenado.
- Manipula dinámicamente elementos del DOM.

### Conceptos practicados

- Funciones.
- Generación de números aleatorios.
- `Math.random()`.
- `Math.floor()`.
- Arreglos.
- `Array.from()`.
- Métodos de arreglos.
- Método `forEach()`.
- Método `map()`.
- Bubble Sort.
- Bucles `for`.
- Bucle `do...while`.
- Condicionales.
- Variables booleanas.
- Intercambio de valores.
- Mutación de arreglos.
- Manipulación del DOM.
- `getElementById()`.
- `createElement()`.
- `appendChild()`.
- `innerHTML`.
- `textContent`.
- Propiedad `children`.
- Estilos en línea.
- Eventos.
- `addEventListener()`.
- Conversión con `Number()`.

## Generación de números aleatorios

La función `generateElement` devuelve un número entero aleatorio entre `1` y `100`:

```js
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}
```

La expresión:

```js
Math.random()
```

genera un número decimal mayor o igual que `0` y menor que `1`.

Al multiplicarlo por `100` se obtiene un número entre `0` y un valor menor que `100`:

```js
Math.random() * 100
```

`Math.floor()` elimina la parte decimal:

```js
Math.floor(Math.random() * 100)
```

El resultado se encuentra entre `0` y `99`. Finalmente, se suma `1` para obtener un número entre `1` y `100`:

```js
Math.floor(Math.random() * 100) + 1;
```

## Generación del arreglo

La función `generateArray` crea un arreglo de cinco posiciones:

```js
function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}
```

`Array.from()` recibe un objeto con una longitud de cinco:

```js
{ length: 5 }
```

Luego ejecuta `generateElement` para crear el valor de cada posición.

Un resultado posible sería:

```js
[34, 7, 89, 21, 56]
```

Cada ejecución puede generar valores diferentes.

## Creación de contenedores

La función `generateContainer` crea y devuelve un elemento `<div>` vacío:

```js
function generateContainer() {
  return document.createElement("div");
}
```

Estos contenedores se utilizan para representar los diferentes estados del arreglo durante el ordenamiento.

## Representación del arreglo

La función `fillArrContainer` recibe:

1. Un elemento HTML.
2. Un arreglo de números.

```js
function fillArrContainer(element, array) {
  element.innerHTML = "";

  array.forEach((number) => {
    const span = document.createElement("span");
    span.textContent = number;
    element.appendChild(span);
  });
}
```

Primero elimina cualquier contenido anterior:

```js
element.innerHTML = "";
```

Después recorre el arreglo con `forEach()`:

```js
array.forEach((number) => {
```

Por cada número crea un `<span>`:

```js
const span = document.createElement("span");
```

El valor del número se asigna mediante:

```js
span.textContent = number;
```

Finalmente, el `<span>` se agrega al contenedor:

```js
element.appendChild(span);
```

Para el arreglo:

```js
[34, 7, 89, 21, 56]
```

se genera una estructura equivalente a:

```html
<div>
  <span>34</span>
  <span>7</span>
  <span>89</span>
  <span>21</span>
  <span>56</span>
</div>
```

## Comprobación del orden

La función `isOrdered` recibe dos números:

```js
function isOrdered(firstNumber, secondNumber) {
  return firstNumber <= secondNumber;
}
```

Devuelve `true` cuando el primer número es menor o igual que el segundo.

Ejemplos:

```js
isOrdered(3, 8);
// true

isOrdered(8, 3);
// false

isOrdered(5, 5);
// true
```

Los elementos solamente necesitan intercambiarse cuando `isOrdered()` devuelve `false`.

## Intercambio de elementos

La función `swapElements` recibe un arreglo y un índice:

```js
function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    const temporaryValue = array[index];

    array[index] = array[index + 1];
    array[index + 1] = temporaryValue;
  }
}
```

La función compara:

```js
array[index]
```

con el elemento siguiente:

```js
array[index + 1]
```

Si están desordenados, guarda temporalmente el primer valor:

```js
const temporaryValue = array[index];
```

Luego coloca el segundo valor en la primera posición:

```js
array[index] = array[index + 1];
```

Finalmente, coloca el valor temporal en la segunda posición:

```js
array[index + 1] = temporaryValue;
```

Por ejemplo:

```js
const numbers = [8, 3, 5];

swapElements(numbers, 0);
```

El arreglo queda así:

```js
[3, 8, 5]
```

La función modifica el arreglo original en el mismo lugar.

## Resaltado de elementos

La función `highlightCurrentEls` recibe un elemento HTML y un índice:

```js
function highlightCurrentEls(element, index) {
  element.children[index].style.border =
    "2px dashed red";

  element.children[index + 1].style.border =
    "2px dashed red";
}
```

La propiedad `children` permite acceder a los elementos `<span>` del contenedor.

Si el índice es `1`, se resaltan:

```js
element.children[1];
element.children[2];
```

El estilo aplicado es:

```css
border: 2px dashed red;
```

Esto permite reconocer visualmente los números que Bubble Sort está comparando.

## Botón Generate Array

El botón para generar el arreglo escucha el evento `click`:

```js
generateBtn.addEventListener("click", () => {
  const newArray = generateArray();

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  fillArrContainer(startingArray, newArray);
});
```

Primero se genera un nuevo arreglo:

```js
const newArray = generateArray();
```

Después se elimina cualquier visualización anterior:

```js
arrayContainer.innerHTML = "";
```

Como `startingArray` también fue retirado temporalmente, se vuelve a agregar:

```js
arrayContainer.appendChild(startingArray);
```

Finalmente, se muestran los cinco números nuevos:

```js
fillArrContainer(startingArray, newArray);
```

## Obtención del arreglo inicial

Cuando se presiona el botón de ordenamiento, los números se recuperan desde los elementos `<span>`:

```js
const array = Array.from(startingArray.children).map(
  (span) => Number(span.textContent)
);
```

`Array.from()` transforma la colección de elementos HTML en un arreglo.

Después, `map()` obtiene el texto de cada `<span>` y lo convierte en un número:

```js
Number(span.textContent)
```

Si todavía no se generaron cinco valores, el proceso se detiene:

```js
if (array.length !== 5) {
  return;
}
```

## Preparación de la visualización

Antes de ordenar, se eliminan los pasos anteriores y se restaura el contenedor inicial:

```js
arrayContainer.innerHTML = "";
arrayContainer.appendChild(startingArray);
```

Después se vuelve a representar el arreglo:

```js
fillArrContainer(startingArray, array);
```

Los primeros dos elementos se resaltan:

```js
highlightCurrentEls(startingArray, 0);
```

Esto convierte a `#starting-array` en el primer paso de la visualización.

## Algoritmo Bubble Sort

Bubble Sort compara parejas de elementos adyacentes.

Si el primer elemento es mayor que el segundo, intercambia sus posiciones.

El proceso continúa hasta completar una pasada sin realizar intercambios.

```js
let swapped;
let isFirstComparison = true;

do {
  swapped = false;

  for (
    let index = 0;
    index < array.length - 1;
    index++
  ) {
    if (!isFirstComparison) {
      const currentContainer = generateContainer();

      fillArrContainer(currentContainer, array);
      highlightCurrentEls(currentContainer, index);
      arrayContainer.appendChild(currentContainer);
    }

    if (!isOrdered(array[index], array[index + 1])) {
      swapElements(array, index);
      swapped = true;
    }

    isFirstComparison = false;
  }
} while (swapped);
```

## Variable `swapped`

La variable:

```js
let swapped;
```

registra si ocurrió al menos un intercambio durante una pasada.

Al comenzar cada ciclo se establece en `false`:

```js
swapped = false;
```

Cuando se encuentra una pareja desordenada:

```js
if (!isOrdered(array[index], array[index + 1])) {
```

se realiza el intercambio y se actualiza la variable:

```js
swapElements(array, index);
swapped = true;
```

El ciclo continúa mientras se hayan producido intercambios:

```js
} while (swapped);
```

Cuando una pasada completa termina sin intercambios, el arreglo está ordenado.

## Primera comparación

La primera comparación ya está representada por `#starting-array`.

Por eso se utiliza:

```js
let isFirstComparison = true;
```

Durante la primera comparación no se crea otro contenedor.

Después se cambia su valor:

```js
isFirstComparison = false;
```

Desde ese momento, cada nueva comparación genera un `<div>` independiente.

## Creación de cada paso

Para cada comparación posterior se crea un contenedor:

```js
const currentContainer = generateContainer();
```

Se muestra el estado actual del arreglo:

```js
fillArrContainer(currentContainer, array);
```

Se resaltan los elementos comparados:

```js
highlightCurrentEls(currentContainer, index);
```

Luego se agrega el paso a la página:

```js
arrayContainer.appendChild(currentContainer);
```

El intercambio se realiza después de representar la comparación. Por eso, si los números están desordenados, el resultado del intercambio aparece en el siguiente paso.

## Arreglo ordenado

Después de terminar Bubble Sort, se genera un último contenedor:

```js
const sortedContainer = generateContainer();

fillArrContainer(sortedContainer, array);
arrayContainer.appendChild(sortedContainer);
```

Este último `div` representa el resultado final sin elementos resaltados.

## Ejemplo de funcionamiento

Si el arreglo inicial es:

```text
5, 2, 4, 1, 3
```

la primera comparación es:

```text
[5, 2], 4, 1, 3
```

Como `5` es mayor que `2`, se intercambian:

```text
2, 5, 4, 1, 3
```

La siguiente comparación es:

```text
2, [5, 4], 1, 3
```

El proceso continúa hasta obtener:

```text
1, 2, 3, 4, 5
```

## Complejidad

Bubble Sort utiliza ciclos repetidos para comparar los elementos.

En el peor caso, su complejidad temporal es:

```text
O(n²)
```

La versión del algoritmo utilizada modifica el arreglo original y no necesita otro arreglo para ordenarlo.

Por lo tanto, la complejidad espacial propia del ordenamiento es:

```text
O(1)
```

Sin embargo, el visualizador crea elementos HTML para guardar y mostrar cada comparación. El espacio utilizado por la interfaz depende de la cantidad de pasos generados.

## 🇺🇸 English

This lab implements a Bubble Sort visualizer using JavaScript and DOM manipulation.

The application generates an array containing five random integers between `1` and `100`. It then displays every comparison performed by Bubble Sort until the array is ordered.

The two elements being compared during each step are highlighted with a dashed red border.

### Features

- Generates five random integers.
- Displays each integer inside a `<span>`.
- Creates a new array when the generate button is clicked.
- Removes previous sorting steps.
- Sorts the array using Bubble Sort.
- Compares adjacent elements.
- Swaps unordered elements.
- Mutates the array in place.
- Creates a `<div>` for each comparison.
- Displays the array before each comparison.
- Highlights the two current elements.
- Shows the starting and sorted arrays.
- Dynamically manipulates the DOM.

### Concepts Practiced

- Functions.
- Random numbers.
- `Math.random()`.
- `Math.floor()`.
- Arrays.
- `Array.from()`.
- `forEach()`.
- `map()`.
- Bubble Sort.
- `for` loops.
- `do...while` loops.
- Conditional statements.
- Boolean flags.
- In-place array modification.
- DOM manipulation.
- `createElement()`.
- `appendChild()`.
- `innerHTML`.
- `textContent`.
- Event listeners.
- Inline styles.

## Random element generation

The `generateElement` function returns an integer between `1` and `100`:

```js
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}
```

## Array generation

The `generateArray` function uses `generateElement` to produce five values:

```js
function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}
```

A possible result is:

```js
[34, 7, 89, 21, 56]
```

## Creating containers

The `generateContainer` function creates an empty `div`:

```js
function generateContainer() {
  return document.createElement("div");
}
```

Each generated container represents one Bubble Sort step.

## Filling a container

The `fillArrContainer` function creates one `span` for each array value:

```js
function fillArrContainer(element, array) {
  element.innerHTML = "";

  array.forEach((number) => {
    const span = document.createElement("span");
    span.textContent = number;
    element.appendChild(span);
  });
}
```

## Checking the order

The `isOrdered` function checks whether the first number is less than or equal to the second:

```js
function isOrdered(firstNumber, secondNumber) {
  return firstNumber <= secondNumber;
}
```

Examples:

```js
isOrdered(3, 8);
// true

isOrdered(8, 3);
// false
```

## Swapping values

The `swapElements` function swaps two adjacent values when they are not ordered:

```js
function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    const temporaryValue = array[index];

    array[index] = array[index + 1];
    array[index + 1] = temporaryValue;
  }
}
```

The function modifies the original array.

## Highlighting comparisons

The `highlightCurrentEls` function adds a dashed red border to two adjacent elements:

```js
function highlightCurrentEls(element, index) {
  element.children[index].style.border =
    "2px dashed red";

  element.children[index + 1].style.border =
    "2px dashed red";
}
```

## Generating a new array

When the generate button is clicked:

```js
generateBtn.addEventListener("click", () => {
  const newArray = generateArray();

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  fillArrContainer(startingArray, newArray);
});
```

Previous sorting steps are removed, and the initial container receives five new numbers.

## Sorting the array

The visualizer uses a `do...while` loop because Bubble Sort must complete at least one full pass:

```js
do {
  swapped = false;

  for (
    let index = 0;
    index < array.length - 1;
    index++
  ) {
    // Display the current comparison.

    if (!isOrdered(array[index], array[index + 1])) {
      swapElements(array, index);
      swapped = true;
    }
  }
} while (swapped);
```

The algorithm stops when an entire pass finishes without a swap.

## Displaying the steps

For every comparison after the first one, a new container is created:

```js
const currentContainer = generateContainer();

fillArrContainer(currentContainer, array);
highlightCurrentEls(currentContainer, index);
arrayContainer.appendChild(currentContainer);
```

The current array state is displayed before the possible swap.

The next container therefore shows the result of the preceding comparison.

## Final result

After sorting finishes, the completed array is displayed in one final container:

```js
const sortedContainer = generateContainer();

fillArrContainer(sortedContainer, array);
arrayContainer.appendChild(sortedContainer);
```

## Complexity

Bubble Sort has a worst-case time complexity of:

```text
O(n²)
```

The sorting operation modifies the array in place, giving it an auxiliary space complexity of:

```text
O(1)
```

The visualizer uses additional DOM elements to preserve and display every comparison.

## 📁 Files

- `index.html`: Contains the application structure.
- `styles.css`: Contains the provided visual styles.
- `script.js`: Contains the Bubble Sort algorithm and DOM interaction.
- `README.md`: Contains the bilingual project documentation.