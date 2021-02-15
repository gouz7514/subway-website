import React from 'react'

function VegetableItems(props) {
  return (
    <>
      <li className="ingredient__item">
        <div className="ingredient__item__link">
          <figure className="ingredient__item__pic-wrap" data-category={props.label}>
            <img src={props.presrc} alt={props.label+' 이미지'} className="cards__item__img" data-lazy={props.src}/>
          </figure>
          <div className="ingredient__item__info">
            <div className="ingredient__item__text__wrapper">
              <h5 className="ingredient__item__text bigger">{props.text}</h5>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default VegetableItems;