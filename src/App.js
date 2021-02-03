import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/subway-website/' exact component={Home}/>
        <Route path='/subway-website/services' component={Services}/>
        <Route path='/subway-website/products' component={Products}/>
        <Route path='/subway-website/sign-up' component={Signup}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
