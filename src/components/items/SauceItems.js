import React from 'react'

function SauceItems(props) {
  return (
    <>
      <li className="ingredient__item">
        <div className="ingredient__item__link">
          <span className="ingredient__item__pic-wrap" data-category={props.label}>
            <img src={props.src+'?tr=w-400,h-300,bl-30,q-50'} alt={props.label+' 이미지'} className="cards__item__img" data-lazy={props.src}/>
          </span>
          <div className="ingredient__item__info">
            <div className="ingredient__item__text__wrapper">
              <h5 className="ingredient__item__text">{props.text.replace('<br>', '\n')}</h5>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default SauceItems;