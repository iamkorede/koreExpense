// Import React hooks and CSS stylesheet
import { useState } from 'react'
import '../styles/ExpenseForm.css'

// Define default color mapping for different expense categories
// Users can enter any category name, and it will use a default color if not predefined
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
 * ExpenseForm Component
 * Provides a form for users to add new expenses
 * Props:
 *   - onAddExpense: Callback function to handle adding a new expense
 */
export default function ExpenseForm({ onAddExpense }) {
  // Initialize form state with empty values and today's date
  const [formData, setFormData] = useState({
    description: '', // What the expense was for
    amount: '',      // How much was spent
    category: '', // Category of the expense (user-defined)
    date: new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
  })

  /**
   * handleChange: Updates form state as user types
   * Updates only the changed field while keeping other fields intact
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  /**
   * handleSubmit: Processes form submission
   * - Validates that description and amount are provided
   * - Converts amount string to a number
   * - Calls parent component callback with expense data
   * - Resets form to initial state
   */
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload
    // Check if description is not empty and amount is provided
    if (formData.description.trim() && formData.amount) {
      // Call parent callback with the new expense
      onAddExpense({
        ...formData,
        amount: parseFloat(formData.amount) // Convert string to number
      })
      // Clear form for next entry
      setFormData({
        description: '',
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0]
      })
    }
  }

  // Render the form UI
  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      {/* Form handles the expense submission */}
      <form onSubmit={handleSubmit} className="expense-form">
        {/* Description field - what the expense was for */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g., Lunch at restaurant"
            autoComplete='off'
            required
          />
        </div>

        {/* Amount field - how much was spent */}
        <div className="form-group">
          <label htmlFor="amount">Amount (₦)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01" // Allow 2 decimal places
            min="0" // Prevent negative amounts
            autoComplete='off'
            required
          />
        </div>

        {/* Category field - user can enter any custom category name */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Food, Transport, Entertainment"
            autoComplete='off'
            required
          />
        </div>

        {/* Date field - when the expense occurred */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button - triggers form validation and adds expense */}
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  )
}
