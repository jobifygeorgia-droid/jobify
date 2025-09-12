import { tipTapValue } from "@/data/data";
import { TipTapProvider } from "@/providers";

import {
  TextEditorContent,
  VacancyAdditionalDetails,
} from "@/components/layouts";
import { SectionTitle } from "@/components/ui";
import Inbox from "./Inbox";

type VacancyDetailsT = {};

const VacancyDetails: React.FC<VacancyDetailsT> = () => {
  return (
    <div>
      <SectionTitle title="UI UX Designer" size="base" />

      <TipTapProvider content={tipTapValue}>
        <div className="flex items-start gap-20 py-5">
          <div className="flex-3">
            <TextEditorContent />
          </div>

          <aside className="flex-2 max-w-[536px] flex flex-col gap-6">
            <VacancyAdditionalDetails />

            <Inbox />
          </aside>
        </div>
      </TipTapProvider>
    </div>
  );
};

export default VacancyDetails;
