import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import VIPVacancies from "@/components/Vacancies/VIPVacancies/VIPVacancies";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <FilterProvider>
      <Container>
        <FilterBar />
        <VIPVacancies />
      </Container>
    </FilterProvider>
  );
};

export default Page;
