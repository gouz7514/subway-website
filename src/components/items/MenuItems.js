import React from 'react'

function MenuItems(props) {
  return (
    <>
      <li className="ingredient__item">
        <div className="ingredient__item__link large">
          <figure className="ingredient__item__pic-wrap" data-category={props.label}>
            <img src={props.src+'?tr=w-400,h-300,bl-30,q-50'} alt={props.label+' 이미지'} className="cards__item__img" data-lazy={props.src}/>
          </figure>
          <div className="ingredient__item__info large">
            <h5 className="ingredient__item__text">{props.text.replaceAll('<br>', '\n')}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default MenuItems;