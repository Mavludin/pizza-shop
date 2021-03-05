import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import classes from './Checkout.module.css'
import { endpoints } from '../../shared/routerEndpoints'
import deleteIcon from '../../assets/images/delete.svg'
import { OrangeButton } from '../../components/Styled/OrangeButton'
import { placed, removeItem } from '../../store/slices/count'
import { useState } from 'react'

export const Checkout = () => {
  const dispatch = useDispatch()
  const placeOrder = () => dispatch(placed())

  let arrayOfValues = []
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i) && JSON.parse(localStorage[i]).amount) {
      arrayOfValues.push(JSON.parse(localStorage[i]))
    }
  }

  const [pizzas, setPizzas] = useState(JSON.parse(localStorage['pizzas']))

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

  const pizzasFromTheCart = pizzas.map((item, pos) => {
    if (item !== null) {
      return (
        <div className={classes.Item} key={item.id}>
          <div className={classes.ItemContent}>
            <div className={classes.Left}>
              <img src={item.thumbnail} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
            <div className={classes.Right}>
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
                <img src={deleteIcon} alt='Delete an item' onClick={() => deleteItem(pos)} />
              </div>
            </div>
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
      <h1 datatype='Checkout'>Checkout</h1>
      <p className={classes.TotalItems}>
        <strong>Total items:</strong> {localStorage['amountOfPizzas']}
      </p>
      <div className={classes.Content}>
        <div className={classes.LeftCheck}>{pizzasFromTheCart}</div>
        <div className={classes.RightCheck}>
          <h2>
            Total price: <span>{totalPrice}$</span>
          </h2>
          <Link to={endpoints.PLACED}>
            <OrangeButton onClick={placeOrder}>Place Order</OrangeButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
