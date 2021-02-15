import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
    <div className='App'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/subway-website/' exact component={Home}/>
        <Route path='/subway-website/ingredients' exact component={Ingredients}/>
        <Route path='/subway-website/ingredients/bread' component={Bread}/>
        <Route path='/subway-website/ingredients/vegetable' component={Vegetable}/>
        <Route path='/subway-website/ingredients/cheese' component={Cheese}/>
        <Route path='/subway-website/ingredients/sauce' component={Sauce}/>
        <Route path='/subway-website/combinations' component={Combinations}/>
        <Route path='/subway-website/sign-up' component={Signup}/>
      </Switch>
      </Router>
    </div>
  )
}

// TODO : 이 부분 수정 필요함. react router는 새로고침이 아니니까 새로운 방법 찾아내야 함
window.addEventListener('load', (event) => {
  console.log('DOMContentLoaded!');
  const images = document.querySelectorAll("img"); // 모든 이미지 파일 선택

  const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log("reached!");
  if (entry.isIntersecting) {
          const img = entry.target; // 이미지 엘리멘트를 가져옵니다.
          const src = img.getAttribute("data-lazy");
          img.setAttribute("src", src);
          observer.disconnect();
        }
      });
    });
     io.observe(target);
  };

  images.forEach(lazyLoad);
});

export default App;
