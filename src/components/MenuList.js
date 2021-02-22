import React from 'react'
import MenuItems from './items/MenuItems';
import './css/Cards.css';
import './css/IngredientList.css';

class MenuList extends React.Component {
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
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayoBacon_xOsDP6VAl.png'
                text='에그마요와 바삭 베이컨이 만나면?<br>실패 확률 0% 써브웨이 공식 꿀조합'
                label='에그마요 베이컨'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayoPepperoni_jicr1Gx7wFj.png'
                text='<br>매콤 짭짤 페퍼로니 두장으로 에그마요 풍미 업'
                label='에그마요 페퍼로니'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayo__A1jLd3k6.jpg'
                text='친환경 인증 받은 농장에서 생산된 달걀과<br>고소한 마요네즈가 만나<br> 더 부드러운 스테디셀러'
                label='에그마요'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/K-BBQ_yaVJQeSx0.jpg'
                text='써브웨이 최초의 코리안 스타일 샌드위치!<br>
                한국식 마늘, 간장 그리고 은은한 불맛까지!'
                label='K-바비큐'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Shrimp_rUP7KNQiH.jpg'
                text='탱글한 식감이 그대로 살아있는 통새우가<br>
                5마리 들어가 한 입 베어 먹을 때 마다<br>
                진짜 새우의 풍미가 가득'
                label='쉬림프'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/RotisserieBarbecueChicken_auGjIvTUf.jpg'
                text='촉촉한 바비큐 치킨의 풍미가득.<br>손으로 찢어 더욱 부드러운 치킨의 혁명'
                label='로티세리 바비큐 치킨'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/PulledPork_iJQFZmcUy.jpg'
                text='7시간 저온 훈연한 미국 정통 스타일의 <br>리얼 바비큐 풀드포크'
                label='풀드포크'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/ItalianBMT_OZFTWevOf.jpg'
                text='7시간 숙성된 페퍼로니, 살라미<br>그리고 햄이 만들어내는 최상의 조화!<br>
                전세계가 사랑하는 No.1 베스트셀러!'
                label='이탈리안 비엠티'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/BLT_jMOm49kMY.jpg'
                text='오리지널 아메리칸 베이컨의<br>풍미와 바삭함 그대로'
                label='비엘티'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Meatball_xG5Qqboht.jpg'
                text='이탈리안 스타일 비프 미트볼에<br>써브웨이만의 풍부한 토마토 향이<br>
                살아있는 마리나라소스를 듬뿍'
                label='미트볼'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/HAM_m2tPRoLEn.jpg'
                text='기본 중에 기본! 풍부한 햄이 만들어내는<br>입 안 가득 넘치는 맛의 향연'
                label='햄'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Tuna_wabO-aOW9.jpg'
                text='남녀노소 누구나 좋아하는 담백한 참치와<br>고소한 마요네즈의 완벽한 조화'
                label='참치'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/RoastedChicken_gX-AOSZjUES.jpg'
                text='오븐에 구워 담백한<br>저칼로리 닭가슴살의 건강한 풍미'
                label='로스트 치킨'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/SubwayClub__NIGpwXTK.jpg'
                text='명실공히 시그니처 써브!<br>터키, 비프, 포크 햄의 완벽한 앙상블'
                label='써브웨이 클럽'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Turkey_AhX4BDLdRHK.jpg'
                text='280kcal로 슬림하게 즐기는<br>오리지날 터키 샌드위치'
                label='터키'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Veggie_Z5ixXjgJQ.jpg'
                text='갓 구운 빵과 신선한 7가지 야채로<br>즐기는 깔끔한 한끼'
                label='베지'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/Steak_Cheese_6LywAcTHA.jpg'
                text='육즙이 풍부한 비프 스테이크의<br>풍미가 입안 한가득'
                label='스테이크 & 치즈'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/TurkeyBaconAvocado_QQhz0Vktg.jpg'
                text='담백한 터키와 바삭한 베이컨 환상조합에 <br>부드러운 아보카도는 신의 한수'
                label='터키 베이컨 아보카도'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/SubwayMelt_sAEsp-uuu.jpg'
                text='자신있게 추천하는 터키, 햄, 베이컨의<br>완벽한 맛의 밸런스'
                label='써브웨이 멜트'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/SpicyItalian_bjTBcVYY1gp.jpg'
                text='살라미, 페퍼로니가 입안 한가득!<br>쏘 핫한 이탈리아의 맛'
                label='스파이시 이탈리안'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/ChickenTeriyaki_YT1wPfCPklS.jpg'
                text='달콤짭쪼름한 써브웨이 특제 데리야끼 소스와 <br>
                담백한 치킨의 환상적인 만남'
                label='치킨 데리야끼'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/HamEggCheese_re5ZHzOCe.jpg'
                text='푹신한 오믈렛과 햄의 가장 클래식한 조화<br>
                ※아침메뉴 제공시간 : 오전 11시까지'
                label='햄, 에그&치즈'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/WesternEggCheese_693WHohlXO3.jpg'
                text='토마토, 피망, 양파 세가지 야채가 더해져<br>더욱 신선한 하루 시작<br>
                ※아침메뉴 제공시간 : 오전 11시까지'
                label='웨스턴, 에그&치즈'
              />
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/BaconEggCheese_4OBBclCU-.jpg'
                text='오리지널 아메리칸 베이컨으로<br>더욱 풍성한 아침 식사<br>
                ※아침메뉴 제공시간 : 오전 11시까지'
                label='베이컨, 에그&치즈'
              />
            </ul>
            <ul className="cards__items">
              <MenuItems
                src='https://ik.imagekit.io/fsio0iplxb8/subway-menu/SteakEggCheese_GQlCxlLzg.jpg'
                text='육즙 가득 비프 스테이크로 든든한 아침 식사<br>
                ※아침메뉴 제공시간 : 오전 11시까지'
                label='스테이크, 에그&치즈'
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuList;