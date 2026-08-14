# Build an Event RSVP

This is exercise **010** of the **Front End Development Libraries** section of my freeCodeCamp learning journey.

It is a React Fundamentals lab focused on controlled forms, native HTML validation, boolean state and conditional rendering.

🔗 [View the lab on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lab-event-rsvp)

---

## 🇪🇸 Español

Este laboratorio desarrolla un formulario RSVP para confirmar la asistencia a un evento utilizando React, JSX y el hook `useState`.

La aplicación solicita el nombre, correo electrónico, cantidad de asistentes, preferencias alimentarias y si la persona llevará invitados adicionales.

Al enviar correctamente el formulario, React evita que la página se recargue y muestra una confirmación con la información introducida.

## ¿Qué significa RSVP?

RSVP proviene de la expresión francesa:

```text
Répondez s'il vous plaît
```

Significa:

```text
Por favor, responda
```

Se utiliza en invitaciones para solicitar que las personas confirmen si asistirán al evento.

## Funcionalidades

- Define y exporta el componente `EventRSVPForm`.
- Utiliza seis variables de estado.
- Controla todos los campos del formulario.
- Solicita el nombre del asistente.
- Valida que el nombre sea obligatorio.
- Solicita una dirección de correo electrónico.
- Utiliza validación nativa para el formato del email.
- Solicita la cantidad de asistentes.
- Impide valores menores que uno.
- Permite introducir preferencias alimentarias opcionales.
- Permite indicar si se llevarán invitados adicionales.
- Evita que el formulario recargue la página.
- Muestra una confirmación después del envío.
- Presenta los datos introducidos.
- Utiliza renderizado condicional.
- Incluye una región dinámica accesible.
- Presenta un diseño responsive personalizado.

## Conceptos practicados

- React.
- React Fundamentals.
- JSX.
- Componentes funcionales.
- Hooks.
- `useState`.
- Formularios controlados.
- Múltiples variables de estado.
- Estado booleano.
- Inputs de texto.
- Inputs de email.
- Inputs numéricos.
- Checkboxes.
- Eventos `onChange`.
- Eventos `onSubmit`.
- `event.target.value`.
- `event.target.checked`.
- `preventDefault()`.
- Validación HTML.
- Atributo `required`.
- Atributo `min`.
- Renderizado condicional.
- Operador lógico AND.
- Operador lógico OR.
- Operador ternario.
- Accesibilidad.
- `aria-live`.
- HTML semántico.
- Responsive Design.

## Componente EventRSVPForm

El componente se define y exporta mediante:

```jsx
export const EventRSVPForm = () => {
  // Estados, eventos y formulario
};
```

La palabra `export` permite utilizar el componente fuera de `index.jsx`.

Como se trata de una exportación con nombre, se importa utilizando llaves:

```jsx
import { EventRSVPForm } from "./index.jsx";
```

La relación entre los archivos es:

```text
index.jsx exporta EventRSVPForm
                  ↓
index.html importa EventRSVPForm
                  ↓
ReactDOM renderiza <EventRSVPForm />
```

## Estados del formulario

La aplicación utiliza seis variables de estado:

```jsx
const [name, setName] =
  useState("");

const [email, setEmail] =
  useState("");

const [attendees, setAttendees] =
  useState(1);

const [
  dietaryPreferences,
  setDietaryPreferences
] = useState("");

const [
  additionalGuests,
  setAdditionalGuests
] = useState(false);

const [isSubmitted, setIsSubmitted] =
  useState(false);
```

Cada estado cumple una función diferente.

| Estado | Valor inicial | Propósito |
|---|---:|---|
| `name` | `""` | Nombre de la persona |
| `email` | `""` | Dirección de correo |
| `attendees` | `1` | Cantidad de asistentes |
| `dietaryPreferences` | `""` | Preferencias alimentarias |
| `additionalGuests` | `false` | Indica si llevará invitados |
| `isSubmitted` | `false` | Controla la confirmación |

