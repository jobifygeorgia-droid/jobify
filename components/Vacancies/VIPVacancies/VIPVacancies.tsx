import { Suspense } from "react";

import { SectionTitle } from "@/components/ui";
import { VacanciesFallback, VacanciesList } from "./ui";

type VIPVacanciesT = {
  query: string;
};

const VIPVacancies: React.FC<VIPVacanciesT> = ({ query }) => {
  const limit = 1;

  return (
    <div className="py-5 flex flex-col gap-6">
      <SectionTitle title="VIP განცხადებები" />

      <Suspense fallback={<VacanciesFallback limit={20} />}>
        <VacanciesList limit={limit} query={query} />
      </Suspense>
    </div>
  );
};

export default VIPVacancies;
