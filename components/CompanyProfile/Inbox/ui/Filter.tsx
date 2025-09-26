"use client";

import { Chip } from "@/components/ui";

type FilterT = {};

const Filter: React.FC<FilterT> = () => {
  return (
    <div className="flex items-center gap-3">
      <Chip isActive={true} onClick={() => {}}>
        ახალი
      </Chip>
      <Chip isActive={false} onClick={() => {}}>
        განხილული
      </Chip>
      <Chip isActive={false} onClick={() => {}}>
        ინტერვიუს ეტაპზე
      </Chip>
    </div>
  );
};

export default Filter;
