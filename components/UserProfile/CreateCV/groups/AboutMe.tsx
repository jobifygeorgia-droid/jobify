import { Controller } from "react-hook-form";

import { TipTapProvider } from "@/providers";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useAboutMe } from "@/components/UserProfile/CreateCV/hooks";

import {
  FormGroupGrid,
  FormGroupContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { TextEditor } from "@/components/layouts/Form";

const AboutMe: React.FC = () => {
  const { control } = useCV();
  const am = useAboutMe();

  return (
    <FormGroupContainer
      title="ჩემს შესახებ"
      name="about_me"
      isSucceed={am.isSucceed}
      hasError={am.hasError}
      onExpand={am.onToggleAboutMe}
    >
      <FormGroupGrid>
        <Controller
          control={control}
          name="about_me"
          render={({ field, fieldState: { error } }) => (
            <TipTapProvider readonly={false} content={field.value}>
              <TextEditor
                height="220px"
                message={error?.message}
                className="col-span-2"
                label="გაგვაცანი შენი თავი"
                onChange={(v: string) => field.onChange(v)}
              />
            </TipTapProvider>
          )}
        />
      </FormGroupGrid>
    </FormGroupContainer>
  );
};

export default AboutMe;
