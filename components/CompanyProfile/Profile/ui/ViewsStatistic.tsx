"use client";

import { useState } from "react";

import Statistic from "./Statistic";
import { Switch } from "@/components/layouts/Form";
import { Notification } from "@/components/ui/icons";

type ViewsStatisticT = {};

const ViewsStatistic: React.FC<ViewsStatisticT> = () => {
  const [showByCurrentMonth, setShowByCurrentMonth] = useState(true);

  const onChangeMode = () => {
    setShowByCurrentMonth((prev) => !prev);
  };

  return (
    <Statistic
      Icon={Notification}
      value="897654678979999"
      title="ვაკანსიის ნახვების რაოდენობა"
    >
      <div className="ml-auto flex flex-col gap-1 items-center">
        <Switch
          onChange={onChangeMode}
          value={showByCurrentMonth}
          type="secondary"
        />
        <span className="font-semibold text-sm">
          {showByCurrentMonth ? "თვე" : "წელი"}
        </span>
      </div>
    </Statistic>
  );
};

export default ViewsStatistic;