## Campo de nombre

El campo de nombre es un input controlado:

```jsx
<input
  id="name"
  type="text"
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
  required
/>
```

El valor mostrado procede del estado `name`.

Cada cambio se guarda mediante:

```jsx
setName(event.target.value)
```

El atributo:

```jsx
required
```

impide enviar el formulario vacío.

## Campo de correo electrónico

El correo utiliza:

```jsx
<input
  id="email"
  type="email"
  value={email}
  onChange={(event) =>
    setEmail(event.target.value)
  }
  required
/>
```

`type="email"` activa la validación nativa del navegador.

El formulario no puede enviarse si el campo:

- Está vacío.
- No contiene un formato válido de correo electrónico.

## Cantidad de asistentes

El campo utiliza:

```jsx
<input
  id="attendees"
  type="number"
  min="1"
  value={attendees}
  onChange={(event) =>
    setAttendees(event.target.value)
  }
  required
/>
```

`type="number"` limita el campo a valores numéricos.

El atributo:

```jsx
min="1"
```

impide utilizar una cantidad inferior a una persona.

El valor inicial también es uno:

```jsx
useState(1)
```

## Preferencias alimentarias

Este campo es opcional:

```jsx
<input
  id="dietary-preferences"
  type="text"
  value={dietaryPreferences}
  onChange={(event) =>
    setDietaryPreferences(
      event.target.value
    )
  }
/>
```

No utiliza `required`, por lo que puede permanecer vacío.

Si no se introduce información, la confirmación muestra:

```text
None
```

mediante:

```jsx
dietaryPreferences || "None"
```

## Invitados adicionales

La aplicación utiliza un checkbox controlado:

```jsx
<input
  type="checkbox"
  checked={additionalGuests}
  onChange={(event) =>
    setAdditionalGuests(
      event.target.checked
    )
  }
/>
```

En un checkbox se utiliza:

```jsx
event.target.checked
```

en lugar de:

```jsx
event.target.value
```

`checked` devuelve un booleano:

```text
true  → está seleccionado
false → no está seleccionado
```

## Envío del formulario

El formulario escucha:

```jsx
<form onSubmit={handleSubmit}>
```

La función correspondiente es:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  setIsSubmitted(true);
};
```

`preventDefault()` evita el comportamiento tradicional del formulario, que recargaría o navegaría fuera de la página.

Después:

```jsx
setIsSubmitted(true);
```

actualiza el estado que controla la confirmación.

## Renderizado condicional

La confirmación utiliza:

```jsx
{isSubmitted && (
  <section className="confirmation">
    {/* Información */}
  </section>
)}
```

El operador lógico AND funciona de la siguiente manera:

```text
isSubmitted === false
        ↓
No se muestra la confirmación

isSubmitted === true
        ↓
Se renderiza la confirmación
```

## Presentación de los datos

La confirmación muestra los valores almacenados en los estados:

```jsx
<p>
  <strong>Name:</strong> {name}
</p>
```

El checkbox se presenta mediante un operador ternario:

```jsx
{additionalGuests ? "Yes" : "No"}
```

Si `additionalGuests` es verdadero, muestra `Yes`. Si es falso, muestra `No`.

## Accesibilidad

La confirmación incluye:

```jsx
aria-live="polite"
```

Esto permite que las tecnologías de asistencia anuncien la aparición del mensaje sin interrumpir abruptamente al usuario.

Los campos también se relacionan con sus etiquetas mediante:

```jsx
<label htmlFor="email">
```

y:

```jsx
id="email"
```

En JSX se utiliza `htmlFor` en lugar del atributo HTML `for`.

## Flujo de la aplicación

```text
React renderiza EventRSVPForm
                ↓
Se muestran los campos vacíos
                ↓
El usuario completa el formulario
                ↓
Cada onChange actualiza su estado
                ↓
