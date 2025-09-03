import {
  Heart,
  LocationFilled,
  WalletFilled,
  CalendarFilled,
} from "@/components/ui/icons";
import { Chip, IconButton, IconChip } from "@/components/ui";
import { SendResumeButton } from "@/components/layouts";
import Link from "next/link";

type VacancyCardT = {
  id: number;
  companyName: string;
  createdAt: string;
  position: string;
  salary: string;
  location: string;
  jobFormat: string;
};

const VacancyCard: React.FC<VacancyCardT> = (vacancy) => {
  return (
    <div className="max-w-full w-full p-6 rounded-2xl bg-white border border-bc flex items-center gap-5">
      <figure className="relative w-16 aspect-square rounded-md overflow-hidden bg-dark-grey-light"></figure>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-7">
          <Link
            href="/vacancies/123"
            className="leading-4 text-md font-semibold"
          >
            {vacancy.position}
          </Link>

          <Chip>{vacancy.jobFormat}</Chip>
        </div>

        <div className="flex items-center gap-6">
          <IconChip text={vacancy.location}>
            <LocationFilled className="fill-light-grey-dark" />
          </IconChip>

          <IconChip text={vacancy.salary}>
            <WalletFilled className="fill-light-grey-dark" />
          </IconChip>

          <IconChip text={`${new Date().toLocaleDateString()}-მდე`}>
            <CalendarFilled className="fill-light-grey-dark" />
          </IconChip>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-5">
        <SendResumeButton
          title="short"
          buttonProps={{
            paddingSize: "base-wide",
            className: "text-base-sm! py-3! px-8! font-semibold!",
          }}
        />

        <IconButton color="orange" isFilled={false}>
          <Heart className="stroke-orange fill-orange" />
        </IconButton>
      </div>
    </div>
  );
};

export default VacancyCard;
