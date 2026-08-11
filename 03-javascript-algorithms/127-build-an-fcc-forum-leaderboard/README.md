# Build an fCC Forum Leaderboard

This is exercise **127** of my JavaScript learning journey.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-v9/#lab-fcc-forum-leaderboard)

## 🇪🇸 Español

Este laboratorio desarrolla un tablero con los temas más recientes del foro de freeCodeCamp utilizando JavaScript asíncrono, Fetch API y manipulación del DOM.

La aplicación obtiene información desde una API externa y muestra el título de cada tema, su categoría, los avatares de los participantes, la cantidad de respuestas, el número de visualizaciones y el tiempo transcurrido desde la última actividad.

### Funcionalidades

- Solicita información desde una API externa.
- Utiliza `fetch()` con `async` y `await`.
- Convierte la respuesta recibida a JSON.
- Maneja errores mediante `try...catch`.
- Muestra los temas recientes del foro.
- Genera una fila de tabla para cada tema.
- Crea enlaces a las publicaciones.
- Muestra la categoría de cada publicación.
- Utiliza una categoría general como valor predeterminado.
- Genera los avatares de los participantes.
- Reemplaza el tamaño de los avatares dinámicamente.
- Calcula la cantidad real de respuestas.
- Abrevia las visualizaciones superiores a mil.
- Calcula el tiempo transcurrido.
- Manipula dinámicamente el contenido del DOM.

### Conceptos practicados

- JavaScript asíncrono.
- Fetch API.
- Promesas.
- `async` y `await`.
- Manejo de errores.
- `try...catch`.
- JSON.
- Objetos.
- Arreglos.
- Desestructuración.
- Método `map()`.
- Método `find()`.
- Método `join()`.
- Método `replace()`.
- Método `startsWith()`.
- Template literals.
- Operadores ternarios.
- Fechas.
- Objeto `Date`.
- `Math.floor()`.
- Manipulación del DOM.
- `innerHTML`.

## Direcciones utilizadas

La aplicación utiliza cuatro direcciones principales:

```js
const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";

const forumTopicUrl =
  "https://forum.freecodecamp.org/t/";

const forumCategoryUrl =
  "https://forum.freecodecamp.org/c/";

const avatarUrl =
  "https://cdn.freecodecamp.org/curriculum/forum-latest";
```

`forumLatest` contiene el archivo JSON con los temas y usuarios.

`forumTopicUrl` se utiliza para crear el enlace de cada publicación.

`forumCategoryUrl` permite generar el enlace correspondiente a cada categoría.

`avatarUrl` se agrega delante de las rutas relativas de los avatares.

## Categorías

Las categorías se almacenan dentro del objeto `allCategories`:

```js
const allCategories = {
  299: {
    category: "Career Advice",
    className: "career",
  },
  421: {
    category: "JavaScript",
    className: "javascript",
  },
};
```

Cada propiedad contiene:

- El nombre visible de la categoría.
- La clase CSS utilizada para representarla.

El número de cada propiedad corresponde al identificador de la categoría recibido desde la API.

## Cálculo del tiempo transcurrido

La función `timeAgo` recibe una fecha en formato ISO 8601:

```js
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastActivity = new Date(time);

  const timeDifference =
    currentTime - lastActivity;

  const minutesAgo = Math.floor(
    timeDifference / 60000
  );

  const hoursAgo =
    Math.floor(minutesAgo / 60);

  const daysAgo =
    Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};
```

Primero obtiene la fecha actual:

```js
const currentTime = new Date();
```

Después convierte la fecha recibida en un objeto `Date`:

```js
const lastActivity = new Date(time);
```

La resta de ambas fechas devuelve la diferencia en milisegundos:

```js
const timeDifference =
  currentTime - lastActivity;
```

La diferencia se convierte en minutos dividiendo por `60000`:

```js
const minutesAgo = Math.floor(
  timeDifference / 60000
);
```

La función devuelve uno de estos formatos:

```text
35m ago
4h ago
7d ago
```

## Abreviación de visualizaciones

La función `viewCount` recibe la cantidad de visualizaciones:

```js
const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
};
```

Si el número es menor que `1000`, lo devuelve sin modificar:

```js
viewCount(597);
// 597
```

Cuando el número es igual o superior a `1000`, lo divide por mil y agrega la letra `k`:

