import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import VacancyDetails from "@/components/CompanyProfile/VacancyDetails/VacancyDetails";

const Page: React.FC<PageParamsT> = async () => {
  return (
    <Container>
      <VacancyDetails />
    </Container>
  );
};

export default Page;
