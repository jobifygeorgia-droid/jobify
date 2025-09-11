import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import Inbox from "@/components/CompanyProfile/Inbox/Inbox";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const viewMode = (await searchParams).view || "grid";

  return (
    <Container>
      <Inbox viewMode={viewMode} />
    </Container>
  );
};

export default Page;
