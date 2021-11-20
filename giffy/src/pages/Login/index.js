import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/') //Sí el usuario está logeado lo mandamos a / porque ya no tiene sentido que esté aquí
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
    navigate('/')
  }

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {isLoginLoading && (
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