```js
viewCount(1000);
// "1k"

viewCount(2730);
// "2k"
```

`Math.floor()` redondea el resultado hacia abajo.

## Generación de categorías

La función `forumCategory` recibe el identificador de una categoría:

```js
const forumCategory = (id) => {
  const selectedCategory =
    allCategories[id] || {
      category: "General",
      className: "general",
    };

  const { category, className } =
    selectedCategory;

  return `
    <a
      class="category ${className}"
      href="${forumCategoryUrl}${className}/${id}"
    >
      ${category}
    </a>
  `;
};
```

Si el identificador existe dentro de `allCategories`, se utiliza esa categoría.

Si no existe, se asigna el valor predeterminado:

```js
{
  category: "General",
  className: "general",
}
```

Por ejemplo:

```js
forumCategory(299);
```

genera un enlace equivalente a:

```html
<a
  class="category career"
  href="https://forum.freecodecamp.org/c/career/299"
>
  Career Advice
</a>
```

## Generación de avatares

La función `avatars` recibe:

1. El arreglo de participantes de una publicación.
2. El arreglo completo de usuarios.

```js
const avatars = (posters, users) => {
  return posters
    .map(({ user_id }) => {
      const user = users.find(
        ({ id }) => id === user_id
      );

      if (!user) {
        return "";
      }

      const { name, avatar_template } = user;

      const avatar = avatar_template.replace(
        "{size}",
        "30"
      );

      const avatarSrc = avatar.startsWith("/")
        ? `${avatarUrl}${avatar}`
        : avatar;

      return `
        <img
          src="${avatarSrc}"
          alt="${name}"
        >
      `;
    })
    .join("");
};
```

## Búsqueda del usuario

Cada participante contiene un `user_id`.

La función `find()` busca el usuario que tenga el mismo identificador:

```js
const user = users.find(
  ({ id }) => id === user_id
);
```

Si no se encuentra un usuario correspondiente, se devuelve un string vacío:

```js
if (!user) {
  return "";
}
```

## Tamaño de los avatares

La dirección recibida contiene el marcador:

```text
{size}
```

Este marcador se reemplaza por `30`:

```js
const avatar = avatar_template.replace(
  "{size}",
  "30"
);
```

Por ejemplo:

```text
/user_avatar/QuincyLarson_{size}.png
```

se convierte en:

```text
/user_avatar/QuincyLarson_30.png
```

## Rutas relativas y absolutas

Algunas direcciones de avatar comienzan con `/`.

En esos casos, se agrega `avatarUrl` delante de la dirección:

```js
const avatarSrc = avatar.startsWith("/")
  ? `${avatarUrl}${avatar}`
  : avatar;
```

Si la ruta ya es absoluta, se utiliza sin modificar.

## Presentación de publicaciones

La función `showLatestPosts` recibe el objeto completo de la API:

```js
const showLatestPosts = ({
  users,
  topic_list,
}) => {
```

Mediante desestructuración obtiene:

- `users`.
- `topic_list`.

Después obtiene el arreglo `topics`:

```js
const { topics } = topic_list;
```

## Generación de filas

Cada publicación se transforma en una fila de tabla:

```js
postsContainer.innerHTML = topics
  .map(
    ({
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    }) => `
      <tr>
        ...
      </tr>
    `
  )
  .join("");
```

`map()` crea un string por cada tema.

`join("")` une todas las filas sin introducir separadores.

## Enlace de la publicación

La dirección de cada tema se forma combinando:

- La URL base.
- El slug.
- El identificador.

```js
href="${forumTopicUrl}${slug}/${id}"
```

El texto visible corresponde al título:

```js
${title}
```

## Cantidad de respuestas

La API incluye al mensaje inicial dentro de `posts_count`.

Por eso se resta uno para obtener la cantidad real de respuestas:

```js
${posts_count - 1}
```

Si `posts_count` es `8`, el tema tiene siete respuestas:

```text
8 - 1 = 7
```

## Obtención de los datos

La función `fetchData` es asíncrona:

```js
const fetchData = async () => {
  try {
    const response =
      await fetch(forumLatest);

    const data =
      await response.json();

    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};
```

`fetch()` realiza la solicitud HTTP:

```js
const response =
  await fetch(forumLatest);
```

La respuesta se convierte a JSON:

```js
const data =
  await response.json();
```

