import { OrangeButton } from '../../../../components/Styled/OrangeButton'
import classes from './Products.module.css'

export const ProductItem = ({
  thumbnail,
  title,
  description,
  price,
  addToCart,
  incrementTheCart,
}) => {
  return (
    <figure className={classes.ProductItem}>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <figcaption className={classes.ProductContent}>
        <div className={classes.Top}>
          <h2>{title}</h2>
          <p className={classes.Description}>{description}</p>
        </div>
        <div className={classes.Bottom}>
          <p className={classes.Price}>
            <span>Цена: </span>
            {price} ₽
          </p>
          <OrangeButton
            onClick={() => {
              addToCart()
              incrementTheCart()
            }}>
            + Добавить
          </OrangeButton>
        </div>
      </figcaption>
    </figure>
  )
}
