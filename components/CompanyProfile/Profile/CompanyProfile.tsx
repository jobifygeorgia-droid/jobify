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
    <div className="my-6 rounded-3xl px-10 py-8 bg-white flex flex-col gap-4">
      <StatisticHeader />

      {/* <div className="my-4 flex items-center gap-6 w-max mx-auto">
        <p className="text-sm font-semibold text-primary">
          გჭირდება დახმარება სტატისტიკის გაუმჯობესებაში ?
        </p>
        <Button buttonType="secondary">გაუმჯობესება</Button>
      </div> */}

      <SectionTitle title="ვაკანსიები" size="base" />

      <div className="flex items-center justify-start gap-4">
        <Filter />

        <SendEmail />

        <AnchorButton
          href={PATHS.company_create_vacancy}
          className="gap-3 font-semibold w-max p-0!"
        >
          <Plus size={26} className="translate-y-[2px]" />
          ვაკანსიის დამატება
        </AnchorButton>
      </div>

      <GridTable
        cols={9}
        className="mt-2 rounded-xl overflow-hidden border border-t-0 border-bc"
      >
        <VacanciesTableHeader />

        {companyProfileData.slice(0, 7).map((item) => (
          <VacanciesTableRow key={item.id} {...item} />
        ))}
      </GridTable>

      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default CompanyProfile;
