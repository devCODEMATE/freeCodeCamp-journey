# Build an fCC Authors Page

This is exercise **126** of my JavaScript learning journey.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-v9/#workshop-fcc-authors-page)

## 🇪🇸 Español

Este workshop desarrolla una página de autores de freeCodeCamp News utilizando JavaScript asíncrono, Fetch API y manipulación del DOM.

La aplicación obtiene información desde una API externa y muestra inicialmente ocho autores. El usuario puede presionar un botón para cargar nuevos grupos de autores hasta que no queden más datos disponibles.

Cada tarjeta presenta el nombre, la imagen, una biografía resumida y un enlace a la página del autor.

### Funcionalidades

- Obtiene información desde un archivo JSON remoto.
- Utiliza `fetch()` para realizar una solicitud HTTP.
- Trabaja con funciones asíncronas.
- Utiliza `async` y `await`.
- Procesa la respuesta con el método `json()`.
- Maneja errores mediante `try...catch`.
- Muestra ocho autores inicialmente.
- Permite cargar ocho autores adicionales.
- Divide los datos mediante `slice()`.
- Genera tarjetas de autores dinámicamente.
- Muestra el nombre y la imagen de cada autor.
- Resume las biografías extensas.
- Incluye enlaces a las páginas de los autores.
- Desactiva el botón cuando no quedan autores.
- Modifica el texto y el cursor del botón.
- Muestra un mensaje si ocurre un error.

### Conceptos practicados

- JavaScript asíncrono.
- Promesas.
- Fetch API.
- Funciones `async`.
- Operador `await`.
- Bloques `try...catch`.
- Manejo de errores.
- Peticiones HTTP.
- Archivos JSON.
- Método `json()`.
- Arreglos.
- Método `slice()`.
- Método `forEach()`.
- Desestructuración de objetos.
- Template literals.
- Operador ternario.
- Manipulación del DOM.
- `getElementById()`.
- `innerHTML`.
- Eventos.
- `addEventListener()`.
- Estado de botones.
- Propiedad `disabled`.
- Estilos en línea.

## Elementos principales

La aplicación obtiene las referencias de tres elementos HTML:

```js
const authorContainer =
  document.getElementById("author-container");

const loadMoreBtn =
  document.getElementById("load-more-btn");
```

`authorContainer` contiene las tarjetas de los autores.

`loadMoreBtn` permite cargar otro grupo de autores.

## Índices de paginación

La aplicación utiliza dos variables para determinar qué parte del arreglo debe mostrarse:

```js
let startingIndex = 0;
let endingIndex = 8;
```

Inicialmente se seleccionan los elementos comprendidos entre las posiciones `0` y `8`.

Como el segundo índice de `slice()` no está incluido, esto devuelve los primeros ocho autores:

```js
authorDataArr.slice(0, 8);
```

También se crea un arreglo vacío para guardar los datos recibidos:

```js
let authorDataArr = [];
```

## Función asíncrona

La función `initialFetch` se declara con la palabra clave `async`:

```js
const initialFetch = async () => {
```

Una función `async` permite utilizar el operador `await` dentro de ella.

El operador `await` detiene la ejecución de esa función hasta que la promesa se resuelve.

## Solicitud con Fetch API

La petición se realiza con:

```js
const res = await fetch(
  "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
);
```

`fetch()` realiza una solicitud HTTP y devuelve una promesa.

El operador `await` espera la respuesta antes de continuar.

La URL debe ser un string normal de JavaScript. No debe contener sintaxis de enlace Markdown.

## Conversión de la respuesta

La respuesta obtenida se convierte a datos JavaScript mediante:

```js
authorDataArr = await res.json();
```

El método `json()` también devuelve una promesa, por lo que se utiliza nuevamente `await`.

Cuando la conversión termina, `authorDataArr` contiene el arreglo completo de autores.

## Primer grupo de autores

Después de recibir los datos, la aplicación muestra los primeros ocho autores:

```js
displayAuthors(
  authorDataArr.slice(startingIndex, endingIndex)
);
```

Con los valores iniciales, la operación equivale a:

```js
authorDataArr.slice(0, 8);
```

El arreglo original no se modifica.

## Manejo de errores

La petición y el procesamiento de los datos se encuentran dentro de un bloque `try`:

