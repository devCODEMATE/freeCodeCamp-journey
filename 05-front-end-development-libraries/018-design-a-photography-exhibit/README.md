# Design a Photography Exhibit

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_Classes-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 018
- **Type | Tipo:** Lab
- **Topic | Tema:** Tailwind CSS
- **Status | Estado:** Completed ✅
- **Tests | Pruebas:** 18/18 passed
- **Platform | Plataforma:** freeCodeCamp
- **Lab:** [Design a Photography Exhibit](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-photography-exhibit)

---

## English

### Project Description

In this lab, I designed a responsive photography exhibit using HTML and Tailwind CSS utility classes.

The exhibit presents three photographs:

- The Colosseum in Rome.
- Snow-covered mountains in the Alps.
- A blue sea beside a rocky coastline.

Each photograph is displayed inside a card containing:

- An image.
- An accessible alternative description.
- A subheading.
- A short description.

The page uses a dark visual style to make the photographs stand out.

### Project Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Photography Exhibit</title>

    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body class="bg-slate-950 text-white min-h-screen p-8">
    <header class="text-center mb-10">
      <h1 class="text-4xl font-bold">Photography Exhibit</h1>

      <p class="text-base text-slate-300 mt-3">
        A visual journey through history, mountains, and sea.
      </p>
    </header>

    <main
      class="main-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      <article class="card bg-slate-900 rounded-xl p-4">
        <img
          class="rounded-lg w-full h-64 object-cover"
          src="https://cdn.freecodecamp.org/curriculum/labs/colosseo.jpg"
          alt="The Colosseum in Rome"
        />

        <h2 class="subheading font-bold text-xl mt-4">
          Eternal Rome
        </h2>

        <p class="description text-sm text-slate-300 mt-2">
          The Colosseum stands as a reminder of the history and architecture of
          ancient Rome.
        </p>
      </article>

      <article class="card bg-slate-900 rounded-xl p-4">
        <img
          class="rounded-lg w-full h-64 object-cover"
          src="https://cdn.freecodecamp.org/curriculum/labs/alps.jpg"
          alt="Snow-covered mountains in the Alps"
        />

        <h2 class="subheading font-bold text-xl mt-4">
          Alpine Silence
        </h2>

        <p class="description text-sm text-slate-300 mt-2">
          Snow-covered mountains rise above the landscape beneath a peaceful
          and open sky.
        </p>
      </article>

      <article class="card bg-slate-900 rounded-xl p-4">
        <img
          class="rounded-lg w-full h-64 object-cover"
          src="https://cdn.freecodecamp.org/curriculum/labs/sea.jpg"
          alt="Blue sea beside a rocky coastline"
        />

        <h2 class="subheading font-bold text-xl mt-4">
          Endless Blue
        </h2>

        <p class="description text-sm text-slate-300 mt-2">
          The calm blue sea meets the coastline and creates a quiet natural
          escape.
        </p>
      </article>
    </main>
  </body>
