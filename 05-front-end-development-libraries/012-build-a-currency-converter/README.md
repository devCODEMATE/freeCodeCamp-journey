# Build a Currency Converter

This is exercise **012** and a **Certification Project** from the **Front End Development Libraries** section of my freeCodeCamp learning journey.

The project focuses on React state, controlled inputs, memoized calculations, dynamic list rendering and responsive interface design.

🔗 [View the certification project on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-currency-converter)

---

## 🇪🇸 Español

Este proyecto de certificación desarrolla un conversor de monedas utilizando React, JSX y los hooks `useState` y `useMemo`.

La aplicación permite introducir una cantidad, seleccionar una moneda de origen y elegir la moneda de destino. El resultado se calcula automáticamente y se muestra con dos decimales y su código de moneda.

La interfaz fue personalizada con la identidad visual de CodeMate.

## Estado del proyecto

```text
10/10 tests aprobados
```

## Funcionalidades

- Define y exporta el componente `CurrencyConverter`.
- Permite introducir una cantidad numérica.
- Incluye una moneda de origen.
- Incluye una moneda de destino.
- Ofrece las monedas USD, EUR, GBP y JPY.
- Genera las opciones dinámicamente.
- Utiliza tasas de cambio diferentes.
- Convierte primero la cantidad a una moneda base.
- Calcula las conversiones para todas las monedas.
- Memoriza los resultados mediante `useMemo`.
- Recalcula cuando cambia la cantidad.
- Recalcula cuando cambia la moneda de origen.
- No recalcula todas las conversiones al cambiar solamente la moneda de destino.
- Muestra el resultado con dos decimales.
- Muestra el código de la moneda seleccionada.
- Actualiza el resultado inmediatamente.
- Incluye una región dinámica accesible.
- Presenta un diseño responsive personalizado.

## Monedas disponibles

| Código | Moneda | Tasa utilizada |
|---|---|---:|
| USD | Dólar estadounidense | 1 |
| EUR | Euro | 0.92 |
| GBP | Libra esterlina | 0.78 |
| JPY | Yen japonés | 156.7 |

Las tasas se utilizan con fines educativos y no representan valores financieros en tiempo real.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- `useMemo`.
- Estado.
- Memoización.
- Valores calculados.
- Arreglos de dependencias.
- Inputs controlados.
- Elementos `select`.
- Opciones dinámicas.
- Objetos.
- `Object.keys()`.
- `reduce()`.
- `map()`.
- Prop `key`.
- Conversión mediante `Number()`.
- `toFixed()`.
- Renderizado dinámico.
- Accesibilidad.
- `aria-live`.
- CSS Grid.
- Flexbox.
- Variables CSS.
- Responsive Design.

## Estructura de los datos

Las tasas de cambio se almacenan en un objeto:

```jsx
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
};
```

Cada propiedad contiene:

```text
Código de moneda → tasa de cambio
```

USD funciona como moneda base:

```jsx
USD: 1
```

Las demás tasas poseen valores diferentes, por lo que no existe una relación uno a uno entre todas las monedas.

## Obtención de las monedas

Los códigos se obtienen mediante:

```jsx
const currencies =
  Object.keys(exchangeRates);
```

`Object.keys()` devuelve un arreglo con los nombres de las propiedades:

```js
[
  "USD",
  "EUR",
  "GBP",
  "JPY"
]
```

Este arreglo se utiliza para generar las opciones de ambos selectores.

## Componente CurrencyConverter

El componente se define y exporta mediante:

```jsx
export function CurrencyConverter() {
  // Estados, cálculo y JSX
}
```

La palabra `export` permite utilizar el componente fuera de `index.jsx`.

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import {
  CurrencyConverter
} from "./index.jsx";
```

La relación entre los archivos es:

```text
index.jsx exporta CurrencyConverter
                     ↓
index.html importa CurrencyConverter
                     ↓
ReactDOM renderiza <CurrencyConverter />
```

## Estados de la aplicación

El componente utiliza tres variables de estado:

```jsx
const [amount, setAmount] =
  useState(1);

const [
  fromCurrency,
  setFromCurrency
] = useState("USD");

const [
  toCurrency,
  setToCurrency
] = useState("EUR");
```

| Estado | Valor inicial | Propósito |
|---|---|---|
| `amount` | `1` | Cantidad que se desea convertir |
| `fromCurrency` | `"USD"` | Moneda de origen |
| `toCurrency` | `"EUR"` | Moneda de destino |

## Campo numérico controlado

La cantidad utiliza:

```jsx
<input
  id="amount"
  type="number"
  min="0"
  step="any"
  value={amount}
  onChange={(event) =>
    setAmount(event.target.value)
  }
