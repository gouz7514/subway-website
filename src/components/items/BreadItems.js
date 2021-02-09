import React from 'react'

function BreadItems(props) {
  return (
    <>
      <li className="ingredient__item">
        <div className="ingredient__item__link">
          <figure className="ingredient__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt={props.label+' 이미지'} className="cards__item__img" />
          </figure>
          <div className="ingredient__item__info">
            <h5 className="ingredient__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default BreadItems;