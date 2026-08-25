# Build a Music Shopping Cart Page

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_Classes-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 017
- **Type | Tipo:** Lab
- **Topic | Tema:** Tailwind CSS
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp
- **Lab:** [Build a Music Shopping Cart Page](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-music-shopping-cart)

---

## English

### Project Description

In this lab, I built a responsive shopping cart page for a fictional music store using HTML and Tailwind CSS.

The shopping cart contains two music products. Each product card displays:

- The product name.
- The selected quantity.
- The price.
- A button to remove the product.

The page also contains an order summary with:

- The total label.
- The total purchase amount.
- A checkout link.

The layout uses Tailwind CSS responsive utility classes to display the content vertically on smaller screens and horizontally on larger screens.

### Project Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Shopping Cart</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body class="bg-gray-100 text-gray-900">
    <main class="mx-auto max-w-6xl p-6">
      <h1 class="mb-8 text-center text-4xl font-bold text-indigo-700">
        Music Shopping Cart
      </h1>

      <div
        id="shopping-cart-container"
        class="flex flex-col gap-8 lg:flex-row"
      >
        <div id="products-container" class="flex-1 space-y-6">
          <div class="card rounded-lg border bg-white p-6 shadow-md">
            <h2 class="text-2xl font-semibold text-indigo-700">
              Midnight Echoes
            </h2>

            <p class="quantity mt-3 text-gray-600">
              Quantity: 1
            </p>

            <p class="price mt-2 text-xl font-bold">
              $14.99
            </p>

            <button
              class="remove-button mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>

          <div class="card rounded-lg border bg-white p-6 shadow-md">
            <h2 class="text-2xl font-semibold text-indigo-700">
              Electric Dreams
            </h2>

            <p class="quantity mt-3 text-gray-600">
              Quantity: 2
            </p>

            <p class="price mt-2 text-xl font-bold">
              $19.99
            </p>

            <button
              class="remove-button mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>

        <div
          id="order-summary-container"
          class="h-fit rounded-lg border-2 border-indigo-200 bg-white p-6 shadow-md lg:w-1/3"
        >
          <h2 class="text-2xl font-semibold text-indigo-700">
            Order Summary
          </h2>

          <p id="total" class="mt-6 text-xl font-bold">
            Total:
          </p>

          <p id="total-amount" class="mb-6 text-3xl font-bold">
            $54.97
          </p>

          <a
            href="#"
            class="block rounded bg-blue-500 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Checkout
          </a>
        </div>
      </div>
    </main>
  </body>
