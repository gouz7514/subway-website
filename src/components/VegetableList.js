import React from 'react'
import Items from './items/Items.js';
import './Cards.css';
import './IngredientList.css';

class VegetableList extends React.Component {
  componentDidMount() {
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        const src = image.getAttribute("data-lazy");
        image.setAttribute("src", src);
        observer.unobserve(image);
      })
    })

    images.forEach((image) => {
      observer.observe(image);
    })
  }
  render() {
    return (
      <div className='cards'>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/lettuce_47kOcepHh6uc.jpg'
                text='5kcal'
                label='양상추'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/tomato_uhyH3wkbk.jpg'
                text='5kcal'
                label='토마토'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/cucumber_HkESQErEUVh.jpg'
                text='5kcal'
                label='오이'
              />           
            </ul>
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/peppers_k2g1Bp0FE.jpg'
                text='5kcal'
                label='피망'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/onions_Pv1QtwFnveG.jpg'
                text='5kcal'
                label='양파'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/pickle_SNJe83bINwy.jpg'
                text='5kcal'
                label='피클'
              />           
            </ul>
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/olive_y6cJTNCPM.jpg'
                text='5kcal'
                label='올리브'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/jalapeno_DFbotB0pkS.jpg'
                text='5kcal'
                label='할라피뇨'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/avocado_Ha_942uzx.jpg'
                text='60kcal'
                label='아보카도'
              />           
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default VegetableList;