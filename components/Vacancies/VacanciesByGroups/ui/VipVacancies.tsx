import { VIPVacanciesSlider } from "@/components/layouts";
import { EmptyMessage, ErrorMessage } from "@/components/ui";
import { getVIPVacancies } from "@/lib/actions/vacancy.actions";

type VipVacanciesT = {
  limit: number;
};

const VipVacancies: React.FC<VipVacanciesT> = async () => {
  const { data, error } = await getVIPVacancies({ limit: 10 });

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

export default VipVacancies;
