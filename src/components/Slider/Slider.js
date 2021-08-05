import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styles from './Slider.module.css'

import One from '../../assets/images/1.jpg'
import Two from '../../assets/images/2.jpg'
import Three from '../../assets/images/3.jpg'

export const Slider = () => {
  return (
    <Carousel
      className={styles.slider}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div>
        <img src={One} alt='First Slide' />
      </div>
      <div>
        <img src={Two} alt='Second Slide' />
      </div>
      <div>
        <img src={Three} alt='Third Slide' />
      </div>
    </Carousel>
  )
}
