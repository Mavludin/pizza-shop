import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import classes from './Header.module.css'

import avatar from '../../assets/images/ninja.svg'
import logo from '../../assets/images/logo.svg'

import Scroll from 'react-scroll'

import { Link, useHistory, useLocation } from 'react-router-dom'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import SearchIcon from '@material-ui/icons/Search'
import { OrangeButton } from '../Styled/OrangeButton'

export const Header = ({ totCount, mainHeading, setIsLoginPopUpVisible }) => {
  const [boxShadow, setBoxShadow] = useState('none')

  const totalCount = useSelector((state) => state.totalCount)
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false)

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const handleBoxShadow = () => {
      if (window.scrollY > 0 && window.innerWidth >= 600) {
        setBoxShadow('rgb(204, 204, 204) 0px 2px 10px')
      } else {
        setBoxShadow('none')
      }
    }

    window.addEventListener('scroll', handleBoxShadow)

    return () => window.removeEventListener('scroll', handleBoxShadow)
  }, [])

  const scrollToMainHeading = () => {
    if (location.pathname !== '/') {
      history.push('/')
      setTimeout(() => Scroll.animateScroll.scrollTo(parseInt(mainHeading.current.offsetTop - 90)), 500)
    } else Scroll.animateScroll.scrollTo(parseInt(mainHeading.current.offsetTop - 90))
  }

  const ifCartNotEmpty = (e) => {
    if (totCount === 0) {
      e.preventDefault()
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuFlag(false)
  }

  const showMobileMenu = () => {
    setMobileMenuFlag(true)
  }

  let counterClass = ''

  if (localStorage['amountOfProducts'] > 0) {
    counterClass = classes.Counter
  }

  let mobileMenuClasses = ''

  if (mobileMenuFlag) mobileMenuClasses = `${classes.MobileMenu} ${classes.ShowMobileMenu}`
  else mobileMenuClasses = classes.MobileMenu

  return (
    <header style={{ boxShadow: boxShadow }}>
      <div className={`container ${classes.HeaderWrap}`}>
        <div onClick={showMobileMenu} className={classes.Hamb}>
          <div className={classes.Bar1}></div>
          <div className={classes.Bar2}></div>
          <div className={classes.Bar3}></div>
        </div>

        <div className={classes.MobileCart}>
          <Link onClick={(e) => ifCartNotEmpty(e)} to='/checkout'>
            <ShoppingCartIcon />
            <span className={counterClass}>{totalCount > 0 ? totalCount : localStorage['amountOfProducts']}</span>
          </Link>

          <img className={classes.Avatar} src={avatar} alt='Avatar' />
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
                  Go to pizza
                </Link>
              </li>
              <li>
                <Link to="/">Snacks</Link>
              </li>
            </ul>
          </nav>

          <div onClick={closeMobileMenu}>
            <HighlightOffIcon />
          </div>

          <form>
            <SearchIcon />
            <input type='search' name='search' placeholder='Live search' />
          </form>
        </div>

        <div className={classes.HeaderLeft}>
          <div className={classes.Logo}>
            <Link onClick={closeMobileMenu} to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <nav className={classes.TopMenu}>
            <ul>
              <li>
                <Link onClick={scrollToMainHeading} to='/'>
                  Go to pizza
                </Link>
              </li>
              <li>
                <Link to='/'>Snacks</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes.HeaderMid}>
          <form>
            <SearchIcon />
            <input type='search' name='search' placeholder='Live search' />
          </form>
        </div>

        <div className={classes.HeaderRight}>

          <OrangeButton onClick={()=>setIsLoginPopUpVisible(true)}>Log In</OrangeButton>

          <div className={classes.Cart}>
            <Link onClick={(e) => ifCartNotEmpty(e)} to='/checkout'>
              <ShoppingCartIcon />
              <span className={counterClass}>{totalCount > 0 ? totalCount : localStorage['amountOfProducts']}</span>
            </Link>
            <img className={classes.Avatar} src={avatar} alt='Avatar' />
          </div>
        </div>
      </div>

      {mobileMenuFlag ? <div onClick={closeMobileMenu} className={classes.Overlay}></div> : null}
    </header>
  )
}
