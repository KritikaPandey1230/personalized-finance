import { useState } from "react";
import axios from "axios";

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category) return alert("Please fill all fields");

    const newTransaction = { type, amount: Number(amount), category, note };
    const res = await axios.post(
      "http://localhost:5000/api/transactions",
      newTransaction
    );
    onAdd(res.data);
    setAmount("");
    setCategory("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-lg font-semibold text-teal-600 dark:text-teal-400">
        Add Transaction
      </h2>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 w-full bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 w-full bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 w-full bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
      />
      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="p-2 w-full bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full"
      >
        Add
      </button>
    </form>
  );
}
