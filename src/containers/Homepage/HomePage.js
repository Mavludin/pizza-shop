import React, { useState, useEffect } from 'react'

import classes from './HomePage.module.css'

import { fetchProducts } from '../../utils/APIController'
import { Preloader } from '../../components/Preloader/Preloader'

import { Slider } from '../../components/Slider/Slider'
import { OrangeButton } from '../../components/Styled/OrangeButton'

export const HomePage = ({ mainHeading }) => {
  const [productData, setProductData] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProductData(response)
        setShowLoader(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const pizzaDataRender = productData.map((item) => {
    return (
      <figure key={item.id} id={item.id}>
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
            <OrangeButton>+ Add</OrangeButton>
          </div>
        </figcaption>
      </figure>
    )
  })

  return (
    <Preloader visible={showLoader}>
      <Slider />
      <React.Fragment>
        <h1 ref={mainHeading}>Pizza</h1>
        <div className={classes.Products}>{pizzaDataRender}</div>
      </React.Fragment>
    </Preloader>
  )
}