Finalmente, los datos se envían a la función encargada de generar la tabla:

```js
showLatestPosts(data);
```

## Manejo de errores

La petición se ejecuta dentro de un bloque `try...catch`.

Si ocurre un error, se muestra en la consola:

```js
catch (error) {
  console.log(error);
}
```

## Ejecución inicial

La aplicación comienza ejecutando:

```js
fetchData();
```

El flujo general es:

```text
Se carga la página
      ↓
fetchData solicita el JSON
      ↓
La respuesta se convierte a JSON
      ↓
showLatestPosts recibe los datos
      ↓
Se recorren los temas
      ↓
Se generan las filas de la tabla
      ↓
Las filas se insertan en el DOM
```

## Complejidad

Si existen `n` temas y cada tema tiene una cantidad limitada de participantes, la generación de las filas tiene una complejidad aproximada de:

```text
O(n)
```

Para cada participante se busca un usuario mediante `find()`.

Si se consideran `p` participantes y `u` usuarios, esa búsqueda puede alcanzar:

```text
O(p × u)
```

El resultado HTML también necesita espacio proporcional a la cantidad de temas y avatares generados.

## 🇺🇸 English

This lab builds a leaderboard that displays the latest topics from the freeCodeCamp forum using asynchronous JavaScript, the Fetch API and DOM manipulation.

The application retrieves remote JSON data and displays each topic's title, category, participants, number of replies, views and time since the last activity.

### Features

- Fetches data from an external API.
- Uses `async` and `await`.
- Parses a JSON response.
- Handles errors with `try...catch`.
- Displays the latest forum topics.
- Creates a table row for every topic.
- Generates topic and category links.
- Displays a default general category.
- Matches posters with user information.
- Generates user avatar elements.
- Replaces the avatar size placeholder.
- Supports relative and absolute avatar URLs.
- Calculates the number of replies.
- Abbreviates view counts.
- Calculates the time since the last activity.
- Dynamically updates the DOM.

### Concepts Practiced

- Asynchronous JavaScript.
- Fetch API.
- Promises.
- `async` and `await`.
- Error handling.
- JSON.
- Objects and arrays.
- Object destructuring.
- `map()`.
- `find()`.
- `join()`.
- `replace()`.
- `startsWith()`.
- Template literals.
- Dates.
- `Math.floor()`.
- DOM manipulation.

## Time calculation

The `timeAgo` function calculates the difference between the current date and the supplied timestamp:

```js
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastActivity = new Date(time);

  const timeDifference =
    currentTime - lastActivity;

  const minutesAgo = Math.floor(
    timeDifference / 60000
  );

  const hoursAgo =
    Math.floor(minutesAgo / 60);

  const daysAgo =
    Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};
```

It returns minutes, hours or days depending on the amount of elapsed time.

## Formatting views

The `viewCount` function abbreviates values greater than or equal to one thousand:

```js
const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
};
```

Examples:

```js
viewCount(597);
// 597

viewCount(2730);
// "2k"
```

## Rendering categories

The `forumCategory` function obtains a category from `allCategories`.

If the ID is unknown, it uses `General` and `general` as default values.

It returns an anchor element containing the appropriate text, class and URL.

## Rendering avatars

The `avatars` function matches every `user_id` from the posters array with an `id` from the users array.

It replaces the `{size}` placeholder with `30`:

```js
avatar_template.replace("{size}", "30");
```

If the resulting URL begins with `/`, the avatar base URL is prepended.

The generated image uses the user's name as alternative text.

## Rendering topics

The `showLatestPosts` function extracts `users` and `topic_list` from the received object.

It converts every topic into a table row using `map()` and joins the rows using `join("")`.

Each row contains:

- The topic title and category.
- The participant avatars.
- The number of replies.
- The formatted view count.
- The time since the last activity.

## Fetching data

The asynchronous `fetchData` function requests the forum data:

```js
const fetchData = async () => {
  try {
    const response =
      await fetch(forumLatest);

    const data =
      await response.json();

    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};
```

If the request succeeds, the parsed response is passed to `showLatestPosts`.

If an error occurs, it is logged with `console.log()`.

## 📁 Files

- `index.html`: Contains the leaderboard table structure.
- `styles.css`: Contains the provided visual styles.
- `script.js`: Fetches, processes and displays the forum data.
- `README.md`: Contains the bilingual project documentation.