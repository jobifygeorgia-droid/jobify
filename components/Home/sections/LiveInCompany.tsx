import { liveInCompanyData } from "@/data/data";

import SectionContainer from "../ui/SectionContainer";
import LiveInCompanyCard from "../ui/LiveInCompanyCard";
import { MultipleSlider, ViewAllButton } from "@/components/ui";

type LiveInCompanyT = {};

const LiveInCompany: React.FC<LiveInCompanyT> = () => {
  return (
    <SectionContainer className="relative" title="ცხოვრება კომპანიაში">
      <MultipleSlider
        breakpoints={{
          220: { slidesPerView: 4.8, slidesPerGroup: 4.8, spaceBetween: 0 },
        }}
        slides={liveInCompanyData.map((company) => (
          <LiveInCompanyCard key={company.id} {...company} />
        ))}
      />

      <ViewAllButton href="/" className="absolute z-[9] right-0 bottom-0" />
    </SectionContainer>
  );
};

export default LiveInCompany;
