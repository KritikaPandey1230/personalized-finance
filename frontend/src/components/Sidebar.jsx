import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white dark:bg-gray-950 flex flex-col p-6">
      <h1 className="text-2xl font-bold text-teal-400 mb-6">
        💰 Finance Tracker
      </h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-teal-400">
          Dashboard
        </Link>
        <Link to="/add" className="hover:text-teal-400">
          Add Expense
        </Link>
        <Link to="/reports" className="hover:text-teal-400">
          Reports
        </Link>
      </nav>
    </div>
  );
}
