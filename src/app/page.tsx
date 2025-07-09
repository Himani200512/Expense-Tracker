"use client";
import { useState } from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (tx: { text: string; amount: number }) => {
    setTransactions([
      ...transactions,
      { id: Date.now(), ...tx },
    ]);
  };

  const balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  // Function to clear all transactions
  const clearTransactions = () => {
    setTransactions([]);
  };

  return (
    <div>
      <Header />
      <Balance balance={balance} className="align-centre" />
      <h2>Transactions</h2> 
      <TransactionList transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
      <button onClick={clearTransactions} className="clear-btn clear-transaction">
        Clear All
      </button>
    </div>
  );
}
