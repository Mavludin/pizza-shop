import classes from './Products.module.css'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slices/count'
import { ProductItem } from './ProductItem'
import { useQueryClient } from 'react-query'

export const Products = ({ setOpenSnackBar, openSnackBar }) => {

  const queryClient = useQueryClient('pizzas')
  const pizzas = queryClient.getQueryData('pizzas')

  const addToCart = (item, pos) => {
    let tempArray;
    if (localStorage['pizzas']) {
      tempArray = JSON.parse(localStorage.getItem('pizzas'))
      if (tempArray[pos]) tempArray[pos].amount += 1
      else tempArray[pos] = { ...item, amount: 1 }
    } else {
      tempArray = []
      const pizza = { ...item, amount: 1 }
      tempArray[pos] = pizza
    }
    localStorage.setItem('pizzas', JSON.stringify(tempArray))
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
