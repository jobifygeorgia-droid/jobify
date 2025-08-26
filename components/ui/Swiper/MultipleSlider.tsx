"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

type MultipleSliderT = {
  slides: React.ReactNode[];
};

const MultipleSlider: React.FC<MultipleSliderT> = (props) => {
  const { slides } = props;

  return (
    <Swiper
      slidesPerView={4}
      slidesPerGroup={4}
      spaceBetween={30}
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