/>
```

El atributo:

```jsx
type="number"
```

permite introducir valores numéricos.

`min="0"` evita cantidades negativas y `step="any"` permite utilizar decimales.

El valor está controlado por el estado `amount`.

## Selectores controlados

El selector de origen utiliza:

```jsx
<select
  value={fromCurrency}
  onChange={(event) =>
    setFromCurrency(event.target.value)
  }
>
```

El selector de destino utiliza:

```jsx
<select
  value={toCurrency}
  onChange={(event) =>
    setToCurrency(event.target.value)
  }
>
```

Cada cambio actualiza el estado correspondiente.

## Opciones dinámicas

Las opciones se generan mediante:

```jsx
currencies.map((currency) => (
  <option
    key={currency}
    value={currency}
  >
    {currency}
  </option>
))
```

Por cada moneda, `map()` crea un elemento `option`.

La misma fuente de datos se utiliza en ambos selectores, evitando repetir manualmente las opciones.

## Conversión a la moneda base

Primero se convierte la cantidad de origen a USD:

```jsx
const amountInUSD =
  Number(amount) /
  exchangeRates[fromCurrency];
```

`Number(amount)` convierte el valor recibido desde el input a un número.

Esto es necesario porque los valores de los inputs se reciben normalmente como cadenas.

## Cálculo de todas las conversiones

Después se calculan los valores para todas las monedas:

```jsx
return currencies.reduce(
  (conversions, currency) => {
    conversions[currency] =
      amountInUSD *
      exchangeRates[currency];

    return conversions;
  },
  {}
);
```

`reduce()` construye un objeto de resultados.

Por ejemplo:

```js
{
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
}
```

Los valores reales dependen de la cantidad y de la moneda de origen seleccionadas.

## Memoización con useMemo

El cálculo completo utiliza:

```jsx
const convertedAmounts = useMemo(() => {
  // Conversión
}, [amount, fromCurrency]);
```

`useMemo()` memoriza un valor calculado.

En este proyecto memoriza:

```jsx
convertedAmounts
```

El cálculo se vuelve a ejecutar solamente cuando cambia una de sus dependencias:

```jsx
[amount, fromCurrency]
```

## ¿Por qué toCurrency no es una dependencia?

`toCurrency` no participa en la creación del objeto de conversiones.

El cálculo ya produce los resultados para todas las monedas:

```text
USD
EUR
GBP
JPY
```

Cambiar solamente la moneda de destino no necesita repetir todas las operaciones. La aplicación simplemente elige otro valor del objeto existente:

```jsx
const convertedAmount =
  convertedAmounts[toCurrency];
```

El flujo es:

```text
Cambia amount o fromCurrency
              ↓
useMemo recalcula todas las conversiones
              ↓
convertedAmounts contiene los resultados

Cambia solamente toCurrency
              ↓
useMemo reutiliza convertedAmounts
              ↓
Se selecciona otro resultado del objeto
```

Este comportamiento cumple el requisito principal de optimización del proyecto.

## useMemo frente a useCallback

En el ejercicio anterior se utilizaron ambos hooks:

| Hook | Memoriza |
|---|---|
| `useMemo` | El resultado de un cálculo |
| `useCallback` | Una referencia de función |

En este proyecto se necesita memorizar un objeto calculado, por eso se utiliza:

```jsx
useMemo()
```

## Selección del resultado

Una vez calculadas todas las conversiones, se obtiene la moneda solicitada:

```jsx
const convertedAmount =
  convertedAmounts[toCurrency];
```

Si `toCurrency` contiene:

```text
EUR
```

se obtiene conceptualmente:

```jsx
convertedAmounts["EUR"]
```

## Formato final

El resultado utiliza:

```jsx
{convertedAmount.toFixed(2)}{" "}
{toCurrency}
```

`toFixed(2)` redondea y presenta el valor con exactamente dos decimales.

Por ejemplo:

```text
0.92 EUR
156.70 JPY
```

Después se agrega el código de moneda seleccionado.

El formato requerido es:

```text
XX.XX CCC
```

## Accesibilidad

El resultado utiliza:

```jsx
<div
  className="result"
  aria-live="polite"
>
```

`aria-live="polite"` permite que las tecnologías de asistencia anuncien el nuevo resultado cuando cambia la conversión.

Los campos también están relacionados con sus etiquetas mediante `htmlFor` e `id`.

## Flujo de la aplicación

```text
React renderiza CurrencyConverter
                   ↓
