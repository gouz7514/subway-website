import React from 'react';
import MenuItems from './items/MenuItems';
import './css/Cards.css';
import './css/IngredientList.css';

class SetList extends React.Component {
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
    return(
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/MintChoco_mNUuwOByG.jpg'
                text='진한 초콜릿에 상쾌한 민트가 퐁당!<br>
                특별한 달콤함에 푹 빠져보세요.'
                label='민트 초코칩'
                calorie='215kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/Choco_z6oTLC5t-MxM.jpg'
                text='알알이 가득한 초코의가장 클래식한 달콤함'
                label='초코칩'
                calorie='200kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/DoubleChoco_STRVFlao0.jpg'
                text='부드러운 화이트초콜릿과 다크 초콜릿의<br>
                절묘한 조화로 더욱 풍부한 달콤함'
                label='더블 초코칩'
                calorie='210kcal'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/OatmealRaisin_Xlg_5z96oI.jpg'
                text='캘리포니아 건포도와 귀리에<br>
                살짝더해진 계피향의 환상적인 조화'
                label='오트밀 레이즌'
                calorie='200kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/RaspberryCheeseCake_NXTTlFGl0cT.jpg'
                text='부드럽고 풍부한 치즈와 새콤달콤 라즈베리의<br>
                달콤한 만남'
                label='라즈베리 치즈케익'
                calorie='200kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/WhiteChocoMacadamia_wa1jPhU-w.jpg'
                text='고소함 가득한 마카다미아와<br>
                달콤한 화이트 초콜릿의 환상 궁합'
                label='화이트 초코 마카다미아'
                calorie='220kcal'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/MushroomSoup_59UQenLNDM7.png'
                text='2020년 겨울,<br>
                새롭게 선보이는 부드러운 머쉬룸 수프'
                label='머쉬룸 수프'
                calorie='150kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/BroccoliSoup_4izE14Jz4_.jpg'
                text='건강한 브로콜리와 짭쪼름한 체다치즈의<br>
                환상적인 조합'
                label='브로콜리 체다 수프'
                calorie='170kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/BakedPotatoSoup_Q4q4jcv2gyS.jpg'
                text='부드럽고 담백한 감자와<br>
                바삭한 베이컨의 찰떡궁합'
                label='베이크 포테이토 수프'
                calorie='210kcal'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/WedgePotato_gc105SOIqPRj.jpg'
                text='오븐에 구워 더 담백,<br>
                겉바속촉 건강한 사이드'
                label='웨지 포테이토'
                calorie='143kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/CheesyWedgePotato_RrytLz3zEV0.jpg'
                text='치즈 풍미 한가득, 오븐에 구워<br>
                더 담백한 사이드'
                label='Cheesy 웨지 포테이토'
                calorie='187kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/BaconCheeseyWedgePotato_-PZ4a7rs9.jpg'
                text='짭쪼름한 베이컨과 치즈의 궁합을 더한,<br>
                오븐에 구워 더 담백한 사이드'
                label='Bacon Cheesy 웨지 포테이토'
                calorie='238kcal'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/ItalianMiniWrap_GWCPdGIzxgM.jpg'
                text='작지만 화끈하다!<br>
                입안 가득 즐기는 이탈리아의 풍미.'
                label='이탈리안 미니 랩'
                calorie='405kcal'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-set/ChickenBaconMiniWrap_aW8EJ_AsJ.jpg'
                text='담백한 치킨, 바삭한 베이컨 비츠가<br>
                쫀득한 통밀 랩에 쏘옥!'
                label='치킨 베이컨 미니 랩'
                calorie='376kcal'
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SetList;