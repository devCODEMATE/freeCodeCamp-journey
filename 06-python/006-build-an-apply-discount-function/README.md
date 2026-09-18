# Build an Apply Discount Function

## English

### Description

This lab defines a function that validates a price and a discount percentage, then calculates the final price after applying the discount.

It was completed as part of the **freeCodeCamp Python V9 curriculum**.

### Concepts Practiced

- Function definitions
- Function parameters
- Returning values with `return`
- Type validation with `isinstance()`
- Integers and floating-point numbers
- Conditional statements
- Comparison operators
- Logical operators
- Percentage calculations
- Input validation

### Validation Rules

The function:

1. Checks whether the price is a number.
2. Checks whether the discount is a number.
3. Verifies that the price is greater than zero.
4. Verifies that the discount is between `0` and `100`.
5. Calculates and returns the final price.

### Main Logic

```python
discount_amount = price * discount / 100
final_price = price - discount_amount

return final_price
```

### Example Results

```text
apply_discount(100, 20) → 80
apply_discount(200, 50) → 100
apply_discount(50, 0) → 50
apply_discount(50, 100) → 0
apply_discount(74.5, 20.0) → 59.6
```

### Technologies

- Python 3
- freeCodeCamp

### Status

✅ Completed

---

## Español

### Descripción

Este laboratorio define una función que valida un precio y un porcentaje de descuento, y luego calcula el precio final después de aplicar el descuento.

Fue completado como parte del **currículo Python V9 de freeCodeCamp**.

### Conceptos practicados

- Definición de funciones
- Parámetros de funciones
- Retorno de valores con `return`
- Validación de tipos con `isinstance()`
- Números enteros y decimales
- Sentencias condicionales
- Operadores de comparación
- Operadores lógicos
- Cálculo de porcentajes
- Validación de datos de entrada

### Reglas de validación

La función:

1. Comprueba si el precio es un número.
2. Comprueba si el descuento es un número.
3. Verifica que el precio sea mayor que cero.
4. Verifica que el descuento esté entre `0` y `100`.
5. Calcula y devuelve el precio final.

### Lógica principal

```python
discount_amount = price * discount / 100
final_price = price - discount_amount

return final_price
```

### Resultados de ejemplo

```text
apply_discount(100, 20) → 80
apply_discount(200, 50) → 100
apply_discount(50, 0) → 50
apply_discount(50, 100) → 0
apply_discount(74.5, 20.0) → 59.6
```

### Tecnologías

- Python 3
- freeCodeCamp

### Estado

✅ Completado