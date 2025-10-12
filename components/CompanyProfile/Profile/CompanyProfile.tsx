import { PATHS } from "@/lib/config";
import { companyProfileData } from "@/data/data";

import Filter from "./ui/Filter";
import SendEmail from "./ui/SendEmail";
import StatisticHeader from "./ui/StatisticHeader";
import VacanciesTableRow from "./ui/VacanciesTableRow";
import VacanciesTableHeader from "./ui/VacanciesTableHeader";

import { Plus } from "@/components/ui/icons";
import { GridTable } from "@/components/layouts";
import { Pagination, SectionTitle, AnchorButton } from "@/components/ui";

type CompanyProfileT = {};

const CompanyProfile: React.FC<CompanyProfileT> = () => {
  return (
    <div className="my-6 rounded-3xl px-3 desktop-sm:px-10 py-4 desktop-sm:py-4 bg-white flex flex-col gap-4">
      <StatisticHeader />

      {/* <div className="my-4 flex items-center gap-6 w-max mx-auto">
        <p className="text-sm font-semibold text-primary">
          გჭირდება დახმარება სტატისტიკის გაუმჯობესებაში ?
        </p>
        <Button buttonType="secondary">გაუმჯობესება</Button>
      </div> */}

      <SectionTitle title="ვაკანსიები" size="base" />

      <div className="flex items-start laptop:items-center flex-col-reverse laptop:flex-row justify-between gap-4">
        <Filter />

        <div className="flex tablet:gap-6 items-center justify-between w-full">
          <SendEmail />

          <AnchorButton
            href={PATHS.company_create_vacancy}
            className="max-tablet:gap-1 gap-3 font-semibold w-max p-0! text-sm! tablet:text-base-sm!"
          >
            <Plus className="translate-y-[2px] text-lg! tablet:text-2xl!" />
            ვაკანსიის დამატება
          </AnchorButton>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar touch-pan-x">
        <GridTable
          cols={9}
          className="mt-2 rounded-xl overflow-hidden border border-t-0 border-bc w-max desktop-sm:w-full"
        >
          <VacanciesTableHeader />

          {companyProfileData.slice(0, 7).map((item) => (
            <VacanciesTableRow key={item.id} {...item} />
          ))}
        </GridTable>
      </div>

      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default CompanyProfile;
