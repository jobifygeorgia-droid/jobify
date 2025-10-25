import classnames from "classnames";

import { Flash } from "@/components/ui/icons";

type StatisticBoxT = {
  title: string;
  className: string;
};

const StatisticBox: React.FC<StatisticBoxT> = (props) => {
  const { title, className } = props;

  return (
    <div
      className={classnames(
        className,
        "absolute w-[160px] desktop-sm:w-[210px] py-4 bg-white/50 backdrop-blur-xs rounded-xl shadow-lg flex flex-col gap-2 items-center justify-center"
      )}
    >
      <Flash />
      <span className="font-medium text-base-sm text-center">{title}</span>
    </div>
  );
};

export default StatisticBox;
