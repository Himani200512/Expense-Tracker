type Transaction = {
  id: number;
  text: string;
  amount: number;
};

type TransactionListProps = {
  transactions: Transaction[];
};

const incomeStyle: React.CSSProperties = {
  color: "#22c55e", // green
};

const expenseStyle: React.CSSProperties = {
  color: "#ef4444", // red
};

const TransactionList = ({ transactions }: TransactionListProps) => (
  <ul>
    {transactions.map(tx => (
      <li key={tx.id}>
        {tx.text}:{" "}
        <span style={tx.amount >= 0 ? incomeStyle : expenseStyle}>
          ₹{tx.amount}
        </span>
      </li>
    ))}
  </ul>
);

export default TransactionList;
// This component takes a list of transactions and displays them in an unordered list.
// The amount is green for income (positive) and red for expense