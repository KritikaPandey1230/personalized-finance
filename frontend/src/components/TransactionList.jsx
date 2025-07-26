export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">
        Transactions
      </h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li
            key={t._id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-800 dark:text-gray-100"
          >
            <span>
              {t.category} - ₹{t.amount} ({t.type})
            </span>
            <button
              onClick={() => onDelete(t._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
