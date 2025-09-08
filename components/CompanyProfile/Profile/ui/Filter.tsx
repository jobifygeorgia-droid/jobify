"use client";

import { Chip } from "@/components/ui";

type FilterT = {};

const Filter: React.FC<FilterT> = () => {
  return (
    <div className="flex items-center gap-3">
      <Chip isActive={true} onClick={() => {}}>
        აქტიური
      </Chip>
      <Chip isActive={false} onClick={() => {}}>
        სამუშაო ვერსია
      </Chip>
      <Chip isActive={false} onClick={() => {}}>
        არქივი
      </Chip>
    </div>
  );
};

export default Filter;
