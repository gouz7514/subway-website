import React from 'react'

function CombItems(props) {
  return (
    <>
      <div className="combination__item">
        <div className="combination__item__link">
          <figure className="combination__item__pic-wrap" data-category={props.label}>
            <img src={props.src+'?tr=w-400,h-300,bl-30,q-50'} alt={props.label+' 이미지'} className="combination__item__img" data-lazy={props.src}/>
          </figure>
        </div>
      </div>
    </>
  )
}

export default CombItems;