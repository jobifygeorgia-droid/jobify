"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

import { useDevice } from "@/hooks/utils";

type MultipleSliderT = {
  slides: React.ReactNode[];
  showPaginationBullets?: boolean;
  showPaginationBulletsOnMobile?: boolean;
  breakpoints: Record<
    number,
    { slidesPerView: number; spaceBetween: number; slidesPerGroup: number }
  >;
};

const MultipleSlider: React.FC<MultipleSliderT> = (props) => {
  const {
    slides,
    breakpoints,
    showPaginationBullets = true,
    showPaginationBulletsOnMobile = false,
  } = props;

  const device = useDevice();

  const showBullets =
    device === "mobile" ? showPaginationBulletsOnMobile : showPaginationBullets;

  return (
    <Swiper
      breakpoints={breakpoints}
      autoplay={{ delay: 4000 }}
      pagination={showBullets ? { clickable: true } : false}
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
