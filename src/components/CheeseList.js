import React from 'react';
import CheeseItems from './items/CheeseItems';
import './Cards.css';
import './IngredientList.css';

function CheeseList() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CheeseItems
              presrc='../images/loading.gif'
              src='../images/cheeses/AmericanCheese.jpg'
              text='40kcal'
              label='아메리칸 치즈'
              data-src='../images/loading.gif'
            />
            <CheeseItems
              presrc='../images/loading.gif'
              src='../images/cheeses/ShreddedCheese.jpg'
              text='50kcal'
              label='슈레드 치즈'
              data-src='../images/loading.gif'
            />
            <CheeseItems
              presrc='../images/loading.gif'
              src='../images/cheeses/MozzarellaCheese.jpg'
              text='44kcal'
              label='모차렐라 치즈'
              data-src='../images/loading.gif'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CheeseList;