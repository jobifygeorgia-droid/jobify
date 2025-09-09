import { UseFormWatch } from "react-hook-form";

import { CVSchemaT } from "@/lib/schemas/CVSchema";
import { formatDate } from "@/lib/utils/formatDate";

import {
  EducationHat,
  University,
  Calendar,
  EducationPen,
} from "@/components/ui/icons";
import ReviewItem from "./ReviewItem";
import ReviewContainer from "./ReviewContainer";

type EducationReviewT = {
  index: number;
  watch: UseFormWatch<CVSchemaT>;
};

const EducationReview: React.FC<EducationReviewT> = ({ watch, index }) => {
  const field = watch(`education.${index}`);

  const startAndEndDate = [
    formatDate(field.start_date),
    formatDate(field.end_date),
  ].filter((v) => v !== "");

  if (Object.values(field).every((v) => v === "")) return null;

  return (
    <ReviewContainer>
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
