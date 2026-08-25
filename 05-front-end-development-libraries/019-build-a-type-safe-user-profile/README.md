# Build a Type-Safe User Profile

![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=freecodecamp)
![TypeScript](https://img.shields.io/badge/TypeScript-Type_Safety-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## Project Information | Información del proyecto

This project is part of the **Front End Development Libraries** curriculum from freeCodeCamp.

Este proyecto forma parte del currículo **Front End Development Libraries** de freeCodeCamp.

- **Exercise | Ejercicio:** 019
- **Title | Título:** Build a Type-Safe User Profile
- **Type | Tipo:** Workshop
- **Topic | Tema:** TypeScript
- **Status | Estado:** Completed ✅
- **Platform | Plataforma:** freeCodeCamp

---

## English

### Project Description

In this workshop, I created a type-safe user profile using TypeScript.

The project contains two objects:

- `profile`: stores information about a user.
- `userRoles`: stores role names and their corresponding access levels.

TypeScript defines the expected structure and data types of these objects. This allows incorrect properties or incompatible values to be detected before the program is executed.

### Final Code

```ts
const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"],
};

console.log(profile);

const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only",
};

console.log(userRoles);
```

### 1. Creating Objects

The project begins with an object named `profile`:

```ts
const profile = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
};
```

An object groups multiple related values inside a single variable.

In this case, the object stores information about a user.

### 2. Primitive Types

The `profile` object uses three primitive TypeScript types:

```ts
username: string;
age: number;
isLoggedIn: boolean;
```

- `string`: represents text.
- `number`: represents numbers.
- `boolean`: represents either `true` or `false`.

These types describe which values can be assigned to each property.

### 3. Typing an Object

The expected structure of `profile` is defined directly after the variable name:

```ts
const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"],
};
```

TypeScript checks that:

- All required properties are present.
- Every property contains the correct data type.
- Unknown properties are not added.
- Typed arrays contain compatible values.

### 4. Unknown Properties

During the workshop, an undeclared property was added:

```ts
mood: null;
```

The `mood` property was not included in the object type. Because of this, TypeScript displayed an error.

A typed object can only contain the properties permitted by its type definition.

This helps detect mistakes during development instead of discovering them when the program is already running.

### 5. Optional Properties

The `bio` property uses the optional property operator `?`:

```ts
bio?: string;
```

The question mark means that `bio` does not have to be present in every `profile` object.

Both of these possibilities are valid:

```ts
bio: "I enjoy learning programming";
```

Or the property can be omitted, as it is in the final project.

If `bio` is included, its value must be a string.

### 6. Typed Arrays

The `programmingLanguages` property is defined as an array of strings:

```ts
programmingLanguages: string[];
```

Its value is:

```ts
programmingLanguages: ["JavaScript", "Python", "C++"];
```

The `string[]` type means that every element inside the array must be a string.

For example, this would cause a TypeScript error:

```ts
programmingLanguages: ["JavaScript", 25];
```

The value `25` is a number and is not compatible with `string[]`.

### 7. Using `Record`

The `userRoles` object uses the TypeScript utility type `Record`:

```ts
Record<string, string>
```

The complete object is:

```ts
const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only",
};
```

`Record<string, string>` means:

- Every property key must be a string.
- Every property value must be a string.
- The exact names of all properties do not need to be declared in advance.

This makes the object more flexible than the strictly typed `profile` object.

New roles such as `moderator` and `guest` can be added without changing the type definition, as long as their values are strings.

### 8. Type Checking

During the workshop, the `guest` property was initially given a numeric value:

```ts
guest: 3;
```

TypeScript displayed this error:

```text
Type 'number' is not assignable to type 'string'.
```

This happened because `Record<string, string>` requires every value to be a string.

The error was fixed by changing the value to:

```ts
guest: "read-only";
```

### 9. Using `console.log()`

The two objects are displayed in the console:

```ts
console.log(profile);
console.log(userRoles);
```

`console.log()` is useful for inspecting the properties and values stored inside an object during development.

### What I Learned

In this workshop, I learned:

- How to create objects in TypeScript.
- How to use `string`, `number`, and `boolean`.
- How to define the expected structure of an object.
- How TypeScript checks required properties.
- How TypeScript rejects unknown properties.
- How to create optional properties using `?`.
- How to define typed arrays using `string[]`.
- How to create flexible objects using `Record`.
- How TypeScript identifies incompatible values.
- How to inspect objects with `console.log()`.

The main lesson is that TypeScript lets developers define the structure and types of their data. This helps detect invalid properties and incompatible values before the program runs.

---

## Español

### Descripción del proyecto

En este workshop creé un perfil de usuario con seguridad de tipos utilizando TypeScript.

El proyecto contiene dos objetos:

- `profile`: guarda información relacionada con un usuario.
- `userRoles`: guarda nombres de roles y sus correspondientes niveles de acceso.

TypeScript define la estructura y los tipos de datos que deben tener estos objetos. Esto permite detectar propiedades incorrectas o valores incompatibles antes de ejecutar el programa.

### Código final

```ts
const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"],
};

console.log(profile);

const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only",
};

console.log(userRoles);
```

### 1. Creación de objetos

El proyecto comienza con un objeto llamado `profile`:

```ts
const profile = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
};
```

Un objeto permite agrupar diferentes valores relacionados dentro de una misma variable.

En este caso, el objeto almacena información sobre un usuario.

### 2. Tipos primitivos

El objeto `profile` utiliza tres tipos primitivos de TypeScript:

```ts
username: string;
age: number;
isLoggedIn: boolean;
```

- `string`: representa valores de texto.
- `number`: representa valores numéricos.
- `boolean`: representa los valores `true` o `false`.

Estos tipos determinan qué clase de valor se puede asignar a cada propiedad.

### 3. Tipado de objetos

La estructura esperada de `profile` se define directamente después del nombre de la variable:

```ts
const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"],
};
```

TypeScript comprueba que:

- Todas las propiedades obligatorias estén presentes.
- Cada propiedad contenga el tipo de dato correcto.
- No se agreguen propiedades desconocidas.
- Los arrays tipados contengan valores compatibles.

### 4. Propiedades desconocidas

Durante el workshop se intentó agregar esta propiedad:

```ts
mood: null;
```

La propiedad `mood` no estaba incluida en el tipo del objeto. Por ese motivo, TypeScript mostró un error.

Un objeto tipado solamente puede contener las propiedades permitidas por su definición.

Esto permite descubrir errores durante el desarrollo, antes de ejecutar el programa.

### 5. Propiedades opcionales

La propiedad `bio` utiliza el operador de propiedad opcional `?`:

```ts
bio?: string;
```

El signo de pregunta indica que `bio` puede estar presente o puede ser omitida.

Por ejemplo, se podría agregar:

```ts
bio: "I enjoy learning programming";
```

También es válido no incluirla, como ocurre en el código final.

Si se incluye la propiedad `bio`, su valor debe ser un texto.

### 6. Arrays tipados

La propiedad `programmingLanguages` se define como un array de textos:

```ts
programmingLanguages: string[];
```

Su valor es:

```ts
programmingLanguages: ["JavaScript", "Python", "C++"];
```

El tipo `string[]` significa que todos los elementos del array deben ser textos.

Por ejemplo, este código produciría un error:

```ts
programmingLanguages: ["JavaScript", 25];
```

El valor `25` es de tipo `number` y no es compatible con `string[]`.

### 7. Uso de `Record`

El objeto `userRoles` utiliza el tipo de utilidad `Record`:

```ts
Record<string, string>
```

El objeto completo es:

```ts
const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only",
};
```

`Record<string, string>` significa que:

- Las claves de las propiedades deben ser textos.
- Los valores de las propiedades deben ser textos.
- No es necesario declarar anticipadamente el nombre exacto de todas las propiedades.

Esto hace que `userRoles` sea más flexible que el objeto `profile`.

Se pueden agregar nuevos roles, como `moderator` y `guest`, sin modificar el tipo, siempre que sus valores sean textos.

### 8. Comprobación de tipos

Durante el workshop se intentó asignar un número a la propiedad `guest`:

```ts
guest: 3;
```

TypeScript mostró el siguiente error:

```text
Type 'number' is not assignable to type 'string'.
```

Esto ocurrió porque `Record<string, string>` exige que todos sus valores sean textos.

El error se corrigió utilizando:

```ts
guest: "read-only";
```

### 9. Uso de `console.log()`

Los dos objetos se muestran en la consola:

```ts
console.log(profile);
console.log(userRoles);
```

`console.log()` permite inspeccionar las propiedades y los valores guardados dentro de los objetos durante el desarrollo.

### Lo que aprendí

En este workshop aprendí:

- A crear objetos en TypeScript.
- A utilizar los tipos `string`, `number` y `boolean`.
- A definir la estructura esperada de un objeto.
- A trabajar con propiedades obligatorias.
- A detectar propiedades desconocidas.
- A crear propiedades opcionales mediante `?`.
- A definir arrays tipados mediante `string[]`.
- A crear objetos flexibles con `Record`.
- A identificar valores incompatibles.
- A inspeccionar objetos mediante `console.log()`.

La enseñanza principal es que TypeScript permite definir la forma y los tipos de nuestros datos. Esto ayuda a detectar propiedades incorrectas y valores incompatibles antes de ejecutar el programa.

---

## Type Comparison | Comparación de tipos

### Strictly typed object | Objeto con tipado estricto

```ts
const profile: {
  username: string;
  age: number;
} = {
  username: "codeLearner",
  age: 25,
};
```

The permitted property names are defined in advance.

Los nombres de las propiedades permitidas se definen anticipadamente.

### Flexible object with `Record`

```ts
const userRoles: Record<string, string> = {
  admin: "full-access",
  viewer: "read-only",
};
```

The property names can vary, but all keys and values must follow the types specified by `Record`.

Los nombres de las propiedades pueden variar, pero todas las claves y valores deben respetar los tipos indicados por `Record`.

---

## Project Structure | Estructura del proyecto

```text
019-build-a-type-safe-user-profile/
├── README.md
└── index.ts
```

## Technologies | Tecnologías

- TypeScript
- Typed objects / Objetos tipados
- Optional properties / Propiedades opcionales
- Typed arrays / Arrays tipados
- `Record<Keys, Type>`

## Running the Project | Cómo ejecutar el proyecto

The TypeScript source code is stored in `index.ts`.

El código fuente de TypeScript se encuentra en `index.ts`.

It can be checked and compiled using the TypeScript compiler:

```bash
tsc index.ts
```

This creates a JavaScript file that can be executed with Node.js:

```bash
node index.js
```

También puede ejecutarse directamente inside the freeCodeCamp workshop environment.

También se puede ejecutar directamente dentro del entorno del workshop de freeCodeCamp.

---

## Author | Autor

Developed as part of my freeCodeCamp learning journey.

Desarrollado como parte de mi recorrido de aprendizaje en freeCodeCamp.