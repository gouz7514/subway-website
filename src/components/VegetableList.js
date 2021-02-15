import React from 'react'
import VegetableItems from './items/VegetableItems';
import './Cards.css';
import './IngredientList.css';

function VegetableList() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/lettuce.jpg'
              text='5kcal'
              label='양상추'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/tomato.jpg'
              text='5kcal'
              label='토마토'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/cucumber.jpg'
              text='5kcal'
              label='오이'
            />           
          </ul>
          <ul className="cards__items">
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/peppers.jpg'
              text='5kcal'
              label='피망'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/onions.jpg'
              text='5kcal'
              label='양파'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/pickle.jpg'
              text='5kcal'
              label='피클'
            />           
          </ul>
          <ul className="cards__items">
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/olive.jpg'
              text='5kcal'
              label='올리브'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/jalapeno.jpg'
              text='5kcal'
              label='할라피뇨'
            />
            <VegetableItems
              presrc='../images/loading.gif'
              src='../images/vegetables/avocado.jpg'
              text='60kcal'
              label='아보카도'
            />           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VegetableList;