Se establecen los estados iniciales
                   ↓
useMemo calcula todas las conversiones
                   ↓
El usuario introduce una cantidad
                   ↓
setAmount actualiza el estado
                   ↓
useMemo vuelve a calcular
                   ↓
El usuario cambia la moneda de origen
                   ↓
useMemo vuelve a calcular
                   ↓
El usuario cambia la moneda de destino
                   ↓
Se reutilizan las conversiones memorizadas
                   ↓
Se muestra el valor con dos decimales
```

## Complejidad

Si existen `n` monedas, `reduce()` recorre el arreglo una vez:

```text
O(n)
```

El objeto de conversiones almacena un valor por moneda:

```text
O(n)
```

Cuando solamente cambia la moneda de destino, acceder al resultado desde el objeto es una operación constante:

```text
O(1)
```

---

## 🇺🇸 English

This certification project builds a currency converter using React, JSX and the `useState` and `useMemo` hooks.

The application accepts a numeric amount, a source currency and a destination currency. It calculates the conversion and displays the result with two decimal places and the selected currency code.

## Project status

```text
10/10 tests passed
```

## Features

- Defines and exports a `CurrencyConverter` component.
- Accepts a numeric amount.
- Provides source and destination selectors.
- Includes USD, EUR, GBP and JPY.
- Dynamically renders currency options.
- Uses different exchange rates.
- Converts the amount through a base currency.
- Calculates values for every supported currency.
- Memoizes the conversion object with `useMemo`.
- Recalculates when the amount changes.
- Recalculates when the source currency changes.
- Reuses the memoized conversions when only the destination changes.
- Rounds the result to two decimal places.
- Displays the selected currency code.
- Includes an accessible live region.
- Uses a custom responsive CodeMate design.

## Concepts practiced

- React.
- JSX.
- Functional components.
- `useState`.
- `useMemo`.
- State.
- Memoization.
- Computed values.
- Dependency arrays.
- Controlled inputs.
- Select elements.
- Dynamic options.
- Objects.
- `Object.keys()`.
- `reduce()`.
- `map()`.
- React keys.
- `Number()`.
- `toFixed()`.
- Dynamic rendering.
- Accessibility.
- CSS Grid.
- Flexbox.
- Responsive Design.

## Exchange-rate data

The rates are stored in an object:

```jsx
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
};
```

The currency codes are extracted with:

```jsx
const currencies =
  Object.keys(exchangeRates);
```

## Application state

The component maintains three state values:

```jsx
const [amount, setAmount] =
  useState(1);

const [
  fromCurrency,
  setFromCurrency
] = useState("USD");

const [
  toCurrency,
  setToCurrency
] = useState("EUR");
```

They represent the input amount, source currency and destination currency.

## Memoized calculation

The conversion object is created with:

```jsx
const convertedAmounts = useMemo(() => {
  const amountInUSD =
    Number(amount) /
    exchangeRates[fromCurrency];

  return currencies.reduce(
    (conversions, currency) => {
      conversions[currency] =
        amountInUSD *
        exchangeRates[currency];

      return conversions;
    },
    {}
  );
}, [amount, fromCurrency]);
```

The calculation depends only on:

```jsx
amount
fromCurrency
```

It does not depend on `toCurrency` because it already calculates the values for every supported currency.

## Selecting the destination result

The selected result is read from the memoized object:

```jsx
const convertedAmount =
  convertedAmounts[toCurrency];
```

Changing `toCurrency` selects another property without recalculating the full conversion object.

## Formatting

The final result uses:

```jsx
convertedAmount.toFixed(2)
```

This displays exactly two decimal places.

The currency code is appended to produce:

```text
XX.XX CCC
```

## Optimization flow

```text
Amount or source changes
           ↓
useMemo recalculates
           ↓
All conversions are stored

Destination changes
           ↓
The memoized object is reused
           ↓
Another result is selected
```

## Complexity

Calculating conversions for `n` currencies requires:

```text
O(n)
```

Selecting one result from the calculated object requires:

```text
O(1)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel and renders the converter.
- `index.jsx`: Contains state, exchange rates and memoized conversion logic.
- `styles.css`: Defines the responsive CodeMate visual design.
- `README.md`: Contains the bilingual project documentation.

## Certification milestone

This is the twelfth documented React Fundamentals exercise and a freeCodeCamp certification project.

It brings together controlled inputs, dynamic rendering, derived values, object transformations and memoized calculations.