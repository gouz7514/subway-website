import React, {useState} from 'react'
import '../App.css';
import './IngredientList.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderSection.css';
import './Modal.css';
import BreadList from './BreadList.js';
import CheeseList from './CheeseList.js';
import SauceList from './SauceList.js';
import VegetableList from './VegetableList.js';
import MenuList from './MenuList.js';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SliderSection() {
  let width = (window.innerWidth < 960);

  // Menu State
  const [MenuState, setMenuState] = useState(false);
  const toggleMenuState = () => {
    setMenuState(!MenuState);
  }
  // Bread State
  const [BreadState, setBreadState] = useState(false);
  const toggleBreadState = () => {
    setBreadState(!BreadState);
  }
  // Cheese State
  const [CheeseState, setCheeseState] = useState(false);
  const toggleCheeseState = () => {
    setCheeseState(!CheeseState);
  }

  // Sauce State
  const [SauceState, setSauceState] = useState(false);
  const toggleSauceState = () => {
    setSauceState(!SauceState);
  }
  // Vegetable State
  const [VegetableState, setVegetableState] = useState(false);
  const toggleVegetableState = () => {
    setVegetableState(!VegetableState);
  }

  return (
    <React.Fragment>
    <Swiper
      watchSlidesProgress
      spaceBetween={50}
      slidesPerView={1}
      navigation
      allowTouchMove={width}
      // allowTouchMove={true}
      pagination={{ clickable: true }}
    > 
      <SwiperSlide>
        <div className="swiper-slide-content-intro">
      써브웨이는 다양한 메뉴와 재료를 제공하지만<br></br>
      주문 시 번거로움으로 인해 망설이는 사람들이 많습니다.<br></br>
      어케했Sub과 함께 써브웨이를 즐겨보세요!
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 1 메뉴 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <div className="detail-text">
              다양한 메뉴 중 원하는 메뉴를 고르세요.<br></br>
              15cm, 30cm 중 선택이 가능합니다.<br></br>
              자세한 메뉴는 아래 버튼을 눌러 참고하세요!<br></br>
            </div>
            <div className="modal-btnContainer">
              <button className="modal-openBtn" onClick={() => toggleMenuState()}>메뉴 보기</button>
              <div className={`modal-dialog modalShowing-${MenuState}`} >
                <div className="modal-body" >
                  <div className="modal-closeBtnContainer">
                    <button className="modal-closeBtn" onClick={() => toggleMenuState()}>닫기</button>
                  </div>
                  <MenuList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 2 빵 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              6가지 종류 중 원하는 빵으로<br></br>
              무엇이든 선택하세요.<br></br>
            </span>
            <div className="modal-btnContainer">
              <button className="modal-openBtn" onClick={() => toggleBreadState()}>빵 보기</button>
              <div className={`modal-dialog modalShowing-${BreadState}`} >
                <div className="modal-body" >
                  <div className="modal-closeBtnContainer">
                    <button className="modal-closeBtn" onClick={() => toggleBreadState()}>닫기</button>
                  </div>
                  <BreadList />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 3 추가토핑 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              베이컨, 새우 등 다양한 토핑을 추가해<br></br>
              나만의 써브웨이를 즐기세요!<br></br>
            </span>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 4 치즈 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              3가지 종류의 치즈 중<br></br>
              원하는 치즈를 고르세요!<br></br>
            </span>
            <div className="modal-btnContainer">
              <button className="modal-openBtn" onClick={() => toggleCheeseState()}>치즈 보기</button>
              <div className={`modal-dialog modalShowing-${CheeseState}`} >
                <div className="modal-body" >
                  <div className="modal-closeBtnContainer">
                    <button className="modal-closeBtn" onClick={() => toggleCheeseState()}>닫기</button>
                  </div>
                  <CheeseList />
                </div>
              </div>
            </div>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 5 야채&소스 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              싫어하는 야채는 드실 필요 없습니다!<br></br>
              좋아하는 야채는 마음껏 드세요.<br></br>
              소스는 무엇이든 선택해 드셔 보세요!<br></br>
            </span>
            <div className="modal-btnContainer">
              <button className="modal-openBtn" onClick={() => toggleSauceState()}>소스 보기</button>
              <div className={`modal-dialog modalShowing-${SauceState}`} >
                <div className="modal-body" >
                  <div className="modal-closeBtnContainer">
                    <button className="modal-closeBtn" onClick={() => toggleSauceState()}>닫기</button>
                  </div>
                  <SauceList />
                </div>
              </div>
              <button className="modal-openBtn" onClick={() => toggleVegetableState()}>야채 보기</button>
              <div className={`modal-dialog modalShowing-${VegetableState}`} >
                <div className="modal-body" >
                  <div className="modal-closeBtnContainer">
                    <button className="modal-closeBtn" onClick={() => toggleVegetableState()}>닫기</button>
                  </div>
                  <VegetableList />
                </div>
              </div>
            </div>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 6 세트 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              써브웨이의 별미!<br></br>
              쿠키, 칩과 함께 즐겨보세요!<br></br>
            </span>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
    </React.Fragment>
  )
}

export default SliderSection;