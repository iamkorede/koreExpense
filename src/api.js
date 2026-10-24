const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'
let token = localStorage.getItem('token') || ''

async function request(path, options = {}) {
  const res = await fetch(API + path, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: 'Bearer ' + token } : {}),
    },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'request failed')
  return data
}

export async function login(email, password) {
  const data = await request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
  token = data.token
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
}

export async function register(name, email, password) {
  const data = await request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })
  token = data.token
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
}

export function logout() {
  token = ''
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch {
    return null
  }
}

export const getExpenses = () => request('/api/expenses')
export const getSummary = () => request('/api/expenses/summary')
export const addExpense = (expense) =>
  request('/api/expenses', { method: 'POST', body: JSON.stringify(expense) })
export const deleteExpense = (id) =>
  request('/api/expenses/' + id, { method: 'DELETE' })
