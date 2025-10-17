import { Suspense } from "react";

import { VacancyCardsSkeleton } from "@/components/layouts";
import { VacancySkeleton, VacanciesForYou, Vacancy } from "./ui";

type VacancyDetailsT = {
  query: string;
  vacancyId: string;
};

const VacancyDetails: React.FC<VacancyDetailsT> = (props) => {
  const { query, vacancyId } = props;

  const limit = 1;

  return (
    <>
      <Suspense fallback={<VacancySkeleton />}>
        <Vacancy vacancyId={vacancyId} />
      </Suspense>

      <Suspense fallback={<VacancyCardsSkeleton limit={limit} />}>
        <VacanciesForYou query={query} limit={limit} />
      </Suspense>
    </>
  );
};

export default VacancyDetails;
