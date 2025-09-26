"use client";

import { useState, useEffect } from "react";

import { calcTimeAgo } from "@/lib/utils/calcTimeAgo";

type TimeAgoT = {
  createdAt: string;
};

const TimeAgo: React.FC<TimeAgoT> = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const candidateValue = calcTimeAgo(createdAt);
    setTimeAgo(candidateValue);
  }, [createdAt]);

  return (
    <span className="text-xs tablet:text-sm text text-light-grey-dark">
      {timeAgo}
    </span>
  );
};

export default TimeAgo;
