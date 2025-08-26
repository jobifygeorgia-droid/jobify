import { FilterBar } from "@/components/layouts";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

export default function Home() {
  return (
    <div className="py-5">
      <FilterProvider>
        <FilterBar />
      </FilterProvider>
    </div>
  );
}
