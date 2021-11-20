import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'
import loginService from '../utils/login'
import addFavService from '../utils/addFav'

export default function useUser() {
  const { jwt, setJWT, setFavs, favs } = useContext(Context)
  const [state, setState] = useState({
    loading: false,
    error: null
  })

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false })
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem('jwt', jwt)
          setState({ loading: false, error: true })
          setJWT(jwt)
        })
        .catch((err) => {
          window.sessionStorage.removeItem('jwt')
          console.log(err)
        })
    },
    [setJWT]
  )

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then((favs) => setFavs(favs))
        .catch((err) => console.error(err))
    },
    [jwt, setFavs]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    addFav,
    favs
  }
}
