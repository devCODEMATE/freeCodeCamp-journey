# 🐾 Build a Digital Pet Game

A React + TypeScript (TSX) **Certification Project** from the freeCodeCamp **Front End Development Libraries** curriculum.

---

## 🇪🇸 Español

### 📌 Descripción

Un juego de mascota virtual: el usuario le pone nombre a su mascota, y luego puede cuidarla con tres acciones (Comer, Jugar, Dormir), que afectan tres estadísticas — Hambre, Energía y Felicidad. Si la mascota se deja sin cuidar, sus estadísticas decaen con el tiempo. Su estado de ánimo (mood) se calcula dinámicamente según esas tres estadísticas.

### 🎯 Objetivo

Practicar enums, `Record<K, V>`, `useRef` para inputs no controlados, `useEffect` con `setInterval` para efectos que dependen del tiempo, y funciones puras de cálculo de estado en React con TypeScript.

### ✨ Funcionalidades

- Formulario inicial para nombrar a la mascota; desaparece al confirmar.
- Tres acciones (Eat/Play/Sleep) que modifican las estadísticas, siempre dentro del rango [0, 100].
- Las estadísticas decaen automáticamente con el tiempo si no se interactúa con la mascota.
- El estado de ánimo (Happy, Excited, Content, Sad, Tired, Sick, Hungry) se calcula en tiempo real según las tres estadísticas.
- Un emoji distinto para cada estado de ánimo.

### 🧠 Conceptos practicados

- Enums numéricos de TypeScript
- `Record<K, V>` para mapear un enum a valores
- `useRef` para inputs no controlados
- `useEffect` + `setInterval` (efectos dependientes del tiempo)
- Funciones puras (`clamp`, `getPetMood`)
- Renderizado condicional entre dos vistas

### 🔍 Partes importantes

#### Enum de moods y su mapeo a emojis

```tsx
enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const petMoodEmojis: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "😌",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "🍽",
};
```

`Record<PetMood, string>` obliga a mapear los 7 valores del enum a un emoji cada uno, sin dejar ninguno sin cubrir.

#### Cálculo del estado de ánimo

```tsx
function getPetMood(hunger: number, energy: number, happiness: number): PetMood {
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
}
```

Una función pura que, según prioridad, decide el mood actual de la mascota a partir de sus tres estadísticas.

#### Input no controlado con `useRef`

```tsx
const nameInputRef = useRef<HTMLInputElement>(null);

const handleStart = () => {
  const value = nameInputRef.current?.value.trim() ?? "";
  if (value === "") return;
  setPetName(value);
  setSubmitted(true);
};
```

El input del nombre no usa `value`/`onChange` (componente controlado), sino una `ref` que lee directamente del DOM al momento del click — necesario para que el valor se detecte sin importar cómo haya llegado al campo.

#### Decaimiento de estadísticas con el tiempo

```tsx
useEffect(() => {
  if (!submitted) return;
  const intervalId = setInterval(() => {
    setHunger((prev) => clamp(prev + DECAY_STEP));
    setHappiness((prev) => clamp(prev - DECAY_STEP));
  }, DECAY_INTERVAL_MS);
  return () => clearInterval(intervalId);
}, [submitted]);
```

Un `setInterval` dentro de `useEffect` sube el hambre y baja la felicidad periódicamente mientras el juego está activo, con `clamp` asegurando que ningún valor salga del rango [0, 100].

### ✅ Qué aprendí

Aprendí a usar `Record<K, V>` para mapear un enum de forma exhaustiva, a manejar inputs no controlados con `useRef` cuando el valor de un input puede llegar por vías distintas al tipeo del usuario, y a combinar `useEffect` con `setInterval` para simular decaimiento de estadísticas con el paso del tiempo, incluyendo la limpieza correcta del intervalo al desmontar.

---

## 🇺🇸 English

### 📌 Description

A digital pet game: the user names their pet, then takes care of it through three actions (Eat, Play, Sleep) that affect three stats — Hunger, Energy, and Happiness. If left unattended, the pet's stats decay over time. Its mood is calculated dynamically based on those three stats.

### 🎯 Objective

Practice enums, `Record<K, V>`, `useRef` for uncontrolled inputs, `useEffect` with `setInterval` for time-dependent effects, and pure state-calculation functions in React with TypeScript.

### ✨ Features

- Initial form to name the pet; disappears once confirmed.
- Three actions (Eat/Play/Sleep) that adjust stats, always kept within [0, 100].
- Stats automatically decay over time if the pet is left unattended.
- Mood (Happy, Excited, Content, Sad, Tired, Sick, Hungry) is computed live from the three stats.
- A distinct emoji for each mood.

### 🧠 Concepts Practiced

- TypeScript numeric enums
- `Record<K, V>` to map an enum to values
- `useRef` for uncontrolled inputs
- `useEffect` + `setInterval` (time-dependent effects)
- Pure functions (`clamp`, `getPetMood`)
- Conditional rendering between two views

### 🔍 Important Parts

#### Mood enum and its emoji mapping

```tsx
enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const petMoodEmojis: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "😌",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "🍽",
};
```

`Record<PetMood, string>` forces all 7 enum values to be mapped to an emoji, leaving none uncovered.

#### Computing the current mood

```tsx
function getPetMood(hunger: number, energy: number, happiness: number): PetMood {
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
}
```

A pure function that, by priority, decides the pet's current mood from its three stats.

#### Uncontrolled input with `useRef`

```tsx
const nameInputRef = useRef<HTMLInputElement>(null);

const handleStart = () => {
  const value = nameInputRef.current?.value.trim() ?? "";
  if (value === "") return;
  setPetName(value);
  setSubmitted(true);
};
```

The name input doesn't use `value`/`onChange` (a controlled component) — instead a `ref` reads directly from the DOM at click time, needed so the value is picked up regardless of how it got into the field.

#### Stat decay over time

```tsx
useEffect(() => {
  if (!submitted) return;
  const intervalId = setInterval(() => {
    setHunger((prev) => clamp(prev + DECAY_STEP));
    setHappiness((prev) => clamp(prev - DECAY_STEP));
  }, DECAY_INTERVAL_MS);
  return () => clearInterval(intervalId);
}, [submitted]);
```

A `setInterval` inside `useEffect` raises hunger and lowers happiness periodically while the game is active, with `clamp` keeping every value within [0, 100].

### ✅ What I Learned

I learned how to use `Record<K, V>` to exhaustively map an enum, how to handle uncontrolled inputs with `useRef` when a field's value can arrive through means other than user typing, and how to combine `useEffect` with `setInterval` to simulate stat decay over time, including properly cleaning up the interval on unmount.

---

## 📁 Files

```text
028-build-a-digital-pet-game/
├── README.md
├── index.html
├── index.tsx
└── styles.css
```

## 🛠️ Technologies

- HTML
- CSS
- React
- TypeScript (TSX)