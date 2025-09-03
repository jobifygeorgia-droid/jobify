import { liveInCompanyData } from "@/data/data";

import SectionContainer from "../ui/SectionContainer";
import LiveInCompanyCard from "../ui/LiveInCompanyCard";
import { MultipleSlider, ViewAllButton } from "@/components/ui";

type LiveInCompanyT = {};

const LiveInCompany: React.FC<LiveInCompanyT> = () => {
  return (
    <SectionContainer className="relative" title="ცხოვრება კომპანიაში">
      <MultipleSlider
        slidesPerView={5}
        slides={liveInCompanyData.map((company) => (
          <LiveInCompanyCard key={company.id} {...company} />
        ))}
      />

      <ViewAllButton href="" className="absolute z-[9] right-0 bottom-0" />
    </SectionContainer>
  );
};

export default LiveInCompany;
