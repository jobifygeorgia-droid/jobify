import { Suspense } from "react";
import { redirect } from "next/navigation";

import { PATHS } from "@/lib/config";
import { auth } from "@/services/next-auth";

import { VacancyCardsSkeleton } from "@/components/layouts";
import { VacancySkeleton, VacanciesForYou, Vacancy } from "./ui";

type VacancyDetailsT = {
  query: string;
  vacancyId: string;
};

const VacancyDetails: React.FC<VacancyDetailsT> = async (props) => {
  const { query, vacancyId } = props;

  const limit = 1;

  const session = await auth();

  if (!session) redirect(PATHS.home);

  return (
    <>
      <Suspense fallback={<VacancySkeleton />}>
        <Vacancy vacancyId={vacancyId} />
      </Suspense>

      <Suspense fallback={<VacancyCardsSkeleton limit={limit} />}>
        <VacanciesForYou query={query} limit={limit} />
      </Suspense>
    </>
  );
};

export default VacancyDetails;
