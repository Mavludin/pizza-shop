import classes from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../../../store/slices/count'
import { ProductItem } from './ProductItem'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useState } from 'react'

export const Products = ({ setOpenSnackBar, openSnackBar }) => {
  const addToCart = (item, pos) => {
    let tempArray
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

  const { t } = useTranslation()

  const pizzas = JSON.parse(t('pizzas', { returnObjects: true }))

  const [searchedPizzas, setSearchedPizzas] = useState([])
  const [isSearching, setIsSearching] = useState(false);

  const searchString = useSelector(state => state).searchReducer.string

  useEffect(() => {
    if (searchString) {
      const temp = pizzas.filter((pizza) => {
        for (let key in pizza) {
          if (String(pizza[key]).toLowerCase().includes(searchString.toLowerCase())) {
            return pizza
          }
        }
        return null
      })
      setSearchedPizzas(temp)
      setIsSearching(true)
    } else setIsSearching(false)
  }, [searchString])

  
  if (isSearching && searchedPizzas.length === 0) return 'Nothing found'


  return (
    <div className={classes.Products}>

      {(searchedPizzas.length > 0 && isSearching ? searchedPizzas : pizzas).map((item, pos) => {
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
