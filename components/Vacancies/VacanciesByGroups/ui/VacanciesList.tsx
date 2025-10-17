import { getVacancies } from "@/lib/actions/vacancy.actions";

import { VacancyCard } from "@/components/layouts";
import { EmptyMessage, ErrorMessage, Pagination } from "@/components/ui";

type VacanciesListT = {
  limit: number;
  query: string;
};

const VacanciesList: React.FC<VacanciesListT> = async ({ limit, query }) => {
  const { data, error } = await getVacancies({ limit, query });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  return (
    <>
      {!isEmpty && !error && (
        <>
          <div className="mt-5 tablet:mt-10 flex flex-col gap-4">
            {vacancies.map((vacancy) => (
              <VacancyCard key={`vacancy-${vacancy.id}`} vacancy={vacancy} />
            ))}
          </div>

          <div className="my-7 flex justify-center">
            <Pagination total={data?.total || 0} limit={limit} />
          </div>
        </>
      )}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე კონკრეტული ჯგუფისთვის ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default VacanciesList;
