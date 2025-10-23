import { vipVacancies } from "@/data/data";
import { VACANCY_TYPES } from "@/interface/global.types";

import {
  HeaderChips,
  CompanyImage,
  HeaderActions,
  HeaderExpiryDate,
  HeaderTitleAndType,
} from "./";

type HeaderT = {
  email: string;
  title: string;
  phone: string;
  companyId: number;
  companyName: string;
  expiryDate: string;
  vacancyType: VACANCY_TYPES;
};

const Header: React.FC<HeaderT> = (props) => {
  return (
    <header className="grid grid-cols-[repeat(2,max-content)] tablet:grid-cols-[repeat(1,max-content_1fr_max-content)] items-start tablet:items-center gap-x-2 laptop:gap-x-4 gap-y-2">
      <CompanyImage title={props.title} image={vipVacancies[1].image} />

      <HeaderTitleAndType title={props.title} vacancyType={props.vacancyType} />

      <HeaderChips
        email={props.email}
        phone={props.phone}
        companyId={props.companyId}
        companyName={props.companyName}
      />

      <HeaderActions />

      <HeaderExpiryDate expiryDate={props.expiryDate} />
    </header>
  );
};

export default Header;
