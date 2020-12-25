import React from 'react'
import classes from './Products.module.css'
import { OrangeButton } from '../../../components/Styled/OrangeButton'
import { useDispatch } from 'react-redux'

export const Products = ({ productData }) => {
  const pizzas = productData.pizzas.read()

  const addToCart = (item, pos) => {
    let tempArray
    if (localStorage['pizzas']) {
      tempArray = JSON.parse(localStorage['pizzas'])
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
  const incrementTheCart = () => dispatch({ type: 'INCREMENT_BY_ONE' })

  return (
    <div className={classes.Products}>
      {pizzas.map((item, pos) => {
        return (
          <figure key={item.id}>
            <div>
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <figcaption>
              <div className={classes.Top}>
                <h2>{item.title}</h2>
                <p className={classes.Description}>{item.description}</p>
              </div>
              <div className={classes.Bottom}>
                <p className={classes.Price}>
                  <span>Get for: </span>
                  {item.price}$
                </p>
                <OrangeButton 
                  onClick={() => { addToCart(item, pos); incrementTheCart()}}>
                  + Add
                </OrangeButton>
              </div>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}
