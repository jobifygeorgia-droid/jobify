import { Spinner } from "@/components/ui";
import { LocationT } from "@/interface/global.types";

type LocationFieldDropdownT = {
  loading: boolean;
  options: LocationT[];
  onOptionSelect: (option: LocationT) => void;
};

const LocationFieldDropdown: React.FC<LocationFieldDropdownT> = (props) => {
  const { loading, options, onOptionSelect } = props;

  return (
    <div className="absolute top-full translate-y-2.5 left-0 z-30 p-2 bg-white border border-bc rounded-xl w-full">
      <div className="flex flex-col gap-2 w-full p-2 max-h-[200px] min-h-[60px] overflow-y-auto">
        {!loading &&
          options.map((option) => (
            <div
              key={option.lat}
              onMouseDown={() => onOptionSelect(option)}
              className="cursor-pointer hover:text-blue transition-colors"
            >
              {option.location_name}
            </div>
          ))}

        {!loading && options.length === 0 && (
          <div className="text-base-sm text-light-grey-dark w-full text-center font-semibold">
            ლოკაცია ვერ მოიძებნა
          </div>
        )}

        {loading && <Spinner size="sm" />}
      </div>
    </div>
  );
};

export default LocationFieldDropdown;
