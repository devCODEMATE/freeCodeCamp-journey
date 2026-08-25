# Build a Pricing Component

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_Classes-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 016
- **Type | Tipo:** Workshop
- **Topic | Tema:** Tailwind CSS
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Workshop:** [Build a Pricing Component](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-tailwind-pricing-component)

---

## English

### Project Description

In this workshop, I built a responsive pricing component for a fictional music application using HTML and Tailwind CSS.

The component presents three subscription plans:

1. **Listener:** a free plan with basic features and advertisements.
2. **Premium:** a paid plan with unlimited access, downloads, and no advertisements.
3. **Family:** a plan that supports up to six individual accounts.

Each pricing card includes:

- The plan name.
- The monthly price.
- A short description.
- A list of included features.
- A call-to-action link.
- Colors and visual styles that distinguish each plan.

The Premium plan is emphasized using a dark background, a colored ring, a gradient button, a larger scale, and a “Most Popular” badge.

### Original Workshop Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music App Pricing</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100">
    <main>
      <h1 class="mt-8 mb-12 text-center text-3xl md:text-5xl font-semibold text-gray-900">Choose your listening plan</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-16">
        <div class="bg-gray-100 ring-1 ring-gray-300 grid grid-rows-[1fr_auto] rounded-xl p-8 gap-6">
          <div class="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
            <h2 class="text-lg font-semibold text-indigo-600">Listener</h2>
            <p class="text-4xl font-bold text-gray-900">$0<span class="text-base font-medium text-gray-500">/month</span></p>
            <p>
              Start exploring millions of songs with basic features and ads.
            </p>
            <ul class="mt-6 space-y-2 text-sm text-gray-700">
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>Ad-supported streaming
              </li>
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>Curated playlists
              </li>
            </ul>
          </div>
          <a
            href="#"
            class="block rounded-md bg-indigo-100 px-4 py-2 text-center font-semibold text-indigo-700 hover:bg-indigo-200"
          >
            Start listening
          </a>
        </div>
        <div class="relative bg-gray-950 text-white ring-2 ring-fuchsia-500 p-8 grid grid-rows-[1fr_auto] gap-6 rounded-xl scale-105">
          <div class="absolute -top-3 right-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full px-3 py-1 text-xs font-bold text-white">Most Popular</div>
          <div class="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
            <h2 class="text-lg font-semibold text-fuchsia-200">Premium</h2>
            <p class="text-4xl font-bold text-white">
              $9.99<span class="text-base font-medium text-fuchsia-300">/month</span>
            </p>
            <p class="text-gray-300">
              Enjoy the full music experience with unlimited access and
              downloads.
            </p>
            <ul class="mt-6 space-y-2 text-sm text-fuchsia-100">
              <li>
                <span aria-hidden class="text-green-500 mr-2">&#10003;</span>Ad-free listening
              </li>
              <li>
                <span aria-hidden class="text-green-500 mr-2">&#10003;</span>Offline playback
              </li>
              <li>
                <span aria-hidden class="text-green-500 mr-2">&#10003;</span>Unlimited skips
              </li>
            </ul>
          </div>
          <a
            href="#"
            class="block rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hover:from-fuchsia-600 hover:to-indigo-700 px-4 py-2 text-center font-semibold"
          >
            Go Premium
          </a>
        </div>
        <div class="bg-gray-100 ring-1 ring-gray-300 p-8 rounded-xl grid grid-rows-[1fr_auto] gap-6">
          <div class="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
            <h2 class="text-lg font-semibold text-indigo-600">Family</h2>
            <p class="text-4xl font-bold text-gray-900">
              $14.99<span class="text-base font-medium text-gray-500">/month</span>
            </p>
            <p class="text-gray-600">
              Enjoy all of the features with a plan for up to 6 family members.
            </p>
            <ul class="mt-6 space-y-2 text-sm text-gray-700">
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>All Premium features
              </li>
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>Up to 6 accounts
              </li>
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>Individual playlists &
                libraries
              </li>
              <li>
                <span aria-hidden class="text-green-700 mr-2">&#10003;</span>Family Mix playlists
              </li>
            </ul>
          </div>
          <a href="#" class="block rounded-md bg-indigo-600 px-4 py-2 text-center font-semibold text-white hover:bg-indigo-700">Start Family Plan</a>
        </div>
      </div>
    </main>
  </body>
