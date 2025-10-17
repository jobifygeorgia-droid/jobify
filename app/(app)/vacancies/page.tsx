import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import Vacancies from "@/components/Vacancies/Vacancies/Vacancies";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <FilterProvider>
      <Container>
        <FilterBar />
        <Vacancies query={queryStr} />
      </Container>
    </FilterProvider>
  );
};

export default Page;
