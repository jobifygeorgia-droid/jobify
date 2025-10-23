import { UseFormWatch } from "react-hook-form";

import { formatDate } from "@/lib/utils";
import { CVSchemaT } from "@/lib/schemas/user/CVSchema";

import { ReviewItem, ReviewContainer } from "./";
import { University, Calendar, EducationPen } from "@/components/ui/icons";

type WorkingExperienceReviewT = {
  index: number;
  watch: UseFormWatch<CVSchemaT>;
  onEdit: () => void;
  onDelete: () => void;
};

const WorkingExperienceReview: React.FC<WorkingExperienceReviewT> = (props) => {
  const { watch, index, onEdit, onDelete } = props;

  const field = watch(`working_experience.${index}`);

  const startAndEndDate = [
    formatDate(field.start_date),
    formatDate(field.end_date),
  ].filter((v) => v !== "");

  const hasNotValue = Object.values(field)
    .filter((v) => typeof v === "string")
    .every((v) => v === "");

  if (hasNotValue) return null;

  return (
    <ReviewContainer onDelete={onDelete} onEdit={onEdit}>
      {field.position && (
        <ReviewItem Icon={University} value={field.position} />
      )}

      {startAndEndDate.length > 0 && (
        <ReviewItem Icon={Calendar} value={startAndEndDate.join(" - ")} />
      )}

      {field.company && (
        <ReviewItem Icon={EducationPen} value={field.company} />
      )}

      {/* {field.degree && <ReviewItem Icon={EducationHat} value={field.degree} />} */}
    </ReviewContainer>
  );
};

export default WorkingExperienceReview;
