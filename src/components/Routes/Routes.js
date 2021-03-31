import { Route, Switch } from 'react-router'
import { Checkout } from '../../containers/Checkout/Checkout'
import { HomePage } from '../../containers/Homepage/HomePage'
import { Placed } from '../../containers/Placed/Placed'
import { endpoints } from '../../shared/routerEndpoints'

export const Routes = ({ mainHeading }) => {
  return (
    <div className='container'>
      <Switch>
        <Route
          exact
          path={`${endpoints.PLACED}`}
          render={(props) => <Placed title={'Заказ пиццы онлайн | Заказ оформлен'} {...props} />}
        />
        <Route
          exact
          path={endpoints.CHECKOUT}
          render={(props) => <Checkout title='Заказ пиццы онлайн | Оформление заказа' {...props} />}
        />
        <Route
          exact
          path={endpoints.HOMEPAGE}
          render={(props) => (
            <HomePage title='Заказ пиццы онлайн' mainHeading={mainHeading} {...props} />
          )}
        />
      </Switch>
    </div>
  )
}
