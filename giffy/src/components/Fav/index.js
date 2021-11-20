import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser()
  const [, navigate] = useLocation()

  const isFaved = favs.some((favId) => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate('/login') //Sí le intentamos dar like, se pasa a
    addFav({ id })
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'X']
    : ['Add Gif to favorites', 'Like']

  return (
    <button onClick={handleClick}>
      <span aria-label={label} role='img'>
        {emoji}
      </span>
    </button>
  )
}
