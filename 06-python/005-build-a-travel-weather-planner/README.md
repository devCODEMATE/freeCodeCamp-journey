# Build a Travel Weather Planner

## English

### Description

This lab determines whether commuting is possible based on the travel distance, weather conditions, and available transportation options.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Boolean values
- Truthy and falsy values
- Conditional statements
- `if`, `elif`, and `else`
- Comparison operators
- Logical operators: `and`, `or`, and `not`
- Distance ranges
- Output with `print()`

### Decision Rules

The program follows these rules:

1. If the distance is falsy, commuting is not possible.
2. For distances of one mile or less, commuting is possible only when it is not raining.
3. For distances greater than one mile and up to six miles, a bicycle is required and it must not be raining.
4. For distances greater than six miles, a car or a ride-share application is required.

### Main Logic

```python
if not distance_mi:
    print(False)
elif distance_mi <= 1:
    print(not is_raining)
elif distance_mi <= 6:
    print(has_bike and not is_raining)
else:
    print(has_car or has_ride_share_app)
```

### Technologies

- Python 3
- freeCodeCamp

### Status

✅ Completed

---

## Español

### Descripción

Este laboratorio determina si es posible realizar un viaje según la distancia, las condiciones climáticas y las opciones de transporte disponibles.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Valores booleanos
- Valores verdaderos y falsos
- Sentencias condicionales
- `if`, `elif` y `else`
- Operadores de comparación
- Operadores lógicos: `and`, `or` y `not`
- Rangos de distancia
- Salida con `print()`

### Reglas de decisión

El programa sigue estas reglas:

1. Si la distancia es un valor falsy, no es posible realizar el viaje.
2. Para distancias de una milla o menos, el viaje solo es posible si no está lloviendo.
3. Para distancias mayores que una milla y de hasta seis millas, se necesita una bicicleta y no debe estar lloviendo.
4. Para distancias mayores que seis millas, se necesita un automóvil o una aplicación de viajes.

### Lógica principal

```python
if not distance_mi:
    print(False)
elif distance_mi <= 1:
    print(not is_raining)
elif distance_mi <= 6:
    print(has_bike and not is_raining)
else:
    print(has_car or has_ride_share_app)
```

### Tecnologías

- Python 3
- freeCodeCamp

### Estado

✅ Completado