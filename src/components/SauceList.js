import React from 'react';
import SauceItems from './items/SauceItems';
import './Cards.css';
import './IngredientList.css';

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
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/Ranch.jpg'
              text='고소한 마요네즈와 레몬즙의 만남! <br>고소함이 두배!'
              label='랜치'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/Mayonnaise.jpg'
              text='말이 필요없는 고소함의 대명사,<br>마요네즈 소스'
              label='마요네즈'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/SweetOnion.jpg'
              text='써브웨이만의 특제 레시피로 만든<br>달콤한 양파소스'
              label='스위트 어니언'
            />
          </ul>
          <ul className="cards__items">
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/HoneyMustard.jpg'
              text='겨자씨가 아낌없이 들어간<br>달콤한 머스타드 소스'
              label='허니 머스타드'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/SweetChilli.jpg'
              text='멕시코 고추와 사과퓨레의 환상적인 조화!<br>기분좋은 달콤함'
              label='스위트 칠리'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/HotChilli.jpg'
              text='매운맛을 보고싶다면?<br>태국고추로 만든 써브웨이만의 매운맛'
              label='핫 칠리'
            />
          </ul>
          <ul className="cards__items">
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/SouthwestChipotle.jpg'
              text='태국 고추 핫칠리와 고소한 마요네즈가 만난<br>이국적인 매콤한 맛'
              label='사우스웨스트 치플레'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/YellowMustard.jpg'
              text='겨자씨로 만든 오리지날 머스타드 소스'
              label='머스타드'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/Horseradish.jpg'
              text='고소한 마요네즈와 고추냉이의 이색적인 만남!<br>매니아층을 사로잡은 매력No.1 소스'
              label='홀스래디쉬'
            />
          </ul>
          <ul className="cards__items">
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/OliveOil.jpg'
              text='담백하고 깔끔하게 즐기고 싶다면<br>주저하지 말고 올리브오일'
              label='올리브 오일'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/RedWineVinaigrette.jpg'
              text='레드와인을 발효시켜 풍미가 가득한 식초'
              label='레드와인 식초'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/Salt.jpg'
              text=''
              label='소금'
            />
          </ul>
          <ul className="cards__items">
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/BlackPepper.jpg'
              text=''
              label='후추'
            />
            <SauceItems
              presrc='../images/loading.gif'
              src='../images/sauces/SmokeBBQ.jpg'
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