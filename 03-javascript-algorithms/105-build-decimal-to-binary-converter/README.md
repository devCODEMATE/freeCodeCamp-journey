# 🔢 Decimal to Binary Converter

## 🇪🇸 Español

Este es el ejercicio número **105** de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue construir una aplicación que convierta números decimales a binario utilizando **recursividad**. Además, para el valor `5`, la aplicación muestra una animación de la pila de llamadas para visualizar cómo funciona el proceso recursivo.

### Funcionalidades

- Ingresar un número decimal.
- Validar que el valor sea un número mayor o igual a `0`.
- Convertir números decimales a binario.
- Ejecutar la conversión al hacer click en un botón.
- Ejecutar la conversión al presionar la tecla `Enter`.
- Mostrar el resultado dinámicamente en pantalla.
- Mostrar una animación especial de la call stack para el número `5`.
- Agregar elementos dinámicamente durante la animación.
- Actualizar los mensajes de cada frame de la pila.
- Eliminar elementos de la animación después de un tiempo determinado.

### Conceptos practicados

- HTML
- CSS
- JavaScript
- Manipulación del DOM
- Recursividad
- Caso base
- Caso recursivo
- Call Stack
- Event Listeners
- Evento `click`
- Evento `keydown`
- Tecla `Enter`
- `setTimeout()`
- Arrays de objetos
- `.forEach()`
- `Math.floor()`
- Operador módulo `%`
- `parseInt()`
- `isNaN()`
- Template literals
- `innerHTML`
- `innerText`
- `textContent`
- `.remove()`
- Validación de inputs
- Renderizado dinámico
- Diseño responsive
- Variables CSS
- Media queries

### Lo que aprendí

- Convertir un número decimal a binario usando recursividad.
- Definir casos base para detener una función recursiva.
- Reducir el problema usando `Math.floor(input / 2)`.
- Obtener el resto de una división usando `%`.
- Construir el resultado binario mientras regresan las llamadas recursivas.
- Validar datos ingresados por el usuario.
- Detectar la tecla `Enter` con un evento `keydown`.
- Ejecutar lógica mediante eventos de click.
- Usar `setTimeout()` para controlar secuencias temporizadas.
- Renderizar elementos dinámicamente con `innerHTML`.
- Actualizar contenido con `textContent`.
- Eliminar elementos del DOM con `.remove()`.
- Representar visualmente el funcionamiento de la call stack.
- Trabajar con arrays de objetos para controlar animaciones.
- Crear una interfaz responsive con media queries.

### Cómo funciona la conversión

La función utiliza recursividad:

```javascript
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

El caso base ocurre cuando el valor es `0` o `1`.

Para cualquier otro número, la función divide el valor entre `2`, redondea hacia abajo y vuelve a llamarse a sí misma.

Por ejemplo:

```text
decimalToBinary(5)

decimalToBinary(2) + 1
decimalToBinary(1) + 0 + 1

"1" + "0" + "1"

101
```

---

## 🇺🇸 English

This is exercise **105** in my freeCodeCamp JavaScript journey.

The goal was to build an application that converts decimal numbers into binary using **recursion**. For the value `5`, the application also displays a call stack animation to visualize how the recursive process works.

### Features

- Enter a decimal number.
- Validate that the value is a number greater than or equal to `0`.
- Convert decimal numbers to binary.
- Run the conversion by clicking a button.
- Run the conversion by pressing the `Enter` key.
- Dynamically display the result.
- Display a special call stack animation for the number `5`.
- Dynamically add elements during the animation.
- Update the message displayed in each stack frame.
- Remove animation elements after specific delays.

### Concepts practiced

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Recursion
- Base Case
- Recursive Case
- Call Stack
- Event Listeners
- `click` events
- `keydown` events
- `Enter` key
- `setTimeout()`
- Arrays of objects
- `.forEach()`
- `Math.floor()`
- Modulo operator `%`
- `parseInt()`
- `isNaN()`
- Template literals
- `innerHTML`
- `innerText`
- `textContent`
- `.remove()`
- Input validation
- Dynamic rendering
- Responsive design
- CSS custom properties
- Media queries

### What I learned

- Convert decimal numbers to binary using recursion.
- Define base cases to stop recursive execution.
- Reduce the problem using `Math.floor(input / 2)`.
- Get the remainder of a division using `%`.
- Build the binary result while recursive calls return.
- Validate user input.
- Detect the `Enter` key using a `keydown` event.
- Trigger logic with click events.
- Use `setTimeout()` to control timed sequences.
- Dynamically render elements with `innerHTML`.
- Update content with `textContent`.
- Remove DOM elements using `.remove()`.
- Visually represent how the call stack works.
- Use arrays of objects to control animations.
- Build a responsive interface using media queries.

---

## 📁 Files

- `index.html`
- `styles.css`
- `script.js`