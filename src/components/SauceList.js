import React from 'react';
import Items from './items/Items.js';
import './css/Cards.css';
import './css/IngredientList.css';

class SauceList extends React.Component {
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
      <div className="cards" >
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Ranch_1WvD0UgUFry.jpg'
              text='고소한 마요네즈와 레몬즙의 만남! <br>고소함이 두배!'
              label='랜치'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Mayonnaise_IorDhbAaH9.jpg'
              text='말이 필요없는 고소함의 대명사,<br>마요네즈 소스'
              label='마요네즈'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetOnion_7DByFJGkdeG.jpg'
              text='써브웨이만의 특제 레시피로 만든<br>달콤한 양파소스'
              label='스위트 어니언'
            />
          </ul>
          <ul className="cards__items">
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/HoneyMustard_xWq9emddu.jpg'
              text='겨자씨가 아낌없이 들어간<br>달콤한 머스타드 소스'
              label='허니 머스타드'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetChilli_YdLgIh59_.jpg'
              text='멕시코 고추와 사과퓨레의 환상적인 조화!<br>기분좋은 달콤함'
              label='스위트 칠리'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/HotChilli_FNB2rG6i_lgO.jpg'
              text='매운맛을 보고싶다면?<br>태국고추로 만든 써브웨이만의 매운맛'
              label='핫 칠리'
            />
          </ul>
          <ul className="cards__items">
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SouthwestChipotle_evHmc1sAV.jpg'
              text='태국 고추 핫칠리와 고소한 마요네즈가 만난<br>이국적인 매콤한 맛'
              label='사우스웨스트 치플레'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/YellowMustard_4sWnu2bRTHfU.jpg'
              text='겨자씨로 만든 오리지날 머스타드 소스'
              label='머스타드'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Horseradish_VCf6X7rVHd.jpg'
              text='고소한 마요네즈와 고추냉이의 이색적인 만남!<br>매니아층을 사로잡은 매력No.1 소스'
              label='홀스래디쉬'
            />
          </ul>
          <ul className="cards__items">
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/OliveOil__Rj4aky7t2u.jpg'
              text='담백하고 깔끔하게 즐기고 싶다면<br>주저하지 말고 올리브오일'
              label='올리브 오일'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/RedWineVinaigrette_PhvQXNA9Kk.jpg'
              text='레드와인을 발효시켜 풍미가 가득한 식초'
              label='레드와인 식초'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Salt_01anG_qsoip.jpg'
              text=''
              label='소금'
            />
          </ul>
          <ul className="cards__items">
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/BlackPepper_0uM6UAZ2hZq.jpg'
              text=''
              label='후추'
            />
            <Items
              src='https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SmokeBBQ_yymSEzkcU.jpg'
              text='스모크 향과 달콤한 바비큐의 완벽한 조화'
              label='스모크 바비큐'
            />
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default SauceList;