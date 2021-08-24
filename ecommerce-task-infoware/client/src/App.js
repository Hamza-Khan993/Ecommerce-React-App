import React, { Fragment } from 'react'
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/products/Products'
import AuthState from './context/auth/AuthState';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Alerts from './components/layout/Alerts';
import AlertState from './context/alert/AlertState';
import Footer from './components/layout/Footer';

import './App.css';
import ProductShow from './components/pages/products/ProductShow';
// import ProductItems from './components/pages/products/ProductItems';

function App() {

  return (
    <AuthState>
      <AlertState>

        <Router>
          <Fragment>
            <Navbar />
            <div className="">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/product/:id" component={ProductShow} />

                {/* <Route exact path="/" component={ProductItems} /> */}

              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}



export default App;