El usuario presiona Confirm RSVP
                ↓
El navegador valida los campos
                ↓
handleSubmit evita la recarga
                ↓
isSubmitted cambia a true
                ↓
React vuelve a renderizar
                ↓
Se muestra la confirmación
```

## Complejidad

La aplicación actualiza una cantidad fija de estados y elementos:

```text
O(1)
```

El número de campos también es fijo, por lo que el espacio adicional utilizado es:

```text
O(1)
```

---

## 🇺🇸 English

This lab builds an event RSVP form using React, JSX and the `useState` hook.

The application collects the attendee's name, email address, number of attendees, dietary preferences and whether they are bringing additional guests.

After a valid submission, React prevents the page from reloading and displays a confirmation containing the submitted information.

## Features

- Defines and exports an `EventRSVPForm` component.
- Uses six state variables.
- Controls every form field.
- Requires the attendee's name.
- Requires and validates an email address.
- Requires at least one attendee.
- Accepts optional dietary preferences.
- Provides an additional-guests checkbox.
- Prevents the form from reloading the page.
- Displays a confirmation after submission.
- Presents the submitted values.
- Uses conditional rendering.
- Includes an accessible live region.
- Uses a custom responsive design.

## Concepts practiced

- React.
- React Fundamentals.
- JSX.
- Functional components.
- Hooks.
- `useState`.
- Controlled forms.
- Multiple state values.
- Boolean state.
- Text, email and number inputs.
- Checkboxes.
- `onChange`.
- `onSubmit`.
- `event.target.value`.
- `event.target.checked`.
- `preventDefault()`.
- Native HTML validation.
- `required`.
- `min`.
- Conditional rendering.
- Logical AND.
- Logical OR.
- Ternary operators.
- Accessibility.
- `aria-live`.
- Semantic HTML.
- Responsive Design.

## Controlled fields

Every field receives its current value from state and updates it through an `onChange` handler.

For example:

```jsx
<input
  id="name"
  type="text"
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
  required
/>
```

This makes the input a controlled React element.

## Native validation

The name and email fields use:

```jsx
required
```

The email field uses:

```jsx
type="email"
```

The attendees field uses:

```jsx
type="number"
min="1"
required
```

The browser validates these constraints before triggering a valid form submission.

## Checkbox state

The checkbox reads its boolean state through:

```jsx
event.target.checked
```

The value is stored in `additionalGuests`.

## Preventing page reload

The submit handler executes:

```jsx
event.preventDefault();
```

This prevents the browser's default form submission behavior.

The handler then updates:

```jsx
setIsSubmitted(true);
```

## Conditional confirmation

The confirmation is rendered only when `isSubmitted` is true:

```jsx
{isSubmitted && (
  <section className="confirmation">
    {/* Submitted information */}
  </section>
)}
```

## Fallback and ternary values

When dietary preferences are empty, the application displays:

```jsx
dietaryPreferences || "None"
```

The additional-guests value is presented with:

```jsx
additionalGuests ? "Yes" : "No"
```

## Application flow

```text
The user completes the form
             ↓
State values are updated
             ↓
The browser validates the fields
             ↓
The form is submitted
             ↓
preventDefault stops the reload
             ↓
isSubmitted becomes true
             ↓
React displays the confirmation
```

## Complexity

The form contains a fixed number of states and fields:

```text
O(1)
```

Its additional space usage is also constant:

```text
O(1)
```

## 📁 Files

- `index.html`: Loads React, ReactDOM and Babel and renders the form.
- `index.jsx`: Contains the controlled fields, submission logic and confirmation.
- `styles.css`: Defines the responsive CodeMate visual design.
- `README.md`: Contains the bilingual project documentation.

## React learning milestone

This is the tenth documented React Fundamentals exercise in my freeCodeCamp journey.

It reinforces controlled forms, native validation, boolean state, checkbox handling and conditional confirmation rendering.