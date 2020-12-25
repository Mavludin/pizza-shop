import React from 'react'

import { fetchData } from '../../utils/APIController'

import { Slider } from '../../components/Slider/Slider'
import { Suspense } from 'react'
import preloaderIcon from '../../assets/images/preloader.gif'
import { Products } from './components/Products'

const productData = fetchData()

export const HomePage = ({ mainHeading }) => {
  return (
    <React.Fragment>
      <Slider />
      <Suspense fallback={<img src={preloaderIcon} alt='Preloader Icon' />}>
        <h1 ref={mainHeading}>Pizza</h1>
        <Products productData={productData} />
      </Suspense>
    </React.Fragment>
  )
}
