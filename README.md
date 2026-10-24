# 💰 KoreExpense

A beautiful and intuitive expense tracking app built with React and Vite, now with a real [Node/Express + MySQL + JWT backend](https://github.com/iamkorede/koreexpense-backend).

## Features
- **Accounts**: sign up and log in, expenses are saved per user in MySQL
- **Add Expenses**: description, amount, category (custom categories supported), date
- **7 Categories**: Food, Transport, Entertainment, Shopping, Health, Utilities, Other - each with unique colors and emojis
- **Transaction History**: all expenses sorted by date, newest first, persisted server-side
- **Smart Summary**: total spent, average per transaction, highest expense, top categories with percentages
- **Delete Expenses**: one click
- **Responsive Design**: works on desktop, tablet and mobile

## Quick Start
1. Start the [backend](https://github.com/iamkorede/koreexpense-backend) on port 5000
2. npm install
3. start the dev server and open http://localhost:5173

## Project Structure
```
src/
├── api.js                    # Backend API client (auth + expenses)
├── components/
│   ├── Auth.jsx              # Sign up / log in screen
│   ├── ExpenseForm.jsx       # Form to add new expenses
│   ├── ExpenseList.jsx       # List of all transactions
│   └── ExpenseSummary.jsx    # Summary and statistics
├── App.jsx                   # Main app, auth gate + layout
└── styles/                   # Component styles
```

MIT © 2026 Adekanbi Akorede
