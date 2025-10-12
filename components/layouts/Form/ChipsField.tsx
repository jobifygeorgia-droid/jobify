import { ChipsFieldT } from "@/interface/ui/forms-ui";

import { Chip } from "@/components/ui";
import { ErrorMessage, Label } from ".";

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
