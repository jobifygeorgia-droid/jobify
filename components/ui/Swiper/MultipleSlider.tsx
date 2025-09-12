"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

type MultipleSliderT = {
  slides: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroup?: number;
};

const MultipleSlider: React.FC<MultipleSliderT> = (props) => {
  const {
    slides,
    slidesPerView = 4,
    spaceBetween = 20,
    slidesPerGroup,
  } = props;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup || slidesPerView}
      spaceBetween={spaceBetween}
      autoplay={{ delay: 4000 }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultipleSlider;
