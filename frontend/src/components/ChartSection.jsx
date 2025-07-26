import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartSection({ transactions }) {
  const dates = transactions.map((t) => new Date(t.date).toLocaleDateString());
  const amounts = transactions.map((t) => t.amount);

  const data = {
    labels: dates.slice(-7),
    datasets: [
      {
        label: "Amount",
        data: amounts.slice(-7),
        backgroundColor: "#14b8a6",
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
        Recent Spending Trend
      </h2>
      <Bar data={data} />
    </div>
  );
}
