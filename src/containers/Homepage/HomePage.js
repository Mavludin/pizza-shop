import { Fragment, Suspense } from 'react'

import { fetchData } from '../../shared/apiController'

import { Slider } from '../../components/Slider/Slider'
import { Products } from './components/Products/Products'
import { useDocumentTitle } from '../../shared/projectFunctions'

import styles from './HomePage.module.css'
import { useState } from 'react'
import { SnackBar } from './components/SnackBar/SnackBar'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const productData = fetchData()

export const HomePage = ({ mainHeading, title }) => {
  useDocumentTitle(title)
  const fallback = (
    <Grid container wrap='wrap' classes={{container: styles.container}}>
      {Array.from(new Array(8)).map((item, index) => (
        <Box key={index} classes={{root: styles.root}} width='25%' my={5} marginBottom={0} padding='0px 50px 0 50px'>
          <Skeleton margin={0} borderradius='50%' variant='circle' width={200} height={200} />
          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width='60%' />
          </Box>
        </Box>
      ))}
    </Grid>
  )

  const [openSnackBar, setOpenSnackBar] = useState(false)

  return (
    <Fragment>
      <Slider />
      <Suspense fallback={fallback}>
        <h1 datatype='Pizza' ref={mainHeading}>
          Пицца
        </h1>
        <Products
          productData={productData}
          openSnackBar={openSnackBar}
          setOpenSnackBar={setOpenSnackBar}
        />
        <SnackBar openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} />
      </Suspense>
    </Fragment>
  )
}
