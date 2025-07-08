import "../globals.css";
type BalanceProps = {
  balance: number;
};

const Balance = ({ balance }: BalanceProps) => (
  <section>
    <h2 >Balance: ₹{balance}</h2>
  </section>
);

export default Balance;
// This component displays the current balance in the expense tracker application.
