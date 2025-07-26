import TransactionForm from "../components/TransactionForm";

export default function AddExpense({ onAdd }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Expense</h2>
      <TransactionForm onAdd={onAdd} />
    </div>
  );
}
