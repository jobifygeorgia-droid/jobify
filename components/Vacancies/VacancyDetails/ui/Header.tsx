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
  expiryDate: string;
  vacancyType: VACANCY_TYPES;
};

const Header: React.FC<HeaderT> = (props) => {
  const { title, vacancyType, phone, email, expiryDate } = props;

  return (
    <header className="grid grid-cols-[repeat(2,max-content)] tablet:grid-cols-[repeat(1,max-content_1fr_max-content)] items-start tablet:items-center gap-x-2 laptop:gap-x-4 gap-y-2">
      <CompanyImage title={title} image={vipVacancies[1].image} />

      <HeaderTitleAndType title={title} vacancyType={vacancyType} />

      <HeaderChips email={email} phone={phone} />

      <HeaderActions />

      <HeaderExpiryDate expiryDate={expiryDate} />
    </header>
  );
};

export default Header;
