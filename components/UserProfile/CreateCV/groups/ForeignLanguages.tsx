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
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6">
        {fl.foreignLanguages.map((language, index) =>
          index !== fl.selectedForeignLanguageFieldIndex ? null : (
            <Fragment key={`form-${language.id}`}>
              <Controller
                control={control}
                name={`foreign_languages.${index}.language`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="მიუთითე ენა"
                    containerClassName="w-full"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`foreign_languages.${index}.level`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="აირჩიე დონე"
                    containerClassName="w-full"
                    message={error?.message}
                  />
                )}
              />
            </Fragment>
          )
        )}

        <div className="flex items-center gap-4 tablet:gap-6 w-full col-span-1 tablet:col-span-2">
          <Button
            fullWidth
            type="button"
            buttonType="tertiary"
            onClick={fl.onCancelForeignLanguage}
          >
            გაუქმება
          </Button>

          <Button
            fullWidth
            type="button"
            buttonType="primary"
            onClick={fl.onAppendForeignLanguage}
          >
            დამატება
          </Button>
        </div>
      </div>

      {fl.addedForeignLanguages.length > 0 && (
        <ul className="flex items-center flex-wrap gap-2 text-sm tablet:text-base-sm tablet:gap-4">
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
