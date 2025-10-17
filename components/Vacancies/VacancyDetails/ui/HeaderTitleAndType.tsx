import { VACANCY_TYPES } from "@/interface/global.types";
import transformVacancyType from "@/lib/utils/transformVacancyType";

import { Chip } from "@/components/ui";

type HeaderTitleAndTypeT = {
  title: string;
  vacancyType: VACANCY_TYPES;
};

const HeaderTitleAndType: React.FC<HeaderTitleAndTypeT> = (props) => {
  const { title, vacancyType } = props;

  return (
    <div className="col-start-2 col-span-2 tablet:col-span-1 row-start-2 tablet:row-start-1 flex flex-col-reverse tablet:flex-row items-start tablet:items-center justify-between tablet:justify-start gap-x-4">
      <h4 className="font-semibold text-base-sm tablet:text-md tablet:w-[65%] laptop:w-max">
        {title}
      </h4>

      <Chip type="tertiary">{transformVacancyType(vacancyType)}</Chip>
    </div>
  );
};

export default HeaderTitleAndType;
