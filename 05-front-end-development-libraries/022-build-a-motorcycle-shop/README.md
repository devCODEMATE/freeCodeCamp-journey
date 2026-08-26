# Build a Motorcycle Shop

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![TypeScript](https://img.shields.io/badge/TypeScript-Type_Safety-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 022
- **Title | Título:** Build a Motorcycle Shop
- **Type | Tipo:** Lab
- **Topic | Tema:** TypeScript
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp

---

## English

### Project Description

In this lab, I completed the functionality of a motorcycle shop using TypeScript.

The HTML and CSS were provided by freeCodeCamp. The main task was to use TypeScript to:

- Define the motorcycle data structure.
- Load motorcycle data from an external JSON endpoint.
- Create HTML cards dynamically.
- Render the complete motorcycle collection.
- Display the number of results.
- Filter motorcycles by name.
- Show a message when the search produces no results.

### Main Features

- Loads 25 motorcycles from an external endpoint.
- Displays motorcycle information in reusable cards.
- Shows each motorcycle's image, year, name, manufacturer, category, description, and price.
- Updates the number of displayed results.
- Filters motorcycles while the user types.
- Displays a no-results message when necessary.
- Uses TypeScript types, interfaces, classes, and access modifiers.

### Category Union Type

```ts
type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";
```

`Category` is a union type. It limits motorcycle categories to seven permitted string values.

A motorcycle cannot use an arbitrary category without producing a TypeScript error.

### Motorcycle Interface

```ts
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
}
```

The `Motorcycle` interface defines the structure expected for every motorcycle object.

It specifies:

- The required properties.
- The type expected for every property.
- The `Category` union used by `category`.
- A `Date` type for `created_at`.

### Loading Data with `fetch()`

```ts
async function fetchMotorcycles(): Promise<Motorcycle[]> {
```

The function is asynchronous and returns:

```ts
Promise<Motorcycle[]>
```

This means it eventually resolves to an array of motorcycle objects.

The information is requested from:

```text
https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json
```

The response is converted from JSON using:

```ts
const data = await response.json();
```

### Converting Dates

```ts
created_at: new Date(motorcycle.created_at)
```

JSON does not contain real JavaScript `Date` objects. Date values arrive as text.

`new Date()` converts the received value into a `Date` object so that it matches the type declared in the interface.

### Rendering a Motorcycle Card

```ts
function renderMotorcycleCard(
  motorcycle: Motorcycle
): string
```

The function:

- Receives one `Motorcycle`.
- Uses its properties inside a template literal.
- Returns the completed HTML as a `string`.

Each card includes the classes required by freeCodeCamp:

```text
motorcycle-card-image-container
motorcycle-card-year-badge
motorcycle-card-title
motorcycle-card-manufacturer
motorcycle-card-category
motorcycle-card-description
motorcycle-card-price
motorcycle-card-engine
```

### Template Literals

The card is constructed using backticks:

```ts
return `
  <article class="motorcycle-card">
    ...
  </article>
`;
```

Values are inserted into the HTML using interpolation:

```ts
${motorcycle.name}
${motorcycle.price}
${motorcycle.category}
```

### Formatting the Price

```ts
motorcycle.price.toLocaleString()
```

`toLocaleString()` formats the numeric value using readable thousands separators.

### Application Class

```ts
class MotorcycleGalleryApp {
```

The class groups the application state and behavior in one place.

It is responsible for:

- Loading motorcycles.
- Rendering cards.
- Configuring the search input.
- Filtering results.
- Updating the result counter.
- Showing or hiding the no-results message.

### Private State

```ts
private allMotorcycles: Motorcycle[] = [];
```

- `private` prevents the property from being accessed directly outside the class.
- `Motorcycle[]` ensures that the array only contains valid motorcycle objects.
- `[]` provides the initial empty value.

### Rendering the Collection

```ts
motorcycleGrid.innerHTML = this.allMotorcycles
  .map((motorcycle) =>
    renderMotorcycleCard(motorcycle)
  )
  .join("");
```

This process:

1. Uses `map()` to transform every motorcycle into an HTML string.
2. Uses `join("")` to combine all the strings.
3. Assigns the final HTML to `innerHTML`.

### Input Event

```ts
filterInput.addEventListener("input", () => {
```

The `input` event runs whenever the user modifies the search field.

This allows the interface to update immediately without requiring a submit button.

### Filtering Motorcycles

```ts
const filteredMotorcycles =
  this.allMotorcycles.filter((motorcycle) =>
    motorcycle.name
      .toLowerCase()
      .includes(searchText)
  );
```

- `filter()` creates a new array containing matching motorcycles.
- `toLowerCase()` makes the comparison case-insensitive.
- `includes()` checks whether the name contains the search text.

### Updating Results

```ts
resultsNumber.textContent =
  numberOfResults.toString();
```

The number is converted to text before being assigned to `textContent`.

The no-results message is controlled with a ternary operator:

```ts
noResults.style.display =
  numberOfResults === 0 ? "block" : "none";
```

### What I Learned

In this lab, I learned:

- How to create union types.
- How to define data structures with interfaces.
- How to type arrays as `Motorcycle[]`.
- How to create functions with typed parameters and return values.
- How to use `Promise<Motorcycle[]>`.
- How to load JSON data with `fetch()`.
- How to use `async` and `await`.
- How to convert strings into `Date` objects.
- How to create HTML with template literals.
- How to build a class in TypeScript.
- How to declare private class properties.
- How to manipulate the DOM.
- How to use `map()`, `filter()`, `join()` and `includes()`.
- How to react to the `input` event.
- How to create a real-time search filter.

---

## Español

### Descripción del proyecto

En este lab completé la funcionalidad de una tienda de motocicletas utilizando TypeScript.

El HTML y el CSS fueron proporcionados por freeCodeCamp. La tarea principal consistió en utilizar TypeScript para:

- Definir la estructura de los datos.
- Obtener las motocicletas desde un archivo JSON externo.
- Crear tarjetas HTML dinámicamente.
- Mostrar la colección completa.
- Indicar la cantidad de resultados.
- Filtrar motocicletas por nombre.
- Mostrar un mensaje cuando no existen coincidencias.

### Tipo unión `Category`

```ts
type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";
```

`Category` limita las categorías posibles a siete textos específicos.

Esto evita que una motocicleta reciba una categoría no permitida.

### Interfaz `Motorcycle`

```ts
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
}
```

La interfaz define las propiedades obligatorias y el tipo correspondiente a cada una.

### Función `fetchMotorcycles()`

```ts
async function fetchMotorcycles(): Promise<Motorcycle[]>
```

La función:

1. Realiza una solicitud con `fetch()`.
2. Espera la respuesta con `await`.
3. Convierte la respuesta a JSON.
4. Convierte `created_at` en un objeto `Date`.
5. Devuelve un array de motocicletas.

### Función `renderMotorcycleCard()`

```ts
function renderMotorcycleCard(
  motorcycle: Motorcycle
): string
```

Esta función recibe una motocicleta y devuelve el HTML de su tarjeta como texto.

Los valores se insertan mediante interpolación:

```ts
${motorcycle.name}
${motorcycle.manufacturer}
${motorcycle.price}
```

### Clase `MotorcycleGalleryApp`

```ts
class MotorcycleGalleryApp {
```

La clase reúne el estado y los métodos principales de la aplicación.

Contiene:

- El array completo de motocicletas.
- La carga de datos.
- La generación de tarjetas.
- La búsqueda por nombre.
- La actualización del contador.
- El mensaje de resultados vacíos.

### Propiedad privada

```ts
private allMotorcycles: Motorcycle[] = [];
```

- `private` limita el acceso desde fuera de la clase.
- `Motorcycle[]` indica que solamente acepta motocicletas.
- `[]` inicializa el array vacío.

### Métodos de arrays

La aplicación utiliza:

- `map()` para transformar motocicletas en tarjetas HTML.
- `filter()` para seleccionar coincidencias.
- `join("")` para unir las tarjetas.
- `includes()` para comprobar si un nombre contiene el texto buscado.

### Evento `input`

```ts
filterInput.addEventListener("input", () => {
```

El evento se ejecuta cada vez que cambia el contenido del buscador.

De esta forma, los resultados se filtran mientras el usuario escribe.

### Actualización del DOM

La aplicación actualiza las tarjetas mediante:

```ts
motorcycleGrid.innerHTML = ...
```

También actualiza el contador mediante:

```ts
resultsNumber.textContent =
  numberOfResults.toString();
```

### Lo que aprendí

En este lab aprendí:

- A crear tipos unión.
- A definir interfaces.
- A trabajar con arrays tipados.
- A declarar tipos para parámetros y retornos.
- A utilizar promesas tipadas.
- A cargar datos con `fetch()`.
- A utilizar `async` y `await`.
- A convertir valores a objetos `Date`.
- A crear HTML con template literals.
- A organizar una aplicación con una clase.
- A declarar propiedades privadas.
- A manipular elementos del DOM.
- A utilizar `map()`, `filter()`, `join()` e `includes()`.
- A escuchar el evento `input`.
- A construir un filtro de búsqueda en tiempo real.

---

## Project Files | Archivos del proyecto

- `index.html`: contains the page structure provided by freeCodeCamp.
- `styles.css`: contains the page styles provided by freeCodeCamp.
- `index.ts`: contains the TypeScript functionality.
- `README.md`: documents the project and concepts learned.

---

- `index.html`: contiene la estructura proporcionada por freeCodeCamp.
- `styles.css`: contiene los estilos proporcionados por freeCodeCamp.
- `index.ts`: contiene la funcionalidad escrita en TypeScript.
- `README.md`: documenta el proyecto y los conceptos aprendidos.

## Project Structure | Estructura del proyecto

```text
022-build-a-motorcycle-shop/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## Technologies | Tecnologías

- HTML5
- CSS3
- TypeScript
- Fetch API
- DOM API
- JSON
- CSS Grid
- Responsive Design

## Execution Note | Nota de ejecución

The original freeCodeCamp HTML loads:

```html
<script src="./index.ts"></script>
```

This original structure is preserved in the repository.

A standard browser does not interpret TypeScript type annotations directly. Running the application outside freeCodeCamp may require compiling `index.ts` into JavaScript.

---

El HTML original de freeCodeCamp carga:

```html
<script src="./index.ts"></script>
```

Esta estructura original se conserva en el repositorio.

Un navegador normal no interpreta directamente las anotaciones de TypeScript. Para ejecutar la aplicación fuera de freeCodeCamp puede ser necesario compilar `index.ts` a JavaScript.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.