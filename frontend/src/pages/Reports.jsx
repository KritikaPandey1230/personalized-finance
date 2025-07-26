import ChartSection from "../components/ChartSection";

export default function Reports({ transactions }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
      <ChartSection transactions={transactions} />
    </div>
  );
}
