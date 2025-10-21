import { PATHS } from "@/lib/config";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import Vacancies from "@/components/Vacancies/Vacancies/Vacancies";
import { vacanciesFilterableKeys } from "@/lib/constants";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(
    query,
    vacanciesFilterableKeys.concat(["page"])
  );

  return (
    <FilterProvider redirectTo={PATHS.vacancies}>
      <Container>
        <FilterBar />
        <Vacancies key={queryStr} query={queryStr} />
      </Container>
    </FilterProvider>
  );
};

export default Page;
