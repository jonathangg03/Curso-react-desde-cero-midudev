import register from 'utils/register'
import { Formik } from 'formik'
import './index.css'

export default function Register() {
  return (
    <>
      <h2>Formulario de registro</h2>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={(values, { setFieldError }) => {
          return register(values).catch(() => {
            setFieldError('username', 'This username is not valid')
          })
        }}
        validate={(values) => {
          const errors = {}

          if (!values.username) {
            errors.username = 'Required username'
          }

          if (!values.password) {
            errors.password = 'Required password'
          } else if (values.password.length < 3) {
            errors.password = 'Length must be greather than 3'
          }

          return errors
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              onChange={handleChange}
              placeholder='Username'
            ></input>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            ></input>
            <button className='register-btn' disabled={isSubmitting}>
              Registrarse
            </button>
            <span>
              {errors.username ? <p>{errors.username}</p> : ''}
              {errors.password ? <p>{errors.password}</p> : ''}
            </span>
          </form>
        )}
      </Formik>
    </>
  )
}
