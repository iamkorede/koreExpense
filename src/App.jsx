// Import React hooks and components
import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'

/**
 * App Component - Main application container
 * Manages the central state for all expenses
 * Handles adding and deleting expenses
 */
function App() {
  // Store all expenses in state
  const [expenses, setExpenses] = useState([])

  /**
   * addExpense: Adds a new expense to the list
   * - Creates a unique ID using current timestamp
   * - Adds new expense to the end of the expenses array
   */
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  /**
   * deleteExpense: Removes an expense from the list by ID
   * Filters out the expense with the matching ID
   */
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  // Render the main application layout
  return (
    <div className="app">
      <div className="container">
        {/* Header section with title */}
        <header className="header">
          <div className="header-content">
            <h1>Welcome User</h1>
            <h2>KoreExpense</h2>
            <p>Track your spending wisely</p>
          </div>
        </header>

        {/* Main content area with two-panel layout */}
        <div className="main-content">
          {/* Left panel: Form to add new expenses */}
          <div className="left-panel">
            <ExpenseForm onAddExpense={addExpense} />
          </div>

          {/* Right panel: Summary and list of expenses */}
          <div className="right-panel">
            {/* Shows total spent and top categories */}
            <ExpenseSummary expenses={expenses} />
            {/* Shows all expenses in chronological order */}
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
