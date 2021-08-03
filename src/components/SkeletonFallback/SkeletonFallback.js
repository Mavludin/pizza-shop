import React from 'react'
import styles from './SkeletonFallback.module.css'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

export const SkeletonFallback = () => {
  return (
    <Grid container wrap='wrap' classes={{ container: styles.container }}>
      {Array.from(new Array(8)).map((item, index) => (
        <Box key={index} classes={{ root: styles.root }} padding='0px 50px 0 50px'>
          <Skeleton margin={0} borderradius='50%' variant='circle' width={150} height={150} />
          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width='60%' />
          </Box>
        </Box>
      ))}
    </Grid>
  )
}
