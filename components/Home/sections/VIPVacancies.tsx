import { vipVacancies } from "@/data/data";

import { PATHS } from "@/lib/config";

import { VIPVacancyCard } from "@/components/layouts";
import { MultipleSlider, ViewAllButton } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  return (
    <SectionContainer title="VIP ვაკანსიები" className="relative">
      <MultipleSlider
        slidesPerView={4}
        slides={vipVacancies.slice(0, 20).map((slide) => (
          <VIPVacancyCard key={slide.id} {...slide} />
        ))}
      />

      <ViewAllButton
        href={PATHS.vip_vacancies}
        className="absolute z-[9] right-0 bottom-0"
      />
    </SectionContainer>
  );
};

export default VIPVacancies;
