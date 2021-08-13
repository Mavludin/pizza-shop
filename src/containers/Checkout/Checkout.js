import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import classes from './Checkout.module.css'
import { endpoints } from '../../shared/routerEndpoints'
import { OrangeButton } from '../../components/Styled/OrangeButton'
import { decrement, increment, placed } from '../../store/slices/count'
import { useState } from 'react'
import { SentimentVeryDissatisfied } from '@material-ui/icons'
import { CartItem } from './components/CartItem/CartItem'
import { useTranslation } from 'react-i18next'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import DeleteConfirmation from './components/DeleteConfirmation/DeleteConfirmation'
import { useEffect } from 'react'

export const Checkout = ({ title }) => {
  useDocumentTitle(title)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const hey = []
    for (let item of JSON.parse(t('pizzas', {returnObjects: true}))) {
      for (let pizza of JSON.parse(localStorage.getItem('checkoutPizzas'))) {
        if (pizza) {
          if (item.id === pizza.id) {
            const obj = {
              amount: pizza.amount,
              ...item,
            }
            hey.push(obj)
            break
          }
        }
      }
    }
    setPizzas(hey)

  }, [t])

  const amountOfPizzas = useSelector((state) => state).countReducer.amountOfPizzas

  const [showModal, setShowModal] = useState(false)
  const [pos, setPos] = useState(0)

  const incrementItem = (pos) => {
    const temp = [...pizzas]
    temp[pos].amount++
    setPizzas(temp)
    localStorage.setItem('checkoutPizzas', JSON.stringify(temp))
    dispatch(increment())
  }

  const decrementItem = (pos) => {
    if (pizzas[pos].amount > 1) {
      const temp = [...pizzas]
      temp[pos].amount--
      setPizzas(temp)
      localStorage.setItem('checkoutPizzas', JSON.stringify(temp))
      dispatch(decrement())
    }
  }

  const pizzasFromTheCart = !pizzas.length ? (
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
            setShowModal={setShowModal}
            setPos={() => setPos(pos)}
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
    if (!amountOfPizzas) {
      alert('Корзина пуста')
      e.preventDefault()
    } else if (window.confirm('Оформляем?')) {
      dispatch(placed())
    } else e.preventDefault()
  }

  return (
    <div className={classes.checkout}>
      <h1 datatype='Checkout'>{t('heading.checkout')}</h1>
      {amountOfPizzas > 0 && (
        <p className={classes.totalItems}>
          <strong>{t('checkout.totalPizzas')}</strong>{' '}
          <span className={classes.orangeText}>{amountOfPizzas}</span>
        </p>
      )}

      <div className={classes.content}>
        <div className={classes.leftCheck}>{pizzasFromTheCart}</div>
        <div className={classes.rightCheck}>
          <h2>
            {t('checkout.totalAmount')} <span className={classes.orangeText}>{totalPrice}₽</span>
          </h2>
          <Link to={endpoints.PLACED} onClick={handleOrderPlacement}>
            <OrangeButton className={classes.placeOrderBtn}>
              {t('checkout.placeOrder')}
            </OrangeButton>
          </Link>
        </div>
      </div>

      <DeleteConfirmation
        showModal={showModal}
        setShowModal={setShowModal}
        pos={pos}
        setPizzas={setPizzas}
        pizzas={pizzas}
      />
    </div>
  )
}
