import { Close } from "@/components/ui/icons";

type ChipValueT = {
  value: string;
  onRemove: () => void;
};

const ChipValue: React.FC<ChipValueT> = (props) => {
  const { value, onRemove } = props;

  return (
    <li className="bg-blue-light text-blue w-max py-1 px-4 rounded-full flex items-center gap-2">
      <span className="">{value}</span>

      <button
        type="button"
        className="translate-y-[2px] cursor-pointer"
        onClick={onRemove}
      >
        <Close width={14} height={14} className="fill-blue" />
      </button>
    </li>
  );
};

export default ChipValue;
