import { Fragment } from 'react'

import { Slider } from '../../components/Slider/Slider'
import { Products } from './components/Products/Products'

import { useState } from 'react'
import { SnackBar } from './components/SnackBar/SnackBar'

import { SkeletonFallback } from '../../components/SkeletonFallback/SkeletonFallback'
import { useGetPizzas } from '../../hooks/useGetPizzas'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

export const HomePage = ({ mainHeading, title }) => {
  useDocumentTitle(title)

  const { isLoading, data } = useGetPizzas()

  const [openSnackBar, setOpenSnackBar] = useState(false)

  return (
    <Fragment>
      <Slider />
      <h1 datatype='Pizza' ref={mainHeading}>
        Пицца
      </h1>
      {isLoading ? <SkeletonFallback /> :
        (
          <Products
            pizzas={data}
            openSnackBar={openSnackBar}
            setOpenSnackBar={setOpenSnackBar}
          />
        )
      }
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
    </Fragment>
  )
}
