"use client";
import { useState } from "react";
import Balance from "./components/balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import AnimatedMathBackground from "./components/animatedBG";

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
      <header>
        <div className="center-container">
          <h1>Expense Tracker</h1>
        </div>
      </header>
         <main className="flex flex-col items-center justify-center relative min-h-screen">
      {/* Animated Math Background */}
      <AnimatedMathBackground />

      {/* Main Content */}
      <div className="flex-1 flex flex-col center-container relative z-10 items-center justify-start">
        <Balance balance={balance} />
        <h2>Transactions</h2>
        <TransactionList transactions={transactions} />
        <AddTransaction onAdd={addTransaction} />
        <button
          onClick={clearTransactions}
          className="clear-btn clear-transaction"
        >
          Clear All
        </button>
      </div>
    </main>
  </div>
);
}