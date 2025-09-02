import { FilterBar } from "@/components/layouts";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";
import VIPVacancies from "@/components/VIPVacancies/VIPVacancies";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <FilterProvider>
      <FilterBar />
      <VIPVacancies />
    </FilterProvider>
  );
};

export default Page;
