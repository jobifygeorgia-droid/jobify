import Vacancies from "@/components/Vacancies/Vacancies/Vacancies";
import { FilterBar } from "@/components/layouts";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <FilterProvider>
      <FilterBar />
      <Vacancies />
    </FilterProvider>
  );
};

export default Page;
