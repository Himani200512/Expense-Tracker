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
      />
      <input
        type="number"
        step="any"
        value={amount}
        placeholder="Amount"
        onChange={e => setAmount(e.target.value)}
        required
      />
      <button type="submit" className="add-transaction">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
