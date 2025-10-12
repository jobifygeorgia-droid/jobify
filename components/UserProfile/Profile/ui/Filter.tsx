import classnames from "classnames";

import FilterChip from "./FilterChip";
import { AnchorButton } from "@/components/ui";
import { Close, FilterSecondary } from "@/components/ui/icons";
import FilterPopup from "./FilterPopup";

type FilterT = {};

const Filter: React.FC<FilterT> = () => {
  return (
    <>
      <div className="my-6 flex items-center justify-start">
        <div className="flex items-center gap-3 text-dark-grey-dark">
          <FilterChip label="საოფისე" />
          <FilterChip label="UX დიზაინერი" />
          <FilterChip label="თბილისი" />

          <button className="bg-light-grey size-9 rounded-full flex items-center justify-center">
            <Close size={28} />
          </button>
        </div>

        <AnchorButton
          href={"?filter-favorites=1"}
          className={classnames("bg-blue-light w-max ml-auto relative", {
            "max-tablet:border border-orange": true,
          })}
        >
          <span className="hidden max-tablet:inline-block absolute size-4 rounded-full bg-orange top-0 right-0 -translate-y-[4px] translate-x-[4px]" />
          <FilterSecondary className="text-blue" />
        </AnchorButton>
      </div>

      <FilterPopup />
    </>
  );
};

export default Filter;
