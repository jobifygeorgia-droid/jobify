import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import CreateVacancy from "@/components/CompanyProfile/CreateVacancy/CreateVacancy";
import { PopupsProvider } from "@/providers";

const page: React.FC<PageParamsT> = () => {
  return (
    <PopupsProvider>
      <Container>
        <CreateVacancy />
      </Container>
    </PopupsProvider>
  );
};

export default page;
