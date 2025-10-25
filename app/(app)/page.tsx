import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import Home from "@/components/Home/Home";
import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";

export const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <Container>
      <FilterBar />
      <Home query={queryStr} />
    </Container>
  );
};

export default Page;
