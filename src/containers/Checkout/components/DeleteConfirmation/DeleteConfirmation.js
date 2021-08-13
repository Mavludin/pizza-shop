import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../../store/slices/count'
import styles from './DeleteConfirmation.module.css'
import { OrangeButton } from '../../../../components/Styled/OrangeButton'

export default function DeleteConfirmation({ showModal, setShowModal, pizzas, setPizzas, pos }) {
  const handleClose = () => {
    setShowModal(false)
  }

  const dispatch = useDispatch()

  const deletePost = () => {
    dispatch(removeItem(pizzas[pos].amount))
    const temp = [...pizzas]
    temp.splice(pos, 1)
    if (temp.every((item) => item === null)) {
      setPizzas([])
      localStorage.removeItem('checkoutPizzas')
    } else {
      setPizzas(temp)
      localStorage.setItem('checkoutPizzas', JSON.stringify(temp))
    }
  }

  return (
    <div>
      <Dialog
        classes={{ container: styles.container }}
        open={showModal}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'Удалить данный элемент?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            После удаленения данный товар придется добавлять в корзину заново.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <OrangeButton onClick={handleClose} color='primary'>
            Отмена
          </OrangeButton>
          <OrangeButton
            onClick={() => {
              handleClose()
              deletePost()
            }}
            color='primary'
            autoFocus
          >
            Удалить
          </OrangeButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
