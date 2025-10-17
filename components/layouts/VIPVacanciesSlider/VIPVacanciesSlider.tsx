"use client";

import dynamic from "next/dynamic";

import { PATHS } from "@/lib/config";
import { VacancyT } from "@/interface/db/vacancies.types.js";
import { VIPVacanciesSliderConfig } from "./slider-config.ts";

import { ViewAllButton } from "@/components/ui";
import { VIPVacancyCard, VacanciesSliderFallback } from "@/components/layouts";

const MultipleSlider = dynamic(
  () => import("@/components/ui/Swiper/MultipleSlider"),
  { ssr: false, loading: () => <VacanciesSliderFallback /> }
);

type VIPVacanciesSliderT = {
  vacancies: Array<VacancyT>;
};

const VIPVacanciesSlider: React.FC<VIPVacanciesSliderT> = ({ vacancies }) => {
  return (
    <div className="relative pb-11">
      <MultipleSlider
        breakpoints={VIPVacanciesSliderConfig}
        slides={vacancies.map((vacancy) => (
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
