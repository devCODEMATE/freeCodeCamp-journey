# Build a One-Time Password Generator

This is exercise **008** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals lab focused on state, effects, timers, cleanup functions and functional state updates.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-one-time-password-generator)

---

## 🇪🇸 Español

Este laboratorio desarrolla un generador de contraseñas de un solo uso, conocidas como OTP por las siglas de **One-Time Password**.

Al presionar el botón, la aplicación genera un código aleatorio de seis dígitos y comienza una cuenta regresiva de cinco segundos. Durante ese tiempo, el botón permanece deshabilitado. Cuando la cuenta llega a cero, se informa que el código expiró y se habilita nuevamente la generación.

## Funcionalidades

- Define y exporta el componente `OTPGenerator`.
- Genera un código aleatorio de seis dígitos.
- Convierte el código generado a una cadena.
- Utiliza dos variables de estado.
- Guarda el OTP generado.
- Guarda el tiempo restante.
- Inicia una cuenta regresiva de cinco segundos.
- Actualiza el contador cada segundo.
- Utiliza `useEffect` para administrar el temporizador.
- Cancela temporizadores pendientes mediante una función de limpieza.
- Actualiza el estado con una función basada en el valor anterior.
- Deshabilita el botón mientras el código está vigente.
- Habilita el botón cuando el código expira.
- Muestra diferentes mensajes según el estado del temporizador.
- Utiliza `aria-live` para anunciar los cambios del contador.
- Renderiza el componente mediante ReactDOM.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- `useEffect`.
- Estado.
- Efectos secundarios.
- Arreglos de dependencias.
- Temporizadores.
- `setTimeout()`.
- `clearTimeout()`.
- Funciones de limpieza.
- Actualizaciones funcionales del estado.
- `Math.random()`.
- `Math.floor()`.
- Conversión mediante `toString()`.
- Renderizado condicional.
- Operador lógico OR.
- Eventos.
- `onClick`.
- Atributos booleanos.
- `disabled`.
- Accesibilidad.
- `aria-live`.
- Exportaciones con nombre.
- ReactDOM.
- `createRoot()`.

## Importación de hooks

Los hooks se obtienen desde el objeto global de React:

```jsx
const { useState, useEffect } = React;
```

Esta expresión utiliza desestructuración de objetos.

Es equivalente a:

```jsx
const useState = React.useState;
const useEffect = React.useEffect;
```

React está disponible globalmente porque se carga en `index.html` mediante un CDN.

## Componente OTPGenerator

El componente se define y exporta mediante:

```jsx
export const OTPGenerator = () => {
  // Estado, lógica y JSX
};
```

La palabra `export` permite utilizar el componente fuera de `index.jsx`.

Como se utiliza una exportación con nombre, el componente se importa con llaves:

```jsx
import { OTPGenerator } from "./index.jsx";
```

La relación entre los archivos es:

```text
index.jsx exporta OTPGenerator
                 ↓
index.html importa OTPGenerator
                 ↓
ReactDOM renderiza <OTPGenerator />
```

## Estados de la aplicación

El componente utiliza dos estados:

```jsx
const [otp, setOtp] = useState("");
const [timeLeft, setTimeLeft] =
  useState(null);
```

### Estado otp

`otp` almacena el código generado.

Su valor inicial es una cadena vacía:

```jsx
useState("")
```

`setOtp` permite guardar un nuevo código.

### Estado timeLeft

`timeLeft` almacena la cantidad de segundos restantes.

Su valor inicial es:

```jsx
null
```

Este valor indica que todavía no se generó ningún OTP.

Después de generar uno, cambia a:

```jsx
5
```

## Generación del OTP

La función encargada de generar el código es:

```jsx
const generateOTP = () => {
  const newOTP = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  setOtp(newOTP);
  setTimeLeft(5);
};
```

Esta función realiza tres operaciones:

1. Genera un número aleatorio.
2. Guarda el código en el estado.
3. Inicia el contador en cinco segundos.

## Código de seis dígitos

La expresión utilizada es:

```jsx
100000 + Math.random() * 900000
```

`Math.random()` produce un número desde `0`, incluido, hasta `1`, excluido.

Al multiplicarlo por:

```text
900000
```

y sumarle:

```text
100000
```

el resultado queda dentro del rango necesario para obtener seis dígitos.

Después se utiliza:

```jsx
Math.floor()
```

para eliminar la parte decimal:

```jsx
Math.floor(
  100000 + Math.random() * 900000
)
```

El resultado estará entre:

