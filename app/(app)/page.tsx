import FilterProvider from "@/components/layouts/FilterBar/FilterProvider";

import Home from "@/components/Home/Home";
import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";

export default function Page() {
  return (
    <FilterProvider>
      <Container>
        <FilterBar />
        <Home />
      </Container>
    </FilterProvider>
  );
}
