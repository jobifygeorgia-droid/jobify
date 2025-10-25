import {
  Statistic,
  BannerSlider,
  SectionContainer,
} from "@/components/Home/ui";

type BannersT = {};

const Banners: React.FC<BannersT> = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col tablet:flex-row items-start w-full gap-4 laptop:gap-6">
        <BannerSlider />

        <Statistic />
      </div>
    </SectionContainer>
  );
};

export default Banners;
