import { IconT } from "@/components/ui/icons";

type DetailChipT = {
  title: string;
  value: string;
  Icon: React.ComponentType<IconT>;
};

const DetailChip: React.FC<DetailChipT> = (props) => {
  const { Icon, title, value } = props;

  return (
    <div className="flex tablet:flex-col gap-4">
      <Icon className="text-blue" />
      <div className="w-full grid grid-cols-[repeat(2,1fr)] items-center tablet:items-start tablet:flex tablet:flex-col gap-1">
        <span className="text-sm">{title}:</span>
        <span className="text-sm tablet:text-base-sm font-semibold">
          {value}
        </span>
      </div>
    </div>
  );
};

export default DetailChip;
