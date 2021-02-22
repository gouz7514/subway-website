import React from 'react';
import CardItem from './CardItem';
import './css/Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep insdie the Amazon jungle"
              label='adventure'
              path='/subway-website/ingredients'
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of bali"
              label='luxury'
              path='/subway-website/ingredients'
            />  
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep insdie the Amazon jungle"
              label='adventure'
              path='/subway-website/ingredients'
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of bali"
              label='luxury'
              path='/subway-website/ingredients'
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of bali"
              label='luxury'
              path='/subway-website/ingredients'
            />  
          </ul>
        </div>
      </div>    
    </div>
  )
}

export default Cards;
