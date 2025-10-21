import { PATHS } from "@/lib/config";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import Home from "@/components/Home/Home";
import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";

export const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <FilterProvider redirectTo={PATHS.vacancies}>
      <Container>
        <FilterBar />
        <Home query={queryStr} />
      </Container>
    </FilterProvider>
  );
};

export default Page;
