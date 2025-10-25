import Link from "next/link";
import Image from "next/image";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { formatDate, showSalaryRange } from "@/lib/utils";
import { VacancyT } from "@/interface/db/vacancies.types";
import transformVacancyType from "@/lib/utils/transformVacancyType";

import { Chip, IconChip } from "@/components/ui";
import { AddToFavoriteButton } from "@/components/layouts";
import { Calendar, Wallet, Location } from "@/components/ui/icons";

type VacancyCardT = {
  vacancy: VacancyT;
  isAuthenticated: boolean;
};

const VacancyCard: React.FC<VacancyCardT> = ({ vacancy, isAuthenticated }) => {
  const vacancyType = transformVacancyType(vacancy.vacancy_type);
  const salary = showSalaryRange(vacancy.min_salary, vacancy.max_salary);

  const candidateUrl = isAuthenticated
    ? DYNAMIC_ROUTES.vacancy_details(vacancy.id.toString())
    : "";

  return (
    <div className="max-w-full w-full px-3 laptop:px-4 py-2 laptop:py-3 rounded-2xl bg-white border border-bc flex items-center gap-2 tablet:gap-5">
      <Link
        href={candidateUrl}
        scroll={isAuthenticated ? true : false}
        className="w-full flex items-center gap-2 tablet:gap-5"
      >
        <figure className="relative size-11 laptop:size-16 aspect-square rounded-md overflow-hidden bg-dark-grey-light">
          <Image
            fill
            sizes="44px, 64px"
            alt={vacancy.employer.company_name}
            className="object-cover object-center"
            src={
              "https://images.unsplash.com/photo-1706879349357-f17b91de99a5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </figure>

        <div className="flex flex-col gap-2 laptop:gap-3">
          <div className="flex items-center gap-7">
            <span className="leading-4 text-sm tablet:text-base-sm laptop:text-md font-semibold">
              {vacancy.title}
            </span>

            <Chip type="tertiary" className="hidden tablet:flex">
              {vacancyType}
            </Chip>
          </div>

          <div className="flex items-center gap-2 tablet:gap-6">
            <IconChip text={vacancy.location} className="hidden tablet:flex">
              <Location className="text-light-grey-dark" filled size={20} />
            </IconChip>

            <IconChip className="text-xs" text={salary}>
              <Wallet
                filled
                className="text-light-grey-dark text-base! laptop:text-lg!"
              />
            </IconChip>

            <IconChip
              className="text-xs"
              text={`${formatDate(vacancy.expiry_date)}-მდე`}
            >
              <Calendar
                filled
                size={20}
                className="text-light-grey-dark text-base! laptop:text-lg!"
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
