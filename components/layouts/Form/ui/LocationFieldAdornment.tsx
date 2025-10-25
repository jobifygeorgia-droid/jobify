import { Close, Location } from "@/components/ui/icons";

type LocationFieldAdornmentT = {
  hasValue: boolean;
  onClear: () => void;
};

const LocationFieldAdornment: React.FC<LocationFieldAdornmentT> = (props) => {
  const { hasValue, onClear } = props;

  return hasValue ? (
    <button
      type="button"
      onClick={onClear}
      className="flex items-center justify-center cursor-pointer"
    >
      <Close />
    </button>
  ) : (
    <Location />
  );
};

export default LocationFieldAdornment;
