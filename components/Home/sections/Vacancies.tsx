import { getVacancies } from "@/lib/actions/vacancy.actions";

import { EmptyMessage, ErrorMessage } from "@/components/ui";
import { SectionContainer, VacanciesList } from "@/components/Home/ui";

type VacanciesT = {
  query: string;
  limit: number;
};

const Vacancies: React.FC<VacanciesT> = async ({ query, limit }) => {
  const { data, error } = await getVacancies({ query, limit });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  return (
    <SectionContainer>
      {!isEmpty && !error && (
        <VacanciesList
          limit={limit}
          vacancies={vacancies}
          total={data.total || 0}
        />
      )}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </SectionContainer>
  );
};

export default Vacancies;
