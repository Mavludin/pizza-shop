import classes from './Placed.module.css'

import car from '../../assets/images/car.svg'

export const Placed = () => {
  return (
    <div className={classes.Placed}>
      <h1>Order Placed Successfully!!!</h1>
      <img src={car} alt="pizza car" />
      <p className={classes.Desc}>Our pizza car is on its WAY.</p>
    </div>
  );
}
