import { StatisticBox } from "./";

type StatisticT = {};

const Statistic: React.FC<StatisticT> = () => {
  return (
    <div
      style={{ backgroundImage: `url("/lines.png")` }}
      className="relative hidden tablet:block w-[50%] h-[214px] laptop:h-[366px] -translate-y-[7%] bg-size-[100%] bg-center bg-no-repeat"
    >
      <figure
        className="w-full h-full bg-no-repeat bg-contain bg-position-[70%_0px]"
        style={{ backgroundImage: `url("/find-job-sidebar-asset.png")` }}
      />

      <StatisticBox
        title="კარიერული რჩევები"
        className="top-10 left-0 desktop-sm:top-[25%] desktop-sm:left-2"
      />

      <StatisticBox
        title="საგანმანათლებლო რესურსები"
        className="left-1/3 top-[75%] desktop-sm:left-1/5"
      />

      <StatisticBox
        title="ბლოგები და სტატიები"
        className="top-2 left-[60%] desktop-sm:top-[15%]"
      />
    </div>
  );
};

export default Statistic;
