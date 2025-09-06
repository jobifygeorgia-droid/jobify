import { ErrorMessage } from "@/components/layouts/Form";
import { Chip } from "@/components/ui";

type DegreesChipsT = {
  value: string;
  message?: string;
  onChoose: (v: string) => void;
};

const degrees = ["ბაკალავრიატი", "მაგისტრატურა", "დოქტორანტურა"];

const DegreesChips: React.FC<DegreesChipsT> = (props) => {
  const { onChoose, value, message } = props;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        {degrees.map((degree, index) => (
          <Chip
            isActive={degree === value}
            onClick={() => onChoose(degree)}
            key={`education-${index}-${degree}`}
          >
            {degree}
          </Chip>
        ))}
      </div>

      {message && <ErrorMessage message={message} />}
    </div>
  );
};

export default DegreesChips;