</html>
```

### Main Tailwind CSS Concepts

#### Dark page background

```html
<body class="bg-slate-950 text-white min-h-screen p-8">
```

- `bg-slate-950`: applies a very dark slate background.
- `text-white`: sets the default text color to white.
- `min-h-screen`: gives the body a minimum height equal to the viewport.
- `p-8`: adds padding around the page.

#### Responsive photography grid

```html
class="main-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
```

- `main-container`: class required by the project tests.
- `grid`: creates a CSS Grid container.
- `grid-cols-1`: displays one column by default.
- `md:grid-cols-3`: displays three columns on medium screens and larger.
- `gap-6`: adds space between rows and columns.
- `max-w-6xl`: limits the maximum width.
- `mx-auto`: centers the grid horizontally.

#### Photography cards

```html
class="card bg-slate-900 rounded-xl p-4"
```

- `card`: class required by the tests.
- `bg-slate-900`: applies a dark background to the card.
- `rounded-xl`: adds large rounded corners.
- `p-4`: adds internal spacing.

#### Images

```html
class="rounded-lg w-full h-64 object-cover"
```

- `rounded-lg`: adds rounded corners to the image.
- `w-full`: makes the image use the full width of the card.
- `h-64`: gives every image the same height.
- `object-cover`: fills the available area while preserving the image proportions.

#### Subheadings

```html
class="subheading font-bold text-xl mt-4"
```

- `subheading`: class required by the tests.
- `font-bold`: applies a bold font weight.
- `text-xl`: applies a predefined font size.
- `mt-4`: adds space above the heading.

#### Descriptions

```html
class="description text-sm text-slate-300 mt-2"
```

- `description`: class required by the tests.
- `text-sm`: applies a small predefined font size.
- `text-slate-300`: applies a light slate color.
- `mt-2`: adds space above the paragraph.

### Responsive Design

Tailwind CSS uses a mobile-first approach.

```html
grid-cols-1 md:grid-cols-3
```

The exhibit has:

- One column on small screens.
- Three columns on medium screens and larger.

### Accessibility

Every image contains an `alt` attribute:

```html
alt="The Colosseum in Rome"
```

The alternative text describes the content of the image for people using screen readers and is also displayed if the image cannot load.

### What I Learned

In this lab, I learned:

- How to create a gallery with CSS Grid.
- How to define a fixed number of grid columns.
- How to change the grid layout responsively.
- How to add gaps between rows and columns.
- How to build photography cards.
- How to give images consistent dimensions.
- How `object-cover` preserves image proportions.
- How to use predefined font sizes and weights.
- How to apply rounded corners and padding.
- How to provide accessible alternative text for images.
- How to style a page using Tailwind utility classes.

---

## Español

### Descripción del proyecto

En este lab diseñé una exposición fotográfica responsive utilizando HTML y clases de utilidad de Tailwind CSS.

La exposición presenta tres fotografías:

- El Coliseo de Roma.
- Las montañas nevadas de los Alpes.
- El mar azul junto a una costa rocosa.

Cada fotografía está dentro de una tarjeta que contiene:

- Una imagen.
- Una descripción alternativa accesible.
- Un subtítulo.
- Una descripción breve.

La página utiliza un diseño oscuro para destacar las fotografías.

### Contenedor Grid

```html
class="main-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
```

- `main-container`: clase requerida por las pruebas.
- `grid`: convierte el elemento en un contenedor CSS Grid.
- `grid-cols-1`: crea una columna en pantallas pequeñas.
- `md:grid-cols-3`: crea tres columnas en pantallas medianas o más grandes.
- `gap-6`: agrega espacio entre filas y columnas.
- `max-w-6xl`: limita el ancho máximo.
- `mx-auto`: centra horizontalmente el contenedor.

### Tarjetas

```html
class="card bg-slate-900 rounded-xl p-4"
```

- `card`: clase requerida por las pruebas.
- `bg-slate-900`: agrega un fondo oscuro.
- `rounded-xl`: agrega esquinas redondeadas.
- `p-4`: agrega espacio interno.

### Imágenes

```html
class="rounded-lg w-full h-64 object-cover"
```

- `rounded-lg`: redondea las esquinas de la imagen.
- `w-full`: utiliza todo el ancho disponible.
- `h-64`: establece la misma altura para todas las imágenes.
- `object-cover`: cubre el área conservando las proporciones de la fotografía.

### Subtítulos

```html
class="subheading font-bold text-xl mt-4"
```

- `subheading`: clase requerida por las pruebas.
- `font-bold`: aplica negrita.
- `text-xl`: establece un tamaño de fuente predefinido.
- `mt-4`: agrega margen superior.

### Descripciones

```html
class="description text-sm text-slate-300 mt-2"
```

- `description`: clase requerida por las pruebas.
- `text-sm`: establece un tamaño de fuente pequeño.
- `text-slate-300`: aplica un color gris claro.
- `mt-2`: agrega margen superior.

### Diseño responsive

```html
grid-cols-1 md:grid-cols-3
```

El diseño muestra:

- Una columna en dispositivos pequeños.
- Tres columnas en dispositivos medianos o más grandes.

### Accesibilidad

Cada imagen tiene un atributo `alt` con una descripción:

```html
alt="Snow-covered mountains in the Alps"
```

Este texto permite que los lectores de pantalla comuniquen el contenido visual de la fotografía.

### Lo que aprendí

En este lab aprendí:

- A crear una galería con CSS Grid.
- A definir una cantidad fija de columnas.
- A cambiar la estructura de Grid según el tamaño de pantalla.
- A agregar espacio entre filas y columnas.
- A construir tarjetas para fotografías.
- A darles dimensiones consistentes a las imágenes.
- A utilizar `object-cover`.
- A aplicar tamaños y grosores de fuente predefinidos.
- A usar esquinas redondeadas y padding.
- A escribir textos alternativos accesibles.
- A diseñar una página con clases de utilidad de Tailwind CSS.

---

## Tests | Pruebas

All 18 freeCodeCamp tests passed.

Las 18 pruebas de freeCodeCamp fueron superadas.

```text
Passed: 18
Failed: 0
```

## Project Structure | Estructura del proyecto

```text
018-design-a-photography-exhibit/
├── README.md
└── index.html
```

## Technologies | Tecnologías

- HTML5
- Tailwind CSS
- CSS Grid
- Responsive Design
- Accessibility
- Utility-first CSS

## Running the Project | Cómo ejecutar el proyecto

1. Open the folder in Visual Studio Code.
2. Open `index.html`.
3. Select **Open with Live Server**.

---

1. Abrir la carpeta en Visual Studio Code.
2. Abrir `index.html`.
3. Seleccionar **Open with Live Server**.

An internet connection is required because Tailwind CSS and the photographs are loaded from external URLs.

Es necesaria una conexión a Internet porque Tailwind CSS y las fotografías se cargan desde direcciones externas.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.