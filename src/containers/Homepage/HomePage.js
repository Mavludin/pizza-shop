import { Fragment, Suspense } from 'react';

import { fetchData } from '../../shared/apiController'

import { Slider } from '../../components/Slider/Slider'
import preloaderIcon from '../../assets/images/preloader.gif'
import { Products } from './components/Products'

const productData = fetchData()

export const HomePage = ({ mainHeading }) => {
  return (
    <Fragment>
      <Slider />
      <Suspense fallback={<img src={preloaderIcon} alt='Preloader Icon' />}>
        <h1 datatype="Pizza" ref={mainHeading}>Pizza</h1>
        <Products productData={productData} />
      </Suspense>
    </Fragment>
  );
}
