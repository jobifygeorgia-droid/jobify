import { PATHS } from "@/lib/config";

import { Plus } from "@/components/ui/icons";
import BottomNavigationItem from "./BottomNavigationItem";

type BottomNavigationCompanyT = {};

const BottomNavigationCompany: React.FC<BottomNavigationCompanyT> = () => {
  return (
    <>
      <BottomNavigationItem
        title="ვაკანსიის დამატება"
        href={PATHS.company_create_vacancy}
      >
        <Plus size={20} />
      </BottomNavigationItem>
    </>
  );
};

export default BottomNavigationCompany;
