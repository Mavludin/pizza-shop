import { Link } from 'react-router-dom'

import classes from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={`container ${classes.Footer}`}>
        <div>
          <h3>Online store</h3>
          <ul>
            <li>
              <Link to='/'>Why is our pizza yummy?</Link>
            </li>
            <li>
              <Link to='/'>Tours and master-classes</Link>
            </li>
            <li>
              <Link to='/'>Corporate orders</Link>
            </li>
            <li>
              <Link to='/'>Investments</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Online store</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Partners</h3>
          <ul>
            <li>
              <Link to='/'>Spider man</Link>
            </li>
            <li>
              <Link to='/'>Batman</Link>
            </li>
            <li>
              <Link to='/'>Splinter</Link>
            </li>
            <li>
              <Link to='/'>Benjamin</Link>
            </li>
            <li>
              <Link to='/'>Trevor</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Address</h3>
          <ul>
            <li>
              <Link to='/'>Building 101</Link>
            </li>
            <li>
              <Link to='/'>Central Avenue</Link>
            </li>
            <li>
              <Link to='/'>LA - 902722</Link>
            </li>
            <li>
              <Link to='/'>United States</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
