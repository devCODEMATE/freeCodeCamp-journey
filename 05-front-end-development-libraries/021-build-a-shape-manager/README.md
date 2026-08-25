# Build a Shape Manager

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![TypeScript](https://img.shields.io/badge/TypeScript-Type_Safety-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 021
- **Title | Título:** Build a Shape Manager
- **Type | Tipo:** Workshop
- **Topic | Tema:** TypeScript and DOM manipulation
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Workshop:** [Build a Shape Manager](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-shape-manager)

---

## English

### Project Description

In this workshop, I built an interactive shape manager using HTML, CSS, and TypeScript.

The application allows the user to select a geometric shape, enter its measurements, and calculate its area.

The supported shapes are:

- Circle.
- Rectangle.
- Triangle.

The application changes the visible input fields according to the selected shape and updates the calculated area when the user enters a value.

It also prevents negative measurements and displays an alert when an invalid value is entered.

### Main Features

- Selection between three geometric shapes.
- Dynamic display of the required input fields.
- Area calculation based on the selected shape.
- Type-safe representation of geometric shapes.
- Input validation for negative numbers.
- Dynamic result card.
- DOM element validation.
- Exhaustive checking with the `never` type.
- Responsive interface built with CSS Grid.

### Area Formulas

The application uses these formulas:

```text
Circle: π × radius²
Rectangle: width × height
Triangle: 0.5 × base × height
```

---

## TypeScript Concepts

### 1. Base Interface

The application begins with a general `Shape` interface:

```ts
interface Shape {
  type: string;
}
```

An interface defines the expected structure of an object.

Every shape must contain a `type` property.

### 2. Extended Interfaces

The specific shape interfaces extend the base `Shape` interface:

```ts
interface Circle extends Shape {
  type: "circle";
  radius: number;
}
```

```ts
interface Rectangle extends Shape {
  type: "rectangle";
  width: number;
  height: number;
}
```

```ts
interface Triangle extends Shape {
  type: "triangle";
  base: number;
  height: number;
}
```

The `extends` keyword allows each specific interface to inherit the properties of `Shape` and add its own measurements.

### 3. Literal Types

Each interface uses a specific string literal as its `type`:

```ts
type: "circle";
type: "rectangle";
type: "triangle";
```

This means that a `Circle` object can only contain `"circle"` as the value of its `type` property.

These literal values allow TypeScript to identify which shape is being processed.

### 4. Union Type

The three possible shapes are combined into a union type:

```ts
type Shapes = Circle | Triangle | Rectangle;
```

The `Shapes` type means that a value can be:

- A `Circle`.
- A `Triangle`.
- A `Rectangle`.

The vertical bar `|` represents “or” in a TypeScript union.

### 5. Discriminated Union

The application uses the shared `type` property to distinguish between the members of the union:

```ts
switch (shape.type) {
  case "circle":
  case "rectangle":
  case "triangle":
}
```

This pattern is called a discriminated union.

When TypeScript finds a specific `case`, it knows which interface is being used and which properties are available.

For example, inside:

```ts
case "circle":
```

TypeScript knows that `shape` has a `radius` property.

### 6. Exhaustive Checking with `never`

The default branch contains:

```ts
const _nonExistent: never = shape;
return _nonExistent;
```

The `never` type represents a value that should never exist.

Because all possible members of the `Shapes` union are handled by the `switch`, the `default` branch should never be reached.

If another shape is added to the union but its `case` is not added to the `switch`, TypeScript can detect that the exhaustive check is incomplete.

### 7. DOM Element Helper

The `getElement()` function retrieves an element by its `id`:

```ts
const getElement = (id: string): HTMLElement => {
  const el = document.getElementById(id);

  if (!el) {
    throw new Error(`Element not found: ${id}`);
  }

  return el;
};
```

It receives a string and returns an `HTMLElement`.

If the element does not exist, it throws an error instead of returning `null`.

This allows the rest of the application to work with a confirmed element.

### 8. DOM Element Types

The application uses specific DOM types:

```ts
HTMLSelectElement
HTMLInputElement
HTMLElement
```

- `HTMLSelectElement`: represents a `<select>` element.
- `HTMLInputElement`: represents an `<input>` element.
- `HTMLElement`: represents a general HTML element.

These types give access to the correct properties for each element.

For example:

```ts
propertyInputs.radius.value
```

The `.value` property is available because `radius` is typed as an `HTMLInputElement`.

### 9. Type Assertions

The `as` keyword tells TypeScript which specific type an element should have:

```ts
getElement("shape-type") as HTMLSelectElement;
```

Another example appears in the event handler:

```ts
e.target as HTMLInputElement
```

A type assertion does not change the element. It gives TypeScript more specific information about it.

### 10. Typed Objects for Elements

The input groups are stored in a typed object:

```ts
let propertyGroups: {
  circle: HTMLElement;
  rectangle: HTMLElement;
  triangle: HTMLElement;
};
```

The input elements are stored in another typed object:

```ts
let propertyInputs: {
  radius: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  base: HTMLInputElement;
  triangleHeight: HTMLInputElement;
};
```

This groups related DOM elements and ensures that every property uses the expected type.

### 11. `Object.entries()`

The application loops through objects using:

```ts
Object.entries(propertyGroups)
```

Each entry contains:

```text
[property name, property value]
```

It is used to compare each shape group with the selected shape:

```ts
Object.entries(propertyGroups).forEach(([name, group]) => {
  if (name === shapeType) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }
});
```

The selected input group becomes visible while the others remain hidden.

### 12. Ignoring an Object Key

The final loop only needs each input element and does not need its property name:

```ts
for (const [, input] of Object.entries(propertyInputs)) {
  input.oninput = handleInput;
}
```

The empty position before the comma ignores the key.

The variable `input` receives the current input element.

### 13. Event Types

The event handlers receive parameters typed as `Event`:

```ts
const handleShapeSelect = (e: Event) => {
```

```ts
const handleInput = (e: Event) => {
```

The event object contains information about the interaction and the element that triggered it.

### 14. `target` and `currentTarget`

The input handler uses:

```ts
e.target as HTMLInputElement
```

`target` represents the element that triggered the event.

The shape selection handler uses:

```ts
e.currentTarget as HTMLSelectElement
```

`currentTarget` represents the element where the event handler was registered.

### 15. Input Events

The shape selector receives this event handler:

```ts
shapeTypeSelect.oninput = handleShapeSelect;
```

Every property input receives:

```ts
input.oninput = handleInput;
```

The `input` event runs whenever the value of an input or select element changes.

### 16. DOM Initialization

The application waits until the HTML document has loaded:

```ts
document.addEventListener("DOMContentLoaded", initializeApp);
```

This prevents the program from searching for elements before they exist in the document.

The `initializeApp()` function:

- Retrieves the required elements.
- Builds the typed element objects.
- Assigns the event handlers.
- Prepares the application for user interaction.

### 17. Dynamic CSS Classes

Input groups are displayed and hidden using:

```ts
group.classList.remove("hidden");
group.classList.add("hidden");
```

The result card is controlled using:

```ts
resultCard.classList.add("visible");
resultCard.classList.remove("visible");
```

TypeScript changes the classes, while CSS decides how those classes look and behave.

### 18. Calculating the Area

The `calculateArea()` function receives the `Shapes` union:

```ts
const calculateArea = (shape: Shapes): string => {
```

It always returns a string describing the calculated area.

For a circle:

```ts
Math.PI * shape.radius ** 2
```

For a rectangle:

```ts
shape.width * shape.height
```

For a triangle:

```ts
0.5 * shape.base * shape.height
```

The circle result uses:

```ts
.toFixed(2)
```

This displays the result with two decimal places.

### 19. Converting Input Values

Input values are returned by the DOM as strings.

The application converts them into numbers using:

```ts
Number(propertyInputs.radius.value)
```

This is necessary before performing mathematical operations.

### 20. Negative Value Validation

The input handler checks whether the entered value is negative:

```ts
if (value < 0) {
  alert("Negative values are not allowed.");
  clearInputFields();
}
```

If the value is negative:

- An alert is shown.
- All input fields are cleared.
- The result is recalculated.

---

## Español

### Descripción del proyecto

En este workshop construí un administrador interactivo de figuras geométricas utilizando HTML, CSS y TypeScript.

La aplicación permite seleccionar una figura, ingresar sus medidas y calcular su área.

Las figuras disponibles son:

- Círculo.
- Rectángulo.
- Triángulo.

La interfaz cambia los campos visibles de acuerdo con la figura seleccionada y actualiza el resultado cuando el usuario ingresa una medida.

También impide utilizar valores negativos y muestra una alerta cuando se introduce un valor no permitido.

### Funciones principales

- Selección entre tres figuras geométricas.
- Visualización dinámica de los campos necesarios.
- Cálculo del área de la figura seleccionada.
- Representación de figuras con seguridad de tipos.
- Validación de números negativos.
- Tarjeta dinámica para mostrar resultados.
- Comprobación de elementos del DOM.
- Comprobación exhaustiva mediante `never`.
- Interfaz responsive con CSS Grid.

### Fórmulas utilizadas

```text
Círculo: π × radio²
Rectángulo: ancho × altura
Triángulo: 0.5 × base × altura
```

---

## Conceptos de TypeScript aprendidos

### 1. Interfaz base

La interfaz `Shape` define la estructura compartida:

```ts
interface Shape {
  type: string;
}
```

Todas las figuras deben contener una propiedad `type`.

### 2. Extensión de interfaces

Las interfaces específicas utilizan `extends`:

```ts
interface Circle extends Shape {
  type: "circle";
  radius: number;
}
```

```ts
interface Rectangle extends Shape {
  type: "rectangle";
  width: number;
  height: number;
}
```

```ts
interface Triangle extends Shape {
  type: "triangle";
  base: number;
  height: number;
}
```

`extends` permite heredar las propiedades de otra interfaz y agregar nuevas propiedades.

### 3. Tipos literales

Cada figura utiliza un valor de texto específico:

```ts
type: "circle";
type: "rectangle";
type: "triangle";
```

Estos valores permiten que TypeScript identifique exactamente qué figura se está procesando.

### 4. Tipo unión

Las tres figuras se agrupan mediante:

```ts
type Shapes = Circle | Triangle | Rectangle;
```

El símbolo `|` significa “o”. Un valor de tipo `Shapes` puede ser un círculo, un triángulo o un rectángulo.

### 5. Unión discriminada

La propiedad `type` funciona como discriminante:

```ts
switch (shape.type) {
  case "circle":
  case "rectangle":
  case "triangle":
}
```

Dentro de cada `case`, TypeScript conoce las propiedades disponibles para esa figura.

### 6. Comprobación exhaustiva con `never`

El bloque `default` contiene:

```ts
const _nonExistent: never = shape;
return _nonExistent;
```

El tipo `never` representa un valor que no debería existir.

Si se agregara una nueva figura al tipo `Shapes` sin agregar su correspondiente `case`, TypeScript podría detectar que falta manejar esa posibilidad.

### 7. Función `getElement()`

```ts
const getElement = (id: string): HTMLElement => {
  const el = document.getElementById(id);

  if (!el) {
    throw new Error(`Element not found: ${id}`);
  }

  return el;
};
```

La función:

- Recibe un `id` de tipo `string`.
- Busca el elemento.
- Comprueba que exista.
- Lanza un error si no lo encuentra.
- Devuelve un `HTMLElement` confirmado.

### 8. Tipos de elementos HTML

La aplicación utiliza:

```ts
HTMLSelectElement
HTMLInputElement
HTMLElement
```

Esto permite que TypeScript conozca las propiedades específicas de cada clase de elemento.

### 9. Aserciones de tipo

El operador `as` se utiliza para indicar un tipo más específico:

```ts
getElement("radius") as HTMLInputElement;
```

También se utiliza con elementos que originan eventos:

```ts
e.target as HTMLInputElement
```

### 10. Objetos tipados

Los grupos de propiedades se almacenan en:

```ts
let propertyGroups: {
  circle: HTMLElement;
  rectangle: HTMLElement;
  triangle: HTMLElement;
};
```

Los campos numéricos se almacenan en:

```ts
let propertyInputs: {
  radius: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  base: HTMLInputElement;
  triangleHeight: HTMLInputElement;
};
```

Esto organiza los elementos y comprueba que tengan los tipos correspondientes.

### 11. Uso de `Object.entries()`

```ts
Object.entries(propertyGroups)
```

Convierte las propiedades del objeto en pares formados por:

```text
[clave, valor]
```

Esto permite recorrer los nombres de las figuras y sus elementos HTML.

### 12. Desestructuración

En este bucle:

```ts
for (const [, input] of Object.entries(propertyInputs)) {
  input.oninput = handleInput;
}
```

La coma inicial ignora la clave del objeto porque solamente necesitamos el elemento `input`.

### 13. Eventos del DOM

Los manejadores reciben eventos tipados:

```ts
(e: Event)
```

El evento contiene información sobre la interacción realizada por el usuario.

### 14. Evento `input`

```ts
shapeTypeSelect.oninput = handleShapeSelect;
```

```ts
input.oninput = handleInput;
```

El evento `input` se activa cada vez que cambia el valor de un campo.

### 15. `target` y `currentTarget`

```ts
e.target
```

Representa el elemento que originó el evento.

```ts
e.currentTarget
```

Representa el elemento sobre el cual fue registrado el manejador.

Las aserciones de tipo permiten acceder de manera segura a sus valores.

### 16. Inicialización de la aplicación

```ts
document.addEventListener("DOMContentLoaded", initializeApp);
```

La aplicación espera a que el documento HTML termine de cargarse antes de buscar y utilizar sus elementos.

### 17. Manipulación de clases

La aplicación muestra u oculta campos modificando sus clases:

```ts
group.classList.remove("hidden");
group.classList.add("hidden");
```

También controla la tarjeta de resultado:

```ts
resultCard.classList.add("visible");
resultCard.classList.remove("visible");
```

### 18. Conversión a números

Los valores de los campos HTML son textos. Antes de realizar cálculos, se convierten mediante:

```ts
Number(propertyInputs.radius.value)
```

### 19. Cálculo de áreas

La función:

```ts
const calculateArea = (shape: Shapes): string => {
```

recibe una figura válida y devuelve el resultado como texto.

Para los círculos utiliza:

```ts
Math.PI * shape.radius ** 2
```

Para los rectángulos utiliza:

```ts
shape.width * shape.height
```

Para los triángulos utiliza:

```ts
0.5 * shape.base * shape.height
```

### 20. Validación de valores negativos

```ts
if (value < 0) {
  alert("Negative values are not allowed.");
  clearInputFields();
}
```

Si el usuario escribe un número negativo, se muestra una alerta y se limpian los campos.

---

## What I Learned | Lo que aprendí

- TypeScript interfaces.
- Interface inheritance with `extends`.
- String literal types.
- Union types.
- Discriminated unions.
- Exhaustive checking with `never`.
- Type annotations.
- Type assertions with `as`.
- DOM types such as `HTMLElement` and `HTMLInputElement`.
- Typed events.
- `target` and `currentTarget`.
- Optional DOM validation.
- `Object.entries()`.
- Array and object destructuring.
- CSS class manipulation.
- Dynamic form fields.
- Mathematical calculations.
- Input validation.
- Responsive layouts with CSS Grid.

---

- Interfaces de TypeScript.
- Herencia de interfaces mediante `extends`.
- Tipos literales de texto.
- Tipos unión.
- Uniones discriminadas.
- Comprobación exhaustiva mediante `never`.
- Anotaciones de tipo.
- Aserciones de tipo con `as`.
- Tipos del DOM como `HTMLElement` y `HTMLInputElement`.
- Eventos tipados.
- Diferencia entre `target` y `currentTarget`.
- Comprobación de elementos del DOM.
- Uso de `Object.entries()`.
- Desestructuración de arrays y objetos.
- Manipulación de clases CSS.
- Campos de formulario dinámicos.
- Cálculos matemáticos.
- Validación de campos.
- Diseños responsive con CSS Grid.

## Project Files | Archivos del proyecto

- `index.html`: contains the structure of the application.
- `styles.css`: contains the visual styles and responsive layout.
- `index.ts`: contains the TypeScript types, calculations, DOM logic, and events.
- `README.md`: documents the project and the concepts learned.

---

- `index.html`: contiene la estructura de la aplicación.
- `styles.css`: contiene los estilos visuales y el diseño responsive.
- `index.ts`: contiene los tipos, cálculos, lógica del DOM y eventos.
- `README.md`: documenta el proyecto y los conceptos aprendidos.

## Project Structure | Estructura del proyecto

```text
021-build-a-shape-manager/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## Technologies | Tecnologías

- HTML5
- CSS3
- TypeScript
- DOM API
- CSS Grid
- Responsive Design

## Execution Note | Nota de ejecución

The original workshop connects `index.ts` directly from the HTML:

```html
<script src="index.ts"></script>
```

This structure is preserved because it is the original freeCodeCamp workshop code.

A standard browser does not compile TypeScript type annotations directly. Therefore, execution outside the freeCodeCamp environment may require compiling `index.ts` into JavaScript.

---

El workshop original conecta `index.ts` directamente desde el HTML:

```html
<script src="index.ts"></script>
```

Esta estructura se conserva porque corresponde al código original de freeCodeCamp.

Un navegador normal no compila directamente las anotaciones de TypeScript. Por eso, para ejecutarlo fuera del entorno de freeCodeCamp puede ser necesario compilar `index.ts` a JavaScript.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.