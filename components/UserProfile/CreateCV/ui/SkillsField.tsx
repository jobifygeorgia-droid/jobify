import { useState } from "react";

import ChipValue from "./ChipValue";
import { Button } from "@/components/ui";
import { ErrorMessage, TextField } from "@/components/layouts/Form";

type SkillsFieldT = {
  message?: string;
  skills: Array<string>;
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (index: number) => void;
};

const SkillsField: React.FC<SkillsFieldT> = (props) => {
  const [userValue, setUserValue] = useState("");

  const { skills, onAddSkill, onRemoveSkill, message } = props;

  const onAdd = () => {
    if (!userValue) return;

    onAddSkill(userValue);
    setUserValue("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-6">
        <TextField
          labelPosition="out"
          label="ჩაწერე შენი უნარები"
          containerClassName="w-full"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />

        <Button type="button" buttonType="outlined">
          გაუქმება
        </Button>

        <Button
          type="button"
          buttonType="secondary"
          onClick={onAdd}
          disabled={!userValue}
        >
          დამატება
        </Button>
      </div>

      {skills.length > 0 && (
        <ul className="flex items-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <ChipValue
              key={`skill-${skill}-${index}`}
              value={skill}
              onRemove={() => onRemoveSkill(index)}
            />
          ))}
        </ul>
      )}

      {message && <ErrorMessage message={message} />}
    </div>
  );
};

export default SkillsField;
