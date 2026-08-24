# Build an Error Message Component

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_Classes-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Type | Tipo:** Workshop
- **Exercise | Ejercicio:** 014
- **Topic | Tema:** Tailwind CSS
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Workshop:** [Build an Error Message Component](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-error-message-component)

---

## English

### Project Description

In this workshop, I built a reusable visual error message using HTML and Tailwind CSS utility classes.

The component contains:

- An error message.
- A highlighted error label.
- A dismiss button.
- Responsive width and margins.
- Flexbox alignment.
- Accessible attributes for the dismiss button.

Tailwind CSS is loaded through a CDN, so the project does not require a separate CSS file.

### Original Workshop Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error Message Component</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>  
    <div class="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center items-center">
      <p class="text-red-700 text-xl">
        <strong>Error!</strong> Something went wrong. Please try again.
      </p>
      <button aria-label="Dismiss" class="text-red-700 text-2xl">
        <span aria-hidden>&times;</span>
      </button>
    </div>
  </body>
</html>
```

### Tailwind CSS Classes Used

#### Error container

```html
<div class="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center items-center">
```

The container uses the following utility classes:

- `bg-red-100`: adds a light red background.
- `border-2`: adds a two-pixel border.
- `border-red-300`: gives the border a light red color.
- `rounded-md`: adds medium rounded corners.
- `md:w-1/2`: sets the width to 50% on medium-sized screens and larger.
- `p-4`: adds padding around the content.
- `mt-4`: adds margin above the component.
- `md:mx-auto`: centers the component horizontally on medium-sized screens and larger.
- `flex`: turns the container into a flex container.
- `gap-4`: adds space between the message and the button.
- `justify-center`: centers the flex items along the main axis.
- `items-center`: centers the flex items along the cross axis.

#### Error message

```html
<p class="text-red-700 text-xl">
```

- `text-red-700`: applies a dark red text color.
- `text-xl`: increases the paragraph’s font size.

#### Dismiss button

```html
<button aria-label="Dismiss" class="text-red-700 text-2xl">
```

- `text-red-700`: applies a dark red color to the button.
- `text-2xl`: makes the dismissal symbol larger.
- `aria-label="Dismiss"`: gives the button an accessible name for screen readers.

#### Decorative symbol

```html
<span aria-hidden>&times;</span>
```

- `&times;`: displays the multiplication symbol `×`, which represents the close action.
- `aria-hidden`: hides the decorative symbol from assistive technologies because the button already has the accessible name `Dismiss`.

### Responsive Design

Tailwind CSS uses responsive prefixes to apply styles at specific screen sizes.

In this project, the `md:` prefix applies styles on medium-sized screens and larger:

```html
md:w-1/2
md:mx-auto
```

This means the component uses half of the available width and is horizontally centered when the viewport reaches the `md` breakpoint.

### What I Learned

In this workshop, I learned:

- How to load Tailwind CSS through a CDN.
- How to style elements using utility classes.
- How to create a flex container with Tailwind CSS.
- How to control spacing with padding, margins, and gaps.
- How to center flex items horizontally and vertically.
- How to use responsive prefixes such as `md:`.
- How to create an accessible icon button.
- How `aria-label` and `aria-hidden` improve accessibility.
- How to create an error message without writing a separate CSS file.

### Project Structure

```text
014-build-an-error-message/
├── README.md
└── index.html
```

### Running the Project

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Run the file using Live Server or open it directly in a browser.

An internet connection is required because Tailwind CSS is loaded from its CDN.

---

## Español

### Descripción del proyecto

En este workshop construí un mensaje visual de error utilizando HTML y clases de utilidad de Tailwind CSS.

El componente contiene:

- Un mensaje de error.
- Una palabra destacada para indicar el error.
- Un botón para cerrar o descartar el mensaje.
- Ancho y márgenes responsivos.
- Alineación mediante Flexbox.
- Atributos de accesibilidad para el botón.

Tailwind CSS se carga mediante un CDN, por lo que el proyecto no necesita un archivo CSS separado.

### Código original del workshop

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error Message Component</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>  
    <div class="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center items-center">
      <p class="text-red-700 text-xl">
        <strong>Error!</strong> Something went wrong. Please try again.
      </p>
      <button aria-label="Dismiss" class="text-red-700 text-2xl">
        <span aria-hidden>&times;</span>
      </button>
    </div>
  </body>
</html>
```

### Clases de Tailwind CSS utilizadas

#### Contenedor del mensaje

```html
<div class="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center items-center">
```

El contenedor utiliza las siguientes clases:

- `bg-red-100`: agrega un fondo rojo claro.
- `border-2`: agrega un borde de dos píxeles.
- `border-red-300`: aplica un color rojo claro al borde.
- `rounded-md`: agrega esquinas redondeadas medianas.
- `md:w-1/2`: establece un ancho del 50% en pantallas medianas o más grandes.
- `p-4`: agrega espacio interior alrededor del contenido.
- `mt-4`: agrega un margen superior.
- `md:mx-auto`: centra horizontalmente el componente en pantallas medianas o más grandes.
- `flex`: convierte al elemento en un contenedor flexible.
- `gap-4`: agrega espacio entre el mensaje y el botón.
- `justify-center`: centra los elementos sobre el eje principal.
- `items-center`: centra los elementos sobre el eje transversal.

#### Texto del error

```html
<p class="text-red-700 text-xl">
```

- `text-red-700`: aplica un color rojo oscuro al texto.
- `text-xl`: aumenta el tamaño de la fuente del párrafo.

#### Botón para descartar el mensaje

```html
<button aria-label="Dismiss" class="text-red-700 text-2xl">
```

- `text-red-700`: aplica un color rojo oscuro al botón.
- `text-2xl`: aumenta el tamaño del símbolo.
- `aria-label="Dismiss"`: proporciona un nombre accesible para los lectores de pantalla.

#### Símbolo decorativo

```html
<span aria-hidden>&times;</span>
```

- `&times;`: muestra el símbolo de multiplicación `×`, utilizado para representar la acción de cerrar.
- `aria-hidden`: oculta el símbolo para las tecnologías de asistencia porque el botón ya tiene el nombre accesible `Dismiss`.

### Diseño responsive

Tailwind CSS utiliza prefijos responsivos para aplicar estilos a partir de determinados tamaños de pantalla.

En este proyecto se utiliza el prefijo `md:`:

```html
md:w-1/2
md:mx-auto
```

Esto significa que, en pantallas medianas o más grandes, el componente ocupa la mitad del ancho disponible y se centra horizontalmente.

### Lo que aprendí

En este workshop aprendí:

- A cargar Tailwind CSS mediante un CDN.
- A aplicar estilos utilizando clases de utilidad.
- A crear un contenedor Flexbox con Tailwind CSS.
- A controlar los espacios mediante padding, márgenes y `gap`.
- A centrar elementos horizontal y verticalmente.
- A utilizar prefijos responsivos como `md:`.
- A crear un botón de icono accesible.
- A utilizar `aria-label` y `aria-hidden`.
- A crear un componente visual sin escribir un archivo CSS separado.

### Estructura del proyecto

```text
014-build-an-error-message/
├── README.md
└── index.html
```

### Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo `index.html`.
3. Ejecutarlo con Live Server o abrirlo directamente en el navegador.

Es necesaria una conexión a Internet porque Tailwind CSS se carga desde un CDN.

---

## Technologies | Tecnologías

- HTML5
- Tailwind CSS
- Responsive Design
- Flexbox
- Accessibility / Accesibilidad

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.