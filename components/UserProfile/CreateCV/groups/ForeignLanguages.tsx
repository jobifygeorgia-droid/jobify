import { Fragment } from "react";
import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useForeignLanguages } from "@/components/UserProfile/CreateCV/hooks";

import {
  ChipValue,
  FormGroupContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { Button } from "@/components/ui";
import { TextField } from "@/components/layouts/Form";

const ForeignLanguages: React.FC = () => {
  const { control } = useCV();
  const fl = useForeignLanguages();

  return (
    <FormGroupContainer
      title="უცხო ენა"
      name="foreign_languages"
      isSucceed={fl.isSucceed}
      hasError={fl.hasError}
      onExpand={fl.onToggleForeignLanguages}
    >
      <div className="grid grid-cols-2 gap-6">
        {fl.foreignLanguages.map((language, index) =>
          index !== fl.selectedForeignLanguageFieldIndex ? null : (
            <Fragment key={`form-${language.id}`}>
              <Controller
                control={control}
                name={`foreign_languages.${index}.language`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    labelPosition="out"
                    label="მიუთითე ენა"
                    containerClassName="w-full"
                    {...field}
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`foreign_languages.${index}.level`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    labelPosition="out"
                    label="აირჩიე დონე"
                    containerClassName="w-full"
                    {...field}
                    message={error?.message}
                  />
                )}
              />
            </Fragment>
          )
        )}

        <Button
          type="button"
          buttonType="tertiary"
          onClick={fl.onCancelForeignLanguage}
        >
          გაუქმება
        </Button>

        <Button
          type="button"
          buttonType="primary"
          onClick={fl.onAppendForeignLanguage}
        >
          დამატება
        </Button>
      </div>

      {fl.addedForeignLanguages.length > 0 && (
        <ul className="flex items-center flex-wrap gap-4">
          {fl.addedForeignLanguages.map((language, index) => (
            <ChipValue
              key={`skill-${language}-${index}`}
              value={`${language.language} (${language.level})`}
              onRemove={() => fl.onRemoveForeignLanguage(index)}
            />
          ))}
        </ul>
      )}
    </FormGroupContainer>
  );
};

export default ForeignLanguages;
