import { Suspense } from "react";

import {
  VacancyCardsSkeleton,
  VacanciesSliderFallback,
} from "@/components/layouts";
import { SectionTitle } from "@/components/ui";
import { VacanciesList, VIPVacanciesList } from "./ui";

type VacanciesT = {
  query: string;
};

const Vacancies: React.FC<VacanciesT> = ({ query }) => {
  const limit = 4;

  return (
    <div className="py-5 flex flex-col gap-5 tablet:gap-10">
      <div className="flex flex-col gap-4">
        <SectionTitle title="VIP განცხადებები" />

        <Suspense fallback={<VacanciesSliderFallback />}>
          <VIPVacanciesList limit={limit} />
        </Suspense>
      </div>

      <Suspense fallback={<VacancyCardsSkeleton limit={limit} />}>
        <VacanciesList limit={limit} query={query} />
      </Suspense>
    </div>
  );
};

export default Vacancies;
