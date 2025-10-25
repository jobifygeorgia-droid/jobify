import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import { Container } from "@/components/ui";
import VacancyDetails from "@/components/Vacancies/VacancyDetails/VacancyDetails";

const Page: React.FC<PageParamsT> = async ({ searchParams, params }) => {
  const pageParams = await params;
  const query = await searchParams;

  const vacancyId = pageParams.vacancyId || "";
  const queryStr = buildQueryStringFromNextSearchParams(query);

  return (
    <Container>
      <VacancyDetails vacancyId={vacancyId} query={queryStr} />
    </Container>
  );
};

export default Page;
