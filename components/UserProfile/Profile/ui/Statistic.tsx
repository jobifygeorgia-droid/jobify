import classnames from "classnames";

import { IconT } from "@/components/ui/icons";

type StatisticT = {
  title: string;
  value: string;
  Icon: React.ComponentType<IconT>;
  highlighted?: boolean;
};

const Statistic: React.FC<StatisticT> = (props) => {
  const { Icon, title, value, highlighted = false } = props;

  return (
    <div
      className={classnames(
        "w-full max-w-[400px] flex items-center justify-center border rounded-xl py-3",
        {
          "bg-orange-light border-orange-light-active": highlighted,
          "bg-white border-light-grey": !highlighted,
        }
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={classnames(
            "size-10 aspect-square rounded-full flex items-center justify-center",
            {
              "bg-transparent": highlighted,
              "bg-orange-light": !highlighted,
            }
          )}
        >
          {<Icon className="text-orange" />}
        </span>

        <span className="flex flex-col">
          <span>{title}</span>
          <span>{value}</span>
        </span>
      </div>
    </div>
  );
};

export default Statistic;
