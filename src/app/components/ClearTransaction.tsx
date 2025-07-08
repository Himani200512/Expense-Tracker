"use client";
import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Balance from "../components/balance";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";


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

  const clearTransactions = () => {
    setTransactions([]);
  };

  const balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  return (
      <div className="flex justify-between items-center max-w-[400px] mx-auto mb-4">
        <button
          onClick={clearTransactions}
        >
          Clear All
        </button>
      </div>
  );
}
