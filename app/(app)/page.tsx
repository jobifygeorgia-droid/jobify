import { FilterBar } from "@/components/layouts";
import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";
import Home from "@/components/Home/Home";

export default function Page() {
  return (
    <div className="py-5">
      <FilterProvider>
        <FilterBar />
        <Home />
      </FilterProvider>
    </div>
  );
}
