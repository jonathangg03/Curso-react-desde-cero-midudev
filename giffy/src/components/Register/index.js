import { useState } from 'react'
import registerService from 'utils/register'
import { useForm } from 'react-hook-form'
import './index.css'

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  const [registered, setRegistered] = useState(false)
  const [isSubmitted, setIsSubmited] = useState(false)

  const onSubmit = (values) => {
    console.log(values)
    registerService(values).then(() => {
      setRegistered(true)
      setIsSubmited(true)
    })
  }

  if (registered) {
    // Para que muestre eso sí ya nos registramos.
    return <h2>Felicidades, su registro fue exitoso</h2>
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Username'
          {...register('username', { required: true })}
        />
        <input
          type='password'
          placeholder='Password'
          {...register('password')}
        />
        <button className='register-btn' disabled={isSubmitted}>
          Registrarse
        </button>
        {errors.username && 'Username is required'}
      </form>
    </>
  )
}
