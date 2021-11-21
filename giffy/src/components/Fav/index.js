import useUser from 'hooks/useUser'
import { useState } from 'react'
// import { useLocation } from 'wouter'
import Login from 'components/Login'
import Modal from 'components/Modal'
import './index.css'

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser()
  // const [, navigate] = useLocation()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some((favId) => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true) //Sí le intentamos dar like, abrirá el modal
    addFav({ id })
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleLogin = () => {
    setShowModal(false)
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'X']
    : ['Add Gif to favorites', 'Like']

  return (
    <>
      <button onClick={handleClick} className='fav-btn'>
        <span aria-label={label} role='img'>
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  )
}
