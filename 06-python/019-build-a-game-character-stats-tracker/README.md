# Build a Game Character Stats Tracker

## English

### Description

This lab creates a `GameCharacter` class using Python.

Each character has a name, health, mana, and a level. The stats are protected with properties: health and mana always stay inside their limits, and the character can level up to restore them.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Features

- Creates game characters with a name.
- Starts every character with 100 health, 50 mana, and level 1.
- Gives read-only access to the name and the level.
- Keeps health between 0 and 100.
- Keeps mana between 0 and 50.
- Levels up the character and restores health and mana.
- Displays the character's stats in a formatted string.

### Concepts Practiced

- Classes and objects
- The `__init__` method
- Instance attributes
- Internal attributes with a single underscore (`_health`)
- Getters with the `@property` decorator
- Setters with the `@property_name.setter` decorator
- Read-only properties (a getter without a setter)
- Keeping values inside a range with `if`, `elif`, and `else`
- Augmented assignment (`+=` and `-=`) through setters
- Instance methods
- The `__str__` method
- Multi-line f-strings with `\n`

### Stats

| Stat | Starting value | Limits | Can be changed directly |
| --- | --- | --- | --- |
| `name` | Given at creation | — | No |
| `level` | 1 | — | No, only with `level_up()` |
| `health` | 100 | 0 to 100 | Yes |
| `mana` | 50 | 0 to 50 | Yes |

### Methods

#### `level_up()`

Increases the level by 1, restores health to 100 and mana to 50 through their setters, and prints a message.

#### `__str__()`

Returns the character's name, level, health, and mana, one per line.

### Example

```python
hero = GameCharacter('Kratos')
print(hero)

hero.health -= 30
hero.mana -= 10
print(hero)

hero.level_up()
print(hero)
```

Result:

```text
Name: Kratos
Level: 1
Health: 100
Mana: 50
Name: Kratos
Level: 1
Health: 70
Mana: 40
Kratos leveled up to 2!
Name: Kratos
Level: 2
Health: 100
Mana: 50
```

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

Este laboratorio crea una clase `GameCharacter` utilizando Python.

Cada personaje tiene un nombre, salud (health), maná (mana) y un nivel. Los stats están protegidos con properties: la salud y el maná siempre se mantienen dentro de sus límites, y el personaje puede subir de nivel para recuperarlos.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Crea personajes de juego con un nombre.
- Inicia cada personaje con 100 de salud, 50 de maná y nivel 1.
- Permite leer el nombre y el nivel, pero no modificarlos directamente.
- Mantiene la salud entre 0 y 100.
- Mantiene el maná entre 0 y 50.
- Sube de nivel al personaje y le recupera la salud y el maná.
- Muestra los stats del personaje en un string con formato.

### Conceptos practicados

- Clases y objetos
- Método `__init__`
- Atributos de instancia
- Atributos internos con un guion bajo (`_health`)
- Getters con el decorador `@property`
- Setters con el decorador `@nombre_de_la_property.setter`
- Properties de solo lectura (un getter sin setter)
- Mantener valores dentro de un rango con `if`, `elif` y `else`
- Asignación aumentada (`+=` y `-=`) a través de setters
- Métodos de instancia
- Método `__str__`
- F-strings de varias líneas con `\n`

### Stats

| Stat | Valor inicial | Límites | Se puede modificar directamente |
| --- | --- | --- | --- |
| `name` | El que se pasa al crearlo | — | No |
| `level` | 1 | — | No, solo con `level_up()` |
| `health` | 100 | 0 a 100 | Sí |
| `mana` | 50 | 0 a 50 | Sí |

### Métodos

#### `level_up()`

Sube el nivel en 1, recupera la salud a 100 y el maná a 50 a través de sus setters, e imprime un mensaje.

#### `__str__()`

Devuelve el nombre, el nivel, la salud y el maná del personaje, uno por línea.

### Ejemplo

```python
hero = GameCharacter('Kratos')
print(hero)

hero.health -= 30
hero.mana -= 10
print(hero)

hero.level_up()
print(hero)
```

Resultado:

```text
Name: Kratos
Level: 1
Health: 100
Mana: 50
Name: Kratos
Level: 1
Health: 70
Mana: 40
Kratos leveled up to 2!
Name: Kratos
Level: 2
Health: 100
Mana: 50
```

### Ejecución

```bash
python main.py
```

### Tecnologías

- Python 3

### Estado

✅ Completado