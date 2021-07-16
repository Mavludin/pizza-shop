import { Link } from 'react-router-dom'
import classes from '../../Header.module.css'
import mobile from './MobileHeader.module.css'
import logo from '../../../../assets/images/logo.svg'

import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { OrangeButton } from '../../../Styled/OrangeButton'
import { useSelector } from 'react-redux'

export const MobileHeader = ({
  closeMobileMenu,
  showMobileMenu,
  scrollToMainHeading,
  mobileMenuFlag,
  setIsLoginPopUpVisible,
}) => {
  let mobileMenuClasses = ''

  if (mobileMenuFlag) mobileMenuClasses = `${mobile.mobileMenu} ${mobile.showMobileMenu}`
  else mobileMenuClasses = mobile.mobileMenu

  const amountOfPizzas = useSelector((state) => state).amountOfPizzas

  return (
    <>
      <div onClick={showMobileMenu} className={mobile.hamb}>
        <div className={mobile.bar1}></div>
        <div className={mobile.bar2}></div>
        <div className={mobile.bar3}></div>
      </div>
      <div className={mobileMenuClasses}>
        <div className={classes.logo}>
          <Link onClick={closeMobileMenu} to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <nav className={classes.topMenu} aria-label="mobile">
          <ul>
            <li>
              <Link onClick={() => { scrollToMainHeading(); closeMobileMenu(); } } to='/'>
                К пицце
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileMenu} to='/'>Закуски</Link>
            </li>
          </ul>
        </nav>

        <div onClick={closeMobileMenu}>
          <HighlightOffIcon />
        </div>

        <OrangeButton onClick={() => setIsLoginPopUpVisible(true)}>Вход</OrangeButton>

        <div className={classes.cart}>
          <Link to='/checkout' onClick={closeMobileMenu}>
            Корзина
            <div className={classes.divider}></div>
            <div className={classes.cartCounter}>{amountOfPizzas}</div>
          </Link>
        </div>
      </div>
    </>
  )
}
