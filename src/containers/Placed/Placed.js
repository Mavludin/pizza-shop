import classes from './Placed.module.css'

import car from '../../assets/images/car.svg'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useTranslation } from 'react-i18next'

export const Placed = ({ title }) => {
  useDocumentTitle(title)

  const { t } = useTranslation()

  return (
    <div className={classes.placed}>
      <img src={car} alt='pizza car' />
      <h1>{t('heading.placed')}</h1>
    </div>
  )
}
