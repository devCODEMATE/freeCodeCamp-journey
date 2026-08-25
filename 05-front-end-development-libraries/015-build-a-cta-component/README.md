# Build a CTA Component

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_Classes-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 015
- **Type | Tipo:** Workshop
- **Topic | Tema:** Tailwind CSS
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Workshop:** [Build a CTA Component](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-tailwind-cta-component)

---

## English

### Project Description

In this workshop, I built a responsive call-to-action component using HTML and Tailwind CSS.

A call-to-action, commonly abbreviated as **CTA**, is a section designed to encourage the user to perform a specific action.

This component promotes a fictional music platform called **Soundflow** and contains:

- The product or brand name.
- A main heading.
- A short description.
- A secondary action link.
- A primary action link.
- Responsive Flexbox behavior.
- Hover effects for both links.

Tailwind CSS is loaded through a CDN, so this exercise does not require a separate CSS file.

### Original Workshop Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CTA component</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="bg-indigo-600 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md">
      <div>
        <span class="uppercase">Soundflow</span>
        <h1 class="font-bold text-4xl my-4">Discover New Music</h1>
        <p>Stream your favorite tracks and discover new artists.</p>
      </div>
      <div class="flex gap-2 mt-6">
        <a
          href="#"
          class="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded"
        >
          Learn more
        </a>
        <a
          href="#"
          class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded"
        >
          Start listening
        </a>
      </div>
    </div>
  </body>
</html>
```

### Tailwind CSS Classes Used

#### Main CTA container

```html
<div class="bg-indigo-600 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md">
```

The main container uses these Tailwind CSS classes:

- `bg-indigo-600`: adds an indigo background.
- `text-white`: changes the text color to white.
- `mt-8`: adds a top margin.
- `p-4`: adds padding around the content.
- `md:w-1/2`: sets the width to 50% on medium-sized screens and larger.
- `mx-auto`: centers the component horizontally.
- `flex`: creates a Flexbox container.
- `flex-col`: places the content vertically by default.
- `lg:flex-row`: places the content horizontally on large screens and larger.
- `justify-around`: distributes space around the flex items.
- `items-center`: centers the flex items along the cross axis.
- `rounded-md`: adds medium rounded corners.

#### Brand name

```html
<span class="uppercase">Soundflow</span>
```

- `uppercase`: displays the text using uppercase letters.

The original text remains `Soundflow` in the HTML, but the browser displays it as `SOUNDFLOW`.

#### Main heading

```html
<h1 class="font-bold text-4xl my-4">
```

- `font-bold`: applies a bold font weight.
- `text-4xl`: applies a large font size.
- `my-4`: adds vertical margin above and below the heading.

#### Links container

```html
<div class="flex gap-2 mt-6">
```

- `flex`: places the links next to each other.
- `gap-2`: adds space between both links.
- `mt-6`: adds margin above the link group.

#### “Learn more” link

```html
<a
  href="#"
  class="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded"
>
```

- `bg-white`: adds a white background.
- `hover:bg-gray-100`: changes the background to light gray when the user hovers over the link.
- `text-indigo-600`: applies an indigo text color.
- `px-4`: adds horizontal padding.
- `py-2`: adds vertical padding.
- `font-semibold`: gives the text a semi-bold weight.
- `rounded`: adds rounded corners.

#### “Start listening” link

```html
<a
  href="#"
  class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded"
>
```

- `bg-pink-500`: adds a pink background.
- `hover:bg-pink-600`: changes the background to a darker pink when the user hovers over the link.
- `text-white`: applies white text.
- `px-4`: adds horizontal padding.
- `py-2`: adds vertical padding.
- `font-semibold`: gives the text a semi-bold weight.
- `rounded`: adds rounded corners.

### Responsive Design

This workshop uses responsive Tailwind CSS prefixes:

```html
md:w-1/2
lg:flex-row
```

The component behaves as follows:

- On small screens, `flex-col` places the content in a vertical column.
- Starting at the `md` breakpoint, `md:w-1/2` sets the component width to 50%.
- Starting at the `lg` breakpoint, `lg:flex-row` places the text and links next to each other.

### What I Learned

In this workshop, I learned:

- What a call-to-action component is.
- How to load Tailwind CSS using a CDN.
- How to apply styles with Tailwind utility classes.
- How to create a responsive Flexbox layout.
- How to change the flex direction at a specific breakpoint.
- How to apply responsive widths.
- How to control margin, padding, and gaps.
- How to style links so they look like buttons.
- How to add hover effects.
- How to control font size and font weight.
- How to create rounded containers and buttons.
- How to build a component without using a separate CSS file.

---

## Español

### Descripción del proyecto

En este workshop construí un componente de llamada a la acción utilizando HTML y Tailwind CSS.

Una llamada a la acción, conocida por las siglas **CTA** provenientes de *Call to Action*, es una sección diseñada para invitar al usuario a realizar una acción específica.

Este componente promociona una plataforma ficticia de música llamada **Soundflow** y contiene:

- El nombre del producto o marca.
- Un encabezado principal.
- Una descripción breve.
- Un enlace de acción secundario.
- Un enlace de acción principal.
- Un diseño responsive con Flexbox.
- Efectos `hover` sobre los enlaces.

Tailwind CSS se carga mediante un CDN, por lo que el ejercicio no necesita un archivo CSS separado.

### Código original del workshop

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CTA component</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="bg-indigo-600 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md">
      <div>
        <span class="uppercase">Soundflow</span>
        <h1 class="font-bold text-4xl my-4">Discover New Music</h1>
        <p>Stream your favorite tracks and discover new artists.</p>
      </div>
      <div class="flex gap-2 mt-6">
        <a
          href="#"
          class="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded"
        >
          Learn more
        </a>
        <a
          href="#"
          class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded"
        >
          Start listening
        </a>
      </div>
    </div>
  </body>
</html>
```

