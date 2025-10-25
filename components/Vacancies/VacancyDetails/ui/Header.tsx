import classnames from "classnames";

import { vipVacancies } from "@/data/data";
import { USER_TYPES, VACANCY_TYPES } from "@/interface/global.types";

import {
  HeaderChips,
  CompanyImage,
  HeaderActions,
  HeaderExpiryDate,
  HeaderTitleAndType,
} from "./";
import { auth } from "@/services/next-auth";

type HeaderT = {
  email: string;
  title: string;
  phone: string;
  companyId: number;
  companyName: string;
  expiryDate: string;
  vacancyType: VACANCY_TYPES;
};

const Header: React.FC<HeaderT> = async (props) => {
  const session = await auth();

  const isJobSeeker = session?.user?.user_type === USER_TYPES.JOB_SEEKER;

  return (
    <header
      className={classnames(
        "grid grid-cols-[repeat(2,max-content)] tablet:grid-cols-[repeat(1,max-content_1fr_max-content)] items-start tablet:items-center gap-x-2 laptop:gap-x-4 gap-y-2 laptop:gap-y-4",
        { "laptop:gap-y-2!": isJobSeeker }
      )}
    >
      <CompanyImage title={props.title} image={vipVacancies[1].image} />

      <HeaderTitleAndType title={props.title} vacancyType={props.vacancyType} />

      <HeaderChips
        email={props.email}
        phone={props.phone}
        companyId={props.companyId}
        companyName={props.companyName}
      />

      {isJobSeeker && (
        <>
          <HeaderActions />

          <HeaderExpiryDate expiryDate={props.expiryDate} />
        </>
      )}
    </header>
  );
};

export default Header;