</html>
```

### Main Tailwind CSS Concepts

#### Responsive heading

```html
<h1 class="mt-8 mb-12 text-center text-3xl md:text-5xl font-semibold text-gray-900">
```

- `mt-8`: adds top margin.
- `mb-12`: adds bottom margin.
- `text-center`: centers the text.
- `text-3xl`: sets the default heading size.
- `md:text-5xl`: increases the size on medium screens.
- `font-semibold`: applies a semi-bold font weight.
- `text-gray-900`: applies a dark gray color.

#### Responsive pricing grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-16">
```

- `grid`: creates a CSS Grid container.
- `grid-cols-1`: shows one column by default.
- `md:grid-cols-3`: shows three columns on medium screens and larger.
- `max-w-6xl`: limits the maximum width.
- `mx-auto`: centers the grid horizontally.
- `gap-8`: adds space between the pricing cards.
- `mt-16`: adds top margin.

#### Internal card layout

```html
grid grid-rows-[1fr_auto]
```

This creates two rows:

- `1fr`: allows the main content to use the available space.
- `auto`: gives the CTA link the space it needs.

This keeps the action links aligned near the bottom of the cards even when the cards contain different amounts of content.

#### Arbitrary grid values

```html
grid-rows-[auto_auto_auto_1fr]
```

The square brackets allow a custom CSS Grid value to be used directly in Tailwind CSS.

The first three rows adapt to their content, while the final row occupies the remaining available space.

#### Card borders using rings

```html
ring-1 ring-gray-300
```

- `ring-1`: adds a one-pixel ring around the card.
- `ring-gray-300`: changes the ring color to light gray.

The Premium card uses:

```html
ring-2 ring-fuchsia-500
```

This gives the featured plan a thicker fuchsia-colored ring.

#### Premium card emphasis

```html
relative bg-gray-950 text-white ring-2 ring-fuchsia-500 scale-105
```

- `relative`: creates the positioning reference for the badge.
- `bg-gray-950`: applies a nearly black background.
- `text-white`: applies white text.
- `ring-2`: adds a thicker ring.
- `ring-fuchsia-500`: colors the ring fuchsia.
- `scale-105`: displays the card at 105% of its normal size.

#### “Most Popular” badge

```html
absolute -top-3 right-3
```

- `absolute`: positions the badge independently.
- `-top-3`: moves it upward beyond the top edge.
- `right-3`: positions it near the right edge.

The badge gradient is created with:

```html
bg-gradient-to-r from-fuchsia-500 to-indigo-500
```

#### Gradient CTA button

```html
bg-gradient-to-r from-fuchsia-500 to-indigo-600
```

This creates a horizontal gradient from fuchsia to indigo.

The hover classes change the gradient when the cursor is placed over the link:

```html
hover:from-fuchsia-600 hover:to-indigo-700
```

#### Feature spacing

```html
mt-6 space-y-2 text-sm
```

- `mt-6`: adds space above the list.
- `space-y-2`: adds vertical space between list items.
- `text-sm`: reduces the text size.

#### Decorative checkmarks

```html
<span aria-hidden class="text-green-700 mr-2">&#10003;</span>
```

- `&#10003;`: displays the checkmark symbol `✓`.
- `text-green-700`: colors the checkmark green.
- `mr-2`: adds space after the symbol.
- `aria-hidden`: prevents assistive technology from reading the decorative symbol.

### What I Learned

In this workshop, I learned:

- How to create a responsive pricing section.
- How to build layouts using Tailwind CSS Grid classes.
- How to change the number of grid columns responsively.
- How to use custom grid row values.
- How to align CTA links across cards.
- How to style cards with rings and rounded corners.
- How to emphasize a featured pricing plan.
- How to create and position a promotional badge.
- How to create gradient backgrounds.
- How to add hover states to buttons.
- How to control typography, spacing, and colors.
- How to use `aria-hidden` for decorative symbols.
- How to load Tailwind CSS through a CDN.

