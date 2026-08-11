/* ============================================
   CodeMate Weather Lab
   getWeather / showWeather MUST be declared with
   "function" (not const/arrow) because fCC's tests
   reassign them to run their own spies.
   ============================================ */

const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherCard = document.getElementById("weather-card");

const locationEl = document.getElementById("location");
const weatherIconEl = document.getElementById("weather-icon");
const mainTemperatureEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const weatherMainEl = document.getElementById("weather-main");

// Devuelve el valor si existe, o "N/A" si es undefined/null.
function orNA(value) {
  return value === undefined || value === null ? "N/A" : value;
}

// User story 5, 6, 7:
// función async que recibe una ciudad, pide el clima a la API de fCC
// y devuelve el JSON. Si algo falla, lo logueamos en consola.
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

// User story 8, 9, 10, 11:
// función async que llama a getWeather y pinta los datos en el DOM.
// Si getWeather no devolvió nada usable, muestra el alert de error.
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const weather = data.weather && data.weather[0];

  locationEl.textContent = orNA(data.name);

  weatherIconEl.src = orNA(weather && weather.icon) === "N/A" ? "" : weather.icon;
  weatherIconEl.alt = orNA(weather && weather.description);

  mainTemperatureEl.textContent = orNA(data.main && data.main.temp);
  feelsLikeEl.textContent = orNA(data.main && data.main.feels_like);
  humidityEl.textContent = orNA(data.main && data.main.humidity);
  windEl.textContent = orNA(data.wind && data.wind.speed);
  windGustEl.textContent = orNA(data.wind && data.wind.gust);
  weatherMainEl.textContent = orNA(weather && weather.main);

  weatherCard.hidden = false;
}

// User story 3: si no hay ciudad seleccionada, el botón no hace nada.
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;
  if (!city) return;

  showWeather(city);
});