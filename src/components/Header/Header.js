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
import { useTranslation } from 'react-i18next'

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

  const { t, i18n } = useTranslation()

  const [lngs, setLngs] = useState(
    {
      en: { nativeName: 'EN' },
      ru: { nativeName: 'RU' },
    }
  )

  console.log(lngs)

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return "Couldn't get the languages"
      setLngs(ret)
    })
  }, [i18n.services.backendConnector.backend])

  const handleLangChange = (lng) => {
    if (i18n.language !== lng) i18n.changeLanguage(lng)
    else return
  }

  return (
    <header className={classes.mainHeader} style={{ boxShadow: boxShadow }}>
      <div className={`container ${classes.headerContent}`}>
        <MobileHeader
          scrollToMainHeading={scrollToMainHeading}
          setIsLoginPopUpVisible={setIsLoginPopUpVisible}
          showMobileMenu={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
          mobileMenuFlag={mobileMenuFlag}
          setMobileMenuFlag={setMobileMenuFlag}
        />

        <div className={classes.left}>
          <div className={classes.logo}>
            <Link onClick={closeMobileMenu} to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <nav className={classes.topMenu} aria-label="primary">
            <ul>
              <li>
                <Link onClick={scrollToMainHeading} to='/'>
                  {t('header.nav.toPizza')}
                </Link>
              </li>
              <li>
                <Link to='/'>
                  {t('header.nav.snacks')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <form role="search">
          <SearchIcon />
          <label htmlFor="headerSearch"></label>
          <input type='search' name='search' id="headerSearch" placeholder={t('header.form.searchPlaceholder')} />
        </form>

        {mobileView ? null : (
          <div className={classes.right}>
            <div className={classes.lng}>
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
                  type='button'
                  onClick={() => handleLangChange(lng)}>
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
            <OrangeButton onClick={() => setIsLoginPopUpVisible(true)}>
              {t('header.orangeButton.logIn')}
            </OrangeButton>
            <div className={classes.cart}>
              <Link to='/checkout'>
                {t('header.nav.cart')}
                <div className={classes.divider}></div>
                <div className={classes.cartCounter}>{amountOfPizzas}</div>
              </Link>
            </div>
          </div>
        )}

        <img className={classes.avatar} src={avatar} alt='Avatar' />
      </div>

      {mobileMenuFlag ? <Overlay onClick={closeMobileMenu} /> : null}
    </header>
  )
}