```text
100000
```

y:

```text
999999
```

Finalmente, se convierte a una cadena:

```jsx
.toString()
```

## Actualización del estado

El nuevo código se guarda mediante:

```jsx
setOtp(newOTP);
```

La cuenta regresiva comienza mediante:

```jsx
setTimeLeft(5);
```

Estas actualizaciones provocan un nuevo renderizado del componente.

## Hook useEffect

El temporizador se administra mediante:

```jsx
useEffect(() => {
  // Lógica del temporizador
}, [timeLeft]);
```

El arreglo de dependencias contiene:

```jsx
[timeLeft]
```

Por lo tanto, el efecto vuelve a ejecutarse cada vez que cambia el tiempo restante.

## Condiciones del temporizador

Antes de crear otro temporizador se verifica:

```jsx
if (
  timeLeft === null ||
  timeLeft === 0
) {
  return;
}
```

Si `timeLeft` es `null`, todavía no se generó un código.

Si es `0`, la cuenta terminó.

En ambos casos, el efecto finaliza sin programar otro temporizador.

## Cuenta regresiva

Cuando el contador posee un valor mayor que cero, se crea un temporizador:

```jsx
const timerId = setTimeout(() => {
  setTimeLeft(
    (previousTime) => previousTime - 1
  );
}, 1000);
```

`setTimeout()` espera:

```text
1000 milisegundos
```

lo que equivale a un segundo.

Después resta uno al tiempo anterior.

## Actualización funcional

El contador utiliza:

```jsx
setTimeLeft(
  (previousTime) => previousTime - 1
);
```

Esta es una actualización funcional del estado.

En lugar de depender directamente del valor capturado durante el renderizado, React proporciona el valor anterior mediante:

```jsx
previousTime
```

El nuevo valor será:

```text
previousTime - 1
```

Por ejemplo:

```text
5 → 4 → 3 → 2 → 1 → 0
```

## Función de limpieza

El efecto devuelve:

```jsx
return () => clearTimeout(timerId);
```

Esta función cancela el temporizador pendiente antes de que el efecto se ejecute nuevamente o antes de desmontar el componente.

Esto evita que queden temporizadores innecesarios activos.

## Mensajes del temporizador

La función:

```jsx
const getTimerMessage = () => {
```

decide qué texto debe mostrar la aplicación.

Si todavía no existe un temporizador:

```jsx
if (timeLeft === null) {
  return "";
}
```

no muestra ningún mensaje.

Si el tiempo terminó:

```jsx
if (timeLeft === 0) {
  return (
    "OTP expired. Click the button " +
    "to generate a new OTP."
  );
}
```

muestra el mensaje de expiración.

Mientras el OTP está vigente, devuelve:

```jsx
return `Expires in: ${timeLeft} seconds`;
```

## Renderizado inicial

Antes de generar un código, `otp` contiene una cadena vacía.

El encabezado utiliza:

```jsx
{otp ||
  "Click 'Generate OTP' to get a code"}
```

El operador lógico OR devuelve el primer valor verdadero.

Como una cadena vacía es un valor falso, inicialmente se muestra:

```text
Click 'Generate OTP' to get a code
```

Después de generar el código, `otp` contiene una cadena de seis dígitos y se muestra ese valor.

## Botón de generación

El botón utiliza:

```jsx
<button
  id="generate-otp-button"
  onClick={generateOTP}
  disabled={timeLeft > 0}
>
  Generate OTP
</button>
```

Cuando se hace clic, React ejecuta:

```jsx
generateOTP
```

El botón queda deshabilitado mientras:

```jsx
timeLeft > 0
```

Esto impide generar otro código antes de que expire el actual.

Al llegar a cero:

```jsx
timeLeft > 0
```

es falso y el botón vuelve a habilitarse.

## Accesibilidad

El mensaje del contador utiliza:

```jsx
<p
  id="otp-timer"
  aria-live="polite"
>
```

`aria-live="polite"` permite que las tecnologías de asistencia anuncien los cambios sin interrumpir abruptamente al usuario.

Esto es útil porque el contenido se actualiza dinámicamente cada segundo.

## Flujo de la aplicación

```text
React renderiza OTPGenerator
               ↓
Se muestra el mensaje inicial
               ↓
El usuario presiona Generate OTP
               ↓
Se genera un código de seis dígitos
               ↓
otp guarda el código
               ↓
timeLeft se establece en 5
               ↓
El botón queda deshabilitado
               ↓
useEffect inicia el temporizador
               ↓
El contador disminuye cada segundo
               ↓
timeLeft llega a 0
               ↓
Se muestra el mensaje de expiración
               ↓
El botón vuelve a habilitarse
```

