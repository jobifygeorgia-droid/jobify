import { DYNAMIC_ROUTES } from "@/lib/config";
import { VACANCY_GROUPS } from "@/interface/global.types";

import { AnchorButton } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";

type VacanciesForDifferentGroupsCardT = {
  title: string;
  subtitle?: string;
  group: VACANCY_GROUPS;
};

const VacanciesForDifferentGroupsCard: React.FC<
  VacanciesForDifferentGroupsCardT
> = (props) => {
  const { title, subtitle, group } = props;

  return (
    <div className="segment-card min-w-[270px] h-[170px] laptop:min-w-[330px] laptop:h-[290px] flex flex-col rounded-4xl p-4 text-white relative">
      <div className="segment-card--content absolute top-[20px] laptop:top-[80px]">
        <div className="text-white h-full w-full flex flex-col justify-between">
          <span className="font-semibold text-base-sm laptop:text-md">
            დასაქმების შესაძლებლობა
          </span>

          <div className="flex flex-col gap-4">
            <span className="text-md laptop:text-3xl">{title}</span>
            {subtitle && (
              <span className="text-sm laptop:text-base-sm">{subtitle}</span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-[65%] laptop:top-[75%] left-4 right-4">
        <AnchorButton
          fullWidth
          href={DYNAMIC_ROUTES.vacancies_groups(group)}
          buttonType="text"
          className="justify-between! px-0! text-white hover:text-white! decoration-transparent"
        >
          <span className="text-base-sm laptop:text-md">სრულად ნახვა</span>
          <ArrowRight className="text-current text-2xl! laptop:text-5xl!" />
        </AnchorButton>
      </div>
    </div>
  );
};

export default VacanciesForDifferentGroupsCard;
