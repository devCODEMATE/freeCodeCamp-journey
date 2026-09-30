# Build an RPG Character

## English

### Description

This lab creates and validates a character for an RPG adventure. It verifies the character name and stats, then displays each stat using full and empty dots.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Function definitions
- Function parameters
- Returning values with `return`
- Type validation with `isinstance()`
- Conditional statements
- Comparison and logical operators
- String validation
- The `len()` function
- String multiplication
- F-strings
- Multiline strings

### Validation Rules

The function verifies that:

1. The character name is a string.
2. The name is not empty.
3. The name has no more than ten characters.
4. The name does not contain spaces.
5. All stats are integers.
6. Every stat is between `1` and `4`.
7. The sum of all stats is exactly `7`.

### Example

```python
create_character('ren', 4, 2, 1)
```

Result:

```text
ren
STR ●●●●○○○○○○
INT ●●○○○○○○○○
CHA ●○○○○○○○○○
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este laboratorio crea y valida un personaje para una aventura RPG. Verifica el nombre y las estadísticas del personaje, y luego representa cada estadística mediante círculos llenos y vacíos.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Definición de funciones
- Parámetros de funciones
- Retorno de valores con `return`
- Validación de tipos con `isinstance()`
- Sentencias condicionales
- Operadores lógicos y de comparación
- Validación de strings
- Función `len()`
- Multiplicación de strings
- F-strings
- Strings de varias líneas

### Reglas de validación

La función comprueba que:

1. El nombre del personaje sea un string.
2. El nombre no esté vacío.
3. El nombre no tenga más de diez caracteres.
4. El nombre no contenga espacios.
5. Todas las estadísticas sean números enteros.
6. Cada estadística esté entre `1` y `4`.
7. La suma de las estadísticas sea exactamente `7`.

### Ejemplo

```python
create_character('ren', 4, 2, 1)
```

Resultado:

```text
ren
STR ●●●●○○○○○○
INT ●●○○○○○○○○
CHA ●○○○○○○○○○
```

### Tecnologías

- Python 3

### Estado

✅ Completado