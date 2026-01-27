// Import CSS stylesheet
import '../styles/ExpenseSummary.css'

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
 * ExpenseSummary Component
 * Shows overview statistics:
 * - Total amount spent
 * - Number of expenses
 * - Top 3 spending categories with breakdown
 * - Average and highest expense amounts
 * Props:
 *   - expenses: Array of expense objects
 */
export default function ExpenseSummary({ expenses }) {
  // Calculate total amount spent by adding all expense amounts
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  /**
   * getCategoryBreakdown: Groups expenses by category and sums amounts
   * Returns an object like: { 'Food': 125.50, 'Transport': 45.00, ... }
   */
  const getCategoryBreakdown = () => {
    const breakdown = {}
    expenses.forEach(expense => {
      // Initialize category if it doesn't exist yet
      if (!breakdown[expense.category]) {
        breakdown[expense.category] = 0
      }
      // Add this expense amount to the category total
      breakdown[expense.category] += expense.amount
    })
    return breakdown
  }

  // Get category breakdown and find top 3 spending categories
  const categoryBreakdown = getCategoryBreakdown()
  const topCategories = Object.entries(categoryBreakdown)
    .sort(([, a], [, b]) => b - a) // Sort by amount descending
    .slice(0, 3) // Get only top 3

  // Render the summary section
  return (
    <div className="summary-container">
      {/* Main total card showing overall spending */}
      <div className="total-card">
        <div className="total-label">Total Spent</div>
        <div className="total-amount">₦{totalAmount.toFixed(2)}</div>
        <div className="total-count">
          {/* Show number of expenses with proper singular/plural */}
          {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'}
        </div>
      </div>

      {/* Show top categories if there are any expenses */}
      {topCategories.length > 0 && (
        <div className="breakdown-card">
          <h3>Top Categories</h3>
          <div className="category-list">
            {/* Display top 3 spending categories */}
            {topCategories.map(([category, amount]) => {
              const categoryColor = DEFAULT_COLORS[category] || '#A8A8A8'
              // Calculate percentage of total spending
              const percentage = ((amount / totalAmount) * 100).toFixed(1)
              return (
                <div key={category} className="category-item">
                  <div className="category-header">
                    <span className="category-name">
                      {/* Category badge with first letter */}
                      <span className="category-badge" style={{ backgroundColor: categoryColor }}>
                        {category.charAt(0).toUpperCase()}
                      </span>
                      {category}
                    </span>
                    {/* Show percentage of total spending */}
                    <span className="percentage">{percentage}%</span>
                  </div>
                  {/* Visual progress bar showing spending percentage */}
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: categoryColor
                      }}
                    />
                  </div>
                  {/* Show exact amount spent */}
                  <div className="amount">₦{amount.toFixed(2)}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Statistics section showing average and highest expense */}
      <div className="stats-grid">
        {/* Average expense amount */}
        <div className="stat-card">
          <div className="stat-label">Average</div>
          <div className="stat-value">
            {/* Calculate average by dividing total by number of expenses */}
            ₦{expenses.length > 0 ? (totalAmount / expenses.length).toFixed(2) : '0.00'}
          </div>
        </div>
        {/* Highest single expense amount */}
        <div className="stat-card">
          <div className="stat-label">Highest</div>
          <div className="stat-value">
            {/* Find the maximum amount from all expenses */}
            ₦{expenses.length > 0 ? Math.max(...expenses.map(e => e.amount)).toFixed(2) : '0.00'}
          </div>
        </div>
      </div>
    </div>
  )
}
