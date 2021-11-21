import { useState } from 'react'
import register from 'utils/register'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './index.css'

const validateFields = (values) => {
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
}

const initialValues = {
  username: '',
  password: ''
}

export default function Register() {
  const [registered, setRegistered] = useState(false)

  if (registered) {
    // Para que muestre eso sí ya nos registramos.
    return <h2>Felicidades, su registro fue exitoso</h2>
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .then(() => {
              setRegistered(true)
            })
            .catch(() => {
              setFieldError('username', 'This username is not valid')
            })
        }}
        validate={validateFields}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='text' name='username' placeholder='Username' />
            <Field type='password' name='password' placeholder='Password' />
            <button className='register-btn' disabled={isSubmitting}>
              Registrarse
            </button>
            <ErrorMessage name='username' component='small' />
            <ErrorMessage name='password' component='small' />
          </Form>
        )}
      </Formik>
    </>
  )
}
