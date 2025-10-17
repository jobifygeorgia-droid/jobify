import { generateArray } from "@/lib/utils";

import { PaginationSkeleton } from "@/components/ui";
import { VacancyCardSkeleton } from "@/components/layouts";

type VacancyCardsSkeletonT = {
  limit: number;
};

const VacancyCardsSkeleton: React.FC<VacancyCardsSkeletonT> = ({ limit }) => {
  return (
    <>
      <section className="flex flex-col gap-4">
        {generateArray(limit).map((index) => (
          <VacancyCardSkeleton key={`vacancy-skeleton-${index}`} />
        ))}
      </section>

      <PaginationSkeleton />
    </>
  );
};

export default VacancyCardsSkeleton;
