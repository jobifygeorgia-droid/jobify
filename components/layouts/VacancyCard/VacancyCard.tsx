import Link from "next/link";
import Image from "next/image";

import { Chip, IconChip } from "@/components/ui";
import { AddToFavoriteButton } from "@/components/layouts";
import { Calendar, Wallet, Location } from "@/components/ui/icons";
import { DYNAMIC_ROUTES } from "@/lib/config";

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
    <div className="max-w-full w-full px-4 py-3 rounded-2xl bg-white border border-bc flex items-center gap-5">
      <Link
        href={DYNAMIC_ROUTES.vacancy_details("123")}
        className="w-full flex items-center gap-5"
      >
        <figure className="relative w-16 aspect-square rounded-md overflow-hidden bg-dark-grey-light">
          <Image
            src={vacancy.image}
            alt={vacancy.companyName}
            fill
            className="object-cover object-center"
          />
        </figure>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-7">
            <span className="leading-4 text-md font-semibold">
              {vacancy.position}
            </span>

            <Chip type="tertiary">{vacancy.jobFormat}</Chip>
          </div>

          <div className="flex items-center gap-6">
            <IconChip text={vacancy.location}>
              <Location className="text-light-grey-dark" filled size={20} />
            </IconChip>

            <IconChip text={vacancy.salary}>
              <Wallet className="text-light-grey-dark" filled size={20} />
            </IconChip>

            <IconChip text={`${new Date().toLocaleDateString()}-მდე`}>
              <Calendar className="text-light-grey-dark" filled size={20} />
            </IconChip>
          </div>
        </div>
      </Link>

      <div className="ml-auto flex items-center gap-5">
        <AddToFavoriteButton />
      </div>
    </div>
  );
};

export default VacancyCard;
