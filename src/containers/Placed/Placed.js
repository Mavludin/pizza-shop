import classes from './Placed.module.css'

import car from '../../assets/images/car.svg'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
// import { Trans } from 'react-i18next'

export const Placed = ({ title }) => {
  useDocumentTitle(title)

  return (
    <div className={classes.placed}>
      <img src={car} alt='pizza car' />
      <p className={classes.desc}>Мы уже едем к вам!</p>

      {/* <Trans i18nKey="list_map">
        <ul>
          <li>Milo</li>
          <li>Simba</li>
        </ul>
      </Trans> */}
    </div>
  )
}
