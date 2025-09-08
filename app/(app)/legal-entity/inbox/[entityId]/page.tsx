import Inbox from "@/components/CompanyProfile/Inbox/Inbox";
import { PageParamsT } from "@/interface/global.types";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const viewMode = (await searchParams).view || "grid";

  return <Inbox viewMode={viewMode} />;
};

export default Page;
