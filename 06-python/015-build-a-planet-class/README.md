# Build a Planet Class

## English

### Description

This lab creates a `Planet` class using Python.

Each planet stores its name, planet type, and star. The class validates the provided information and includes methods to describe the planet and its orbit.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Features

- Creates planet objects.
- Stores a planet name, type, and star.
- Validates that all values are strings.
- Rejects empty strings.
- Returns information about a planet's orbit.
- Provides a formatted string representation of each planet.

### Concepts Practiced

- Classes and objects
- The `__init__` method
- The `self` parameter
- Instance attributes
- Instance methods
- The `__str__` method
- Type validation with `isinstance()`
- The `all()` function
- Generator expressions
- Conditional statements
- Raising exceptions
- `TypeError`
- `ValueError`
- F-strings
- Returning values with `return`

### Validation Rules

The class verifies that:

1. `name` is a string.
2. `planet_type` is a string.
3. `star` is a string.
4. None of the three strings are empty.

### Methods

#### `orbit()`

Returns a string explaining which star the planet is orbiting.

#### `__str__()`

Returns a formatted description of the planet.

### Example

```python
planet_1 = Planet('Earth', 'Terrestrial', 'Sun')

print(planet_1)
print(planet_1.orbit())
```

Result:

```text
Planet: Earth | Type: Terrestrial | Star: Sun
Earth is orbiting around Sun...
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este laboratorio crea una clase `Planet` utilizando Python.

Cada planeta guarda su nombre, tipo y estrella. La clase valida la información recibida e incluye métodos para describir el planeta y su órbita.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Crea objetos que representan planetas.
- Guarda el nombre, tipo y estrella de cada planeta.
- Comprueba que todos los valores sean strings.
- Rechaza strings vacíos.
- Devuelve información sobre la órbita de un planeta.
- Proporciona una representación formateada de cada planeta.

### Conceptos practicados

- Clases y objetos
- Método `__init__`
- Parámetro `self`
- Atributos de instancia
- Métodos de instancia
- Método `__str__`
- Validación de tipos con `isinstance()`
- Función `all()`
- Expresiones generadoras
- Sentencias condicionales
- Generación de excepciones
- `TypeError`
- `ValueError`
- F-strings
- Retorno de valores con `return`

### Reglas de validación

La clase comprueba que:

1. `name` sea un string.
2. `planet_type` sea un string.
3. `star` sea un string.
4. Ninguno de los tres strings esté vacío.

### Métodos

#### `orbit()`

Devuelve un string que indica alrededor de qué estrella orbita el planeta.

#### `__str__()`

Devuelve una descripción formateada del planeta.

### Ejemplo

```python
planet_1 = Planet('Earth', 'Terrestrial', 'Sun')

print(planet_1)
print(planet_1.orbit())
```

Resultado:

```text
Planet: Earth | Type: Terrestrial | Star: Sun
Earth is orbiting around Sun...
```

### Tecnologías

- Python 3

### Estado

✅ Completado