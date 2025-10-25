import { PageParamsT } from "@/interface/global.types";
import { vacanciesFilterableKeys } from "@/lib/constants";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import VIPVacancies from "@/components/Vacancies/VIPVacancies/VIPVacancies";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(
    query,
    vacanciesFilterableKeys.concat(["page"])
  );

  return (
    <Container>
      <FilterBar />
      <VIPVacancies query={queryStr} />
    </Container>
  );
};

export default Page;
