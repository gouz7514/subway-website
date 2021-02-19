import React from 'react';
import BreadItems from './items/BreadItems';
import './Cards.css';
import './IngredientList.css';

class BreadList extends React.Component {
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
      <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/HoneyOat_UDQ6TNX8wy.jpg'
              text='고소한 위트빵에 오트밀 가루를 묻혀<br>고소함과 식감이 두배로'
              label='허니오트'
            />
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/HeartyItalian_YpydItrCh8y.jpg'
              text="부드러운 화이트빵에 옥수수가루를 묻혀<br>겉은 바삭하고 고소하며 속은 부드럽게"
              label='하티 이탈리안'
            />
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/Wheat_hBM-PBPpH.jpg'
              text="9가지 곡물로 만들어<br>건강하고 고소한 맛의 곡물빵"
              label='위트'
            />
          </ul>
          <ul className="cards__items">
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/ParmesanOregano_Z-N7c3fUPWP.jpg'
              text="부드러운 화이트빵에
              파마산 오레가노 시즈닝을 묻혀 허브향 가득"
              label='파마산 오레가노'
            />
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/White_dG2DtK4HgmS.jpg'
              text="가장 클래식한 빵으로<br>부드러운 식감이 매력 포인트"
              label='화이트'
            />
            <BreadItems
              src='https://ik.imagekit.io/fsio0iplxb8/subway-bread/FlatBread_0hrnT_OsX.jpg'
              text="이름처럼 납작 모양에<br>피자도우처럼 쫀득한 맛이 일품"
              label='플랫 브레드'
            />
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default BreadList;