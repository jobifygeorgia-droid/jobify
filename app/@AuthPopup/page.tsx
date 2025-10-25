import { AuthPopup } from "@/components/Auth";
import { AuthModes } from "@/interface/global.types";

type defaultT = {
  searchParams: Promise<Record<string, string>>;
};

const page: React.FC<defaultT> = async ({ searchParams }) => {
  const params = await searchParams;

  return <AuthPopup authMode={params.auth as AuthModes} />;
};

export default page;
