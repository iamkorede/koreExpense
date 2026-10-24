// Auth Component - Sign up / Log in screen
// Shown when there is no valid token. Calls the backend,
// then hands the user object up to App.
import { useState } from 'react'
import { login, register } from '../api'
import './Auth.css'

function Auth({ onAuth }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const user =
        mode === 'login'
          ? await login(form.email, form.password)
          : await register(form.name, form.email, form.password)
      onAuth(user)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-overlay">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1 className="auth-title">{mode === 'login' ? 'Welcome back' : 'Create account'}</h1>
        <p className="auth-subtitle">KoreExpense · track your spending wisely</p>

        {error && <p className="auth-error">{error}</p>}

        {mode === 'signup' && (
          <input
            className="auth-input"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          className="auth-input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          minLength={6}
          required
        />

        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Sign up'}
        </button>

        <p className="auth-switch">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            className="auth-switch-link"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </form>
    </div>
  )
}

export default Auth
