import { Fragment, Suspense } from 'react';

import { fetchData } from '../../shared/apiController'

import { Slider } from '../../components/Slider/Slider'
import preloaderIcon from '../../assets/images/preloader.gif'
import { Products } from './components/Products/Products'
import { ProductAdded } from './components/PopUps/ProductAdded';
import { useState } from 'react';

const productData = fetchData()

export const HomePage = ({ mainHeading }) => {

  const [addedPizza, setAddedPizza] = useState('');
  const [pizzaFlag, setPizzaFlag] = useState(false)

  const handlePopUpShow = (pizza) => {
    setAddedPizza(pizza);
    setPizzaFlag(true)
  }

  return (
    <Fragment>
      <Slider />
      <Suspense fallback={<img src={preloaderIcon} alt='Preloader Icon' />}>
        <h1 datatype="Pizza" ref={mainHeading}>Pizza</h1>
        <Products productData={productData} handlePopUpShow={handlePopUpShow} />
        <ProductAdded pizzaFlag={pizzaFlag}  addedPizza={addedPizza} />
      </Suspense>
    </Fragment>
  );
}
