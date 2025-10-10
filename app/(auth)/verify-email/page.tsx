import { redirect } from "next/navigation";

import { PATHS } from "@/lib/config";
import { PageParamsT } from "@/interface/global.types";
import VerifyEmail from "@/components/Auth/VerifyEmail";
import { Suspense } from "react";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const params = await searchParams;
  const token = params.token;

  if (!token) redirect(PATHS.home);

  return (
    <Suspense fallback={null}>
      <VerifyEmail token={token} />
    </Suspense>
  );
};

export default Page;
