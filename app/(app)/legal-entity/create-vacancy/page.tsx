import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import CreateVacancy from "@/components/CompanyProfile/CreateVacancy/CreateVacancy";

const page: React.FC<PageParamsT> = () => {
  return (
    <Container>
      <CreateVacancy />
    </Container>
  );
};

export default page;
