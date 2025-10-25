import { Suspense } from "react";

import {
  Vacancies,
  StatisticHeader,
  FilterAndActions,
  VacanciesFallback,
} from "./ui";
import { SectionTitle } from "@/components/ui";
// import ImproveStatistic from "./ui/ImproveStatistic";

type CompanyProfileT = {
  query: string;
  filterBy?: string;
};

const CompanyProfile: React.FC<CompanyProfileT> = async (props) => {
  const limit = 10;

  return (
    <div className="my-6 rounded-3xl px-3 desktop-sm:px-10 py-4 desktop-sm:py-4 bg-white flex flex-col gap-4">
      <StatisticHeader />

      {/* <ImproveStatistic /> */}

      <SectionTitle title="ვაკანსიები" size="base" />

      <FilterAndActions filterBy={props.filterBy} />

      <Suspense fallback={<VacanciesFallback limit={limit} />}>
        <Vacancies limit={limit} query={props.query} />
      </Suspense>
    </div>
  );
};

export default CompanyProfile;
