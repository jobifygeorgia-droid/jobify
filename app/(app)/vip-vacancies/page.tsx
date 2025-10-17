import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import VIPVacancies from "@/components/Vacancies/VIPVacancies/VIPVacancies";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <FilterProvider>
      <Container>
        <FilterBar />
        <VIPVacancies query={queryStr} />
      </Container>
    </FilterProvider>
  );
};

export default Page;
