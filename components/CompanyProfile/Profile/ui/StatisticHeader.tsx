import { ViewsStatistic, Statistic } from "./";
import { Notification } from "@/components/ui/icons";

type StatisticHeaderT = {};

const StatisticHeader: React.FC<StatisticHeaderT> = () => {
  return (
    <header className="flex flex-col gap-5 ">
      <div className="overflow-x-auto no-scrollbar touch-pan-x flex desktop-sm:grid grid-cols-3 gap-4 desktop-sm:px-4 desktop-sm:py-4">
        <ViewsStatistic />

        <Statistic
          Icon={Notification}
          title="გამოგზავნილი რეზიუმეების რაოდენობა"
          value="989879799"
        />

        {/* ASK: აქ რა სტატისტიკა დვუდოთ -> მოიფიქრებენ */}
        <Statistic
          value="897869"
          Icon={Notification}
          title="აქ კიდე რამე სტატისტიკა დვუდოთ"
        />
      </div>
    </header>
  );
};

export default StatisticHeader;
