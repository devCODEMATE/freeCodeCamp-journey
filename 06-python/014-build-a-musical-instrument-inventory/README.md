# Build a Musical Instrument Inventory

## English

### Description

This workshop creates a small musical instrument inventory using Python classes and objects.

The `MusicalInstrument` class stores the name and type of an instrument. Its methods display a message about playing the instrument and return information about the musical family it belongs to.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Classes and objects
- PascalCase class names
- The `__init__` method
- The `self` parameter
- Instance attributes
- Instance methods
- Creating class instances
- Dot notation
- F-strings
- Printing values with `print()`
- Returning values with `return`

### Class

#### `MusicalInstrument`

The class receives two values:

- `name`: the name of the instrument.
- `instrument_type`: the family or type of instrument.

### Methods

#### `play()`

Prints a message about playing the instrument.

#### `get_fact()`

Returns a string describing the instrument and the musical family it belongs to.

### Example

```python
instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

instrument_1.play()
print(instrument_1.get_fact())

instrument_2.play()
print(instrument_2.get_fact())
```

Result:

```text
The Oboe is fun to play!
The Oboe is part of the woodwind family of instruments.
The Trumpet is fun to play!
The Trumpet is part of the brass family of instruments.
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este workshop crea un pequeño inventario de instrumentos musicales utilizando clases y objetos de Python.

La clase `MusicalInstrument` guarda el nombre y el tipo de un instrumento. Sus métodos muestran un mensaje sobre cómo tocarlo y devuelven información sobre la familia musical a la que pertenece.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Clases y objetos
- Nombres de clases en PascalCase
- Método `__init__`
- Parámetro `self`
- Atributos de instancia
- Métodos de instancia
- Creación de instancias
- Notación de punto
- F-strings
- Impresión de valores con `print()`
- Retorno de valores con `return`

### Clase

#### `MusicalInstrument`

La clase recibe dos valores:

- `name`: el nombre del instrumento.
- `instrument_type`: la familia o tipo de instrumento.

### Métodos

#### `play()`

Imprime un mensaje sobre cómo tocar el instrumento.

#### `get_fact()`

Devuelve un string que describe el instrumento y la familia musical a la que pertenece.

### Ejemplo

```python
instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

instrument_1.play()
print(instrument_1.get_fact())

instrument_2.play()
print(instrument_2.get_fact())
```

Resultado:

```text
The Oboe is fun to play!
The Oboe is part of the woodwind family of instruments.
The Trumpet is fun to play!
The Trumpet is part of the brass family of instruments.
```

### Tecnologías

- Python 3

### Estado

✅ Completado