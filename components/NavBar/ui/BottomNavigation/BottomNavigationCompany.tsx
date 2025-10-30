import { PATHS } from "@/lib/config";

import { BottomNavigationItem } from "..";
import { Plus } from "@/components/ui/icons";

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
