"use client";

import { AnchorChip } from "@/components/ui";
import { VACANCY_STATUS_TYPES } from "@/interface/global.types";

type FilterT = {
  filterBy?: string;
};

const Filter: React.FC<FilterT> = ({ filterBy }) => {
  return (
    <div className="flex items-center gap-3">
      <AnchorChip
        isActive={filterBy === VACANCY_STATUS_TYPES.ACTIVE}
        href={`?filter=${VACANCY_STATUS_TYPES.ACTIVE}`}
      >
        აქტიური
      </AnchorChip>

      <AnchorChip
        isActive={filterBy === VACANCY_STATUS_TYPES.DRAFT}
        href={`?filter=${VACANCY_STATUS_TYPES.DRAFT}`}
      >
        დრაფტი
      </AnchorChip>

      <AnchorChip
        isActive={filterBy === VACANCY_STATUS_TYPES.ARCHIVE}
        href={`?filter=${VACANCY_STATUS_TYPES.ARCHIVE}`}
      >
        არქივი
      </AnchorChip>
    </div>
  );
};

export default Filter;
