"use client";

import { useDevice } from "@/hooks/utils";
import { VipVacancyCardSkeleton } from "@/components/layouts";

const VacanciesSliderFallback: React.FC = () => {
  const device = useDevice();

  const limit = device === "mobile" ? 2 : device === "tablet" ? 3 : 4;

  return (
    <div className="flex items-center gap-2 pb-2 laptop:pb-14">
      {Array.from(new Array(limit)).map((_, index) => (
        <VipVacancyCardSkeleton key={`home-vip-vacancy-skeleton-${index}`} />
      ))}
    </div>
  );
};

export default VacanciesSliderFallback;
