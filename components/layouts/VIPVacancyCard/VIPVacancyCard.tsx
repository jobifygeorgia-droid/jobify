import Link from "next/link";

import TimeAgo from "./TimeAgo";
import { Chip, IconChip, LineClamp } from "@/components/ui";
import { Location, Star } from "@/components/ui/icons";
import { DYNAMIC_ROUTES, PATHS } from "@/lib/config";

type VIPVacancyCardT = {
  id: number;
  companyName: string;
  createdAt: string;
  position: string;
  salary: string;
  location: string;
  jobFormat: string;
};

const VIPVacancyCard: React.FC<VIPVacancyCardT> = (vacancy) => {
  return (
    <div className="bg-white max-w-[360px] w-full aspect-[35/20] border border-bc px-[30px] py-6 rounded-2xl flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <Link
          href={`${PATHS.vacancies}?company=${123}`}
          className="w-full flex items-start gap-5"
        >
          <figure className="relative w-[54px] aspect-square rounded-md overflow-hidden bg-dark-grey-light"></figure>

          <div className="flex flex-col gap-2 font-semibold">
            <LineClamp
              title={vacancy.companyName}
              className="capitalize text-base-sm"
            >
              {vacancy.companyName}
            </LineClamp>
            <TimeAgo createdAt={vacancy.createdAt} />
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-base">VIP</span>
          <Star className="text-orange" filled={true} size={26} />
        </div>

        {/* Body */}
        <Link
          href={DYNAMIC_ROUTES.vacancy_details("123")}
          className="flex flex-col gap-1"
        >
          <LineClamp
            title={vacancy.position}
            className="text-blue font-bold text-base-sm"
          >
            {vacancy.position}
          </LineClamp>

          <span className="font-semibold text-sm">
            <span>ანაზღაურება:</span>
            &nbsp;
            <span>{vacancy.salary}</span>
          </span>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <IconChip size="sm" text={vacancy.location}>
          <Location filled className="text-light-grey-dark" size={20} />
        </IconChip>

        <Chip className="text-sm! px-3! py-0!">{vacancy.jobFormat}</Chip>
      </div>
    </div>
  );
};

export default VIPVacancyCard;
