import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';

import FrontLayout from './components/FrontLayout';
import ShopLayout from './components/ShopLayout';
import Navs from './components/Navs';
import CartLayout from './components/CartLayout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPasswords from './components/ForgotPasswords';

import { MyContextProvider } from './ContextApi';

function App() {
  return (
    <MyContextProvider>
      <HashRouter>
        <Navs />
        <Switch>
          <Route exact path="/clothing_brand/home" component={FrontLayout} />
          <Route exact path="/clothing_brand/shop" component={ShopLayout} />
          <Route exact path="/clothing_brand/cart" component={CartLayout} />
          <Route exact path="/clothing_brand/signin" component={SignIn} />
          <Route exact path="/clothing_brand/signup" component={SignUp} />
          <Route
            exact
            path="/clothing_brand/forgotpasswords"
            component={ForgotPasswords}
          />
        </Switch>
      </HashRouter>
    </MyContextProvider>
  );
}

export default App;
