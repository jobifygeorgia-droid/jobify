"use client";

import { PATHS } from "@/lib/config";
import dynamic from "next/dynamic";
import { VacancyT } from "@/interface/db/vacancies.types.js";
import { VIPVacanciesSliderConfig } from "./slider-config.ts";

import { ViewAllButton } from "@/components/ui";
import { VIPVacancyCard, VacanciesSliderFallback } from "@/components/layouts";
import { useSession } from "next-auth/react";

const MultipleSlider = dynamic(
  () => import("@/components/ui/Swiper/MultipleSlider"),
  { ssr: false, loading: () => <VacanciesSliderFallback /> }
);

type VIPVacanciesSliderT = {
  vacancies: Array<VacancyT>;
};

const VIPVacanciesSlider: React.FC<VIPVacanciesSliderT> = ({ vacancies }) => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="relative pb-11">
      <MultipleSlider
        breakpoints={VIPVacanciesSliderConfig}
        slides={vacancies.map((vacancy) => (
          <VIPVacancyCard
            key={vacancy.id}
            vacancy={vacancy}
            isAuthenticated={isAuthenticated}
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
