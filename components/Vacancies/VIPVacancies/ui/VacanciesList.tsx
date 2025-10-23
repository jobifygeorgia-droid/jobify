import { auth } from "@/services/next-auth";
import { getVIPVacancies } from "@/lib/actions/vacancy.actions";

import { VIPVacancyCard } from "@/components/layouts";
import { Pagination, ErrorMessage, EmptyMessage } from "@/components/ui";

type VacanciesListT = {
  limit: number;
  query: string;
};

const VacanciesList: React.FC<VacanciesListT> = async ({ limit, query }) => {
  const { data, error } = await getVIPVacancies({ limit, query });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <>
      {!isEmpty && !error && (
        <>
          <section className="grid grid-cols-1 tablet:grid-cols-3 desktop-sm:grid-cols-4 justify-items-center gap-4 mb-0 laptop:mb-10 pb-5 laptop:pb-10">
            {vacancies.map((vacancy) => (
              <VIPVacancyCard
                key={vacancy.id}
                vacancy={vacancy}
                className="min-w-full! aspect-auto! tablet:min-w-[unset]"
                isAuthenticated={isAuthenticated}
              />
            ))}
          </section>

          <div className="flex justify-center">
            <Pagination limit={limit} total={data?.total || 0} />
          </div>
        </>
      )}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე VIP ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default VacanciesList;
