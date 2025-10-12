import Statistic from "./Statistic";
import { Heart, CV, Eye } from "@/components/ui/icons";

type StatisticsT = {};

const Statistics: React.FC<StatisticsT> = () => {
  return (
    <div className="w-full flex overflow-x-auto touch-pan-x no-scrollbar flex-row gap-2 items-center justify-between">
      <Statistic
        title="ფავორიტი ვაკანსიები"
        value="8976"
        highlighted
        Icon={Heart}
      />

      <Statistic title="გაგზავნილი რეზიუმე" value="89" Icon={CV} />

      <Statistic title="პროფილის ნახვები" value="70" Icon={Eye} />
    </div>
  );
};

export default Statistics;
