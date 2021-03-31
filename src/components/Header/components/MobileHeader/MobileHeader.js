import { Link } from 'react-router-dom'
import classes from '../../Header.module.css'
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

  if (mobileMenuFlag) mobileMenuClasses = `${classes.MobileMenu} ${classes.ShowMobileMenu}`
  else mobileMenuClasses = classes.MobileMenu

  const amountOfPizzas = useSelector((state) => state).amountOfPizzas

  return (
    <>
      <div onClick={showMobileMenu} className={classes.Hamb}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>
      </div>
      <div className={mobileMenuClasses}>
        <div className={classes.Logo}>
          <Link onClick={closeMobileMenu} to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <nav className={classes.TopMenu}>
          <ul>
            <li>
              <Link onClick={scrollToMainHeading} to='/'>
                К пицце
              </Link>
            </li>
            <li>
              <Link to='/'>Закуски</Link>
            </li>
          </ul>
        </nav>

        <div onClick={closeMobileMenu}>
          <HighlightOffIcon />
        </div>

        <OrangeButton onClick={() => setIsLoginPopUpVisible(true)}>Вход</OrangeButton>

        <div className={classes.Cart}>
          <Link to='/checkout'>
            Корзина
            <div className={classes.Divider}></div>
            <div className={classes.CartCounter}>{amountOfPizzas}</div>
          </Link>
        </div>
      </div>
    </>
  )
}
