# Build a Weather App

This is exercise **128** and the final certification project of my JavaScript learning journey.

🔗 [View the project on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-v9/#lab-weather-app)

## 🇪🇸 Español

Este proyecto desarrolla una aplicación del clima utilizando JavaScript asíncrono, Fetch API y manipulación del DOM.

La aplicación permite seleccionar una ciudad y consultar sus condiciones meteorológicas actuales mediante la API proporcionada por freeCodeCamp.

El resultado muestra la ubicación, temperatura, sensación térmica, humedad, velocidad del viento, ráfagas, condición meteorológica e icono correspondiente.

Este proyecto representa el cierre de los **128 ejercicios, talleres, laboratorios y proyectos** realizados durante mi recorrido por el currículo de JavaScript de freeCodeCamp.

## Funcionalidades

- Permite seleccionar una ciudad.
- Consulta información meteorológica desde una API.
- Utiliza JavaScript asíncrono.
- Implementa `async` y `await`.
- Maneja errores mediante `try...catch`.
- Muestra una alerta cuando no se pueden obtener los datos.
- No realiza ninguna acción si no se selecciona una ciudad.
- Muestra la ubicación consultada.
- Muestra la temperatura actual.
- Muestra la sensación térmica.
- Muestra el porcentaje de humedad.
- Muestra la velocidad del viento.
- Muestra la velocidad de las ráfagas.
- Muestra el tipo principal de clima.
- Muestra el icono meteorológico.
- Utiliza `N/A` cuando un valor no está disponible.
- Presenta una interfaz responsive personalizada con la identidad visual de CodeMate.

## Ciudades disponibles

La aplicación permite consultar las siguientes ciudades:

- New York.
- Los Angeles.
- Chicago.
- Paris.
- Tokyo.
- London.

## Conceptos practicados

- JavaScript asíncrono.
- Promesas.
- Fetch API.
- Funciones `async`.
- Operador `await`.
- Manejo de errores.
- Bloques `try...catch`.
- API REST.
- JSON.
- Template literals.
- Objetos y propiedades.
- Condicionales.
- Operador lógico OR.
- Manipulación del DOM.
- `getElementById()`.
- `textContent`.
- Atributos de imágenes.
- Eventos.
- `addEventListener()`.
- Selectores y formularios.
- Valores predeterminados.
- Diseño responsive.
- Variables CSS.
- Flexbox.
- CSS Grid.

## Estructura HTML

La aplicación incluye un selector con las ciudades requeridas:

```html
<select id="city-select">
  <option value=""></option>
  <option value="new york">New York</option>
  <option value="los angeles">Los Angeles</option>
  <option value="chicago">Chicago</option>
  <option value="paris">Paris</option>
  <option value="tokyo">Tokyo</option>
  <option value="london">London</option>
</select>
```

La primera opción tiene un valor vacío. Esto permite comprobar que el usuario haya seleccionado una ciudad antes de ejecutar la consulta.

El botón principal utiliza el identificador requerido:

```html
<button id="get-weather-btn" type="button">
  Get weather
</button>
```

## Información meteorológica

La tarjeta del clima contiene los elementos solicitados por el proyecto:

```html
<img id="weather-icon" src="" alt="" />

<span id="main-temperature">--</span>
<span id="feels-like">--</span>
<span id="humidity">--</span>
<span id="wind">--</span>
<span id="wind-gust">--</span>

<p id="weather-main">—</p>
<p id="location">—</p>
```

Cada identificador permite que JavaScript coloque la información en el elemento correspondiente.

## Obtención de elementos del DOM

La aplicación obtiene las referencias necesarias mediante `getElementById()`:

```js
const citySelect =
  document.getElementById("city-select");

const getWeatherBtn =
  document.getElementById("get-weather-btn");

const weatherCard =
  document.getElementById("weather-card");
```

También se obtienen los elementos donde se mostrarán los datos:

```js
const locationEl =
  document.getElementById("location");

const weatherIconEl =
  document.getElementById("weather-icon");

const mainTemperatureEl =
  document.getElementById("main-temperature");

const feelsLikeEl =
  document.getElementById("feels-like");

const humidityEl =
  document.getElementById("humidity");

const windEl =
  document.getElementById("wind");

const windGustEl =
  document.getElementById("wind-gust");

const weatherMainEl =
  document.getElementById("weather-main");
```

## Manejo de datos no disponibles

La función `orNA` comprueba si un valor es `undefined` o `null`:

```js
function orNA(value) {
  return value === undefined || value === null
    ? "N/A"
    : value;
}
```

Si el valor no está disponible, devuelve:

```text
N/A
```

Esta comprobación mantiene correctamente valores válidos como `0`.

## Consulta a la API

La función `getWeather` recibe una ciudad:

```js
async function getWeather(city) {
```

La consulta se realiza mediante:

```js
const response = await fetch(
  `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
);
```

El nombre de la ciudad se agrega dinámicamente al final de la dirección.

Después, la respuesta se convierte a JSON:

```js
const data = await response.json();
return data;
```

La función completa es:

```js
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## Manejo de errores

La consulta se ejecuta dentro de un bloque `try...catch`.

Si ocurre un error, este se registra en la consola:

```js
catch (error) {
  console.error(error);
}
```

Cuando `getWeather` no devuelve datos utilizables, `showWeather` presenta una alerta:

```js
if (!data) {
  alert(
    "Something went wrong, please try again later."
  );
  return;
}
```

El `return` evita que la función continúe intentando procesar información inexistente.

## Presentación del clima

La función `showWeather` recibe el nombre de una ciudad y espera el resultado de `getWeather`:

