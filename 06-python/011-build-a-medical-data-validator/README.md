# Build a Medical Data Validator

## English

### Description

This workshop builds a Python program that validates a collection of medical records.

The program checks the structure of the dataset, verifies that every record contains the required keys, and validates the format and type of each value.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Lists and dictionaries
- Sets
- Functions and parameters
- Returning values with `return`
- Type validation with `isinstance()`
- Conditional statements
- Boolean operators
- `for` loops
- The `enumerate()` function
- List comprehensions
- The `all()` function
- Dictionary unpacking with `**`
- Dictionary methods such as `keys()` and `items()`
- Regular expressions
- The `re` module
- `re.fullmatch()`
- The `re.IGNORECASE` flag
- The `continue` keyword
- Validation flags

### Validation Rules

The validator checks that:

1. The dataset is a list or tuple.
2. Every item is a dictionary.
3. Every dictionary contains the expected keys.
4. Patient IDs begin with `P` or `p` followed by one or more digits.
5. Ages are integers greater than or equal to `18`.
6. Gender is either `male` or `female`, regardless of capitalization.
7. Diagnosis is a string or `None`.
8. Medications are stored in a list containing only strings.
9. Visit IDs begin with `V` or `v` followed by one or more digits.

### Expected Keys

```text
patient_id
age
gender
diagnosis
medications
last_visit_id
```

### Example

```python
validate(medical_records)
```

Result:

```text
Valid format.
```

### Technologies

- Python 3

### Status

✅ Completed

---

## Español

### Descripción

Este workshop crea un programa de Python que valida una colección de registros médicos.

El programa comprueba la estructura del conjunto de datos, verifica que cada registro contenga las claves requeridas y valida el formato y el tipo de cada valor.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Listas y diccionarios
- Conjuntos
- Funciones y parámetros
- Retorno de valores con `return`
- Validación de tipos con `isinstance()`
- Sentencias condicionales
- Operadores booleanos
- Ciclos `for`
- Función `enumerate()`
- Comprensión de listas
- Función `all()`
- Desempaquetado de diccionarios con `**`
- Métodos de diccionarios como `keys()` e `items()`
- Expresiones regulares
- Módulo `re`
- Función `re.fullmatch()`
- Bandera `re.IGNORECASE`
- Palabra clave `continue`
- Banderas de validación

### Reglas de validación

El validador comprueba que:

1. El conjunto de datos sea una lista o una tupla.
2. Cada elemento sea un diccionario.
3. Cada diccionario contenga las claves esperadas.
4. Los identificadores de pacientes comiencen con `P` o `p`, seguidos de uno o más dígitos.
5. Las edades sean números enteros mayores o iguales a `18`.
6. El género sea `male` o `female`, sin importar el uso de mayúsculas.
7. El diagnóstico sea un string o `None`.
8. Los medicamentos estén guardados en una lista que contenga solamente strings.
9. Los identificadores de visitas comiencen con `V` o `v`, seguidos de uno o más dígitos.

### Claves esperadas

```text
patient_id
age
gender
diagnosis
medications
last_visit_id
```

### Ejemplo

```python
validate(medical_records)
```

Resultado:

```text
Valid format.
```

### Tecnologías

- Python 3

### Estado

✅ Completado