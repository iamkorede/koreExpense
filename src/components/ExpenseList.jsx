// Import CSS stylesheet
import '../styles/ExpenseList.css'

// Define color mapping for expense categories
const DEFAULT_COLORS = {
  'Food': '#FF6B6B',
  'Transport': '#4ECDC4',
  'Entertainment': '#FFE66D',
  'Shopping': '#FF85C0',
  'Health': '#95E1D3',
  'Utilities': '#A8E6CF',
  'Other': '#C7CEEA'
}

/**
 * ExpenseList Component
 * Displays all expenses in reverse chronological order (newest first)
 * Props:
 *   - expenses: Array of expense objects to display
 *   - onDeleteExpense: Callback function to delete an expense
 */
export default function ExpenseList({ expenses, onDeleteExpense }) {
  /**
   * getCategoryColor: Returns the color for a given category
   * If category is not in DEFAULT_COLORS, returns a neutral gray
   */
  const getCategoryColor = (categoryName) => {
    return DEFAULT_COLORS[categoryName] || '#A8A8A8'
  }

  // Sort expenses by date in descending order (newest first)
  const sortedExpenses = [...expenses].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )

  // Render the expense list
  return (
    <div className="expense-list-container">
      <h2>Transactions</h2>
      {/* Show empty state if no expenses, otherwise show expense list */}
      {sortedExpenses.length === 0 ? (
        <div className="empty-state">
          <p>No Expenses yet</p>
          <p className="text-small">Add your first expense to get started</p>
        </div>
      ) : (
        <div className="expense-list">
          {/* Map through sorted expenses and render each one */}
          {sortedExpenses.map(expense => {
            const categoryColor = getCategoryColor(expense.category)
            return (
              <div key={expense.id} className="expense-item">
                {/* Category badge with first letter */}
                <div 
                  className="expense-icon" 
                  style={{ backgroundColor: categoryColor }}
                >
                  {expense.category.charAt(0).toUpperCase()}
                </div>
                {/* Expense details: description and amount */}
                <div className="expense-details">
                  <div className="expense-header">
                    <p className="expense-description">{expense.description}</p>
                    <p className="expense-amount">₦{expense.amount.toFixed(2)}</p>
                  </div>
                  {/* Category and date information */}
                  <div className="expense-footer">
                    <span className="expense-category">{expense.category}</span>
                    <span className="expense-date">
                      {/* Format date as: Jan 15, 2026 */}
                      {new Date(expense.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                {/* Delete button - removes expense from list */}
                <button
                  className="delete-btn"
                  onClick={() => onDeleteExpense(expense.id)}
                  title="Delete expense"
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}