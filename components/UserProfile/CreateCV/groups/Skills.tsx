import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useSkills } from "@/components/UserProfile/CreateCV/hooks";

import {
  ChipValue,
  FormGroupContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { Button } from "@/components/ui";
import { TextField } from "@/components/layouts/Form";

const Skills: React.FC = () => {
  const { control } = useCV();
  const s = useSkills();

  return (
    <FormGroupContainer
      title="უნარები"
      name="skills"
      isSucceed={s.isSucceed}
      hasError={s.hasError}
      onExpand={s.onToggleSkills}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-6">
          {s.skills.map((_, index) =>
            index !== s.selectedSkillFieldIndex ? null : (
              <Controller
                key={`skill-${index}`}
                control={control}
                name={`skills.${index}`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="ჩაწერე შენი უნარები"
                    containerClassName="w-full"
                    message={error?.message}
                  />
                )}
              />
            )
          )}

          <Button type="button" buttonType="primary" onClick={s.onAppendSkill}>
            დამატება
          </Button>

          <Button type="button" buttonType="tertiary" onClick={s.onCancelSkill}>
            გაუქმება
          </Button>
        </div>

        {s.addedSkills.length > 0 && (
          <ul className="flex items-center flex-wrap gap-4">
            {s.addedSkills.map((skill, index) => (
              <ChipValue
                key={`skill-${skill}-${index}`}
                value={skill}
                onRemove={() => s.onRemoveSkill(index)}
              />
            ))}
          </ul>
        )}
      </div>
    </FormGroupContainer>
  );
};

export default Skills;
