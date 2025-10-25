import { PATHS } from "@/lib/config";
import { auth } from "@/services/next-auth";
import { getVacancies } from "@/lib/actions/vacancy.actions";

import {
  Pagination,
  EmptyMessage,
  SectionTitle,
  ErrorMessage,
  ViewAllButton,
} from "@/components/ui";
import { VacancyCard } from "@/components/layouts";

type VacanciesForYouT = {
  query: string;
  limit: number;
};

const VacanciesForYou: React.FC<VacanciesForYouT> = async (props) => {
  const { query, limit } = props;

  const { data, error } = await getVacancies({ query, limit });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <>
      <div className="pb-6 tablet:pb-12 tablet:pt-6">
        <SectionTitle size="base" title="შენთვის საინტერესო ვაკანსიები" />

        <div className="flex flex-col gap-4 mt-5">
          {vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              vacancy={vacancy}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>

        <div className="flex flex-col-reverse items-end gap-2 mt-3 tablet:flex-row tablet:mt-10">
          <div className="w-full flex justify-center">
            <Pagination limit={limit} total={data?.total || 0} />
          </div>

          <ViewAllButton href={PATHS.vacancies} />
        </div>
      </div>

      {isEmpty && !error && <EmptyMessage message="ვაკანსიები არ მოიძებნება" />}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default VacanciesForYou;
