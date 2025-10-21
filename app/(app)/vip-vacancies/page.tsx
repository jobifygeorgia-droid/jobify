import { PATHS } from "@/lib/config";
import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import VIPVacancies from "@/components/Vacancies/VIPVacancies/VIPVacancies";
import { vacanciesFilterableKeys } from "@/lib/constants";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(
    query,
    vacanciesFilterableKeys.concat(["page"])
  );

  return (
    <FilterProvider redirectTo={PATHS.vip_vacancies}>
      <Container>
        <FilterBar />
        <VIPVacancies query={queryStr} />
      </Container>
    </FilterProvider>
  );
};

export default Page;
