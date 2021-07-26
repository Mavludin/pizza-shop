import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import classes from './Checkout.module.css'
import { endpoints } from '../../shared/routerEndpoints'
import { OrangeButton } from '../../components/Styled/OrangeButton'
import { decrement, increment, placed, removeItem } from '../../store/slices/count'
import { useState } from 'react'
import { useDocumentTitle } from '../../shared/projectFunctions'
import { SentimentVeryDissatisfied } from '@material-ui/icons'
import { CartItem } from './components/CartItem/CartItem'
import { useTranslation } from 'react-i18next'

export const Checkout = ({ title }) => {
  useDocumentTitle(title)

  const dispatch = useDispatch()

  const [pizzas, setPizzas] = useState(JSON.parse(localStorage.getItem('pizzas')))

  const deleteItem = (pos) => {
    const sure = window.confirm('You sure?')
    if (sure) {
      dispatch(removeItem(pizzas[pos].amount))
      const temp = [...pizzas]
      temp.splice(pos, 1)
      setPizzas(temp)
      localStorage.setItem('pizzas', JSON.stringify(temp))
    }
  }

  const incrementItem = (pos) => {
    const temp = [...pizzas]
    temp[pos].amount++
    setPizzas(temp)
    localStorage.setItem('pizzas', JSON.stringify(temp))
    dispatch(increment())
  }

  const decrementItem = (pos) => {
    if (pizzas[pos].amount > 1) {
      const temp = [...pizzas]
      temp[pos].amount--
      setPizzas(temp)
      localStorage.setItem('pizzas', JSON.stringify(temp))
      dispatch(decrement())
    }
  }

  const { t } = useTranslation()

  const pizzasFromTheCart =
    pizzas === null ? (
      <h2>
        {t('checkout.cartEmptiness')}
        <SentimentVeryDissatisfied />
      </h2>
    ) : (
      pizzas.map((item, pos) => {
        if (item !== null) {
          return (
            <CartItem
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              deleteItem={() => deleteItem(pos)}
              incrementItem={() => incrementItem(pos)}
              decrementItem={() => decrementItem(pos)}
              amount={item.amount}
            />
          )
        } else return null
      })
    )

  const totalPrice =
    pizzas === null
      ? '0'
      : pizzas.reduce((acc, item) => {
          if (item !== null) {
            return acc + item.price * item.amount
          } else return acc + 0
        }, 0)

  const handleOrderPlacement = (e) => {
    if (!localStorage['amountOfPizzas']) {
      alert('Корзина пуста')
      e.preventDefault()
    } else if (window.confirm('Оформляем?')) {
      dispatch(placed())
    } else e.preventDefault()
  }

  return (
    <div className={classes.checkout}>
      <h1 datatype='Checkout'>Оформление заказа</h1>
      {localStorage['amountOfPizzas'] && (
        <p className={classes.totalItems}>
          <strong>Всего пицц:</strong> {localStorage['amountOfPizzas']}
        </p>
      )}

      <div className={classes.content}>
        <div className={classes.leftCheck}>{pizzasFromTheCart}</div>
        <div className={classes.rightCheck}>
          <h2>
            Сумма: <span>{totalPrice}₽</span>
          </h2>
          <Link to={endpoints.PLACED} onClick={handleOrderPlacement}>
            <OrangeButton className={classes.placeOrderBtn}>Оформить заказ</OrangeButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
