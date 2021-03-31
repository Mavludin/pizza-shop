import { Link } from 'react-router-dom'
import { footerLinks } from '../../shared/projectData'

import classes from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={`container ${classes.Footer}`}>
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
