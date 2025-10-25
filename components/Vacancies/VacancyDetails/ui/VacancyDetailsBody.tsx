import { TipTapProvider } from "@/providers";

import { SectionTitle } from "@/components/ui";
import { TextEditorContent } from "@/components/layouts";

type VacancyDetailsBodyT = {
  description: string;
  requirements: string;
  advantages: string;
};

const VacancyDetailsBody: React.FC<VacancyDetailsBodyT> = (props) => {
  const { description, requirements, advantages } = props;

  return (
    <div className="flex-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <SectionTitle size="base" title="სამუშაოს აღწერა" />

        <TipTapProvider content={description}>
          <TextEditorContent />
        </TipTapProvider>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle size="base" title="მოთხოვნები" />

        <TipTapProvider content={requirements}>
          <TextEditorContent />
        </TipTapProvider>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle size="base" title="რას გთავაზობთ" />

        <TipTapProvider content={advantages}>
          <TextEditorContent />
        </TipTapProvider>
      </div>
    </div>
  );
};

export default VacancyDetailsBody;
