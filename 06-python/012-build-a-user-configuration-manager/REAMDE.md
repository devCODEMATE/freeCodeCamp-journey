# Build a User Configuration Manager

## English

### Description

This certification project builds a User Configuration Manager with Python.

The program allows users to add, update, delete, and view configuration settings such as theme, language, and notifications.

All setting names and values are converted to lowercase before being stored or modified.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Features

- Add new settings.
- Prevent duplicate setting names.
- Update existing settings.
- Prevent updates to settings that do not exist.
- Delete existing settings.
- Handle attempts to delete missing settings.
- Display all current settings.
- Format setting names with a capitalized first letter.
- Handle empty settings dictionaries.

### Concepts Practiced

- Function definitions
- Function parameters
- Dictionaries
- Tuples
- Tuple unpacking
- Conditional statements
- Membership operators
- String methods
- F-strings
- Dictionary modification
- The `del` statement
- `for` loops
- Dictionary iteration with `items()`
- Multiline string construction
- Returning values with `return`

### Functions

#### `add_setting(settings, setting)`

Adds a new key-value pair when the setting does not already exist.

#### `update_setting(settings, setting)`

Updates the value of an existing setting.

#### `delete_setting(settings, key)`

Deletes an existing setting from the dictionary.

#### `view_settings(settings)`

Returns all current settings in a formatted string.

### Example

```python
settings = {
    'theme': 'dark',
    'notifications': 'enabled',
    'volume': 'high'
}

print(view_settings(settings))
```

Result:

```text
Current User Settings:
Theme: dark
Notifications: enabled
Volume: high
```

### Technologies

- Python 3

### Status

✅ Certification Project Completed

---

## Español

### Descripción

Este proyecto de certificación crea un administrador de configuraciones de usuario con Python.

El programa permite agregar, actualizar, eliminar y consultar configuraciones como el tema, el idioma y las notificaciones.

Todos los nombres y valores de las configuraciones se convierten a minúsculas antes de ser guardados o modificados.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Agregar nuevas configuraciones.
- Evitar nombres de configuración duplicados.
- Actualizar configuraciones existentes.
- Evitar la actualización de configuraciones inexistentes.
- Eliminar configuraciones existentes.
- Gestionar intentos de eliminación de configuraciones inexistentes.
- Mostrar todas las configuraciones actuales.
- Formatear los nombres con la primera letra en mayúscula.
- Gestionar diccionarios de configuraciones vacíos.

### Conceptos practicados

- Definición de funciones
- Parámetros de funciones
- Diccionarios
- Tuplas
- Desempaquetado de tuplas
- Sentencias condicionales
- Operadores de pertenencia
- Métodos de strings
- F-strings
- Modificación de diccionarios
- Sentencia `del`
- Ciclos `for`
- Iteración de diccionarios con `items()`
- Construcción de strings de varias líneas
- Retorno de valores con `return`

### Funciones

#### `add_setting(settings, setting)`

Agrega un nuevo par clave-valor cuando la configuración todavía no existe.

#### `update_setting(settings, setting)`

Actualiza el valor de una configuración existente.

#### `delete_setting(settings, key)`

Elimina una configuración existente del diccionario.

#### `view_settings(settings)`

Devuelve todas las configuraciones actuales en un string formateado.

### Ejemplo

```python
settings = {
    'theme': 'dark',
    'notifications': 'enabled',
    'volume': 'high'
}

print(view_settings(settings))
```

Resultado:

```text
Current User Settings:
Theme: dark
Notifications: enabled
Volume: high
```

### Tecnologías

- Python 3

### Estado

✅ Proyecto de certificación completado