import { VacancyAdditionalDetails } from "@/components/layouts";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <aside className="flex-1">
      <VacancyAdditionalDetails />
    </aside>
  );
};

export default Aside;
