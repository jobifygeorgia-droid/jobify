import { IconPropsT } from "@/components/ui/icons";

type VacancyDetailChipT = {
  title: string;
  value: string;
  Icon: React.ComponentType<IconPropsT>;
};

const VacancyDetailChip: React.FC<VacancyDetailChipT> = (props) => {
  const { Icon, title, value } = props;
  return (
    <div className="flex flex-col gap-4">
      <Icon className="fill-blue" />
      <div className="flex flex-col gap-1">
        <span className="text-sm">{title}</span>
        <span className="text-base-sm font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default VacancyDetailChip;