## Complejidad

La generación y cada actualización del temporizador realizan una cantidad fija de operaciones:

```text
O(1)
```

La aplicación utiliza dos variables de estado y un temporizador, por lo que el espacio adicional también es constante:

```text
O(1)
```

---

## 🇺🇸 English

This lab builds a One-Time Password generator using React, state, effects and timers.

When the user clicks the button, the application generates a random six-digit code and starts a five-second countdown. The button remains disabled until the OTP expires.

## Features

- Defines and exports an `OTPGenerator` component.
- Generates a random six-digit code.
- Converts the generated code to a string.
- Uses two state variables.
- Stores the generated OTP.
- Stores the remaining time.
- Starts a five-second countdown.
- Updates the countdown every second.
- Manages the timer with `useEffect`.
- Cancels pending timers with a cleanup function.
- Uses a functional state update.
- Disables the button while the OTP is active.
- Enables the button after expiration.
- Displays different timer messages.
- Uses `aria-live` for dynamic updates.
- Renders the component with ReactDOM.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Hooks.
- `useState`.
- `useEffect`.
- State.
- Side effects.
- Dependency arrays.
- Timers.
- `setTimeout()`.
- `clearTimeout()`.
- Cleanup functions.
- Functional state updates.
- `Math.random()`.
- `Math.floor()`.
- `toString()`.
- Conditional rendering.
- Logical OR.
- React events.
- `onClick`.
- Boolean attributes.
- `disabled`.
- Accessibility.
- `aria-live`.
- Named exports.
- ReactDOM.
- `createRoot()`.

## Component state

The component creates two state values:

```jsx
const [otp, setOtp] = useState("");
const [timeLeft, setTimeLeft] =
  useState(null);
```

`otp` contains the generated code.

`timeLeft` contains the remaining number of seconds. Its initial `null` value indicates that no OTP has been generated.

## Generating the code

The code is generated with:

```jsx
const newOTP = Math.floor(
  100000 + Math.random() * 900000
).toString();
```

The expression produces an integer between `100000` and `999999`, guaranteeing a six-digit result.

The code and countdown are then stored:

```jsx
setOtp(newOTP);
setTimeLeft(5);
```

## Managing the timer

The effect depends on `timeLeft`:

```jsx
useEffect(() => {
  // Timer logic
}, [timeLeft]);
```

When `timeLeft` is greater than zero, a timeout waits one second and decreases the value.

```jsx
const timerId = setTimeout(() => {
  setTimeLeft(
    (previousTime) => previousTime - 1
  );
}, 1000);
```

## Functional state update

The expression:

```jsx
(previousTime) => previousTime - 1
```

uses the latest previous state value provided by React.

This safely produces the sequence:

```text
5 → 4 → 3 → 2 → 1 → 0
```

## Cleanup function

The effect returns:

```jsx
return () => clearTimeout(timerId);
```

React runs this cleanup before the effect executes again or when the component is removed.

It prevents obsolete timers from remaining active.

## Timer messages

The helper function returns:

- An empty string before generating an OTP.
- The remaining seconds during the countdown.
- An expiration message when the timer reaches zero.

```jsx
return `Expires in: ${timeLeft} seconds`;
```

## Disabling the button

The button uses:

```jsx
disabled={timeLeft > 0}
```

It remains disabled while the countdown is active and becomes available again when `timeLeft` reaches zero.

## Accessibility

The timer paragraph includes:

```jsx
aria-live="polite"
```

This helps assistive technologies announce dynamic countdown changes.

## Application flow

```text
The user clicks Generate OTP
             ↓
A six-digit code is generated
             ↓
The countdown starts at 5
             ↓
The button becomes disabled
             ↓
useEffect updates the timer
             ↓
The timer reaches 0
             ↓
The OTP is marked as expired
             ↓
The button becomes enabled
```

## Complexity

Each generation and timer update performs a constant amount of work:

```text
O(1)
```

The component also uses constant additional space:

```text
O(1)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel, imports the component and renders it.
- `index.jsx`: Contains the OTP generation, states and timer logic.
- `styles.css`: Defines the responsive CodeMate-inspired interface.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the eighth documented React Fundamentals exercise in my freeCodeCamp journey.

It reinforces state and effects while introducing countdown timers, functional state updates, expiration logic and accessible dynamic messages.