const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let transactions = [];

// Get all transactions
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// Add a transaction
app.post("/transactions", (req, res) => {
  const { text, amount } = req.body;
  const newTx = { id: Date.now(), text, amount };
  transactions.push(newTx);
  res.status(201).json(newTx);
});

// Delete all transactions
app.delete("/transactions", (req, res) => {
  transactions = [];
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});