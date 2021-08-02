import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { OrangeButton } from '../../../../components/Styled/OrangeButton'
import { detectJustAddedPizza } from '../../../../store/slices/cart'
import classes from './Products.module.css'

export const ProductItem = ({
  thumbnail,
  title,
  description,
  price,
  addToCart,
  incrementTheCart,
  setOpenSnackBar,
  openSnackBar
}) => {

  const { t } = useTranslation()

  const handleSnackBar = () => {
    if (!openSnackBar) setOpenSnackBar(true)
    return
  }

  const dispatch = useDispatch()

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
            <span>{t('products.price')}</span>
            {price} ₽
          </p>
          <OrangeButton
            onClick={() => {
              addToCart()
              incrementTheCart()
              handleSnackBar()
              dispatch(detectJustAddedPizza(title))
            }}>
            {t('products.addButton.title')}
          </OrangeButton>
        </div>
      </figcaption>
    </figure>
  )
}
