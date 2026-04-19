# 💰 API REST — Finanzas Personales

API RESTful para gestionar transacciones financieras personales (ingresos y egresos), desarrollada con **Hono + Node.js + TypeScript**.

## Descripción

Esta API permite registrar y administrar transacciones financieras personales, clasificándolas como ingresos o egresos. Los datos se almacenan en memoria, sin necesidad de base de datos.

## Tecnologías utilizadas

- **Hono** — framework web ultraliviano para Node.js
- **Node.js** — entorno de ejecución
- **TypeScript** — tipado estático para mayor seguridad en el código
- **yarn** — manejador de paquetes
- **nodemon** — reinicio automático en desarrollo
- **tsup** — compilación para producción

##  Instalación y uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/FernandaCanales/api-finanzas 
cd api-finanzas
```

### 2. Instalar dependencias
```bash
yarn install
```

### 3. Correr en desarrollo
```bash
yarn dev
```

El servidor quedará corriendo en `http://localhost:3000`

## 📌 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/transactions` | Listar todas las transacciones |
| GET | `/transactions/:id` | Obtener una transacción por id |
| POST | `/transactions` | Crear una nueva transacción |
| PUT | `/transactions/:id` | Actualizar una transacción |
| DELETE | `/transactions/:id` | Eliminar una transacción |

## 🧩 Modelo de datos

```typescript
type Transaction = {
  id: number
  description: string
  amount: number
  type: 'income' | 'expense'
}
```

## 🤖 Uso de IA

Durante el desarrollo se utilizó **Claude (Anthropic)** como asistente.

**Herramienta utilizada:** Claude (claude.ai)

**Consultas realizadas:**
- "Ayúdame a crear un proyecto Hono con Node.js y TypeScript desde cero"
- "Explícame qué es un type en TypeScript y cómo funciona"
- "Cómo implemento el CRUD completo con Hono"
- "Qué significa el operador ?? en TypeScript"
- "Cómo funciona async/await para leer el body de una petición"

**Partes asistidas por IA:**
- Configuración inicial del proyecto (package.json, tsconfig.json, nodemon.json, tsup.config.ts)
- Estructura y lógica de cada endpoint (GET, POST, PUT, DELETE)
- Explicación de conceptos como el spread operator `...` y el operador `??`

Claude me guió paso a paso explicando cada concepto antes de escribir el código, lo que me permitió entender qué hacía cada línea y no solo copiar y pegar.

## 🎥 Video demostrativo

[(https://youtu.be/BDT_gcX2a3g)]

## 👩‍💻 Autora

Fernanda Canales — Desarrollo de Software Web II — Trimestre 6