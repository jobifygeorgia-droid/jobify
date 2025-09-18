import Image from "next/image";

import { section2Data } from "@/data/data";

import { MultipleSlider } from "@/components/ui";
import BannerSliderCard from "@/components/Home/ui/BannerSliderCard";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type BannersSliderT = {};

const BannersSlider: React.FC<BannersSliderT> = () => {
  return (
    <SectionContainer>
      <div className="flex items-center w-full gap-6">
        <div className="w-[55%] h-full">
          <MultipleSlider
            slidesPerView={1}
            slides={section2Data.map((slide) => (
              <BannerSliderCard key={slide.id} {...slide} />
            ))}
          />
        </div>

        <div className="w-[45%] h-[366px]">
          <figure className="relative w-full h-full">
            <Image
              fill
              quality={100}
              alt="find job"
              src="/find-job-sidebar-asset.webp"
              className="object-contain"
            />
          </figure>
        </div>
      </div>
    </SectionContainer>
  );
};

export default BannersSlider;