</html>
```

### Responsive Flexbox Layout

The main shopping cart uses:

```html
class="flex flex-col gap-8 lg:flex-row"
```

- `flex`: creates a Flexbox layout.
- `flex-col`: places the products and summary vertically by default.
- `gap-8`: adds space between both sections.
- `lg:flex-row`: changes the direction to a horizontal row on larger screens.

Tailwind CSS uses a mobile-first approach. The default styles apply to smaller screens, while the `lg:` prefix applies a different style on larger screens.

### Product Cards

Each product is contained inside an element with the `card` class:

```html
<div class="card rounded-lg border bg-white p-6 shadow-md">
```

- `rounded-lg`: adds rounded corners.
- `border`: adds a border on all sides.
- `bg-white`: applies a white background.
- `p-6`: adds internal spacing.
- `shadow-md`: adds a medium shadow.

Each card includes:

```html
<h2 class="text-2xl">Product name</h2>
<p class="quantity">Quantity</p>
<p class="price">Price</p>
<button class="remove-button">Remove</button>
```

The required classes `quantity`, `price`, and `remove-button` identify the different parts of each product.

### Remove Buttons

```html
class="remove-button mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
```

- `remove-button`: class required by the project tests.
- `bg-red-500`: applies a red background.
- `hover:bg-red-700`: applies a darker red background when hovered.
- `text-white`: applies white text.
- `px-4`: adds horizontal padding.
- `py-2`: adds vertical padding.
- `rounded`: adds rounded corners.

### Order Summary

The order summary uses:

```html
class="h-fit rounded-lg border-2 border-indigo-200 bg-white p-6 shadow-md lg:w-1/3"
```

- `h-fit`: adjusts the height to its content.
- `rounded-lg`: adds rounded corners.
- `border-2`: adds a border on all sides.
- `border-indigo-200`: applies a light indigo border.
- `bg-white`: applies a white background.
- `p-6`: adds internal spacing.
- `shadow-md`: adds a medium shadow.
- `lg:w-1/3`: sets the width to one third on larger screens.

### Checkout Link

```html
class="block rounded bg-blue-500 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
```

- `block`: makes the link behave like a block element.
- `rounded`: adds rounded corners.
- `bg-blue-500`: applies a blue background.
- `hover:bg-blue-700`: applies a darker blue on hover.
- `text-center`: centers the link text.
- `font-semibold`: applies a semi-bold font weight.
- `text-white`: applies white text.

### What I Learned

In this lab, I learned:

- How to create a responsive shopping cart layout.
- How Tailwind CSS follows a mobile-first approach.
- How to use `flex-col` on smaller screens.
- How to use `lg:flex-row` on larger screens.
- How to create reusable product cards.
- How to apply predefined font sizes.
- How to style buttons with background and hover colors.
- How to create an order summary.
- How to style links so they look like buttons.
- How to use spacing, borders, shadows, and rounded corners.

---

## Español

### Descripción del proyecto

En este lab construí una página responsive de carrito de compras para una tienda ficticia de música utilizando HTML y Tailwind CSS.

El carrito contiene dos productos musicales. Cada tarjeta muestra:

- El nombre del producto.
- La cantidad seleccionada.
- El precio.
- Un botón para eliminar el producto.

La página también incluye un resumen de la orden con:

- La etiqueta del total.
- El importe total de la compra.
- Un enlace para continuar al checkout.

### Diseño Flexbox responsive

El contenedor principal utiliza:

```html
class="flex flex-col gap-8 lg:flex-row"
```

- `flex`: activa Flexbox.
- `flex-col`: coloca las secciones verticalmente en pantallas pequeñas.
- `gap-8`: agrega espacio entre las secciones.
- `lg:flex-row`: coloca las secciones horizontalmente en pantallas grandes.

Tailwind CSS trabaja con un enfoque **mobile first**. Primero se definen los estilos para dispositivos pequeños y luego se utilizan prefijos como `lg:` para modificar el diseño en pantallas más grandes.

### Tarjetas de productos

Cada producto utiliza la clase obligatoria `card`:

```html
<div class="card rounded-lg border bg-white p-6 shadow-md">
```

Dentro de cada tarjeta se encuentran:

- Un `h2` con el nombre.
- Un elemento `.quantity` con la cantidad.
- Un elemento `.price` con el precio.
- Un botón `.remove-button` con el texto `Remove`.

### Botones para eliminar

```html
bg-red-500 hover:bg-red-700
```

- `bg-red-500`: aplica el color rojo inicial.
- `hover:bg-red-700`: cambia a un rojo más oscuro al pasar el cursor.

### Resumen de la orden

El elemento `#order-summary-container` utiliza:

```html
rounded-lg border-2
```

- `rounded-lg`: agrega esquinas redondeadas.
- `border-2`: agrega un borde de dos píxeles en todos los lados.

### Total de la compra

```html
<p id="total" class="mt-6 text-xl font-bold">
  Total:
</p>

<p id="total-amount" class="mb-6 text-3xl font-bold">
  $54.97
</p>
```

- `#total` contiene el texto obligatorio `Total:`.
- `#total-amount` contiene el importe total.
- `text-xl` y `text-3xl` controlan el tamaño del texto.
- `font-bold` aplica negrita.

### Enlace Checkout

```html
bg-blue-500 hover:bg-blue-700 text-center
```

- `bg-blue-500`: aplica un fondo azul.
- `hover:bg-blue-700`: aplica un azul diferente al pasar el cursor.
- `text-center`: centra el texto.

### Lo que aprendí

En este lab aprendí:

- A crear un carrito de compras responsive.
- A aplicar el enfoque mobile first.
- A usar `flex-col` en dispositivos pequeños.
- A cambiar a `lg:flex-row` en dispositivos grandes.
- A construir tarjetas para representar productos.
- A utilizar tamaños de fuente predefinidos.
- A aplicar colores de fondo y estados `hover`.
- A crear un resumen de compra.
- A diseñar enlaces para que parezcan botones.
- A utilizar espaciado, bordes, sombras y esquinas redondeadas.

---

## Project Structure | Estructura del proyecto

```text
017-build-a-music-shopping-cart-page/
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