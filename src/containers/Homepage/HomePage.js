import { Fragment, Suspense } from 'react'

import { fetchData } from '../../shared/apiController'

import { Slider } from '../../components/Slider/Slider'
import preloaderIcon from '../../assets/images/loader.svg'
import { Products } from './components/Products/Products'
import { useDocumentTitle } from '../../shared/projectFunctions'

import classes from './HomePage.module.css'
import { Overlay } from '../../components/Styled/Overlay'

const productData = fetchData()

export const HomePage = ({ mainHeading, title }) => {
  useDocumentTitle(title)

  const fallback = (
    <Overlay>
      <img className={classes.loader} src={preloaderIcon} alt='Preloader Icon' />
    </Overlay>
  )

  return (
    <Fragment>
      <Slider />
      <Suspense fallback={fallback}>
        <h1 datatype='Pizza' ref={mainHeading}>
          Пицца
        </h1>
        <Products productData={productData} />
      </Suspense>
    </Fragment>
  )
}
