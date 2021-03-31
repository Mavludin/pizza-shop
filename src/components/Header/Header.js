import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import classes from './Header.module.css'

import avatar from '../../assets/images/ninja.svg'
import logo from '../../assets/images/logo.svg'

import Scroll from 'react-scroll'

import { Link, useHistory, useLocation } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search'
import { OrangeButton } from '../Styled/OrangeButton'
import { MobileHeader } from './components/MobileHeader/MobileHeader'
import { Overlay } from '../Styled/Overlay'

export const Header = ({ mainHeading, setIsLoginPopUpVisible }) => {
  const [boxShadow, setBoxShadow] = useState('none')

  const amountOfPizzas = useSelector((state) => state).amountOfPizzas
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false)
  const [mobileView, setMobileView] = useState(false)

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const handleBoxShadow = () => {
      if (window.scrollY > 0 && window.innerWidth >= 660) {
        setBoxShadow('rgb(204, 204, 204) 0px 2px 10px')
      } else {
        setBoxShadow('none')
      }
    }
    window.addEventListener('scroll', handleBoxShadow)
    return () => window.removeEventListener('scroll', handleBoxShadow)
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 660) {
      setMobileView(true)
    } else setMobileView(false)

    const handleInnerWidth = () => {
      if (window.matchMedia('(max-width: 660px)').matches) {
        setMobileView(true)
      } else {
        if (mobileView) setMobileView(false)
      }
    }
    window.addEventListener('resize', handleInnerWidth)
    return () => window.removeEventListener('resize', handleInnerWidth)
  }, [mobileView, mobileMenuFlag])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuFlag) setMobileMenuFlag(false)
    }
    document.addEventListener('keyup', handleEscape)
    return () => window.removeEventListener('keyup', handleEscape)
  }, [mobileMenuFlag])

  const scrollToMainHeading = () => {
    if (location.pathname !== '/') {
      history.push('/')
      setTimeout(
        () => Scroll.animateScroll.scrollTo(parseInt(mainHeading.current.offsetTop - 90)),
        500
      )
    } else Scroll.animateScroll.scrollTo(parseInt(mainHeading.current.offsetTop - 90))
  }

  const closeMobileMenu = () => {
    setMobileMenuFlag(false)
  }

  const showMobileMenu = () => {
    setMobileMenuFlag(true)
  }

  return (
    <header className={classes.MainHeader} style={{ boxShadow: boxShadow }}>
      <div className={`container ${classes.HeaderContent}`}>
        <MobileHeader
          scrollToMainHeading={scrollToMainHeading}
          setIsLoginPopUpVisible={setIsLoginPopUpVisible}
          showMobileMenu={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
          mobileMenuFlag={mobileMenuFlag}
        />

        <div className={classes.Left}>
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
        </div>

        <form>
          <SearchIcon />
          <input type='search' name='search' placeholder='Что ищем?' />
        </form>
        
        {mobileView ? null : (
          <div className={classes.Right}>
            <OrangeButton onClick={() => setIsLoginPopUpVisible(true)}>Вход</OrangeButton>
            <div className={classes.Cart}>
              <Link to='/checkout'>
                Корзина
                <div className={classes.Divider}></div>
                <div className={classes.CartCounter}>{amountOfPizzas}</div>
              </Link>
            </div>
          </div>
        )}

        <img className={classes.Avatar} src={avatar} alt='Avatar' />
      </div>

      {mobileMenuFlag ? <Overlay onClick={closeMobileMenu} /> : null}
    </header>
  )
}