### Clases de Tailwind CSS utilizadas

#### Contenedor principal

```html
<div class="bg-indigo-600 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md">
```

El contenedor principal utiliza estas clases:

- `bg-indigo-600`: agrega un fondo color índigo.
- `text-white`: cambia el color del texto a blanco.
- `mt-8`: agrega un margen superior.
- `p-4`: agrega espacio interior alrededor del contenido.
- `md:w-1/2`: establece un ancho del 50% en pantallas medianas o más grandes.
- `mx-auto`: centra horizontalmente el componente.
- `flex`: convierte el elemento en un contenedor Flexbox.
- `flex-col`: coloca el contenido verticalmente de manera predeterminada.
- `lg:flex-row`: coloca el contenido horizontalmente en pantallas grandes.
- `justify-around`: distribuye espacio alrededor de los elementos.
- `items-center`: centra los elementos sobre el eje transversal.
- `rounded-md`: agrega esquinas redondeadas medianas.

#### Nombre de la marca

```html
<span class="uppercase">Soundflow</span>
```

- `uppercase`: muestra el texto utilizando letras mayúsculas.

El texto original continúa siendo `Soundflow` dentro del HTML, pero el navegador lo muestra como `SOUNDFLOW`.

#### Encabezado principal

```html
<h1 class="font-bold text-4xl my-4">
```

- `font-bold`: aplica un grosor de fuente negrita.
- `text-4xl`: establece un tamaño de fuente grande.
- `my-4`: agrega margen vertical arriba y abajo del encabezado.

#### Contenedor de los enlaces

```html
<div class="flex gap-2 mt-6">
```

- `flex`: coloca los enlaces uno al lado del otro.
- `gap-2`: agrega espacio entre los dos enlaces.
- `mt-6`: agrega un margen superior.

#### Enlace “Learn more”

```html
<a
  href="#"
  class="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded"
>
```

- `bg-white`: agrega un fondo blanco.
- `hover:bg-gray-100`: cambia el fondo a gris claro cuando el cursor pasa sobre el enlace.
- `text-indigo-600`: aplica un color índigo al texto.
- `px-4`: agrega espacio horizontal dentro del enlace.
- `py-2`: agrega espacio vertical dentro del enlace.
- `font-semibold`: aplica un grosor de fuente seminegrita.
- `rounded`: agrega esquinas redondeadas.

#### Enlace “Start listening”

```html
<a
  href="#"
  class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded"
>
```

- `bg-pink-500`: agrega un fondo rosa.
- `hover:bg-pink-600`: cambia el fondo a un rosa más oscuro al pasar el cursor.
- `text-white`: aplica color blanco al texto.
- `px-4`: agrega espacio horizontal.
- `py-2`: agrega espacio vertical.
- `font-semibold`: aplica un grosor seminegrita.
- `rounded`: agrega esquinas redondeadas.

### Diseño responsive

Este workshop utiliza los siguientes prefijos responsive:

```html
md:w-1/2
lg:flex-row
```

El comportamiento del componente es el siguiente:

- En pantallas pequeñas, `flex-col` coloca el contenido verticalmente.
- Desde el breakpoint `md`, `md:w-1/2` establece un ancho del 50%.
- Desde el breakpoint `lg`, `lg:flex-row` coloca el texto y los enlaces uno al lado del otro.

### Lo que aprendí

En este workshop aprendí:

- Qué es un componente de llamada a la acción.
- A cargar Tailwind CSS mediante un CDN.
- A aplicar estilos utilizando clases de utilidad.
- A crear un diseño responsive con Flexbox.
- A cambiar la dirección de Flexbox según el tamaño de pantalla.
- A aplicar anchos responsivos.
- A controlar márgenes, padding y espacios.
- A diseñar enlaces para que parezcan botones.
- A agregar efectos `hover`.
- A controlar el tamaño y el grosor de la fuente.
- A crear contenedores y botones con esquinas redondeadas.
- A construir un componente sin utilizar un archivo CSS separado.

---

## Project Structure | Estructura del proyecto

```text
015-build-a-cta-component/
├── README.md
└── index.html
```

## Technologies | Tecnologías

- HTML5
- Tailwind CSS
- Flexbox
- Responsive Design
- Utility-first CSS

## Running the Project | Cómo ejecutar el proyecto

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Run the file using Live Server or open it directly in a browser.

---

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo `index.html`.
3. Ejecutarlo con Live Server o abrirlo directamente en el navegador.

An internet connection is required because Tailwind CSS is loaded from a CDN.

Es necesaria una conexión a Internet porque Tailwind CSS se carga desde un CDN.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.