import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

import Home from "@/components/Home/Home";
import { Container } from "@/components/ui";
import { FilterBar } from "@/components/layouts";
import { Suspense } from "react";

export const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <Container>
      <FilterBar />
      <Suspense fallback={"loading"}>
        <Home query={queryStr} />
      </Suspense>
    </Container>
  );
};

export default Page;
