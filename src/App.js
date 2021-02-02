import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return <div>
      <h1>I love {name}</h1>
      <img src={picture} alt={name}/>
      <h4>{rating} / 5</h4>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodILike = [
  {
    id : 1,
    name : "Chicken",
    image :
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Fried-Chicken-Leg.jpg",
    rating : 5,
  },
  {
    id : 2,
    name : "Pizza",
    image :
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
    rating : 4,
  }
];

function App() {
  return (
    <div className="App">
      HELLO!
      {foodILike.map(food => <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/>)}
    </div>
  );
}

export default App;
