import { IconT } from "@/components/ui/icons";

type HeaderChipT = {
  text: string;
  Icon: React.ComponentType<IconT>;
};

const HeaderChip: React.FC<HeaderChipT> = (props) => {
  const { Icon, text } = props;

  return (
    <span className="flex items-center gap-2 text-base-sm tablet:text-base text-dark-grey-hover">
      <Icon className="text-orange text-lg! tablet:text-2xl!" />
      <span className="max-w-[220px] overflow-hidden text-nowrap">{text}</span>
    </span>
  );
};

export default HeaderChip;
