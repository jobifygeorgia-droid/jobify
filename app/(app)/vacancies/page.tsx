import { PageParamsT } from "@/interface/global.types";
import { vacanciesFilterableKeys } from "@/lib/constants";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import Vacancies from "@/components/Vacancies/Vacancies/Vacancies";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(
    query,
    vacanciesFilterableKeys.concat(["page"])
  );

  return (
    <Container>
      <FilterBar />
      <Vacancies key={queryStr} query={queryStr} />
    </Container>
  );
};

export default Page;
