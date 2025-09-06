import { Minus } from "@/components/ui/icons";

type RemoveArrayFieldButtonT = {
  onRemove: () => void;
};

const RemoveArrayFieldButton: React.FC<RemoveArrayFieldButtonT> = ({
  onRemove,
}) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="absolute z-[99] -top-2 -right-0 size-8 bg-red-light rounded-full flex items-center justify-center cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
    >
      <Minus className="fill-red" />
    </button>
  );
};

export default RemoveArrayFieldButton;
