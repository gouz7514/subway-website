import React from 'react'

function BreadItems(props) {
  return (
    <>
      <li className="bread__item">
        <div className="bread__item__link">
          <figure className="bread__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt={props.label+' 이미지'} className="cards__item__img" />
          </figure>
          <div className="bread__item__info">
            <h5 className="bread__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default BreadItems;