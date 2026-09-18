# Build a Caesar Cipher

## English

### Description

This workshop builds a Caesar cipher capable of encrypting and decrypting messages by shifting letters through the alphabet.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Function definitions
- Function parameters
- Default parameter values
- Returning values with `return`
- Input validation with `isinstance()`
- Conditional statements
- String slicing
- String concatenation
- The `upper()` method
- Translation tables with `str.maketrans()`
- String translation with `translate()`
- Encryption and decryption

### How It Works

The program:

1. Validates that the shift is an integer between `1` and `25`.
2. Creates a shifted version of the alphabet.
3. Creates a translation table for lowercase and uppercase letters.
4. Encrypts text by moving letters forward through the alphabet.
5. Decrypts text by applying the shift in the opposite direction.
6. Preserves spaces and punctuation.

### Main Functions

```python
def encrypt(text, shift):
    return caesar(text, shift)


def decrypt(text, shift):
    return caesar(text, shift, encrypt=False)
```

### Example

Encrypted text:

```text
Pbhentr vf sbhaq va hayvxryl cynprf.
```

Decrypted result:

```text
Courage is found in unlikely places.
```

### Technologies

- Python 3
- freeCodeCamp

### Status

✅ Completed

---

## Español

### Descripción

Este workshop construye un cifrado César capaz de cifrar y descifrar mensajes desplazando las letras dentro del alfabeto.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Definición de funciones
- Parámetros de funciones
- Valores predeterminados
- Retorno de valores con `return`
- Validación con `isinstance()`
- Sentencias condicionales
- Slicing de strings
- Concatenación de strings
- Método `upper()`
- Tablas de traducción con `str.maketrans()`
- Traducción de strings con `translate()`
- Cifrado y descifrado

### Funcionamiento

El programa:

1. Verifica que el desplazamiento sea un número entero entre `1` y `25`.
2. Crea una versión desplazada del alfabeto.
3. Crea una tabla de traducción para letras minúsculas y mayúsculas.
4. Cifra el texto desplazando las letras hacia adelante.
5. Descifra el texto aplicando el desplazamiento en sentido contrario.
6. Conserva los espacios y signos de puntuación.

### Funciones principales

```python
def encrypt(text, shift):
    return caesar(text, shift)


def decrypt(text, shift):
    return caesar(text, shift, encrypt=False)
```

### Ejemplo

Texto cifrado:

```text
Pbhentr vf sbhaq va hayvxryl cynprf.
```

Resultado descifrado:

```text
Courage is found in unlikely places.
```

### Tecnologías

- Python 3
- freeCodeCamp

### Estado

✅ Completado