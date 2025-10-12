import { Close } from "@/components/ui/icons";

type FilterChipT = {
  label: string;
};

const FilterChip: React.FC<FilterChipT> = ({ label }) => {
  return (
    <div className="bg-light-grey flex items-center gap-2 rounded-full px-3">
      <span>{label}</span>

      <button className="size-9 flex items-center justify-center">
        <Close size={28} />
      </button>
    </div>
  );
};

export default FilterChip;
