import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Fragment, useEffect } from 'react'
import { OrangeButton } from '../Styled/OrangeButton'
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
    <Fragment>
      <div onClick={() => setIsLoginPopUpVisible(false)} className={classes.overlay}></div>
      <Formik
        initialValues={{ login: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (values.login.length > 0 && values.login.length < 3) {
            errors.login = 'Длина логина не ниже 3 символов'
          }
          if (values.password.length > 0 && values.password.length < 8) {
            errors.password = 'Длина пароля не ниже 8 символов'
          }
          return errors
        }}
        onSubmit={(values) => {
          setIsLoginPopUpVisible(false)
        }}>
        <Form className={classes.loginForm} role="log-in">
          <img src={closeIcon} alt='Close' onClick={() => setIsLoginPopUpVisible(false)} />
          <div>
            <label htmlFor='popUpLogin'></label>
            <Field type='text' name='login' placeholder='Логин' id='popUpLogin' autoFocus={true} />
          </div>
          <div>
            <label htmlFor='popUpPassword'></label>
            <Field type='password' name='password' placeholder='Пароль' id='popUpPassword' />
          </div>
          <div>
            <OrangeButton type='submit'>Войти</OrangeButton>
            <div className={classes.errorBox}>
              <ErrorMessage name='login' component='div' className={classes.error} />
              <ErrorMessage name='password' component='div' className={classes.error} />
            </div>
          </div>
        </Form>
      </Formik>
    </Fragment>
  )
}
