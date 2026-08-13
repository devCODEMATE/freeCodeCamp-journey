# Build a Superhero Application Form

This is exercise **009** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals workshop focused on controlled forms, multiple state values, dynamic options, checkbox collections and form validation.

🔗 [View the workshop on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#workshop-superhero-application-form)

---

## 🇪🇸 Español

Este workshop desarrolla un formulario de solicitud para ingresar a una liga de superhéroes utilizando React, JSX y el hook `useState`.

El formulario solicita el nombre de héroe, la identidad real, el origen de los poderes y una o más habilidades. El botón de envío permanece deshabilitado hasta completar todos los campos obligatorios.

## Funcionalidades

- Define y exporta el componente `SuperheroForm`.
- Utiliza cuatro variables de estado.
- Controla campos de texto y contraseña.
- Controla un elemento `select`.
- Genera opciones dinámicamente con `map()`.
- Genera una lista de checkboxes.
- Permite seleccionar varios poderes.
- Agrega y elimina elementos de un arreglo de estado.
- Utiliza el spread operator.
- Utiliza `filter()` para eliminar selecciones.
- Envía el formulario mediante el método `POST`.
- Deshabilita el botón cuando faltan datos.
- Habilita el envío al completar el formulario.
- Aplica un diseño responsive.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- Formularios controlados.
- Múltiples variables de estado.
- Inputs de texto.
- Inputs de contraseña.
- Elementos `select` y `option`.
- Checkboxes.
- Eventos `onChange`.
- `event.target`.
- Desestructuración.
- Arreglos.
- Spread operator.
- `map()`.
- `filter()`.
- `includes()`.
- Renderizado de listas.
- Prop `key`.
- Condicionales.
- Operadores lógicos.
- Atributo `disabled`.
- Formularios `POST`.
- Responsive Design.

## Componente SuperheroForm

El componente se define y exporta mediante:

```jsx
export const SuperheroForm = () => {
  // Estado, lógica y formulario
};
```

`export` permite utilizar el componente fuera de `index.jsx`.

Como es una exportación con nombre, se importa utilizando llaves:

```jsx
import { SuperheroForm } from "./index.jsx";
```

La relación es:

```text
index.jsx exporta SuperheroForm
                   ↓
index.html importa SuperheroForm
                   ↓
ReactDOM renderiza <SuperheroForm />
```

## Opciones disponibles

El componente almacena las fuentes de los poderes en un arreglo:

```jsx
const powerSourceOptions = [
  "Bitten by a strange creature",
  "Radioactive exposure",
  "Science experiment",
  "Alien heritage",
  "Ancient artifact discovery",
  "Other"
];
```

También almacena los poderes disponibles:

```jsx
const powersOptions = [
  "Super Strength",
  "Super Speed",
  "Flight",
  "Invisibility",
  "Telekinesis",
  "Other"
];
```

Separar las opciones de su estructura visual permite generarlas dinámicamente y mantener el código organizado.

## Estados del formulario

El formulario utiliza cuatro estados:

```jsx
const [heroName, setHeroName] =
  useState("");

const [realName, setRealName] =
  useState("");

const [powerSource, setPowerSource] =
  useState("");

const [powers, setPowers] =
  useState([]);
```

Los primeros tres comienzan como cadenas vacías.

`powers` comienza como un arreglo vacío porque puede contener varias selecciones.

## Campos controlados

El nombre de héroe utiliza:

```jsx
<input
  type="text"
  value={heroName}
  onChange={(event) =>
    setHeroName(event.target.value)
  }
/>
```

El valor visible procede de `heroName`.

Cada cambio actualiza el estado mediante `setHeroName`.

La identidad real funciona de la misma manera:

```jsx
<input
  type="password"
  value={realName}
  onChange={(event) =>
    setRealName(event.target.value)
  }
/>
```

El tipo `password` oculta visualmente los caracteres introducidos.

## Selector controlado

El origen de los poderes utiliza:

```jsx
<select
  value={powerSource}
  onChange={(event) =>
    setPowerSource(event.target.value)
  }
>
```

Su valor se almacena en `powerSource`.

La primera opción posee un valor vacío:

```jsx
<option value="">
  Select one
</option>
```

Por lo tanto, no cuenta como una selección válida.

## Generación de opciones

Las opciones se generan mediante:

```jsx
powerSourceOptions.map((source) => (
  <option
    key={source}
    value={source}
  >
    {source}
  </option>
))
```

Por cada elemento del arreglo, `map()` crea un elemento `option`.

La propiedad:

```jsx
key={source}
```

ayuda a React a identificar cada opción.

## Checkboxes dinámicos

Los poderes también se generan mediante `map()`:

```jsx
powersOptions.map((power) => (
  <label key={power}>
    <input
      type="checkbox"
      value={power}
      checked={powers.includes(power)}
      onChange={handlePowersChange}
    />

    <span>{power}</span>
  </label>
))
```

Cada checkbox utiliza el nombre del poder como valor.

## Propiedad checked

La selección del checkbox depende de:

```jsx
checked={powers.includes(power)}
```

`includes()` comprueba si el poder existe dentro del arreglo `powers`.

Si existe, devuelve `true` y el checkbox aparece seleccionado.

Si no existe, devuelve `false`.

## Manejo de poderes

La función obtiene el valor y el estado del checkbox:

```jsx
const handlePowersChange = (event) => {
  const { value, checked } = event.target;
};
```

Esta línea utiliza desestructuración de objetos para obtener:

- `value`: nombre del poder.
- `checked`: indica si el checkbox está seleccionado.

## Agregar un poder

Si `checked` es verdadero, se crea un arreglo nuevo:

```jsx
[...powers, value]
```

El spread operator:

```jsx
...powers
```

copia las selecciones anteriores.

Después agrega el nuevo valor.

Por ejemplo:

```text
["Flight", "Invisibility"]
              +
       "Super Speed"
              ↓
["Flight", "Invisibility", "Super Speed"]
```

## Eliminar un poder

Si el checkbox deja de estar seleccionado, se utiliza:

```jsx
powers.filter(
  (power) => power !== value
)
```

`filter()` crea un arreglo nuevo sin el valor eliminado.

La actualización completa es:

```jsx
setPowers(
  checked
    ? [...powers, value]
    : powers.filter(
        (power) => power !== value
      )
);
```

## Validación del botón

El botón utiliza:

```jsx
disabled={
  !heroName ||
  !realName ||
  !powerSource ||
  powers.length === 0
}
```

Permanece deshabilitado si:

- `heroName` está vacío.
- `realName` está vacío.
- `powerSource` está vacío.
- No se seleccionó ningún poder.

Solamente se habilita cuando todas las condiciones obligatorias están completas.

## Envío del formulario

El formulario utiliza:

```jsx
<form
  method="post"
  action="https://superhero-application-form.freecodecamp.org"
>
```

`method="post"` indica que los datos deben enviarse mediante una solicitud POST.

`action` define la dirección que recibe el formulario.

El botón utiliza:

```jsx
<button
  className="submit-btn"
  type="submit"
>
  Join the League
</button>
```

## Flujo de la aplicación

```text
React renderiza SuperheroForm
               ↓
Los campos comienzan vacíos
               ↓
El botón está deshabilitado
               ↓
El usuario completa los nombres
               ↓
Selecciona el origen del poder
               ↓
Selecciona uno o más poderes
               ↓
Los estados se actualizan
               ↓
La validación vuelve a evaluarse
               ↓
El botón queda habilitado
               ↓
El formulario puede enviarse
```

## Complejidad

Si existen `n` poderes disponibles, la generación de checkboxes utiliza:

```text
O(n)
```

Al agregar un poder, el spread operator copia el arreglo actual. Al eliminarlo, `filter()` recorre las selecciones:

```text
O(n)
```

El espacio utilizado por las selecciones es proporcional a la cantidad de poderes elegidos:

```text
O(n)
```

---

## 🇺🇸 English

This workshop builds a superhero application form using React, JSX and the `useState` hook.

The form collects a hero name, real identity, power source and one or more powers. Its submit button remains disabled until every required section has been completed.

## Features

- Defines and exports a `SuperheroForm` component.
- Uses four state values.
- Controls text and password inputs.
- Controls a `select` element.
- Dynamically renders options with `map()`.
- Dynamically renders checkboxes.
- Supports multiple power selections.
- Adds and removes values from an array state.
- Uses the spread operator.
- Uses `filter()` to remove selections.
- Submits the form using `POST`.
- Disables the button when information is missing.
- Enables submission when the form is complete.
- Uses a responsive layout.

## Concepts practiced

- React.
- JSX.
- Functional components.
- `useState`.
- Controlled forms.
- Multiple state values.
- Text and password inputs.
- Select elements.
- Checkboxes.
- `onChange`.
- Event objects.
- Object destructuring.
- Arrays.
- Spread syntax.
- `map()`.
- `filter()`.
- `includes()`.
- List rendering.
- React keys.
- Logical operators.
- Boolean attributes.
- Form validation.
- POST forms.
- Responsive Design.

## Controlled inputs

The hero name is connected to state:

```jsx
<input
  type="text"
  value={heroName}
  onChange={(event) =>
    setHeroName(event.target.value)
  }
/>
```

React controls the displayed value and updates it whenever the user types.

The real name and power source follow the same controlled-input pattern.

## Dynamic options

The power-source options are generated with:

```jsx
powerSourceOptions.map((source) => (
  <option
    key={source}
    value={source}
  >
    {source}
  </option>
))
```

This separates the data from the JSX structure.

## Managing checkboxes

Every checkbox determines its selected state with:

```jsx
checked={powers.includes(power)}
```

The change handler reads:

```jsx
const { value, checked } = event.target;
```

When checked, the value is added:

```jsx
[...powers, value]
```

When unchecked, it is removed:

```jsx
powers.filter(
  (power) => power !== value
)
```

## Submit validation

The button remains disabled when any required value is missing:

```jsx
disabled={
  !heroName ||
  !realName ||
  !powerSource ||
  powers.length === 0
}
```

This expression is evaluated again after every state update.

## Form submission

The form uses:

```jsx
method="post"
```

and submits to the endpoint defined by:

```jsx
action="https://superhero-application-form.freecodecamp.org"
```

## Complexity

Rendering `n` powers requires:

```text
O(n)
```

Adding or removing selections may also require copying or filtering the array:

```text
O(n)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel and renders the form.
- `index.jsx`: Contains the controlled fields, options, checkbox logic and validation.
- `styles.css`: Defines the form presentation and responsive layout.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the ninth documented React Fundamentals exercise in my freeCodeCamp journey.

It practices controlled forms, multiple states, dynamic options, checkbox arrays and declarative validation.