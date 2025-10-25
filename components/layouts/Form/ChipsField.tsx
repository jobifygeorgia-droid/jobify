import classnames from "classnames";
import { ChipsFieldT } from "@/interface/ui/forms-ui";

import { Chip } from "@/components/ui";
import { ErrorMessage, Label } from ".";

const ChipsField: React.FC<ChipsFieldT> = (props) => {
  const { value, data, message, boxType = "flex", ...rest } = props;

  return (
    <div className="flex flex-col gap-2">
      {rest.label && (
        <Label
          label={rest.label}
          isRequired={rest.isRequired}
          className={rest.labelClassname}
        />
      )}

      <div
        className={classnames({
          "flex items-center flex-wrap gap-3": boxType === "flex",
          "grid grid-cols-2 gap-2": boxType === "grid",
        })}
      >
        {data.map((item, index) => (
          <Chip
            {...{
              ...props.chipOptions,
              size: "sm",
              isActive: item.value.toString() === value,
              onClick: () => rest.onChange(item.value.toString()),
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
