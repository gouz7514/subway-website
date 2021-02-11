import React from 'react'
import '../App.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderSection.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// var swiper = new Swiper('.swiper-container', {
//   observeParents: true,
//   observer: true,
//   rebuildOnUpdate : true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

function SliderSection() {
  return (
    <React.Fragment>
    <Swiper
      watchSlidesProgress
      spaceBetween={50}
      slidesPerView={1}
      // pagination={{ 
      //   clickable: true,
      //   el: '.swiper-pagination',
      //   type: 'progressbar', }}
      // navigation={{
      //   nextEl : '.swiper-button-next',
      //   prevEl : '.swiper-button-prev',
      // }}
      navigation
      pagination
      onSwiper={(swiper) => console.log(swiper)}
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