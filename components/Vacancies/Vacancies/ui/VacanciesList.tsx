import { auth } from "@/services/next-auth";
import { getVacancies } from "@/lib/actions/vacancy.actions";

import { Pagination } from "@/components/ui";
import { VacancyCard } from "@/components/layouts";

type VacanciesListT = {
  limit: number;
  query: string;
};

const VacanciesList: React.FC<VacanciesListT> = async ({ query, limit }) => {
  const { data } = await getVacancies({ limit, query });

  const vacancies = data?.results || [];

  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <>
      <section className="flex flex-col gap-4">
        {vacancies.map((vacancy) => (
          <VacancyCard
            vacancy={vacancy}
            isAuthenticated={isAuthenticated}
            key={`regular-vacancy-${vacancy.id}`}
          />
        ))}
      </section>

      <div className="flex justify-center">
        <Pagination total={data?.total || 0} limit={limit} />
      </div>
    </>
  );
};

export default VacanciesList;
