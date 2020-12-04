import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './containers/Homepage/HomePage';
import { Checkout } from './containers/Checkout/Checkout';
import { Thank } from './containers/Thank/Thank';
import { Footer } from './components/Footer/Footer';

import { endpoints } from './utils/routerEndpoints';

const App = () => {

  const mainHeading = React.createRef();

  return (
    <BrowserRouter>
      <div className='App'>
        <Header mainHeading={mainHeading} />
        <main>
          <div className="container">
            <Switch>
              <Route exact path={`${endpoints.THANK}`} component={Thank} />
              <Route exact path={endpoints.CHECKOUT} component={Checkout} />
              <Route 
                exact path={endpoints.HOMEPAGE} 
                render={(props) => (<HomePage mainHeading={mainHeading} {...props} />)} 
              />
            </Switch>
          </div>
        </main>
        <Footer />

      </div>
    </BrowserRouter>
  );

}

export default App;
