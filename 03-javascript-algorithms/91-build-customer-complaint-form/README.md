# 📝 Customer Complaint Form

## 🇪🇸 Español

Este es el ejercicio número 91 de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue construir la lógica de validación de un formulario de reclamos de clientes. El HTML y el CSS fueron proporcionados por freeCodeCamp, y el trabajo principal consistió en usar JavaScript para validar cada campo, mostrar estados visuales y evitar el envío cuando existieran datos inválidos.

### Funcionalidades

- Validación del nombre completo.
- Validación del formato del correo electrónico.
- Validación de números de orden.
- Validación de códigos de producto.
- Validación de cantidades positivas.
- Validación de grupos de checkboxes.
- Validación de grupos de radio buttons.
- Validación condicional de campos de descripción.
- Cambio de bordes a verde o rojo según el estado del campo.
- Validación completa al enviar el formulario.
- Prevención del envío cuando existen campos inválidos.

### Reglas de validación

- El nombre completo no puede estar vacío.
- El correo debe tener un formato válido.
- El número de orden debe contener diez dígitos y comenzar con `2024`.
- El código de producto debe seguir el patrón `XX##-X###-XX#`.
- La cantidad debe ser un número entero positivo.
- Debe seleccionarse al menos un tipo de reclamo.
- Si se selecciona “Other” en reclamos, la descripción debe tener al menos veinte caracteres.
- Debe seleccionarse una solución.
- Si se selecciona “Other” en soluciones, la descripción debe tener al menos veinte caracteres.

### Conceptos practicados

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Forms
- Form Validation
- Event Listeners
- `change` event
- `submit` event
- `preventDefault()`
- Regular Expressions
- `querySelector()`
- `querySelectorAll()`
- `getElementById()`
- `.checked`
- `.trim()`
- `Object.values()`
- `.every()`
- Conditional validation
- Dynamic styling
- Accessibility with fieldsets
- Functions
- Objects
- Conditionals

### Lo que aprendí

- Crear una función que valide múltiples campos y devuelva un objeto de resultados.
- Usar expresiones regulares para validar distintos formatos.
- Validar grupos de checkboxes y radio buttons.
- Aplicar reglas condicionales según la opción seleccionada.
- Cambiar visualmente el estado de inputs, textareas y fieldsets.
- Reutilizar la misma lógica para validaciones individuales y generales.
- Comprobar si todos los valores de un objeto son verdaderos.
- Ejecutar validaciones cuando un campo cambia.
- Validar todo el formulario antes de permitir su envío.
- Organizar una lógica de validación compleja en funciones reutilizables.

---

## 🇺🇸 English

This is exercise number 91 in my freeCodeCamp JavaScript journey.

The goal was to build the validation logic for a customer complaint form. The HTML and CSS were provided by freeCodeCamp, and the main task was to use JavaScript to validate every field, display visual feedback, and prevent submission when invalid data was found.

### Features

- Full-name validation.
- Email-format validation.
- Order-number validation.
- Product-code validation.
- Positive quantity validation.
- Checkbox-group validation.
- Radio-button-group validation.
- Conditional description validation.
- Green or red borders based on field validity.
- Complete form validation on submission.
- Submission prevention when invalid fields exist.

### Validation rules

- The full name cannot be empty.
- The email must have a valid format.
- The order number must contain ten digits and start with `2024`.
- The product code must follow the pattern `XX##-X###-XX#`.
- The quantity must be a positive integer.
- At least one complaint type must be selected.
- If “Other” is selected for complaints, the description must contain at least twenty characters.
- A solution must be selected.
- If “Other” is selected for solutions, the description must contain at least twenty characters.

### Concepts practiced

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Forms
- Form Validation
- Event Listeners
- `change` event
- `submit` event
- `preventDefault()`
- Regular Expressions
- `querySelector()`
- `querySelectorAll()`
- `getElementById()`
- `.checked`
- `.trim()`
- `Object.values()`
- `.every()`
- Conditional validation
- Dynamic styling
- Accessibility with fieldsets
- Functions
- Objects
- Conditionals

### What I learned

- Create a function that validates multiple fields and returns an object of results.
- Use regular expressions to validate different formats.
- Validate checkbox and radio-button groups.
- Apply conditional rules based on the selected option.
- Visually update inputs, textareas, and fieldsets.
- Reuse the same logic for individual and complete validation.
- Check whether every value in an object is true.
- Run validation when a field changes.
- Validate the entire form before allowing submission.
- Organize complex validation logic into reusable functions.

---

## ✅ Tests

All 34 freeCodeCamp tests passed.

---

## 📁 Files

- `index.html`
- `styles.css`
- `script.js`
