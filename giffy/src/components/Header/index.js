import { Link } from 'wouter'
import useUser from 'hooks/useUser'
import { useRoute } from 'wouter'
import './index.css'

export default function Header() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = (e) => {
    e.preventDefault() //Esto no es lo correcto, lo hacemos temporalmente
    logout()
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <Link onClick={handleClick} href='#'>
        Log out
      </Link>
    ) : (
      <>
        <Link to='/login'>Log in</Link>
        <Link to='/register'>Register</Link>
      </>
    )
  }

  const content = match ? null : renderLoginButtons({ isLogged })

  return <header>{content}</header>
}
