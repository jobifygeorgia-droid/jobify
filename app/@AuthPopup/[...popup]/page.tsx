import AuthPopup from "@/components/Auth/AuthPopup";
import { PageParamsT } from "@/interface/global.types";

const page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const params = await searchParams;

  return <AuthPopup authMode={params.auth} />;
};

export default page;
