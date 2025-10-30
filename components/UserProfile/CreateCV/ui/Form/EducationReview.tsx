import { UseFormWatch } from "react-hook-form";

import { formatDate } from "@/lib/utils";
import { CVSchemaT } from "@/lib/schemas/user/CVSchema";

import {
  Calendar,
  University,
  EducationHat,
  EducationPen,
} from "@/components/ui/icons";

import {
  ReviewItem,
  ReviewContainer,
} from "@/components/UserProfile/CreateCV/ui";

type EducationReviewT = {
  index: number;
  watch: UseFormWatch<CVSchemaT>;
  onEdit: () => void;
  onDelete: () => void;
};

const EducationReview: React.FC<EducationReviewT> = (props) => {
  const { watch, index, onEdit, onDelete } = props;

  const field = watch(`education.${index}`);

  const startAndEndDate = [
    formatDate(field.start_date),
    formatDate(field.end_date),
  ].filter((v) => v !== "");

  const hasNotValue = Object.values(field).every((v) => v === "");

  if (hasNotValue) return null;

  return (
    <ReviewContainer onDelete={onDelete} onEdit={onEdit}>
      {field.university && (
        <ReviewItem Icon={University} value={field.university} />
      )}

      {startAndEndDate.length > 0 && (
        <ReviewItem Icon={Calendar} value={startAndEndDate.join(" - ")} />
      )}

      {field.faculty && (
        <ReviewItem Icon={EducationPen} value={field.faculty} />
      )}

      {field.degree && <ReviewItem Icon={EducationHat} value={field.degree} />}
    </ReviewContainer>
  );
};

export default EducationReview;