```js
try {
  const res = await fetch(
    "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
  );

  authorDataArr = await res.json();

  displayAuthors(
    authorDataArr.slice(startingIndex, endingIndex)
  );
}
```

Si ocurre un problema, la ejecución continúa en el bloque `catch`:

```js
catch (err) {
  authorContainer.innerHTML = `
    <p class="error-msg">
      There was an error loading the authors
    </p>
  `;
}
```

De esta manera, el usuario recibe un mensaje en lugar de encontrar una página vacía.

## Presentación de los autores

La función `displayAuthors` recibe un arreglo:

```js
const displayAuthors = (authors) => {
```

Luego recorre sus elementos con `forEach()`:

```js
authors.forEach(
  ({ author, image, url, bio }, index) => {
```

Los datos de cada autor se extraen mediante desestructuración:

```js
{ author, image, url, bio }
```

Esto permite utilizar directamente las propiedades del objeto sin repetir el nombre del objeto.

## Identificador de la tarjeta

El identificador se calcula combinando el índice inicial del grupo con el índice local:

```js
const authorId = startingIndex + index;
```

Por ejemplo, para el segundo grupo:

```text
startingIndex = 8
index = 0
authorId = 8
```

Esto evita repetir los mismos identificadores al cargar más autores.

## Creación de las tarjetas

Cada tarjeta se genera mediante un template literal:

```js
authorContainer.innerHTML += `
  <div id="${authorId}" class="user-card">
    <h2 class="author-name">${author}</h2>

    <img
      class="user-img"
      src="${image}"
      alt="${author} avatar"
    />

    <div class="purple-divider"></div>

    <p class="bio">
      ${
        bio.length > 50
          ? `${bio.slice(0, 50)}...`
          : bio
      }
    </p>

    <a
      class="author-link"
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${author}'s author page
    </a>
  </div>
`;
```

El operador `+=` permite agregar cada nueva tarjeta sin eliminar las anteriores.

## Resumen de la biografía

La aplicación comprueba si la biografía tiene más de 50 caracteres:

```js
bio.length > 50
```

Si es más extensa, muestra solamente los primeros 50 caracteres y agrega puntos suspensivos:

```js
`${bio.slice(0, 50)}...`
```

Si tiene 50 caracteres o menos, muestra el texto completo:

```js
bio
```

La decisión se realiza mediante un operador ternario:

```js
bio.length > 50
  ? `${bio.slice(0, 50)}...`
  : bio
```

## Carga de más autores

La función `fetchMoreAuthors` actualiza los índices:

```js
startingIndex += 8;
endingIndex += 8;
```

Después de la primera actualización, los valores son:

```text
startingIndex = 8
endingIndex = 16
```

Por lo tanto, se seleccionan los siguientes ocho autores:

```js
authorDataArr.slice(8, 16);
```

Los datos ya se encuentran almacenados en `authorDataArr`, por lo que no es necesario realizar otra petición HTTP.

## Final de los datos

Después de mostrar un nuevo grupo, se comprueba si se alcanzó el final:

```js
if (authorDataArr.length <= endingIndex) {
```

Cuando no quedan autores para cargar, el botón se desactiva:

```js
loadMoreBtn.disabled = true;
```

También se modifica el cursor:

```js
loadMoreBtn.style.cursor = "not-allowed";
```

Finalmente, se cambia el texto:

```js
loadMoreBtn.textContent =
  "No more data to load";
```

Esto comunica claramente que no existen más datos disponibles.

## Evento del botón

La función se conecta con el botón mediante:

```js
loadMoreBtn.addEventListener(
  "click",
  fetchMoreAuthors
);
```

Cada clic ejecuta `fetchMoreAuthors` y muestra el siguiente grupo de autores.

## Ejecución inicial

La carga de datos comienza con:

```js
initialFetch();
```

Esta función debe ejecutarse una sola vez.

Su flujo es:

```text
Se ejecuta initialFetch
        ↓
fetch solicita el JSON
        ↓
await espera la respuesta
        ↓
res.json convierte los datos
        ↓
await espera la conversión
        ↓
se guardan los autores
        ↓
se muestran los primeros ocho
```

## Seguridad de enlaces externos

Los enlaces se abren en una pestaña nueva:

```html
target="_blank"
```

También incluyen:

```html
rel="noopener noreferrer"
```

Esto evita que la página externa acceda al objeto `window` de la página original.

