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

type Product = Book | Electronics | Clothing;

class Collection<T> {
  constructor(public items: T[]) {}

    getAll(): T[] {
    return this.items;
  }

   filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}

function renderProduct(product: Product): string {
  let productInfo = "";

  switch (product.type) {
    case "book":
      productInfo = `Book: ${product.title} by ${product.author}`;
      break;

    case "electronics":
      productInfo = `Electronics: ${product.item} - ${product.model}`;

      if (product.warranty !== undefined) {
        productInfo += ` - Warranty: ${product.warranty} year(s)`;
      }
      break;

    case "clothing":
      productInfo = `Clothing: ${product.item} by ${product.brand}`;

      if (product.size !== undefined) {
        productInfo += ` - Size ${product.size}`;
      }
      break;

    default:
      throw new Error(
        `Unknown product type: ${JSON.stringify(product)}`
      );
  }

  return `
    <div class="item" id="${product.id}">
      <div>${productInfo}</div>
      <div class="price">${product.price}</div>
    </div>
  `;
}

const products = new Collection<Product>([
  {
    type: "book",
    id: "book-1",
    price: 19.99,
    title: "The TypeScript Handbook",
    author: "TypeScript Team",
  },
  {
    type: "electronics",
    id: "electronics-1",
    price: 799.99,
    item: "Laptop",
    model: "TechBook Pro",
    warranty: 2,
  },
  {
    type: "clothing",
    id: "clothing-1",
    price: 39.99,
    item: "T-Shirt",
    brand: "CodeWear",
    size: "M",
  },
]);

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

document.querySelector("#all")!.addEventListener("click", () => {
  showProducts();
});

document.querySelector("#books")!.addEventListener("click", () => {
  showProducts("book");
});

document.querySelector("#electronics")!.addEventListener("click", () => {
  showProducts("electronics");
});

document.querySelector("#clothing")!.addEventListener("click", () => {
  showProducts("clothing");
});

document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});