"use client";

import dynamic from "next/dynamic";

import { PATHS } from "@/lib/config";
import { vipVacancies } from "@/data/data";
import { VIPVacanciesSliderConfig } from "./slider-config.ts";

import { ViewAllButton } from "@/components/ui";
import { VIPVacancyCard } from "@/components/layouts";
import VacanciesSliderFallback from "./VacanciesSliderFallback";

const MultipleSlider = dynamic(
  () => import("@/components/ui/Swiper/MultipleSlider"),
  { ssr: false, loading: () => <VacanciesSliderFallback /> }
);

type VIPVacanciesSliderT = {};

const VIPVacanciesSlider: React.FC<VIPVacanciesSliderT> = () => {
  return (
    <div className="relative pb-11 tablet:pb-0">
      <MultipleSlider
        breakpoints={VIPVacanciesSliderConfig}
        slides={vipVacancies.slice(0, 20).map((vacancy) => (
          <VIPVacancyCard
            key={vacancy.id}
            vacancy={vacancy}
            className="min-w-[55vw] tablet:min-w-auto"
          />
        ))}
      />

      <ViewAllButton
        href={PATHS.vip_vacancies}
        className="absolute z-[9] right-0 bottom-0"
      />
    </div>
  );
};

export default VIPVacanciesSlider;
