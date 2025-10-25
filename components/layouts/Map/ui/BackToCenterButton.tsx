import { Location } from "@/components/ui/icons";

type BackToCenterButtonT = {
  onCenter: () => void;
};

const BackToCenterButton: React.FC<BackToCenterButtonT> = ({ onCenter }) => {
  return (
    <button
      onClick={onCenter}
      className="absolute bottom-20 right-2 rounded-full size-11 flex items-center justify-center bg-white text-dark-grey-hover shadow-xs cursor-pointer"
    >
      <Location />
    </button>
  );
};

export default BackToCenterButton;
