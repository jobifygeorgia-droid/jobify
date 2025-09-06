import { useState } from "react";

import { CVSchemaT } from "@/lib/schemas/CVSchema";

import ChipValue from "./ChipValue";
import { Button } from "@/components/ui";
import { ErrorMessage, TextField } from "@/components/layouts/Form";

type ForeignLanguagesFieldT = {
  message?: string;
  languages: CVSchemaT["foreign_languages"];
  onAddLanguage: (value: CVSchemaT["foreign_languages"][0]) => void;
  onRemoveLanguage: (index: number) => void;
};

const ForeignLanguagesField: React.FC<ForeignLanguagesFieldT> = (props) => {
  const { languages, message, onAddLanguage, onRemoveLanguage } = props;

  const [userValue, setUserValue] = useState(() => ({
    language: "",
    level: "",
  }));

  const onAdd = () => {
    if (!userValue.language || !userValue.level) return;

    onAddLanguage(userValue);
    setUserValue(() => ({ language: "", level: "" }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-6">
        <TextField
          labelPosition="out"
          label="მიუთითე ენა"
          containerClassName="w-full"
          value={userValue.language}
          onChange={(e) =>
            setUserValue((prev) => ({ ...prev, language: e.target.value }))
          }
        />

        <TextField
          labelPosition="out"
          label="აირჩიე დონე"
          containerClassName="w-full"
          value={userValue.level}
          onChange={(e) =>
            setUserValue((prev) => ({ ...prev, level: e.target.value }))
          }
        />

        {message && (
          <div className="col-span-2">
            <ErrorMessage message={message} />
          </div>
        )}

        <Button type="button" buttonType="outlined">
          გაუქმება
        </Button>

        <Button
          type="button"
          buttonType="secondary"
          onClick={onAdd}
          disabled={!userValue.language || !userValue.level}
        >
          დამატება
        </Button>
      </div>

      {languages.length > 0 && (
        <ul className="flex items-center flex-wrap gap-4">
          {languages.map((language, index) => (
            <ChipValue
              key={`skill-${language}-${index}`}
              value={`${language.language} (${language.level})`}
              onRemove={() => onRemoveLanguage(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ForeignLanguagesField;
