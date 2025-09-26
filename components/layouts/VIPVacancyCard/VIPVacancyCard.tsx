import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

import TimeAgo from "./TimeAgo";
import { Chip, IconChip, LineClamp } from "@/components/ui";
import { Location, Star } from "@/components/ui/icons";
import { DYNAMIC_ROUTES, PATHS } from "@/lib/config";

type VIPVacancyCardT = {
  vacancy: {
    id: number;
    companyName: string;
    createdAt: string;
    position: string;
    salary: string;
    location: string;
    jobFormat: string;
    image: string;
  };
  className?: string;
};

const VIPVacancyCard: React.FC<VIPVacancyCardT> = ({
  vacancy,
  className = "",
}) => {
  return (
    <div
      className={classnames(
        className,
        "bg-white max-w-[250px] laptop:max-w-[360px] w-full aspect-auto border border-bc px-4 laptop:px-7 py-3 laptop:py-6 rounded-2xl flex flex-col gap-3"
      )}
    >
      <div className="flex flex-col gap-1 tablet:gap-3">
        {/* Header */}
        <Link
          href={`${PATHS.vacancies}?company=${123}`}
          className="w-full flex items-start gap-3 tablet:gap-5"
        >
          <figure className="relative w-9 laptop:w-14 aspect-square rounded-md overflow-hidden bg-dark-grey-light">
            <Image
              src={vacancy.image}
              alt={vacancy.companyName}
              fill
              className="object-cover object-center"
            />
          </figure>

          <div className="flex flex-col gap-1 tablet:gap-2 font-semibold">
            <LineClamp
              title={vacancy.companyName}
              className="capitalize text-base-sm"
            >
              {vacancy.companyName}
            </LineClamp>
            <TimeAgo createdAt={vacancy.createdAt} />
          </div>
        </Link>

        <div className="flex items-center gap-1 laptop:gap-2">
          <span className="font-bold text-sm laptop:text-base">VIP</span>
          <Star
            className="text-orange text-lg! laptop:text-2xl!"
            filled={true}
          />
        </div>

        {/* Body */}
        <Link
          href={DYNAMIC_ROUTES.vacancy_details("123")}
          className="flex flex-col gap-1"
        >
          <LineClamp
            title={vacancy.position}
            className="text-blue font-bold text-sm laptop:text-base-sm"
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
      <div className="flex items-center justify-between gap-1">
        <IconChip size="sm" text={vacancy.location}>
          <Location
            filled
            className="text-light-grey-dark text-md! laptop:text-lg!"
          />
        </IconChip>

        <Chip type="tertiary">{vacancy.jobFormat}</Chip>
      </div>
    </div>
  );
};

export default VIPVacancyCard;
