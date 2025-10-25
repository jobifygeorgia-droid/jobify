import { Chip, IconChip } from "@/components/ui";
import { Location } from "@/components/ui/icons";
import { VACANCY_TYPES } from "@/interface/global.types";
import transformVacancyType from "@/lib/utils/transformVacancyType";

type CardFooterT = {
  location: string;
  vacancyType: VACANCY_TYPES;
};

const CardFooter: React.FC<CardFooterT> = ({ location, vacancyType }) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <IconChip size="sm" text={location}>
        <Location
          filled
          className="text-light-grey-dark text-md! laptop:text-lg!"
        />
      </IconChip>

      <Chip type="tertiary">{transformVacancyType(vacancyType)}</Chip>
    </div>
  );
};

export default CardFooter;
