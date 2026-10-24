// Main application container.
// Shows the Auth screen until logged in, then "Welcome, <name>" + the tracker.
import { useEffect, useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import { getCurrentUser, getExpenses, addExpense as apiAddExpense, deleteExpense as apiDeleteExpense } from './api'

function App() {
  const [user, setUser] = useState(getCurrentUser())
  const [expenses, setExpenses] = useState([])

  // load expenses from the API once logged in
  useEffect(() => {
    if (!user) return
    getExpenses()
      .then(setExpenses)
      .catch((err) => {
        if (err.message.includes('token')) {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          setUser(null)
        }
      })
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setExpenses([])
  }

  const addExpense = async (expense) => {
    const created = await apiAddExpense(expense)
    setExpenses((prev) => [created, ...prev])
  }

  const deleteExpense = async (id) => {
    await apiDeleteExpense(id)
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }

  if (!user) return <Auth onAuth={setUser} />

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1>Welcome, {user.name || user.email}</h1>
            <h2>KoreExpense</h2>
            <p>Track your spending wisely</p>
            <button className="logout-btn" onClick={handleLogout}>Log out</button>
          </div>
        </header>

        <div className="main-content">
          <div className="left-panel">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
          <div className="right-panel">
            <ExpenseSummary expenses={expenses} />
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
