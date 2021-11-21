import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/') //Sí el usuario está logeado lo mandamos a / porque ya no tiene sentido que esté aquí
    onLogin && onLogin()
  }, [isLogged, navigate, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Creadentials are invalid</strong>}
    </>
  )
}
