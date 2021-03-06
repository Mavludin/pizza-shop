import { createRef, useState } from 'react';
import './App.css'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { HomePage } from './containers/Homepage/HomePage'
import { Checkout } from './containers/Checkout/Checkout'
import { Placed } from './containers/Placed/Placed'
import { Footer } from './components/Footer/Footer'

import { endpoints } from './shared/routerEndpoints'
import { LoginPopUp } from './containers/LoginPopUp/LoginPopUp'

export const App = () => {

  const mainHeading = createRef()
  const [isLoginPopUpVisible, setIsLoginPopUpVisible] = useState(false)

  return (
    <BrowserRouter>
      <div className='App'>
        <Header mainHeading={mainHeading} setIsLoginPopUpVisible={setIsLoginPopUpVisible} />
        <main>
          <div className='container'>
            <Switch>
              <Route exact path={`${endpoints.PLACED}`} component={Placed} />
              <Route exact path={endpoints.CHECKOUT} component={Checkout} />
              <Route
                exact
                path={endpoints.HOMEPAGE}
                render={(props) => <HomePage mainHeading={mainHeading} {...props} />}
              />
            </Switch>
          </div>
        </main>
        <Footer />
        {
          isLoginPopUpVisible ? (
            <LoginPopUp
              setIsLoginPopUpVisible={setIsLoginPopUpVisible}
              isLoginPopUpVisible={isLoginPopUpVisible}
            />
          ) : null
        }
      </div>
    </BrowserRouter>
  )
}
