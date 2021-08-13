import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './Footer.module.css'

export const Footer = () => {

  const { t } = useTranslation()
  const footerLinks = JSON.parse(t('footer.navLinks', {returnObjects: true}))

  return (
    <footer className={classes.mainFooter}>
      <div className={`container ${classes.footerContent}`}>
        {footerLinks.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {item.routes.map((item, pos) => {
                  return (
                    <li key={pos}>
                      <Link to='/'>{item}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </footer>
  )
}
