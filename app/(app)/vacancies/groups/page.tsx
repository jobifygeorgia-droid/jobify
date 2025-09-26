import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import VacanciesByGroups from "@/components/Vacancies/VacanciesByGroups/VacanciesByGroups";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <Container>
      <VacanciesByGroups group={params.group} />
    </Container>
  );
};

export default Page;
