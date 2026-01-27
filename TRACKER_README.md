# 💰 Expense Tracker

A beautiful and intuitive expense tracking application built with React and Vite. Track your spending across different categories with a modern UI/UX.

## ✨ Features

- **Add Expenses**: Easily add new expenses with description, amount, category, and date
- **7 Categories**: Food, Transport, Entertainment, Shopping, Health, Utilities, and Other - each with unique colors and emojis
- **Transaction History**: View all your expenses sorted by date (newest first)
- **Smart Summary**: 
  - Total amount spent
  - Average expense per transaction
  - Highest expense
  - Top spending categories with percentages
- **Delete Expenses**: Remove unwanted expenses with a single click
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Gradient backgrounds, smooth animations, and intuitive interactions

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd expense
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx       # Form to add new expenses
│   ├── ExpenseList.jsx       # List of all transactions
│   └── ExpenseSummary.jsx    # Summary and statistics
├── styles/
│   ├── ExpenseForm.css       # Styles for form component
│   ├── ExpenseList.css       # Styles for list component
│   └── ExpenseSummary.css    # Styles for summary component
├── App.jsx                    # Main app component
├── index.css                  # Global styles
└── main.jsx                   # Entry point
```

## 🎨 Design Highlights

- **Gradient Header**: Eye-catching purple gradient
- **Card-based Layout**: Clean separation of form, summary, and transactions
- **Color-coded Categories**: Each expense category has its own color and emoji
- **Smooth Animations**: Hover effects and transitions for better UX
- **Progress Bars**: Visual representation of spending by category
- **Responsive Grid**: Adapts beautifully to all screen sizes

## 💡 Technologies Used

- **React 19**: Latest React features and hooks
- **Vite**: Lightning-fast build tool and dev server
- **CSS3**: Modern styling with gradients, animations, and flexbox
- **ES6+**: Modern JavaScript features

## 📝 How to Use

1. **Add an Expense**:
   - Fill in the expense description
   - Enter the amount
   - Select a category
   - Choose the date
   - Click "Add Expense"

2. **View Summary**:
   - See total spent at the top
   - Check top spending categories with percentages
   - View average and highest expense

3. **Manage Transactions**:
   - All transactions are sorted by date
   - Delete any expense with the trash icon
   - See category emoji for quick reference

## 🎯 Future Enhancements

- Export expenses to CSV
- Monthly/yearly statistics
- Budget limits and alerts
- Local storage to persist data
- Dark mode theme
- Multiple currency support
- Recurring expenses

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for better expense tracking
