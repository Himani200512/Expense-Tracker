"use client";
import React from "react";
import { useState } from "react";


type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const clearTransactions = () => {
    setTransactions([]);
  };

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
