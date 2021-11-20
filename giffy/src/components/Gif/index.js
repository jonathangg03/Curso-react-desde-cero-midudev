import React from 'react'
import { Link } from 'wouter'
import Fav from 'components/Fav'
import './Gif.css'

function Gif({ title, id, url }) {
  return (
    <>
      <Fav id={id} />
      <Link to={`/gif/${id}`} className='Gif Gif-link'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </>
  )
}

export default React.memo(Gif)
