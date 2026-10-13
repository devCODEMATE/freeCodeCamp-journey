# Debug an ISBN Validator

## English

### Description

This lab repairs and completes an ISBN validator written in Python.

The program accepts an ISBN code and its expected length, validates the input format, calculates the expected check digit, and determines whether the ISBN code is valid.

It supports both ISBN-10 and ISBN-13 codes.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Features

- Validates ISBN-10 codes.
- Validates ISBN-13 codes.
- Checks the length of the ISBN code.
- Calculates the expected check digit.
- Supports `X` as an ISBN-10 check digit.
- Detects invalid characters in the main digits.
- Handles inputs without comma-separated values.
- Handles non-numeric length values.
- Prevents the program from crashing when input is invalid.

### Bugs Fixed

- Fixed an `IndentationError`.
- Fixed incorrect usage of the `len()` function.
- Fixed an off-by-one error when extracting the main digits.
- Fixed the position used to obtain the given check digit.
- Fixed a `TypeError` caused by calling `len()` with two arguments.
- Fixed an `IndexError` caused by invalid user input.
- Added handling for `ValueError`.
- Commented out the global `main()` call for automated testing.

### Concepts Practiced

- Debugging Python code
- Functions and parameters
- Conditional statements
- Lists and list comprehensions
- String slicing
- User input with `input()`
- String splitting with `split()`
- Type conversion with `int()`
- `try...except`
- `IndexError`
- `ValueError`
- Early returns
- The `len()` function
- The `enumerate()` function
- Modulo calculations
- Check digit validation

### Example

Input:

```text
1530051126,10
```

Result:

```text
Valid ISBN Code.
```

Another valid example:

```text
9781530051120,13
```

Result:

```text
Valid ISBN Code.
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este laboratorio repara y completa un validador de códigos ISBN escrito en Python.

El programa recibe un código ISBN y su longitud esperada, valida el formato de entrada, calcula el dígito de control esperado y determina si el código ISBN es válido.

Admite códigos ISBN-10 e ISBN-13.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Valida códigos ISBN-10.
- Valida códigos ISBN-13.
- Comprueba la longitud del código ISBN.
- Calcula el dígito de control esperado.
- Admite `X` como dígito de control de un ISBN-10.
- Detecta caracteres inválidos en los dígitos principales.
- Gestiona entradas sin valores separados por coma.
- Gestiona longitudes no numéricas.
- Evita que el programa se cierre inesperadamente ante datos inválidos.

### Errores corregidos

- Corrección de un `IndentationError`.
- Corrección del uso incorrecto de la función `len()`.
- Corrección de un error de posición al extraer los dígitos principales.
- Corrección de la posición utilizada para obtener el dígito de control.
- Corrección de un `TypeError` provocado por pasar dos argumentos a `len()`.
- Corrección de un `IndexError` provocado por una entrada inválida.
- Incorporación del manejo de `ValueError`.
- Comentario de la llamada global a `main()` para permitir las pruebas automáticas.

### Conceptos practicados

- Depuración de código Python
- Funciones y parámetros
- Sentencias condicionales
- Listas y comprensión de listas
- Slicing de strings
- Entrada de usuario con `input()`
- Separación de strings con `split()`
- Conversión de tipos con `int()`
- `try...except`
- `IndexError`
- `ValueError`
- Retornos anticipados
- Función `len()`
- Función `enumerate()`
- Cálculos con módulo
- Validación de dígitos de control

### Ejemplo

Entrada:

```text
1530051126,10
```

Resultado:

```text
Valid ISBN Code.
```

Otro ejemplo válido:

```text
9781530051120,13
```

Resultado:

```text
Valid ISBN Code.
```

### Tecnologías

- Python 3

### Estado

✅ Completado