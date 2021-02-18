import React, {useState} from 'react'
import '../App.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderSection.css';
import './Modal.css';
import SauceList from './SauceList.js';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SliderSection() {
  const [modalState, setModalState] = useState(false);
  const toggleModalState = () => {
    setModalState(!modalState);
  }
  // const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
    <Swiper
      watchSlidesProgress
      spaceBetween={50}
      slidesPerView={1}
      navigation
      allowTouchMove={false}
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
              자세한 메뉴 설명은 아래 버튼을 클릭하세요!<br></br>
              <button>메뉴 보기</button>
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
            STEP 4 야채&소스 선택
            </h3>
          </div>
          <div className="detail-wrapper">
            <span className="detail-text">
              싫어하는 야채는 드실 필요 없습니다!<br></br>
              좋아하는 야채는 마음껏 드세요.<br></br>
              소스는 무엇이든 선택해 드셔 보세요!<br></br>
            </span>
            <button onClick={() => toggleModalState()}>소스 보기</button>
            <div className={`modal-dialog modalShowing-${modalState}`} >
              <button className="modal-clsebtn" onClick={() => toggleModalState()}>close modal</button>
              <div className="modal-body" >
                <SauceList />
              </div>
            </div>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content">
          <div className="title-wrapper">
            <h3 className="title-text">
            STEP 5 세트 선택
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