## Complejidad

La carga inicial procesa ocho autores:

```text
O(8)
```

Como ocho es una cantidad fija, puede considerarse:

```text
O(1)
```

De forma general, si se mostraran `k` autores por grupo, la complejidad de cada renderizado sería:

```text
O(k)
```

El arreglo completo de autores se almacena en memoria, por lo que el espacio utilizado depende de la cantidad total de registros:

```text
O(n)
```

## 🇺🇸 English

This workshop builds a freeCodeCamp News authors page using asynchronous JavaScript, the Fetch API and DOM manipulation.

The application retrieves author information from a remote JSON resource. It initially displays eight authors and allows the user to load additional groups until there is no more data available.

Each card contains an author's name, image, shortened biography and a link to their author page.

### Features

- Retrieves data from a remote JSON resource.
- Uses the Fetch API.
- Uses asynchronous functions.
- Uses `async` and `await`.
- Converts the response with `json()`.
- Handles errors with `try...catch`.
- Displays eight authors initially.
- Loads eight additional authors per click.
- Uses `slice()` to paginate the data.
- Dynamically generates author cards.
- Displays names, images and biographies.
- Shortens long biographies.
- Includes links to author pages.
- Disables the button when no more data is available.
- Displays an error message if the request fails.

### Concepts Practiced

- Asynchronous JavaScript.
- Promises.
- Fetch API.
- `async` functions.
- The `await` operator.
- `try...catch`.
- Error handling.
- HTTP requests.
- JSON.
- Arrays.
- `slice()`.
- `forEach()`.
- Object destructuring.
- Template literals.
- Ternary operators.
- DOM manipulation.
- Event listeners.
- Button states.
- Inline styles.

## Fetching the data

The `initialFetch` function is asynchronous:

```js
const initialFetch = async () => {
```

It retrieves the data with `fetch()`:

```js
const res = await fetch(
  "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
);
```

The `await` operator waits for the request to finish.

## Parsing JSON

The response is converted into JavaScript data with:

```js
authorDataArr = await res.json();
```

Because `json()` returns a promise, it also requires `await`.

## Displaying the first authors

The initial group is selected with:

```js
authorDataArr.slice(startingIndex, endingIndex);
```

Using the initial values:

```js
startingIndex = 0;
endingIndex = 8;
```

the application displays the first eight authors.

## Error handling

The asynchronous operations run inside a `try` block.

If the request or JSON conversion fails, the `catch` block displays an error message:

```js
catch (err) {
  authorContainer.innerHTML = `
    <p class="error-msg">
      There was an error loading the authors
    </p>
  `;
}
```

## Rendering author cards

The `displayAuthors` function iterates through the supplied authors:

```js
authors.forEach(
  ({ author, image, url, bio }, index) => {
```

Object destructuring provides direct access to the author's properties.

Each author is rendered inside a dynamically generated card.

## Shortening biographies

Biographies longer than 50 characters are shortened:

```js
bio.length > 50
  ? `${bio.slice(0, 50)}...`
  : bio
```

Short biographies are displayed without modification.

## Loading more authors

Every click increases both indexes by eight:

```js
startingIndex += 8;
endingIndex += 8;
```

The next part of the array is then displayed:

```js
displayAuthors(
  authorDataArr.slice(startingIndex, endingIndex)
);
```

The application does not make another HTTP request because the complete dataset is already stored in memory.

## Disabling the button

When the ending index reaches the total number of authors, the button is disabled:

```js
if (authorDataArr.length <= endingIndex) {
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = "not-allowed";
  loadMoreBtn.textContent =
    "No more data to load";
}
```

## Application flow

```text
Page loads
    ↓
The JSON resource is requested
    ↓
The first eight authors are displayed
    ↓
The user clicks Load More Authors
    ↓
The next eight authors are displayed
    ↓
The process repeats until no data remains
    ↓
The button is disabled
```

## Complexity

Rendering a group of `k` authors has a time complexity of:

```text
O(k)
```

Storing all downloaded author records requires:

```text
O(n)
```

additional space, where `n` is the total number of authors.

## 📁 Files

- `index.html`: Contains the page structure and load button.
- `styles.css`: Contains the visual styles for the page and cards.
- `script.js`: Contains the asynchronous request, pagination and DOM rendering.
- `README.md`: Contains the bilingual workshop documentation.