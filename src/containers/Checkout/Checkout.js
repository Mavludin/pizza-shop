import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import classes from './Checkout.module.css'
import { endpoints } from '../../utils/routerEndpoints'
import { orderPlaced } from '../../store/actions'
import deleteIcon from '../../assets/images/delete.svg'

export const Checkout = () => {
  const dispatch = useDispatch()

  const onPlaceOrder = () => dispatch(orderPlaced())

  let arrayOfValues = []
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i) && JSON.parse(localStorage[i]).amount) {
      arrayOfValues.push(JSON.parse(localStorage[i]))
    }
  }

  let pizzas = JSON.parse(localStorage['pizzas'])


  const pizzasFromTheCart = pizzas.map((item, pos) => {
    if (item !== null) {
      return (
        <div className={classes.Item} key={item.id}>
          <div className={classes.ItemContent}>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
          <div className={classes.AmountControl}>
            <button>-</button>
            <div>{`${item.amount}`}</div>
            <button>+</button>
          </div>
          <div className={classes.Price}>
            {item.price}
            <span>$</span>
          </div>
          <div className={classes.DeleteIcon}>
            <img src={deleteIcon} alt="Delete an item" />
          </div>
        </div>
      )
    } else return null
  })

  const totalPrice = pizzas.reduce((acc, item) => {
    if (item !== null) {
      return acc + item.price * item.amount
    } else return acc + 0
  }, 0)

  return (
    <div className={classes.Checkout}>
      <h1>Checkout</h1>
      <p className={classes.TotalItems}>
        Total items: {localStorage['amountOfPizzas']}
      </p>
      <div className={classes.KindaBlock}>
        <div className={classes.LeftCheck}>{pizzasFromTheCart}</div>

        <div className={classes.RightCheck}>
          <div className={classes.Total}>
            <h2>Total amount</h2>
            <p className={classes.Desc}>
              Total price: <span>{totalPrice}</span>
            </p>
            <Link to={endpoints.THANK}>
              <button onClick={onPlaceOrder}>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
