import classes from './CartItem.module.css'
import deleteIcon from '../../../../assets/images/delete.svg'

export const CartItem = ({
  title,
  thumbnail,
  price,
  deleteItem,
  amount,
  incrementItem,
  decrementItem,
}) => {
  return (
    <div className={classes.Item}>
      <div className={classes.ItemContent}>
        <div className={classes.Left}>
          <img className={classes.Thumbnail} src={thumbnail} alt={title} />
          <h4>{title}</h4>
        </div>
        <div className={classes.Right}>
          <div className={classes.AmountControl}>
            <button onClick={decrementItem}>-</button>
            <div>{`${amount}`}</div>
            <button onClick={incrementItem}>+</button>
          </div>
          <div className={classes.Price}>
            {price}
            <span>₽</span>
          </div>
          <div className={classes.DeleteIcon}>
            <img src={deleteIcon} alt='Delete an item' onClick={deleteItem} />
          </div>
        </div>
      </div>
    </div>
  )
}
