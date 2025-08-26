import { SendResumeButton } from "@/components/layouts";
import { Chip, IconButton, IconChip } from "@/components/ui";
import { Calendar, Currency, Heart, Location } from "@/components/ui/icons";

type VacancyCardT = {};

const VacancyCard: React.FC<VacancyCardT> = () => {
  return (
    <div className="max-w-full w-full p-6 rounded-2xl bg-white border border-bc flex items-center gap-5">
      <figure className="relative w-16 aspect-square rounded-md overflow-hidden bg-dark-grey-light"></figure>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-7">
          <span className="leading-4 text-md font-semibold">
            UI UX Designer
          </span>

          <Chip>სრული განაკვეთი</Chip>
        </div>

        <div className="flex items-center gap-6">
          <IconChip Icon={Location} text="თბილისი" />
          <IconChip Icon={Currency} text="$50k-80k" />
          <IconChip
            Icon={Calendar}
            text={`${new Date().toLocaleDateString()}-მდე`}
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-5">
        <IconButton color="orange" isFilled={false}>
          <Heart className="stroke-orange" />
        </IconButton>

        <SendResumeButton paddingSize="base-wide" />
      </div>
    </div>
  );
};

export default VacancyCard;
