import { getVIPVacancies } from "@/lib/actions/vacancy.actions";

import { SectionContainer } from "@/components/Home/ui";
import { VIPVacanciesSlider } from "@/components/layouts";
import { EmptyMessage, ErrorMessage } from "@/components/ui";

const VIPVacancies: React.FC = async () => {
  const { data, error } = await getVIPVacancies({ limit: 10 });

  const vacancies = data?.results || [];

  const isEmpty = !(vacancies.length > 0);

  return (
    <SectionContainer title="VIP ვაკანსიები" className="mt-0!">
      {!isEmpty && !error && <VIPVacanciesSlider vacancies={vacancies} />}

      {isEmpty && !error && (
        <EmptyMessage message="ამ ეტაპზე საიტზე VIP ვაკანსიები არ მოიძებნება" />
      )}

      {error && <ErrorMessage message={error.message} />}
    </SectionContainer>
  );
};

export default VIPVacancies;
