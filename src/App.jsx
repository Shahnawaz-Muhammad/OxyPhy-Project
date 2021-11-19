import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//components
import Navbar from './components/Navbar';
import Pricing from './pages/pricing';
import ModalComp from './components/Modal';
import FooterTop from './components/FooterTop';
import FooterEnd from './components/FooterEnd';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/modal' component={ModalComp} />
        </Switch>
        <FooterTop />
        <FooterEnd />
      </Router>
    );
  }
}

export default App;
