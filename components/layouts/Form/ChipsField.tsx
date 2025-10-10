import { Chip } from "@/components/ui";
import { ErrorMessage, Label } from ".";
import { ChipT } from "@/components/ui/Chip/Chip";

type ChipsFieldT = {
  value: string;
  label?: string;
  isRequired?: boolean;
  labelClassname?: string;
  message?: string;
  onChange: (value: string) => void;
  data: Array<{ label: string; value: string }>;
  chipOptions?: Partial<Omit<ChipT, "isActive" | "onClick">>;
};

const ChipsField: React.FC<ChipsFieldT> = (props) => {
  const { value, data, message, chipOptions, ...rest } = props;

  return (
    <div className="flex flex-col gap-2">
      {rest.label && (
        <Label
          keepOrder
          label={rest.label}
          labelPosition="out"
          isRequired={rest.isRequired}
          className={rest.labelClassname}
        />
      )}

      <div className="flex items-center flex-wrap gap-3">
        {data.map((item, index) => (
          <Chip
            {...{
              ...chipOptions,
              isActive: item.value === value,
              onClick: () => rest.onChange(item.value),
            }}
            key={`chip-${index}-${item.value}`}
          >
            {item.label}
          </Chip>
        ))}
      </div>

      {message && <ErrorMessage message={message} />}
    </div>
  );
};

export default ChipsField;
