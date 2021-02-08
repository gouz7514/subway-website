import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Ingredients from './components/pages/Ingredients';
import Combinations from './components/pages/Combinations';
import Signup from './components/pages/Signup';
import Vegetable from './components/pages/Vegetable';
import Bread from './components/pages/Bread';
import Cheese from './components/pages/Cheese';
import Sauce from './components/pages/Sauce';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/subway-website/' exact component={Home}/>
        <Route path='/subway-website/ingredients' exact component={Ingredients}/>
        <Route path='/subway-website/ingredients/bread' exact component={Bread}/>
        <Route path='/subway-website/ingredients/vegetable' component={Vegetable}/>
        <Route path='/subway-website/ingredients/cheese' component={Cheese}/>
        <Route path='/subway-website/ingredients/sauce' component={Sauce}/>
        <Route path='/subway-website/combinations' component={Combinations}/>
        <Route path='/subway-website/sign-up' component={Signup}/>
      </Switch>
      </Router>
    </div>
    </BrowserRouter>
  )
}

export default App;
