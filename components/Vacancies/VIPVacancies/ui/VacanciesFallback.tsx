import { generateArray } from "@/lib/utils";

import { PaginationSkeleton } from "@/components/ui";
import { VipVacancyCardSkeleton } from "@/components/layouts";

type VacanciesFallbackT = {
  limit: number;
};

const VacanciesFallback: React.FC<VacanciesFallbackT> = ({ limit }) => {
  return (
    <>
      <section className="grid grid-cols-1 tablet:grid-cols-3 desktop-sm:grid-cols-4 justify-items-center gap-4 mb-0 laptop:mb-10 pb-5 laptop:pb-10">
        {generateArray(limit).map((index) => (
          <VipVacancyCardSkeleton
            key={`vip-vacancies-card-skeleton-${index}`}
          />
        ))}
      </section>

      <PaginationSkeleton />
    </>
  );
};

export default VacanciesFallback;
