import { Suspense } from "react";
import { notFound } from "next/navigation";

import { groups, GroupT } from "./groups";

import {
  VacancyCardsSkeleton,
  VacanciesSliderFallback,
} from "@/components/layouts";
import { SectionTitle } from "@/components/ui";
import { Header, Titles, VacanciesList, VipVacancies } from "./ui";

type VacanciesByGroupsT = {
  group?: string;
  query: string;
};

const VacanciesByGroups: React.FC<VacanciesByGroupsT> = ({ group, query }) => {
  const limit = 6;

  const dataToShow: GroupT = groups[group as keyof typeof groups];

  if (!dataToShow) notFound();

  return (
    <div className="tablet:py-3 laptop:py-7">
      <Header bgUrl={dataToShow.bgURL} />

      <Titles title={dataToShow.title} subTitle={dataToShow.subTitle} />

      <div className="mt-4 flex flex-col gap-5">
        <SectionTitle title="VIP ვაკანსიები" size="base" />

        <Suspense fallback={<VacanciesSliderFallback />}>
          <VipVacancies limit={20} />
        </Suspense>
      </div>

      <Suspense fallback={<VacancyCardsSkeleton limit={limit} />}>
        <VacanciesList limit={limit} query={query} />
      </Suspense>
    </div>
  );
};

export default VacanciesByGroups;