```js
async function showWeather(city) {
  const data = await getWeather(city);
```

Después obtiene el primer elemento del arreglo `weather`:

```js
const weather =
  data.weather && data.weather[0];
```

Los datos se muestran en sus elementos correspondientes:

```js
locationEl.textContent =
  orNA(data.name);

mainTemperatureEl.textContent =
  orNA(data.main && data.main.temp);

feelsLikeEl.textContent =
  orNA(data.main && data.main.feels_like);

humidityEl.textContent =
  orNA(data.main && data.main.humidity);

windEl.textContent =
  orNA(data.wind && data.wind.speed);

windGustEl.textContent =
  orNA(data.wind && data.wind.gust);

weatherMainEl.textContent =
  orNA(weather && weather.main);
```

## Icono meteorológico

La dirección del icono se obtiene desde el objeto meteorológico:

```js
weatherIconEl.src =
  orNA(weather && weather.icon) === "N/A"
    ? ""
    : weather.icon;
```

La descripción se utiliza como texto alternativo:

```js
weatherIconEl.alt =
  orNA(weather && weather.description);
```

Esto mejora la accesibilidad de la aplicación.

## Presentación de la tarjeta

La tarjeta comienza oculta mediante el atributo HTML:

```html
<section id="weather-card" hidden>
```

Después de cargar correctamente la información, se muestra con:

```js
weatherCard.hidden = false;
```

De esta manera, la interfaz no presenta campos vacíos antes de la primera consulta.

## Evento del botón

El botón escucha el evento `click`:

```js
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) {
    return;
  }

  showWeather(city);
});
```

Si el valor está vacío, la función termina sin realizar ninguna acción.

Si existe una ciudad seleccionada, se ejecuta:

```js
showWeather(city);
```

## Declaración de las funciones

Las funciones se declaran mediante la sintaxis tradicional:

```js
async function getWeather(city) {
}

async function showWeather(city) {
}
```

No se declaran utilizando `const`, porque las pruebas de freeCodeCamp necesitan reasignarlas temporalmente.

## Flujo de la aplicación

```text
El usuario selecciona una ciudad
              ↓
Presiona el botón Get weather
              ↓
Se comprueba que la ciudad no esté vacía
              ↓
showWeather llama a getWeather
              ↓
getWeather consulta la API
              ↓
La respuesta se convierte a JSON
              ↓
Los datos se insertan en el DOM
              ↓
Se muestra la tarjeta meteorológica
```

Si ocurre un error:

```text
La solicitud falla
        ↓
El error se registra en la consola
        ↓
getWeather no devuelve información
        ↓
showWeather muestra una alerta
```

## Diseño

El proyecto utiliza una identidad visual personalizada para CodeMate:

- Fondo con degradado.
- Paleta azul, violeta, amarillo y verde azulado.
- Tarjetas semitransparentes.
- Bordes redondeados.
- Distribución responsive.
- Flexbox para la información principal.
- CSS Grid para los datos meteorológicos.
- Estados visuales para el botón.
- Estilos de foco para navegación mediante teclado.

## Complejidad

La consulta procesa un único objeto meteorológico, por lo que el procesamiento local utiliza un tiempo constante:

```text
O(1)
```

La cantidad de elementos actualizados también es fija, por lo que el espacio adicional utilizado es:

```text
O(1)
```

El tiempo total percibido depende principalmente de la solicitud a la API.

## 🇺🇸 English

This certification project builds a weather application using asynchronous JavaScript, the Fetch API and DOM manipulation.

The user can select a city and retrieve its current weather conditions from the API provided by freeCodeCamp.

The application displays the location, temperature, feels-like temperature, humidity, wind speed, wind gust, main weather condition and weather icon.

This project marks the completion of the **128 exercises, workshops, labs and projects** in my freeCodeCamp JavaScript curriculum journey.

### Features

- Provides a dropdown with six cities.
- Retrieves weather information from an API.
- Uses `async` and `await`.
- Parses JSON responses.
- Handles errors with `try...catch`.
- Displays an alert when the request fails.
- Does nothing when no city is selected.
- Displays the current location.
- Displays the current temperature.
- Displays the feels-like temperature.
- Displays humidity.
- Displays wind speed.
- Displays wind gust information.
- Displays the main weather condition.
- Displays the appropriate weather icon.
- Uses `N/A` for unavailable values.
- Includes a custom responsive CodeMate interface.

### API request

The asynchronous `getWeather` function receives a city and requests its weather data:

```js
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

### Rendering the data

The `showWeather` function waits for the API result:

```js
async function showWeather(city) {
  const data = await getWeather(city);
```

If no usable data is returned, it displays an error alert:

```js
if (!data) {
  alert(
    "Something went wrong, please try again later."
  );

  return;
}
```

When the request succeeds, each value is displayed in its corresponding DOM element.

### Missing values

The `orNA` helper returns `N/A` when a value is `undefined` or `null`:

```js
function orNA(value) {
  return value === undefined || value === null
    ? "N/A"
    : value;
}
```

### Button event

When the button is clicked, the application reads the selected city:

```js
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) {
    return;
  }

  showWeather(city);
});
```

An empty selection does not trigger an API request.

## 📁 Files

- `index.html`: Contains the application structure and weather elements.
- `styles.css`: Contains the responsive CodeMate visual design.
- `script.js`: Retrieves and displays the weather information.
- `README.md`: Contains the bilingual project documentation.

## 🎓 Final milestone

With this project, I completed all **128 exercises** in this JavaScript learning stage, including workshops, laboratories, algorithm exercises and certification projects.

The next step is to continue improving these projects, publish them through GitHub Pages and use the strongest examples in my front-end development portfolio.