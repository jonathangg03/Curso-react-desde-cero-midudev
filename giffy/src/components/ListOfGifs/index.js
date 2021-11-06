import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs({ gifs }) {
  return (
    <div className='listOfGifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif
          title={title}
          url={url}
          id={id}
          key={id}
          className='listOfGifs-item'
        />
      ))}
    </div>
  )
}
