import { getCompanyOwnVacancies } from "@/lib/actions/vacancy.actions";

import { GridTable } from "@/components/layouts";
import { VacanciesTableRow, VacanciesTableHeader } from "./";
import { Pagination, EmptyMessage, ErrorMessage } from "@/components/ui";

type VacanciesT = {
  limit: number;
  query: string;
};

const Vacancies: React.FC<VacanciesT> = async ({ query, limit }) => {
  const { data, error } = await getCompanyOwnVacancies({ query, limit });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  return (
    <>
      {!isEmpty && !error && (
        <>
          <div className="overflow-x-auto no-scrollbar touch-pan-x">
            <GridTable
              cols={9}
              className="mt-2 rounded-xl overflow-hidden border border-t-0 border-bc w-max desktop-sm:w-full"
            >
              <VacanciesTableHeader />

              {vacancies.map((vacancy) => (
                <VacanciesTableRow
                  vacancy={vacancy}
                  key={`company-own-vacancies-${vacancy.id}`}
                />
              ))}
            </GridTable>
          </div>

          <div className="w-full flex justify-center">
            <Pagination total={data?.total || 0} limit={limit} />
          </div>
        </>
      )}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default Vacancies;
