import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Ingredients from './components/pages/Ingredients';
import Combinations from './components/pages/Combinations';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/subway-website/' exact component={Home}/>
        <Route path='/subway-website/ingredients' component={Ingredients}/>
        <Route path='/subway-website/combinations' component={Combinations}/>
        <Route path='/subway-website/sign-up' component={Signup}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
