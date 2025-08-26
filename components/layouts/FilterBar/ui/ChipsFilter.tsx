import { Chip } from "@/components/ui";
import ExpandedFilterFieldLabel from "./ExpandedFilterFieldLabel";

type ChipsFilterT = {
  title: string;
  options: Array<{ label: string; value: string }>;
};

const ChipsFilter: React.FC<ChipsFilterT> = (props) => {
  const { title, options } = props;

  return (
    <div className="flex flex-col gap-4">
      <ExpandedFilterFieldLabel label={title} />

      <div className="flex items-center gap-5">
        {options.map((option, index) => (
          <Chip key={option.value} isActive={index === 1} onClick={() => {}}>
            {option.label}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ChipsFilter;
