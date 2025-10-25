import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import VacanciesByGroups from "@/components/Vacancies/VacanciesByGroups/VacanciesByGroups";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const group = query.group;
  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <Container>
      <VacanciesByGroups group={group} query={queryStr} />
    </Container>
  );
};

export default Page;
