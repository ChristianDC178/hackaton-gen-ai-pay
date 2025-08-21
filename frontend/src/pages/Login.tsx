import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostLogin } from '../hooks/use-api'
import { useAuthStore } from '../stores/auth-store'
import './Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const loginMutation = usePostLogin()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate({ email }, {
      onSuccess: (data) => {
        login(data)
        navigate('/home')
      },
      onError: (error) => {
        console.error('Login failed:', error)
      }
    })
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1 className="app-title">Personal Pay</h1>
          <p className="app-subtitle">Bienvenido a tu banco digital</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresá tu email"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-btn"
            disabled={loginMutation.isPending || !email}
          >
            {loginMutation.isPending ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login