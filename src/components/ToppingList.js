import React from 'react'
import Items from './items/Items';
import './css/Cards.css';
import './css/IngredientList.css';

class ToppingList extends React.Component {
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
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/DoubleUp_u4zycExZQSg.jpg'
                text='주 재료를 2배로<br>
                더 푸짐하게 즐기세요'
                label='더블업'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/BaconBits_zkiITZaJE.jpg'
                text='짭쪼름한 베이컨 비츠로 맛의 화룡점정을!'
                label='베이컨 비츠'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/Shrimp_Z3EtTddNeU6.jpg'
                text='새우의 탱글함과 신선함을 2배로!'
                label='쉬림프 더블업'
              />
            </ul>
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/EggMayo_KuMFX0oed.jpg'
                text='신선한 달걀과<br>
                고소한 마요네즈의 만남'
                label='에그마요'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/Omelet_aducoO-JG.jpg'
                text='더 부드럽게, 더 고소하게'
                label='오믈렛'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/Avocado_8Q5Y96DN_.jpg'
                text='숲속의 버터 아보카도로 영양 UP'
                label='아보카도'
              />
            </ul>
            <ul className="cards__items">
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/Bacon_OfelFSiwj.jpg'
                text='진한 풍미와 바삭한 베이컨'
                label='베이컨'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/Pepperoni_IU5ww8W0l.jpg'
                text='입맛 당기는 페퍼로니로<br>
                써브웨이를 더 맛있게!'
                label='페퍼로니'
              />
              <Items
                src='https://ik.imagekit.io/fsio0iplxb8/subway-topping/DoubleCheese_Ky4dgzxgh.jpg'
                text='고소한 치즈를 2배로!'
                label='더블치즈'
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ToppingList;