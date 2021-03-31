import classes from './Placed.module.css'

import car from '../../assets/images/car.svg'
import { useDocumentTitle } from '../../shared/projectFunctions'

export const Placed = ({ title }) => {
  useDocumentTitle(title)
  return (
    <div className={classes.Placed}>
      <h1>Заказ оформлен успешно!</h1>
      <img src={car} alt='pizza car' />
      <p className={classes.Desc}>Мы уже едем к вам!</p>
    </div>
  )
}
