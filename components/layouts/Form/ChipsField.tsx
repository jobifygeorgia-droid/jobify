import { Chip } from "@/components/ui";
import { ErrorMessage, Label } from ".";

type ChipsFieldT = {
  value: string;
  label?: string;
  message?: string;
  onChange: (v: string) => void;
  data: Array<{ title: string; value: string }>;
};

const ChipsField: React.FC<ChipsFieldT> = (props) => {
  const { onChange, value, message, data, label } = props;

  return (
    <div className="flex flex-col gap-2">
      {label && <Label label={label} labelPosition="out" keepOrder />}

      <div className="flex items-center gap-3">
        {data.map((item, index) => (
          <Chip
            isActive={item.value === value}
            onClick={() => onChange(item.value)}
            key={`chip-${index}-${item.value}`}
          >
            {item.title}
          </Chip>
        ))}
      </div>

      {message && <ErrorMessage message={message} />}
    </div>
  );
};

export default ChipsField;
