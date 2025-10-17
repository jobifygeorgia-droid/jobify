import { vipVacancies } from "@/data/data";

import { Pagination } from "@/components/ui";
import { VacancyCard } from "@/components/layouts";

type FavoritesT = {};

const Favorites: React.FC<FavoritesT> = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* {vipVacancies.slice(0, 5).map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={null}/>
        ))} */}
      </div>

      <div className="mt-7 flex justify-center">
        <Pagination limit={1} total={1} />
      </div>
    </>
  );
};

export default Favorites;
