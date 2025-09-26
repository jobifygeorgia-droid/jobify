import { VIPVacanciesSlider } from "@/components/layouts";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  return (
    <SectionContainer title="VIP ვაკანსიები" className="mt-0!">
      <VIPVacanciesSlider />
    </SectionContainer>
  );
};

export default VIPVacancies;
