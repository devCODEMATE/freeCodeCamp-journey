# Build a Budget App

## English

### Description

This certification project builds a simple budget app using Python.

The app tracks money in different spending categories, such as food or clothing. Each category can receive deposits, register withdrawals, and transfer money to another category. A separate function creates a text bar chart that shows the percentage spent in each category.

It was completed as one of the required certification projects of the **freeCodeCamp Python V9 curriculum**.

### Features

- Creates budget categories with their own ledger of transactions.
- Registers deposits with an optional description.
- Registers withdrawals only when there are enough funds.
- Transfers money between categories with automatic descriptions.
- Calculates the current balance of each category.
- Prints each category as a formatted table with a centered title and a total.
- Creates a text bar chart of the percentage spent by category, rounded down to the nearest 10.
- Writes category names vertically under the chart.

### Concepts Practiced

- Classes and objects
- The `__init__` method
- Instance attributes and methods
- Lists of dictionaries
- Default parameter values
- Returning `True` and `False` to report success
- Reusing methods inside other methods
- Interaction between two objects of the same class
- The `__str__` method
- Format specifications in f-strings (alignment, padding, width, and decimals)
- String slicing
- Integer division with `//`
- Building multi-line strings line by line
- Functions outside a class

### Methods

#### `deposit(amount, description='')`

Adds a positive transaction to the ledger.

#### `withdraw(amount, description='')`

Adds a negative transaction to the ledger if there are enough funds. Returns `True` if the withdrawal took place and `False` otherwise.

#### `get_balance()`

Returns the current balance of the category.

#### `transfer(amount, category)`

Moves money to another category. Returns `True` if the transfer took place and `False` otherwise.

#### `check_funds(amount)`

Returns `False` if the amount is greater than the balance, and `True` otherwise. It is used by `withdraw()` and `transfer()`.

#### `create_spend_chart(categories)`

A function outside the class. It receives a list of up to four categories and returns the bar chart as a string.

### Example

```python
food = Category('Food')
food.deposit(1000, 'initial deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)

print(food)
```

Result:

```text
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

### Chart Example

```python
clothing.withdraw(25.55, 'shirt')
auto = Category('Auto')
auto.deposit(1000, 'initial deposit')
auto.withdraw(15, 'gas')

print(create_spend_chart([food, clothing, auto]))
```

Result:

```text
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

### Run

```bash
python main.py
```

### Technologies

- Python 3

### Status

✅ Completed — Certification project

---

## Español

### Descripción

Este proyecto de certificación construye una app de presupuesto simple utilizando Python.

La app registra el dinero de distintas categorías de gasto, como comida o ropa. Cada categoría puede recibir depósitos, registrar retiros y transferir dinero a otra categoría. Una función aparte crea un gráfico de barras en texto que muestra el porcentaje gastado en cada categoría.

Fue completado como uno de los proyectos de certificación obligatorios del **currículo Python V9 de freeCodeCamp**.

### Funcionalidades

- Crea categorías de presupuesto, cada una con su propio registro (ledger) de movimientos.
- Registra depósitos con una descripción opcional.
- Registra retiros solo cuando hay fondos suficientes.
- Transfiere dinero entre categorías con descripciones automáticas.
- Calcula el balance actual de cada categoría.
- Imprime cada categoría como una tabla con formato, título centrado y total.
- Crea un gráfico de barras en texto con el porcentaje gastado por categoría, redondeado hacia abajo al 10 más cercano.
- Escribe los nombres de las categorías en vertical debajo del gráfico.

### Conceptos practicados

- Clases y objetos
- Método `__init__`
- Atributos y métodos de instancia
- Listas de diccionarios
- Parámetros con valores por defecto
- Retorno de `True` y `False` para informar si una operación salió bien
- Reutilización de métodos dentro de otros métodos
- Interacción entre dos objetos de la misma clase
- Método `__str__`
- Especificaciones de formato en f-strings (alineación, relleno, ancho y decimales)
- Slicing de strings
- División entera con `//`
- Construcción de strings de varias líneas, línea por línea
- Funciones fuera de una clase

### Métodos

#### `deposit(amount, description='')`

Agrega un movimiento positivo al ledger.

#### `withdraw(amount, description='')`

Agrega un movimiento negativo al ledger si hay fondos suficientes. Devuelve `True` si el retiro se realizó y `False` si no.

#### `get_balance()`

Devuelve el balance actual de la categoría.

#### `transfer(amount, category)`

Transfiere dinero a otra categoría. Devuelve `True` si la transferencia se realizó y `False` si no.

#### `check_funds(amount)`

Devuelve `False` si el monto supera el balance, y `True` en caso contrario. Lo usan `withdraw()` y `transfer()`.

#### `create_spend_chart(categories)`

Función fuera de la clase. Recibe una lista de hasta cuatro categorías y devuelve el gráfico de barras como string.

### Ejemplo

```python
food = Category('Food')
food.deposit(1000, 'initial deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)

print(food)
```

Resultado:

```text
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

### Ejemplo del gráfico

```python
clothing.withdraw(25.55, 'shirt')
auto = Category('Auto')
auto.deposit(1000, 'initial deposit')
auto.withdraw(15, 'gas')

print(create_spend_chart([food, clothing, auto]))
```

Resultado:

```text
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

### Ejecución

```bash
python main.py
```

### Tecnologías

- Python 3

### Estado

✅ Completado — Proyecto de certificación