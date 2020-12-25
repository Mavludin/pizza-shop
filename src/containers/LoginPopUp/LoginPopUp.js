import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { OrangeButton } from '../../components/Styled/OrangeButton'
import classes from './LoginPopUp.module.css'
import closeIcon from '../../assets/images/close.svg'

export const LoginPopUp = ({ setIsLoginPopUpVisible, isLoginPopUpVisible }) => {
  // Handling the Escape button click to close the form
  useEffect(() => {
    const handleCancel = (e) => {
      if (isLoginPopUpVisible && e.key === 'Escape') setIsLoginPopUpVisible(false)
    }
    window.addEventListener('keyup', handleCancel)
    return () => window.removeEventListener('keyup', handleCancel)
  }, [isLoginPopUpVisible, setIsLoginPopUpVisible])

  return (
    <React.Fragment>
      <div onClick={() => setIsLoginPopUpVisible(false)} className={classes.Overlay}></div>
      <Formik
        initialValues={{ login: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (values.login.length > 0 && values.login.length < 3) {
            errors.login = 'Login not less than 3 characters'
          }
          if (values.password.length > 0 && values.password.length < 8) {
            errors.password = 'Password not less than 8 characters'
          }
          return errors
        }}
        onSubmit={(values) => {
          setIsLoginPopUpVisible(false)
        }}>
        <Form className={classes.LoginForm}>
          <img src={closeIcon} alt='Close' onClick={() => setIsLoginPopUpVisible(false)} />
          <div>
            <Field type='text' name='login' placeholder='Enter login' />
          </div>
          <div>
            <Field type='password' name='password' placeholder='Enter password' />
          </div>
          <div>
            <OrangeButton type='submit'>Log-in</OrangeButton>
            <div className={classes.ErrorBox}>
              <ErrorMessage name='login' component='div' className={classes.Error} />
              <ErrorMessage name='password' component='div' className={classes.Error} />
            </div>
          </div>
        </Form>
      </Formik>
    </React.Fragment>
  )
}
