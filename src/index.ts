import { Hono } from "hono";
import { serve } from "@hono/node-server";

// Así se ve una transacción  "contrato"
type Transaction = {
    id: number;
    description: string;
    amount: number;
    type: "income" | "expense";
};

// Datos iniciales guardados en memoria (como el arreglo de todos en clases)
let transactions: Transaction[] = [
    { id: 1, description: "Sueldo marzo", amount: 800000, type: "income" },
    { id: 2, description: "Arriendo", amount: 350000, type: "expense" },
    { id: 3, description: "Supermercado", amount: 75000, type: "expense" },
];

// Crear la app (como en clases con el proyecto hono-api)
const app = new Hono();

// Ruta raíz — para verificar que el servidor está vivo
app.get("/", (c) => {
    return c.json({ message: "API de Finanzas Personales funcionando!" });
});

// GET /transactions — trae todas las transacciones
app.get("/transactions", (c) => {
    return c.json(transactions);
});

// GET /transactions/:id — trae una transacción por su id
app.get("/transactions/:id", (c) => {
    const id = parseInt(c.req.param("id")); // extrae el id de la URL
    const transaction = transactions.find((t) => t.id === id); // busca en el arreglo

    if (!transaction) {
        return c.json({ error: "Transacción no encontrada" }, 404);
    }

    return c.json(transaction);
});
// POST /transactions — crea una nueva transacción
app.post("/transactions", async (c) => {
    const body = await c.req.json(); // lee el body que nos envían

    const newTransaction: Transaction = {
        id: transactions.length + 1,  // id autogenerado
        description: body.description,
        amount: body.amount,
        type: body.type,
    };

    transactions.push(newTransaction); // agrega al arreglo
    return c.json(newTransaction, 201); // 201 = Created
});

// PUT /transactions/:id — actualiza una transacción existente
app.put("/transactions/:id", async (c) => {
    const id = parseInt(c.req.param("id"));
    const body = await c.req.json();

    const index = transactions.findIndex((t) => t.id === id); // busca la posición

    if (index === -1) {
        return c.json({ error: "Transacción no encontrada" }, 404);
    }

    const updatedTransaction: Transaction = {
        ...transactions[index],                              // copia todo lo que tenía
        description: body.description ?? transactions[index].description,
        amount: body.amount ?? transactions[index].amount,
        type: body.type ?? transactions[index].type,
    };

    transactions[index] = updatedTransaction; // reemplaza en el arreglo
    return c.json(updatedTransaction);
});

// DELETE /transactions/:id — elimina una transacción
app.delete("/transactions/:id", (c) => {
    const id = parseInt(c.req.param("id"));

    const index = transactions.findIndex((t) => t.id === id);

    if (index === -1) {
        return c.json({ error: "Transacción no encontrada" }, 404);
    }

    transactions.splice(index, 1); // elimina 1 elemento en esa posición
    return c.json({ message: `Transacción ${id} eliminada correctamente` });
});

// Arrancar el servidor en el puerto 3000
serve({ fetch: app.fetch, port: 3000 }, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});