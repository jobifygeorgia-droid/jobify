"use client";

import dynamic from "next/dynamic";

import { section2Data } from "@/data/data";

import { BannerSliderFallback, BannerSliderCard } from "./";

const MultipleSlider = dynamic(
  () => import("@/components/ui/Swiper/MultipleSlider"),
  { ssr: false, loading: () => <BannerSliderFallback /> }
);

type BannerSliderT = {};

const BannerSlider: React.FC<BannerSliderT> = () => {
  return (
    <div className="w-full tablet:w-[55%] h-full">
      <MultipleSlider
        showPaginationBulletsOnMobile
        breakpoints={{
          220: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
        }}
        slides={section2Data.map((slide) => (
          <BannerSliderCard key={slide.id} {...slide} />
        ))}
      />
    </div>
  );
};

export default BannerSlider;
