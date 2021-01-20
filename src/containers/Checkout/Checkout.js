import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import classes from './Checkout.module.css'
import { endpoints } from '../../shared/routerEndpoints'
import { orderPlaced } from '../../store/actions'
import deleteIcon from '../../assets/images/delete.svg'
import { OrangeButton } from '../../components/Styled/OrangeButton'

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
      <h1 datatype="Checkout">Checkout</h1>
      <p className={classes.TotalItems}>
        <strong>Total items:</strong> {localStorage['amountOfPizzas']}
      </p>
      <div className={classes.Content}>
        <div className={classes.LeftCheck}>{pizzasFromTheCart}</div>
        <div className={classes.RightCheck}>
          <h2>Total price: <span>{totalPrice}$</span></h2>
          <Link to={endpoints.THANK}>
            <OrangeButton onClick={onPlaceOrder}>Place Order</OrangeButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
