import { PATHS } from "@/lib/config";
import { TipTapProvider } from "@/providers";
import { tipTapValue, vipVacancies } from "@/data/data";

import Aside from "./ui/Aside";
import Header from "./ui/Header";
import { TextEditorContent, VacancyCard } from "@/components/layouts";
import { Pagination, SectionTitle, ViewAllButton } from "@/components/ui";

type VacancyDetailsT = {};

const VacancyDetails: React.FC<VacancyDetailsT> = () => {
  return (
    <>
      <Header />

      <TipTapProvider content={tipTapValue}>
        <div className="flex flex-col-reverse laptop:flex-row items-start gap-5 tablet:gap-6 laptop:gap-20 py-5 tablet:py-6 laptop:py-5">
          <div className="flex-2">
            <TextEditorContent />
          </div>

          <Aside />
        </div>
      </TipTapProvider>

      <div className="pb-6 tablet:pb-12 tablet:pt-6">
        <SectionTitle size="base" title="შენთვის საინტერესო ვაკანსიები" />

        <div className="flex flex-col gap-4 mt-5">
          {vipVacancies.slice(0, 4).map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>

        <div className="flex flex-col-reverse items-end gap-2 mt-3 tablet:flex-row tablet:mt-10">
          <div className="w-full flex justify-center">
            <Pagination />
          </div>

          <ViewAllButton href={PATHS.vacancies} />
        </div>
      </div>
    </>
  );
};

export default VacancyDetails;
