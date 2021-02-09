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
              src='../images/vegetables/lettuce.jpg'
              text='양상추 설명'
              label='양상추'
            />
            <VegetableItems
              src='../images/vegetables/tomato.jpg'
              text='토마토 설명'
              label='토마토'
            />
            <VegetableItems
              src='../images/vegetables/cucumber.jpg'
              text='오이 설명'
              label='오이'
            />           
          </ul>
          <ul className="cards__items">
            <VegetableItems
              src='../images/vegetables/peppers.jpg'
              text='피망 설명'
              label='피망'
            />
            <VegetableItems
              src='../images/vegetables/onions.jpg'
              text='양파 설명'
              label='양파'
            />
            <VegetableItems
              src='../images/vegetables/pickle.jpg'
              text='피클 설명'
              label='피클'
            />           
          </ul>
          <ul className="cards__items">
            <VegetableItems
              src='../images/vegetables/olive.jpg'
              text='올리브 설명'
              label='올리브'
            />
            <VegetableItems
              src='../images/vegetables/jalapeno.jpg'
              text='할라피뇨 설명'
              label='할라피뇨'
            />
            <VegetableItems
              src='../images/vegetables/avocado.jpg'
              text='아보카도 설명'
              label='아보카도'
            />           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VegetableList;