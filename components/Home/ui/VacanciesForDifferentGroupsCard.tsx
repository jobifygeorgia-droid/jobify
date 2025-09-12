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
    <div className="segment-card flex-1 flex flex-col h-[290px] rounded-4xl p-4 text-white relative">
      <div className="segment-card--content absolute top-[80px]">
        <div className="text-white h-full w-full flex flex-col justify-between">
          <span className="font-semibold text-md">დასაქმების შესაძლებლობა</span>

          <div className="flex flex-col gap-4">
            <span className="text-3xl">{title}</span>
            {subtitle && <span className="text-base-sm">{subtitle}</span>}
          </div>
        </div>
      </div>

      <div className="absolute top-[75%] left-4 right-4">
        <AnchorButton
          fullWidth
          href={DYNAMIC_ROUTES.vacancies_groups(group)}
          buttonType="text"
          className="justify-between! px-0! text-white hover:text-white! decoration-transparent"
        >
          <span>სრულად ნახვა</span>
          <ArrowRight className="text-current" size={41} />
        </AnchorButton>
      </div>
    </div>
  );
};

export default VacanciesForDifferentGroupsCard;
