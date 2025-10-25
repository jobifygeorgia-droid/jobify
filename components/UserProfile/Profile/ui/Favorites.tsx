import { auth } from "@/services/next-auth";
import { getVacancies } from "@/lib/actions/vacancy.actions";

import { EmptyMessage, ErrorMessage, Pagination } from "@/components/ui";
import { VacancyCard } from "@/components/layouts";

type FavoritesT = {};

const Favorites: React.FC<FavoritesT> = async () => {
  const { data, error } = await getVacancies({ query: "", limit: 5 });

  const vacancies = data?.results || [];
  const isEmpty = !(vacancies.length > 0);

  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <>
      <div className="flex flex-col gap-4">
        {vacancies.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            vacancy={vacancy}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Pagination limit={1} total={1} />
      </div>

      {isEmpty && !error && <EmptyMessage message="ვაკანსიები არ მოიძებნება" />}

      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default Favorites;
