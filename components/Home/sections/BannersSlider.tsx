import Image from "next/image";

import Slider from "@/components/Home/ui/BannerSlider";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type BannersSliderT = {};

const BannersSlider: React.FC<BannersSliderT> = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col tablet:flex-row items-start w-full gap-4 laptop:gap-6">
        <Slider />

        <div className="hidden tablet:block w-[45%] h-[214px] laptop:h-[366px] -translate-y-[7%]">
          <figure className="relative w-full h-full">
            <Image
              fill
              priority
              sizes="(max-width: 1024px) 45vw, 45vw"
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
