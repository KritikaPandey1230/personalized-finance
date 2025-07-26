import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryChart({ transactions }) {
  const categories = [...new Set(transactions.map((t) => t.category))];
  const amounts = categories.map((cat) =>
    transactions
      .filter((t) => t.category === cat)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: amounts,
        backgroundColor: [
          "#14b8a6",
          "#f43f5e",
          "#3b82f6",
          "#facc15",
          "#a855f7",
        ],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
        Expenses by Category
      </h2>
      <Pie data={data} />
    </div>
  );
}
