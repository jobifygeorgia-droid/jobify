import { PATHS } from "@/lib/config";

import { Filter, SendEmail } from "./";
import { Plus } from "@/components/ui/icons";
import { AnchorButton } from "@/components/ui";

type FilterAndActionsT = {
  filterBy?: string;
};

const FilterAndActions: React.FC<FilterAndActionsT> = (props) => {
  return (
    <div className="flex items-start laptop:items-center flex-col-reverse laptop:flex-row justify-between gap-4">
      <Filter filterBy={props.filterBy} />

      <div className="flex tablet:gap-6 items-center justify-between w-full">
        <SendEmail />

        <AnchorButton
          href={PATHS.company_create_vacancy}
          className="max-tablet:gap-1 gap-3 font-semibold w-max p-0! text-sm! tablet:text-base-sm!"
        >
          <Plus className="translate-y-[2px] text-lg! tablet:text-2xl!" />
          ვაკანსიის დამატება
        </AnchorButton>
      </div>
    </div>
  );
};

export default FilterAndActions;
