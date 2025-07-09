"use client";
import React from "react";
import { useState } from "react";


type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export default function Home() {
  const [, setTransactions] = useState<Transaction[]>([]);
  const clearTransactions = () => setTransactions([]);

  return (
    <div>
      <button onClick={clearTransactions}>Clear All</button>
    </div>
  );
}
