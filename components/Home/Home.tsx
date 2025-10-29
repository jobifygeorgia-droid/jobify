import { Suspense } from "react";

import {
  VacancyCardsSkeleton,
  VacanciesSliderFallback,
} from "@/components/layouts";
import * as S from "./sections";

type HomeT = {
  query: string;
};

const Home: React.FC<HomeT> = ({ query }) => {
  const limit = 1;

  return (
    <div className="py-5">
      <Suspense fallback={<VacanciesSliderFallback />}>
        <S.VIPVacancies key={query} />
      </Suspense>

      <S.Banners />

      <Suspense fallback={<VacancyCardsSkeleton limit={limit} />}>
        <S.Vacancies query={query} limit={limit} />
      </Suspense>

      <S.VacanciesForDifferentGroups />
      {/* <S.InterestingForYou /> */}
      {/* <S.LiveInCompany /> */}

      <S.CreateResume />

      <S.Subscribe />

      {/* <S.Reviews /> */}

      {/* <S.TopCompanies /> */}
    </div>
  );
};

export default Home;
