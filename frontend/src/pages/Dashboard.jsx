import { useState } from "react";
import SummaryCards from "../components/SummaryCards";
import ChartSection from "../components/ChartSection";
import TransactionList from "../components/TransactionList";

export default function Dashboard({ transactions, onDelete }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const filteredTransactions = transactions
    .filter((t) => {
      const matchesSearch =
        t.category.toLowerCase().includes(search.toLowerCase()) ||
        (t.note && t.note.toLowerCase().includes(search.toLowerCase()));

      const matchesType = typeFilter === "all" || t.type === typeFilter;

      const matchesDate =
        (!startDate || new Date(t.date) >= new Date(startDate)) &&
        (!endDate || new Date(t.date) <= new Date(endDate));

      return matchesSearch && matchesType && matchesDate;
    })
    .sort((a, b) => {
      if (sortOption === "newest") return new Date(b.date) - new Date(a.date);
      if (sortOption === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortOption === "high") return b.amount - a.amount;
      if (sortOption === "low") return a.amount - b.amount;
      return 0;
    });

  return (
    <div>
      <SummaryCards transactions={transactions} />

      <ChartSection transactions={transactions} />

      {/* ✅ Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <input
          type="text"
          placeholder="Search by category or note..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
        />
      </div>

      {/* ✅ Sorting */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="high">Highest Amount</option>
          <option value="low">Lowest Amount</option>
        </select>
      </div>

      {/* ✅ Transaction List */}
      <TransactionList
        transactions={filteredTransactions}
        onDelete={onDelete}
      />
    </div>
  );
}
