import { UseFormWatch } from "react-hook-form";

import { formatDate } from "@/lib/utils";
import { CVSchemaT } from "@/lib/schemas/user/CVSchema";

import {
  ReviewItem,
  ReviewContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { University, Calendar, EducationHat } from "@/components/ui/icons";

type CertificatesReviewT = {
  index: number;
  watch: UseFormWatch<CVSchemaT>;
  onEdit: () => void;
  onDelete: () => void;
};

const CertificatesReview: React.FC<CertificatesReviewT> = (props) => {
  const { watch, index, onEdit, onDelete } = props;

  const field = watch(`certificates.${index}`);

  if (Object.values(field).every((v) => v === "")) return null;

  return (
    <div>
      <ReviewContainer onDelete={onDelete} onEdit={onEdit}>
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
