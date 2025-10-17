import { tipTapValue } from "@/data/data";
import { TipTapProvider } from "@/providers";
import { getCompanyOwnVacancy } from "@/lib/actions/vacancy.actions";

import {
  TextEditorContent,
  VacancyAdditionalDetails,
} from "@/components/layouts";
import Inbox from "./Inbox";
import { SectionTitle } from "@/components/ui";

type VacancyDetailsT = {};

const VacancyDetails: React.FC<VacancyDetailsT> = async () => {
  const data = await getCompanyOwnVacancy("3");
  console.log(data);

  return (
    <div>
      <SectionTitle title="UI UX Designer" size="base" />

      <div className="flex flex-col-reverse laptop:flex-row items-start gap-8 laptop:gap-20 py-5">
        <div className="laptop:flex-3">
          <TipTapProvider content={tipTapValue}>
            <TextEditorContent />
          </TipTapProvider>
        </div>

        <aside className="laptop:flex-2 w-full laptop:max-w-[536px] flex flex-col gap-6">
          <VacancyAdditionalDetails />

          <Inbox />
        </aside>
      </div>
    </div>
  );
};

export default VacancyDetails;