---

## Español

### Descripción del proyecto

En este workshop construí un componente responsive de precios para una aplicación ficticia de música utilizando HTML y Tailwind CSS.

El componente presenta tres planes:

1. **Listener:** un plan gratuito con funciones básicas y anuncios.
2. **Premium:** un plan pago con acceso ilimitado, descargas y reproducción sin anuncios.
3. **Family:** un plan para un máximo de seis cuentas individuales.

Cada tarjeta contiene:

- El nombre del plan.
- El precio mensual.
- Una descripción breve.
- Una lista de funciones incluidas.
- Un enlace de llamada a la acción.
- Colores y estilos que permiten diferenciar cada opción.

El plan Premium está destacado mediante un fondo oscuro, un borde fucsia, un botón con degradado, un tamaño ligeramente mayor y una etiqueta que dice “Most Popular”.

### Conceptos principales aprendidos

#### Grid responsive

```html
grid grid-cols-1 md:grid-cols-3
```

En pantallas pequeñas se muestra una sola columna. A partir del breakpoint `md`, se muestran tres columnas.

#### Filas personalizadas

```html
grid-rows-[1fr_auto]
```

La primera fila ocupa el espacio disponible y la segunda se adapta al tamaño del enlace. Esto ayuda a mantener alineados los botones de las tarjetas.

#### Breakpoints

```html
md:text-5xl
md:grid-cols-3
```

El prefijo `md:` aplica el estilo en pantallas medianas y más grandes.

#### Rings

```html
ring-1 ring-gray-300
```

Las clases `ring` crean un contorno visual alrededor de un elemento sin utilizar directamente la propiedad tradicional `border`.

#### Posicionamiento

```html
relative
absolute
-top-3
right-3
```

La tarjeta Premium utiliza `relative` como referencia. La etiqueta “Most Popular” utiliza `absolute` para ubicarse sobre el borde superior.

#### Escala

```html
scale-105
```

Aumenta visualmente el tamaño de la tarjeta Premium al 105%.

#### Gradientes

```html
bg-gradient-to-r
from-fuchsia-500
to-indigo-500
```

Estas clases crean un degradado horizontal desde fucsia hacia índigo.

#### Estados hover

```html
hover:bg-indigo-200
hover:from-fuchsia-600
hover:to-indigo-700
```

Las clases que comienzan con `hover:` se activan cuando el cursor pasa sobre el elemento.

#### Accesibilidad

```html
<span aria-hidden>
```

Los símbolos de verificación son decorativos. `aria-hidden` evita que los lectores de pantalla anuncien información innecesaria.

### Lo que aprendí

En este workshop aprendí:

- A construir una sección de precios responsive.
- A crear diseños con CSS Grid mediante Tailwind CSS.
- A cambiar la cantidad de columnas según la pantalla.
- A utilizar valores personalizados para las filas de Grid.
- A mantener alineados los enlaces de acción.
- A diseñar tarjetas con contornos y esquinas redondeadas.
- A destacar visualmente un plan recomendado.
- A posicionar una etiqueta sobre una tarjeta.
- A crear fondos con degradados.
- A agregar estados `hover`.
- A controlar tipografía, colores y espacios.
- A usar `aria-hidden` en símbolos decorativos.
- A utilizar Tailwind CSS mediante un CDN.

---

## Project Structure | Estructura del proyecto

```text
016-build-a-pricing-component/
├── README.md
└── index.html
```

## Technologies | Tecnologías

- HTML5
- Tailwind CSS
- CSS Grid
- Responsive Design
- Utility-first CSS
- Accessibility

## Running the Project | Cómo ejecutar el proyecto

1. Open the folder in Visual Studio Code.
2. Open `index.html`.
3. Select **Open with Live Server**.

---

1. Abrir la carpeta en Visual Studio Code.
2. Abrir `index.html`.
3. Seleccionar **Open with Live Server**.

An internet connection is required because Tailwind CSS is loaded from a CDN.

Es necesaria una conexión a Internet porque Tailwind CSS se carga desde un CDN.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.