import { useState } from "react";

type AddTransactionProps = {
  onAdd: (tx: { text: string; amount: number }) => void;
};

const AddTransaction = ({ onAdd }: AddTransactionProps) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(""); // Keep as string for typing

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (!text.trim() || isNaN(numAmount)) return;
    onAdd({ text, amount: numAmount });
    setText("");
    setAmount("");
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Description"
        onChange={e => setText(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 mr-1 mt-3"
      />
      <input
        type="number"
        step="any"
        value={amount}
        placeholder="Amount"
        onChange={e => setAmount(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 mt-3 ml-1"
      />
        <button type="submit" className="add-transaction mb-3 mt-3 ml-2">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
