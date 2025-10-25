import { Container } from "@/components/ui";
import CompanyProfile from "@/components/CompanyProfile/Profile/CompanyProfile";
import { PageParamsT } from "@/interface/global.types";
import { buildQueryStringFromNextSearchParams } from "@/lib/utils";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const query = await searchParams;

  const filterBy = query.filter;
  const queryStr = buildQueryStringFromNextSearchParams(query, ["page"]);

  return (
    <div className="bg-background-secondary">
      <Container>
        <CompanyProfile query={queryStr} filterBy={filterBy} />
      </Container>
    </div>
  );
};

export default Page;
