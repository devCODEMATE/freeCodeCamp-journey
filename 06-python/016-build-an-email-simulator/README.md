# Build an Email Simulator
 
## English
 
### Description
 
This workshop builds a simple email system using Python and object-oriented programming.
 
Users can send emails to each other, check their inbox, read a specific email, and delete emails. Each email stores its sender, receiver, subject, body, read status, and the time it was created.
 
It was completed as part of the **freeCodeCamp Python V9 curriculum**.
 
### Features
 
- Creates users, each with their own inbox.
- Sends emails between users with a confirmation message.
- Lists all emails in an inbox with numbers starting from 1.
- Shows each email as `Read` or `Unread`.
- Displays the full content of an email and marks it as read.
- Deletes emails by their number.
- Adds a timestamp to every email when it is created.
- Handles empty inboxes and invalid email numbers.
### Concepts Practiced
 
- Classes and objects
- Classes that work together (`Email`, `User`, `Inbox`)
- The `__init__` method
- The `self` parameter
- Instance attributes and methods
- Objects stored as attributes of other objects
- Delegating work to another class
- The `__str__` method
- Conditional expressions (ternary operator)
- Guard clauses with early `return`
- Lists: `append()`, `len()`, and `del`
- `enumerate()` with a custom `start`
- Converting a 1-based number to a 0-based index
- The `datetime` module and `strftime()`
- F-strings
- The `if __name__ == '__main__':` idiom
### Classes
 
#### `Email`
 
Stores the email data, its read status, and a timestamp. It can mark itself as read, display its full content, and return a short summary with `__str__()`.
 
#### `User`
 
Has a name and an `Inbox`. It can send emails, check its inbox, and read or delete emails by passing the request to its inbox.
 
#### `Inbox`
 
Stores a list of emails. It can receive, list, read, and delete emails, and it validates the email number before reading or deleting.
 
### Validation Rules
 
Before reading or deleting an email, the inbox checks that:
 
1. The inbox is not empty.
2. The email number exists (it is not lower than 1 or higher than the number of emails).
### Example
 
```python
tory = User('Tory')
ramy = User('Ramy')
 
tory.send_email(ramy, 'Hello', 'Hi Ramy, just saying hello!')
ramy.send_email(tory, 'Re: Hello', 'Hi Tory, hope you are fine.')
ramy.check_inbox()
ramy.read_email(1)
ramy.delete_email(1)
ramy.check_inbox()
```
 
Result:
 
```text
Email sent from Tory to Ramy!
 
Email sent from Ramy to Tory!
 
 
Ramy's Inbox:
 
Your Emails:
1. [Unread] From: Tory | Subject: Hello | Time: 2026-10-15 19:08
 
--- Email ---
From: Tory
To: Ramy
Subject: Hello
Received: 2026-10-15 19:08
Body: Hi Ramy, just saying hello!
------------
 
Email deleted.
 
 
Ramy's Inbox:
Your inbox is empty.
```
 
The date and time change every time the program runs.
 
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
 
Este workshop construye un sistema de email simple utilizando Python y programación orientada a objetos.
 
Los usuarios pueden enviarse emails, revisar su bandeja de entrada, leer un email específico y borrar emails. Cada email guarda su remitente, destinatario, asunto, cuerpo, estado de lectura y el momento en que fue creado.
 
Fue completado como parte del **currículo Python V9 de freeCodeCamp**.
 
### Funcionalidades
 
- Crea usuarios, cada uno con su propia bandeja de entrada.
- Envía emails entre usuarios con un mensaje de confirmación.
- Lista todos los emails de una bandeja, numerados desde 1.
- Muestra cada email como `Read` (leído) o `Unread` (no leído).
- Muestra el contenido completo de un email y lo marca como leído.
- Borra emails según su número.
- Agrega una fecha y hora a cada email al crearlo.
- Contempla bandejas vacías y números de email inválidos.
### Conceptos practicados
 
- Clases y objetos
- Clases que colaboran entre sí (`Email`, `User`, `Inbox`)
- Método `__init__`
- Parámetro `self`
- Atributos y métodos de instancia
- Objetos guardados como atributos de otros objetos
- Delegación de tareas a otra clase
- Método `__str__`
- Expresiones condicionales (operador ternario)
- Guard clauses con `return` temprano
- Listas: `append()`, `len()` y `del`
- `enumerate()` con un `start` personalizado
- Conversión de un número desde 1 a un índice desde 0
- Módulo `datetime` y `strftime()`
- F-strings
- Idiom `if __name__ == '__main__':`
### Clases
 
#### `Email`
 
Guarda los datos del email, su estado de lectura y una fecha y hora. Puede marcarse como leído, mostrar su contenido completo y devolver un resumen corto con `__str__()`.
 
#### `User`
 
Tiene un nombre y una `Inbox`. Puede enviar emails, revisar su bandeja y leer o borrar emails, delegando esas tareas en su bandeja.
 
#### `Inbox`
 
Guarda una lista de emails. Puede recibirlos, listarlos, leerlos y borrarlos, y valida el número de email antes de leer o borrar.
 
### Reglas de validación
 
Antes de leer o borrar un email, la bandeja comprueba que:
 
1. La bandeja no esté vacía.
2. El número de email exista (que no sea menor que 1 ni mayor que la cantidad de emails).
### Ejemplo
 
```python
tory = User('Tory')
ramy = User('Ramy')
 
tory.send_email(ramy, 'Hello', 'Hi Ramy, just saying hello!')
ramy.send_email(tory, 'Re: Hello', 'Hi Tory, hope you are fine.')
ramy.check_inbox()
ramy.read_email(1)
ramy.delete_email(1)
ramy.check_inbox()
```
 
Resultado:
 
```text
Email sent from Tory to Ramy!
 
Email sent from Ramy to Tory!
 
 
Ramy's Inbox:
 
Your Emails:
1. [Unread] From: Tory | Subject: Hello | Time: 2026-10-15 19:08
 
--- Email ---
From: Tory
To: Ramy
Subject: Hello
Received: 2026-10-15 19:08
Body: Hi Ramy, just saying hello!
------------
 
Email deleted.
 
 
Ramy's Inbox:
Your inbox is empty.
```
 
La fecha y la hora cambian cada vez que se ejecuta el programa.
 
### Ejecución
 
```bash
python main.py
```
 
### Tecnologías
 
- Python 3
### Estado
 
✅ Completado