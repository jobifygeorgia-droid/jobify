import { getVIPVacancies } from "@/lib/actions/vacancy.actions";

import { VIPVacanciesSlider } from "@/components/layouts";
import { EmptyMessage, ErrorMessage } from "@/components/ui";

type VIPVacanciesListT = {
  limit: number;
};

const VIPVacanciesList: React.FC<VIPVacanciesListT> = async ({ limit }) => {
  const { data, error } = await getVIPVacancies({ limit, query: "" });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  return (
    <>
      {!isEmpty && !error && <VIPVacanciesSlider vacancies={vacancies} />}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე VIP ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default VIPVacanciesList;
