import React from 'react'
import CombItems from './items/CombItems.js';
import './css/Combs.css';
import './css/CombList.css';

class CombList extends React.Component {
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
      <div className="combs">
        <h2 className="combs__text">써브웨이 꿀조합 모음</h2>
        <div className="combs__container">
          <div className="combs__wrapper">
            <div className="combs__items__wrapper">
              <div className="combs__items">
                <div className="combs__menu">
                  <CombItems 
                    src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/PulledPork_iJQFZmcUy.jpg'
                    label='풀드포크'
                  />
                </div>
                <div className="combs__sauce">
                  <div className="combs__sauce__item">
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SmokeBBQ_yymSEzkcU.jpg'
                      label='스모크 바비큐'
                    />
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Ranch_1WvD0UgUFry.jpg'
                      label='랜치'
                    />
                  </div>
                </div>
              </div>
              <div className="combs__items">
                <div className="combs__menu">
                  <CombItems 
                    src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayo__A1jLd3k6.jpg'
                    label='에그마요'
                  />
                </div>
                <div className="combs__sauce">
                  <div className="combs__sauce__item">
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetChilli_YdLgIh59_.jpg'
                      label='스위트 칠리'
                    />
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetOnion_7DByFJGkdeG.jpg'
                      label='스위트 어니언'
                    />
                  </div>
                </div>
              </div>
              <div className="combs__items">
                <div className="combs__menu">
                  <CombItems 
                    src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Meatball_xG5Qqboht.jpg'
                    label='미트볼'
                  />
                </div>
                <div className="combs__sauce">
                  <div className="combs__sauce__item">
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetChilli_YdLgIh59_.jpg'
                      label='스위트 칠리'
                    />
                    <CombItems 
                      src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Ranch_1WvD0UgUFry.jpg'
                      label='랜치'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CombList;