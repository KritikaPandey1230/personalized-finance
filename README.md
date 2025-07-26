💰 Personal Finance Tracker

A simple and efficient Personal Finance App to manage your income, expenses, and view financial reports. Built using React (Vite + Tailwind) for the frontend and Node.js + Express + MongoDB for the backend.

✅ Features

-Add Income and Expenses with categories
-View Transaction History
-Balance Calculation (Income - Expenses)
-Interactive Reports & Graphs
-Dark Theme UI using TailwindCSS
-MongoDB for secure and scalable data storage
-Tested with Postman

🛠 Tech Stack

Frontend: React + Vite + Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Tools: Postman (API Testing)

📂 Project Structure

personal-finance-app/
│
├── backend/            # Express + MongoDB API
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Routes
│   ├── server.js       # App Entry Point
│   └── .env            # Environment Variables
│
├── frontend/           # React + Vite App
│   ├── src/components  # UI Components
│   ├── src/App.jsx     # Main App Component
│   └── tailwind.config.js
│
└── README.md

⚡ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/YOUR_USERNAME/personal-finance-app.git

2️⃣ Backend Setup

cd backend
npm install

--Create .env file:

MONGO_URI=your-mongodb-uri
PORT=5000

--Start server:

npm run dev

3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

🧪 API Endpoints

Method	           Endpoint	                   Description
POST	        /api/transactions	             Add a transaction
GET	          /api/transactions	            Get all transactions
DELETE	     /api/transactions/:id	         Delete transaction

📸 Screenshots
<img width="1888" height="826" alt="image" src="https://github.com/user-attachments/assets/8dcda013-9255-47c7-b3cd-273fa990ca24" />
<img width="1883" height="875" alt="image" src="https://github.com/user-attachments/assets/f67418b0-75ce-4c09-8b35-308a86a6368b" />

✅ How It Works

-User adds transactions (income or expense)
-App calculates total income, expenses, and balance
-Reports show category-wise spending in graphs

✅ Author

Kritika Pandey
