import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Reports from "./pages/Reports";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  return (
    <div>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  transactions={transactions}
                  onDelete={deleteTransaction}
                />
              }
            />
            <Route
              path="/add"
              element={<AddExpense onAdd={addTransaction} />}
            />
            <Route
              path="/reports"
              element={<Reports transactions={transactions} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
