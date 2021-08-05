import classes from './Products.module.css'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slices/count'
import { ProductItem } from './ProductItem'

export const Products = ({ pizzas, setOpenSnackBar, openSnackBar }) => {

  const addToCart = (item, pos) => {
    let tempArray;
    if (localStorage['checkoutPizzas']) {
      tempArray = JSON.parse(localStorage.getItem('checkoutPizzas'))
      if (tempArray[pos]) tempArray[pos].amount += 1
      else tempArray[pos] = { ...item, amount: 1 }
    } else {
      tempArray = []
      const pizza = { ...item, amount: 1 }
      tempArray[pos] = pizza
    }
    localStorage.setItem('checkoutPizzas', JSON.stringify(tempArray))
  }

  const dispatch = useDispatch()
  const incrementTheCart = () => dispatch(increment())

  return (
    <div className={classes.Products}>

      {pizzas.map((item, pos) => {
        return (
          <ProductItem
            key={item.id}
            incrementTheCart={incrementTheCart}
            addToCart={() => addToCart(item, pos)}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            amount={item.amount}
            description={item.description}
            openSnackBar={openSnackBar}
            setOpenSnackBar={setOpenSnackBar}
          />
        )
      })}

    </div>
  )
}
