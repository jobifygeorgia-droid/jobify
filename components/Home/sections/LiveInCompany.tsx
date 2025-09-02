import { Button, MultipleSlider } from "@/components/ui";
import SectionContainer from "../ui/SectionContainer";
import { liveInCompanyData } from "../../../data/data";
import LiveInCompanyCard from "../ui/LiveInCompanyCard";

type LiveInCompanyT = {};

const LiveInCompany: React.FC<LiveInCompanyT> = () => {
  return (
    <SectionContainer className="relative">
      <MultipleSlider
        slidesPerView={5}
        slides={liveInCompanyData.map((company) => (
          <LiveInCompanyCard key={company.id} {...company} />
        ))}
      />

      <Button buttonType="text" className="w-max! absolute right-0 bottom-0">
        <span>ყველას ნახვა</span>
        <span>&rarr;</span>
      </Button>
    </SectionContainer>
  );
};

export default LiveInCompany;
