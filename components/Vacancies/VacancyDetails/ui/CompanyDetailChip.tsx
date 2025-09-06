import { IconPropsT } from "@/components/ui/icons";

type CompanyDetailChipT = {
  text: string;
  Icon: React.ComponentType<IconPropsT>;
};

const CompanyDetailChip: React.FC<CompanyDetailChipT> = (props) => {
  const { Icon, text } = props;

  return (
    <span className="flex items-center gap-2 text-base text-dark-grey-hover">
      <Icon className="fill-orange" width={24} height={24} />
      <span className="max-w-[220px] overflow-hidden text-nowrap">{text}</span>
    </span>
  );
};

export default CompanyDetailChip;
