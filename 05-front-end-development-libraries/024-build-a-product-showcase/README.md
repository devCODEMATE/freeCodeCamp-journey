# 🛍️ Build a Product Showcase

A TypeScript lab from the updated freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Una aplicación que muestra una colección de libros, productos electrónicos y prendas de vestir.

Los productos pueden filtrarse por categoría mediante distintos botones. El HTML y el CSS fueron proporcionados por freeCodeCamp, mientras que toda la funcionalidad fue desarrollada con TypeScript.

### 🎯 Objetivo

Practicar interfaces, tipos de unión, clases genéricas, filtrado de datos, type narrowing y manipulación del DOM con TypeScript.

### ✨ Funcionalidades

- Muestra todos los productos al cargar la página.
- Permite filtrar libros, productos electrónicos y prendas.
- Genera el HTML de cada producto dinámicamente.
- Muestra información diferente según el tipo de producto.
- Incluye información opcional como garantía y talle.
- Relaciona los botones con los filtros correspondientes.

### 🧠 Conceptos practicados

- Interfaces de TypeScript
- Extensión de interfaces con `extends`
- Propiedades opcionales
- Tipos literales
- Tipos de unión
- Clases genéricas
- Métodos de clase
- Callbacks
- Método `filter()`
- Método `map()`
- Type narrowing con `switch`
- Template literals
- Selección de elementos del DOM
- Eventos `click`
- Evento `DOMContentLoaded`

### 🔍 Partes importantes

#### Interfaces de productos

```ts
interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}
```

`Item` contiene las propiedades comunes. Las interfaces específicas extienden `Item` y agregan la información correspondiente a cada producto.

#### Tipo de unión

```ts
type Product = Book | Electronics | Clothing;
```

`Product` puede representar un libro, un producto electrónico o una prenda.

#### Clase genérica

```ts
class Collection<T> {
  constructor(public items: T[]) {}

  getAll(): T[] {
    return this.items;
  }

  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}
```

`Collection<T>` permite almacenar y filtrar elementos del tipo indicado mediante el parámetro genérico `T`.

#### Type narrowing

```ts
switch (product.type) {
  case "book":
    productInfo = `Book: ${product.title} by ${product.author}`;
    break;

  case "electronics":
    productInfo = `Electronics: ${product.item} - ${product.model}`;
    break;

  case "clothing":
    productInfo = `Clothing: ${product.item} by ${product.brand}`;
    break;

  default:
    throw new Error(
      `Unknown product type: ${JSON.stringify(product)}`
    );
}
```

El valor de `product.type` permite que TypeScript determine qué propiedades están disponibles en cada caso.

#### Filtrado de productos

```ts
function showProducts(filter?: Product["type"]): void {
  const outputElement =
    document.querySelector<HTMLDivElement>("#output")!;

  const productsToShow = filter
    ? products.filter((product) => product.type === filter)
    : products.getAll();

  outputElement.innerHTML = productsToShow
    .map(renderProduct)
    .join("");
}
```

Cuando se proporciona un filtro, solo se muestran los productos de esa categoría. Sin filtro, se muestran todos.

#### Carga inicial

```ts
document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});
```

La aplicación espera a que el documento esté cargado y luego muestra todos los productos.

### ✅ Qué aprendí

Aprendí a representar diferentes productos mediante interfaces relacionadas y un tipo de unión. También practiqué la creación de una clase genérica, el filtrado de colecciones y el uso de type narrowing para acceder de manera segura a las propiedades específicas de cada producto.

---

## 🇺🇸 English

### 📌 Description

An application that displays a collection of books, electronics, and clothing products.

Products can be filtered by category using different buttons. The HTML and CSS were provided by freeCodeCamp, while all functionality was developed with TypeScript.

### 🎯 Objective

Practice interfaces, union types, generic classes, data filtering, type narrowing, and DOM manipulation with TypeScript.

### ✨ Features

- Displays all products when the page loads.
- Filters books, electronics, and clothing.
- Dynamically generates the HTML for each product.
- Displays different information depending on the product type.
- Supports optional information such as warranty and size.
- Connects each button to its corresponding filter.

### 🧠 Concepts Practiced

- TypeScript interfaces
- Interface extension with `extends`
- Optional properties
- Literal types
- Union types
- Generic classes
- Class methods
- Callbacks
- The `filter()` method
- The `map()` method
- Type narrowing with `switch`
- Template literals
- DOM element selection
- `click` events
- The `DOMContentLoaded` event

### 🔍 Important Parts

#### Product interfaces

```ts
interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}
```

Each interface defines the properties required by a specific product type. `warranty` and `size` are optional.

#### Generic collection

```ts
const products = new Collection<Product>([
  {
    type: "book",
    id: "book-1",
    price: 19.99,
    title: "The TypeScript Handbook",
    author: "TypeScript Team",
  },
]);
```

The collection uses the `Product` union type, allowing it to store all three product categories.

#### Dynamic rendering

```ts
return `
  <div class="item" id="${product.id}">
    <div>${productInfo}</div>
    <div class="price">${product.price}</div>
  </div>
`;
```

Each product is converted into an HTML string with its ID, specific information, and price.

#### Button events

```ts
document.querySelector("#books")!.addEventListener("click", () => {
  showProducts("book");
});
```

Each button calls `showProducts()` with the appropriate product type.

### ✅ What I Learned

I learned how to represent different products with related interfaces and a union type. I also practiced creating a generic class, filtering collections, and using type narrowing to safely access the specific properties of each product.

---

## 📁 Files

```text
024-build-a-product-showcase/
├── README.md
├── index.html
├── index.ts
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- TypeScript