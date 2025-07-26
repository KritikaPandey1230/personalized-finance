export default function SummaryCards({ transactions, currency }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <h3 className="text-gray-500">Balance</h3>
        <p className="text-xl font-bold text-teal-500">
          {currency}
          {balance}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <h3 className="text-gray-500">Income</h3>
        <p className="text-xl font-bold text-green-500">
          {currency}
          {income}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <h3 className="text-gray-500">Expense</h3>
        <p className="text-xl font-bold text-red-500">
          {currency}
          {expense}
        </p>
      </div>
    </div>
  );
}
