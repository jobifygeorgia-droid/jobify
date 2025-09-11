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
        <div className="flex items-start gap-20 py-5">
          <div className="flex-2">
            <TextEditorContent />
          </div>

          <Aside />
        </div>
      </TipTapProvider>

      <div className="pb-12 pt-6">
        <SectionTitle size="base" title="შენთვის საინტერესო ვაკანსიები" />

        <div className="flex flex-col gap-4 mt-5">
          {vipVacancies.slice(0, 4).map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>

        <div className="flex items-center mt-10">
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
