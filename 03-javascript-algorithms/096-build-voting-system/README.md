# 🗳️ Voting System

## 🇪🇸 Español

Este es el ejercicio número **96** de mi recorrido de JavaScript en freeCodeCamp.

El objetivo fue desarrollar un sistema de votación utilizando las estructuras de datos `Map` y `Set`. El programa permite crear opciones para una encuesta, registrar votos únicos por usuario y mostrar los resultados finales.

### Funcionalidades

- Crear una encuesta utilizando un `Map`.
- Agregar nuevas opciones de votación.
- Evitar opciones vacías.
- Evitar opciones duplicadas.
- Registrar votos mediante un identificador de votante.
- Validar que la opción exista antes de votar.
- Evitar que un mismo usuario vote más de una vez por la misma opción.
- Contabilizar automáticamente los votos registrados.
- Mostrar los resultados finales de la encuesta.

### Conceptos practicados

- JavaScript
- Objects
- `Map`
- `new Map()`
- `.set()`
- `.get()`
- `.has()`
- `.forEach()`
- `Set`
- `new Set()`
- `.add()`
- `.size`
- Unique values
- Functions
- Arrow Functions
- Template Literals
- Conditionals
- Early Returns
- String Concatenation
- Data Validation

### Lo que aprendí

- Utilizar un `Map` para almacenar información organizada por claves.
- Asociar cada opción de votación con un `Set` de votantes.
- Emplear un `Set` para impedir votos duplicados.
- Validar entradas antes de procesarlas.
- Recuperar información utilizando `.get()`.
- Verificar la existencia de claves con `.has()`.
- Agregar nuevos elementos mediante `.set()` y `.add()`.
- Recorrer un `Map` utilizando `.forEach()`.
- Obtener la cantidad de votos mediante la propiedad `.size`.
- Construir mensajes dinámicos utilizando template literals.
- Implementar lógica de validación mediante retornos anticipados.

---

## 🇺🇸 English

This is exercise **96** in my freeCodeCamp JavaScript journey.

The goal was to build a voting system using the `Map` and `Set` data structures. The program allows users to create poll options, register unique votes, and display the final voting results.

### Features

- Create a poll using a `Map`.
- Add new voting options.
- Prevent empty options.
- Prevent duplicate options.
- Register votes using unique voter IDs.
- Validate that an option exists before voting.
- Prevent the same user from voting more than once for the same option.
- Automatically count registered votes.
- Display the final poll results.

### Concepts practiced

- JavaScript
- Objects
- `Map`
- `new Map()`
- `.set()`
- `.get()`
- `.has()`
- `.forEach()`
- `Set`
- `new Set()`
- `.add()`
- `.size`
- Unique values
- Functions
- Arrow Functions
- Template Literals
- Conditionals
- Early Returns
- String Concatenation
- Data Validation

### What I learned

- Use a `Map` to organize data by keys.
- Associate each voting option with a `Set` of voters.
- Use a `Set` to prevent duplicate votes.
- Validate user input before processing it.
- Retrieve stored values using `.get()`.
- Check whether keys exist using `.has()`.
- Add new entries with `.set()` and `.add()`.
- Iterate through a `Map` using `.forEach()`.
- Count votes using the `.size` property.
- Build dynamic messages with template literals.
- Implement validation logic using early returns.

---

## 📁 Files

- `script.js`
