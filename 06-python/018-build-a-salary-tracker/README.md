# Build a Salary Tracker

## English

### Description

This workshop builds a salary tracking system for employees using Python.

Each employee has a name, a level, and a salary. The salary is set automatically from the employee's level, and every change goes through validation: names and levels must be strings, levels must exist, promotions can only go up, and salaries cannot be lower than the minimum for the current level.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Features

- Creates employees with a name and a level.
- Sets the base salary automatically from a table of levels.
- Promotes employees to a higher level and updates their salary.
- Updates the salary manually with validation.
- Prints a confirmation message every time a value changes.
- Shows a readable description with `__str__()` and a code-like representation with `__repr__()`.
- Rejects invalid types, unknown levels, the current level, lower levels, and salaries below the minimum.

### Concepts Practiced

- Classes and objects
- The `__init__` method
- Instance attributes and class attributes
- Internal attributes with a single underscore (`_name`)
- Getters with the `@property` decorator
- Setters with the `@property_name.setter` decorator
- Delegating validation from `__init__` to the setters
- Setters that call other setters
- The `__str__` and `__repr__` methods
- The `repr()` function
- Dictionaries as lookup tables
- Type validation with `isinstance()`, including a tuple of types
- Checking attributes with `hasattr()`
- Short-circuit evaluation with `and`
- Raising `TypeError` and `ValueError`
- F-strings

### Base Salaries

| Level | Base salary |
| --- | --- |
| `trainee` | $1000 |
| `junior` | $2000 |
| `mid-level` | $3000 |
| `senior` | $4000 |

### Validation Rules

#### `name`

1. It must be a string.

#### `level`

1. It must be a string.
2. It must be one of the levels in the base salaries table.
3. It cannot be the current level.
4. It cannot be a lower level than the current one.

#### `salary`

1. It must be an integer or a float.
2. It cannot be lower than the base salary of the current level.

### Example

```python
charlie_brown = Employee('Charlie Brown', 'trainee')
print(charlie_brown)
print(f'Base salary: ${charlie_brown.salary}')
charlie_brown.level = 'junior'
```

Result:

```text
'name' updated to 'Charlie Brown'.
Salary updated to $1000.
'Charlie Brown' promoted to 'trainee'.
Salary updated to $1000.
Charlie Brown: trainee
Base salary: $1000
Salary updated to $2000.
'Charlie Brown' promoted to 'junior'.
```

The first four lines appear when the employee is created, because `__init__` assigns every value through its setter.

### Run

```bash
python main.py
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este workshop construye un sistema para registrar los sueldos de los empleados utilizando Python.

Cada empleado tiene un nombre, un nivel y un sueldo. El sueldo se asigna automáticamente según el nivel, y cada cambio pasa por una validación: el nombre y el nivel deben ser strings, el nivel debe existir, los ascensos solo pueden ir hacia arriba y el sueldo no puede ser menor que el mínimo del nivel actual.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Crea empleados con un nombre y un nivel.
- Asigna el sueldo base automáticamente a partir de una tabla de niveles.
- Asciende empleados a un nivel superior y actualiza su sueldo.
- Permite modificar el sueldo a mano, con validación.
- Imprime un mensaje de confirmación cada vez que cambia un valor.
- Muestra una descripción legible con `__str__()` y una representación tipo código con `__repr__()`.
- Rechaza tipos inválidos, niveles inexistentes, el nivel actual, niveles inferiores y sueldos por debajo del mínimo.

### Conceptos practicados

- Clases y objetos
- Método `__init__`
- Atributos de instancia y atributos de clase
- Atributos internos con un guion bajo (`_name`)
- Getters con el decorador `@property`
- Setters con el decorador `@nombre_de_la_property.setter`
- Delegación de la validación del `__init__` a los setters
- Setters que llaman a otros setters
- Métodos `__str__` y `__repr__`
- Función `repr()`
- Diccionarios como tablas de búsqueda
- Validación de tipos con `isinstance()`, incluida una tupla de tipos
- Comprobación de atributos con `hasattr()`
- Evaluación de cortocircuito con `and`
- Generación de excepciones `TypeError` y `ValueError`
- F-strings

### Sueldos base

| Nivel | Sueldo base |
| --- | --- |
| `trainee` | $1000 |
| `junior` | $2000 |
| `mid-level` | $3000 |
| `senior` | $4000 |

### Reglas de validación

#### `name`

1. Debe ser un string.

#### `level`

1. Debe ser un string.
2. Debe ser uno de los niveles de la tabla de sueldos base.
3. No puede ser el nivel actual.
4. No puede ser un nivel inferior al actual.

#### `salary`

1. Debe ser un número entero o decimal (`int` o `float`).
2. No puede ser menor que el sueldo base del nivel actual.

### Ejemplo

```python
charlie_brown = Employee('Charlie Brown', 'trainee')
print(charlie_brown)
print(f'Base salary: ${charlie_brown.salary}')
charlie_brown.level = 'junior'
```

Resultado:

```text
'name' updated to 'Charlie Brown'.
Salary updated to $1000.
'Charlie Brown' promoted to 'trainee'.
Salary updated to $1000.
Charlie Brown: trainee
Base salary: $1000
Salary updated to $2000.
'Charlie Brown' promoted to 'junior'.
```

Las primeras cuatro líneas aparecen al crear el empleado, porque el `__init__` asigna cada valor a través de su setter.

### Ejecución

```bash
python main.py
```

### Tecnologías

- Python 3

### Estado

✅ Completado