import { IconT } from "@/components/ui/icons";

type StatisticT = {
  Icon: React.ComponentType<IconT>;
  title: string;
  value: string | number;
};

const Statistic: React.FC<StatisticT> = (props) => {
  const { Icon, title, value } = props;

  return (
    <div className="bg-white flex items-center justify-center gap-4 text-sm shadow-[0px_14px_32px_rgba(0,0,0,0.06)] p-3 rounded-xl">
      <span className="bg-orange-light size-10 aspect-square rounded-full overflow-hidden flex items-center justify-center">
        <Icon className="text-orange" />
      </span>
      <span className="flex flex-col gap-2">
        <span>{title}</span>
        <span className="font-bold">{value}</span>
      </span>
    </div>
  );
};

export default Statistic;
