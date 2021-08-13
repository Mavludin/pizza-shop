import classes from './CartItem.module.css'
import deleteIcon from '../../../../assets/images/delete.svg'

export const CartItem = ({
  title,
  thumbnail,
  price,
  setPos,
  amount,
  incrementItem,
  decrementItem,
  setShowModal,
}) => {
  const handleShowModal = () => {
    setShowModal(true)
    setPos()
  }

  return (
    <div className={classes.item}>
      <div className={classes.itemContent}>
        <div className={classes.left}>
          <img className={classes.thumbnail} src={thumbnail} alt={title} />
          <h4>{title}</h4>
        </div>
        <div className={classes.right}>
          <div className={classes.amountControl}>
            <button onClick={decrementItem}>-</button>
            <div>{`${amount}`}</div>
            <button onClick={incrementItem}>+</button>
          </div>
          <div className={classes.price}>
            {price}
            <span>₽</span>
          </div>
          <div className={classes.deleteIcon}>
            <img src={deleteIcon} alt='Delete an item' onClick={handleShowModal} />
          </div>
        </div>
      </div>
    </div>
  )
}
