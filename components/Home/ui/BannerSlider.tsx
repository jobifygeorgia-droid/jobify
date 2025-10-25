"use client";

import dynamic from "next/dynamic";

import { section2Data } from "@/data/data";

import {
  BannerSliderCard,
  QuotationSliderCard,
  BannerSliderFallback,
} from "./";

const MultipleSlider = dynamic(
  () => import("@/components/ui/Swiper/MultipleSlider"),
  { ssr: false, loading: () => <BannerSliderFallback /> }
);

const sliderBreakpoints = {
  220: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
};

type BannerSliderT = {};

const BannerSlider: React.FC<BannerSliderT> = () => {
  return (
    <div className="w-full tablet:w-[50%] h-full">
      <div className="w-full flex flex-col gap-4 laptop:gap-6">
        <MultipleSlider
          showPaginationBullets={false}
          breakpoints={sliderBreakpoints}
          slides={section2Data.slice(0, 2).map((slide) => (
            <BannerSliderCard
              key={slide.id}
              title={slide.title}
              thumbnail={slide.thumbnail}
            />
          ))}
        />

        <MultipleSlider
          showPaginationBulletsOnMobile
          breakpoints={sliderBreakpoints}
          slides={section2Data.map((slide) => (
            <QuotationSliderCard
              text={slide.text}
              title={slide.title}
              key={`secondary-slider-${slide.id}`}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default BannerSlider;
