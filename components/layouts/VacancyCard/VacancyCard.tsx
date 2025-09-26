import Link from "next/link";
import Image from "next/image";

import { DYNAMIC_ROUTES } from "@/lib/config";

import { Chip, IconChip } from "@/components/ui";
import { AddToFavoriteButton } from "@/components/layouts";
import { Calendar, Wallet, Location } from "@/components/ui/icons";

type VacancyCardT = {
  id: number;
  companyName: string;
  createdAt: string;
  position: string;
  salary: string;
  location: string;
  jobFormat: string;
  image: string;
};

const VacancyCard: React.FC<VacancyCardT> = (vacancy) => {
  return (
    <div className="max-w-full w-full px-3 laptop:px-4 py-2 laptop:py-3 rounded-2xl bg-white border border-bc flex items-center gap-2 tablet:gap-5">
      <Link
        href={DYNAMIC_ROUTES.vacancy_details("123")}
        className="w-full flex items-center gap-2 tablet:gap-5"
      >
        <figure className="relative size-11 laptop:size-16 aspect-square rounded-md overflow-hidden bg-dark-grey-light">
          <Image
            src={vacancy.image}
            alt={vacancy.companyName}
            fill
            className="object-cover object-center"
          />
        </figure>

        <div className="flex flex-col gap-2 laptop:gap-3">
          <div className="flex items-center gap-7">
            <span className="leading-4 text-sm tablet:text-base-sm laptop:text-md font-semibold">
              {vacancy.position}
            </span>

            <Chip type="tertiary" className="hidden tablet:flex">
              {vacancy.jobFormat}
            </Chip>
          </div>

          <div className="flex items-center gap-2 tablet:gap-6">
            <IconChip text={vacancy.location} className="hidden tablet:flex">
              <Location className="text-light-grey-dark" filled size={20} />
            </IconChip>

            <IconChip text={vacancy.salary} className="text-xs">
              <Wallet
                className="text-light-grey-dark text-base! laptop:text-lg!"
                filled
              />
            </IconChip>

            <IconChip
              className="text-xs"
              text={`${new Date().toLocaleDateString()}-მდე`}
            >
              <Calendar
                className="text-light-grey-dark text-base! laptop:text-lg!"
                filled
                size={20}
              />
            </IconChip>
          </div>
        </div>
      </Link>

      <div className="ml-auto flex items-center">
        <AddToFavoriteButton />
      </div>
    </div>
  );
};

export default VacancyCard;
