import { Link } from 'wouter'
import useUser from 'hooks/useUser'
import './index.css'

export default function Header() {
  const { isLogged, logout } = useUser()

  const handleClick = (e) => {
    e.preventDefault() //Esto no es lo correcto, lo hacemos temporalmente
    logout()
  }

  return (
    <header>
      {isLogged ? (
        <Link onClick={handleClick} href='#'>
          Log out
        </Link>
      ) : (
        <Link to='/login'>Log in</Link>
      )}
    </header>
  )
}
