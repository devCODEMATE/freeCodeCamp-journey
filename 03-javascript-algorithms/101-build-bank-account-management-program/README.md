# 🏦 Bank Account Management Program

> JavaScript Certification Project — freeCodeCamp

## 🇪🇸 Español

Este es el proyecto número **101** de mi recorrido de JavaScript en freeCodeCamp y forma parte de los proyectos requeridos para obtener la certificación.

El objetivo fue desarrollar un sistema básico de administración bancaria utilizando programación orientada a objetos. El programa permite crear una cuenta, realizar depósitos y extracciones, consultar el saldo y revisar el historial de transacciones.

### Funcionalidades

- Crear una cuenta bancaria con saldo inicial de `0`.
- Guardar las transacciones dentro de un array.
- Registrar depósitos válidos.
- Rechazar depósitos menores o iguales a cero.
- Registrar extracciones válidas.
- Evitar extracciones mayores al saldo disponible.
- Evitar extracciones con valores inválidos.
- Consultar el saldo actual.
- Obtener una lista de todos los depósitos.
- Obtener una lista de todas las extracciones.
- Actualizar automáticamente el saldo después de cada operación.

### Estructura de las transacciones

Cada transacción se almacena como un objeto con las propiedades:

```javascript
{
  type: "deposit",
  amount: 200
}