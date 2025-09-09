import { UseFormWatch } from "react-hook-form";

import { formatDate } from "@/lib/utils/formatDate";
import { CVSchemaT } from "@/lib/schemas/CVSchema";

import ReviewItem from "./ReviewItem";
import ReviewContainer from "./ReviewContainer";
import { University, Calendar, EducationHat } from "@/components/ui/icons";

type CertificatesReviewT = {
  index: number;
  watch: UseFormWatch<CVSchemaT>;
};

const CertificatesReview: React.FC<CertificatesReviewT> = (props) => {
  const { watch, index } = props;

  const field = watch(`certificates.${index}`);

  if (Object.values(field).every((v) => v === "")) return null;

  return (
    <div>
      <ReviewContainer>
        {field.name && <ReviewItem Icon={EducationHat} value={field.name} />}

        {field.organization && (
          <ReviewItem Icon={University} value={field.organization} />
        )}

        {field.end_date && (
          <ReviewItem Icon={Calendar} value={formatDate(field.end_date)} />
        )}
      </ReviewContainer>
    </div>
  );
};

export default CertificatesReview;
