import React from 'react'
import '../App.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderSection.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SliderSection() {
  return (
    <React.Fragment>
    <Swiper
      watchSlidesProgress
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
      // onSwiper={(swiper) => console.log(swiper)}
    > 
      <SwiperSlide>시작해보세요</SwiperSlide>
      <SwiperSlide>STEP 1 메뉴 선택</SwiperSlide>
      <SwiperSlide>STEP 2 빵 선택</SwiperSlide>
      <SwiperSlide>STEP 3 추가토핑 선택</SwiperSlide>
      <SwiperSlide>STEP 4 야채&소스 선택</SwiperSlide>
      <SwiperSlide>STEP 5 세트 선택</SwiperSlide>
      ...
    </Swiper>
    </React.Fragment>
  )
}

export default SliderSection;