"use client";

import { vipVacancies } from "@/data/data";

import { VIPVacancyCard } from "@/components/layouts";
import { MultipleSlider, ViewAllButton } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  return (
    <SectionContainer title="VIP ვაკანსიები" className="relative">
      <MultipleSlider
        slides={vipVacancies.slice(0, 20).map((slide) => (
          <VIPVacancyCard key={slide.id} {...slide} />
        ))}
      />
      {/* <div className="flex flex-wrap items-start gap-4">
          {vipVacancies.map((slide) => (
            <VIPVacancyCard key={slide.id} {...slide} />
          ))}
        </div> */}
      <ViewAllButton
        href="/vip-vacancies"
        className="absolute z-[9] right-0 bottom-0"
      />
    </SectionContainer>
  );
};

export default VIPVacancies;
