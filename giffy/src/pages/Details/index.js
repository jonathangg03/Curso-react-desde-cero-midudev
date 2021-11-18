import Gif from '../../components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Link } from 'wouter'
import { Redirect } from 'wouter'
import useTitle from 'hooks/useTitle'
import { Helmet } from 'react-helmet'

export default function Details({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <p>Loading...</p>
      </>
    )
  }
  if (isError) return <Redirect to='/404' />

  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{gif.title} | Giffy</title>
      </Helmet>
      <Link to='/' className='home'>
        <h1>GIFFY</h1>
      </Link>
      <Gif {...gif} />
    </>
  )
}
