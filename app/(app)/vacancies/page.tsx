import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import Vacancies from "@/components/Vacancies/Vacancies/Vacancies";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <FilterProvider>
      <Container>
        <FilterBar />
        <Vacancies />
      </Container>
    </FilterProvider>
  );
};

export default Page;
