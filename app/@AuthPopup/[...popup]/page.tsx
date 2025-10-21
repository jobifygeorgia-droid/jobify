import { AuthPopup } from "@/components/Auth";
import { AuthModes, PageParamsT } from "@/interface/global.types";

const page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const params = await searchParams;

  return <AuthPopup authMode={params.auth as AuthModes} />;
};

export default page;
