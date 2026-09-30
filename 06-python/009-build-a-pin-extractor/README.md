# Build a Pin Extractor

## English

### Description

This workshop creates a Python function that extracts secret PIN codes hidden inside poems.

The nth digit of each PIN is determined by the length of the nth word in the nth line. If a line does not contain enough words, the function uses `0` for that digit.

The function can process multiple poems and return a list containing all the extracted PIN codes.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Function definitions
- Function parameters
- Returning values with `return`
- Strings and multiline strings
- String splitting with `split()`
- Lists
- Nested `for` loops
- The `enumerate()` function
- Conditional statements
- The `len()` function
- Type conversion with `str()`
- String concatenation
- Augmented assignment with `+=`
- Adding elements with `append()`
- Handling missing words

### How It Works

The function:

1. Receives a list of poems.
2. Splits each poem into individual lines.
3. Splits each line into individual words.
4. Uses the line index to select the corresponding word.
5. Calculates the length of that word.
6. Adds `0` when the corresponding word does not exist.
7. Builds a PIN for each poem.
8. Returns a list containing all the extracted PIN codes.

### Example

```python
poem = """Stars and the moon
shine in the sky
white and
until the end of the night"""

poem2 = 'The grass is green\nhere and there\nhoping for rain\nbefore it turns yellow'

poem3 = 'There\nonce\nwas\na\ndragon'

print(pin_extractor([poem, poem2, poem3]))
```

Result:

```text
['5202', '3346', '50000']
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este workshop crea una función de Python que extrae códigos PIN secretos ocultos dentro de poemas.

El enésimo dígito de cada PIN se determina mediante la longitud de la enésima palabra de la enésima línea. Si una línea no contiene suficientes palabras, la función utiliza `0` para ese dígito.

La función puede procesar varios poemas y devolver una lista que contiene todos los códigos PIN extraídos.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Definición de funciones
- Parámetros de funciones
- Retorno de valores con `return`
- Strings y strings de varias líneas
- Separación de strings con `split()`
- Listas
- Ciclos `for` anidados
- Función `enumerate()`
- Sentencias condicionales
- Función `len()`
- Conversión de tipos con `str()`
- Concatenación de strings
- Asignación aumentada con `+=`
- Incorporación de elementos con `append()`
- Manejo de palabras faltantes

### Cómo funciona

La función:

1. Recibe una lista de poemas.
2. Separa cada poema en líneas individuales.
3. Separa cada línea en palabras individuales.
4. Utiliza el índice de la línea para seleccionar la palabra correspondiente.
5. Calcula la longitud de esa palabra.
6. Agrega `0` cuando la palabra correspondiente no existe.
7. Construye un PIN para cada poema.
8. Devuelve una lista con todos los códigos PIN extraídos.

### Ejemplo

```python
poem = """Stars and the moon
shine in the sky
white and
until the end of the night"""

poem2 = 'The grass is green\nhere and there\nhoping for rain\nbefore it turns yellow'

poem3 = 'There\nonce\nwas\na\ndragon'

print(pin_extractor([poem, poem2, poem3]))
```

Resultado:

```text
['5202', '3346', '50000']
```

### Tecnologías

- Python 3

### Estado

✅ Completado