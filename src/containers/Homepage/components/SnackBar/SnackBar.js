import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useHistory } from 'react-router'
import styles from './SnackBar.module.css'
import { useSelector } from 'react-redux'

export const SnackBar = ({ openSnackBar, setOpenSnackBar }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackBar(false)
  }

  const history = useHistory()

  const goToCart = () => {
    history.push('/checkout')
  }

  const justAddedPizza = useSelector(state => state).cartReducer.justAddedPizza

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={openSnackBar}
      onClose={handleClose}
      autoHideDuration={2000}
      message={"Добавлен:" + justAddedPizza}
      action={
        <React.Fragment>
          <Button
            color='secondary'
            size='small'
            onClick={goToCart}
            classes={{
              label: styles.label,
            }}>
            К корзине
          </Button>
          <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </React.Fragment>
      }
    />
  )
}
