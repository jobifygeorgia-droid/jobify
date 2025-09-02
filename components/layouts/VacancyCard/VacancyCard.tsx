import { SendResumeButton } from "@/components/layouts";
import { Chip, IconButton, IconChip } from "@/components/ui";
import {
  CalendarFilled,
  Heart,
  Location,
  WalletFilled,
} from "@/components/ui/icons";

const VacancyCard: React.FC = () => {
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
          <IconChip text="თბილისი">
            <Location className="fill-light-grey-dark" />
          </IconChip>

          <IconChip text="$50k-80k">
            <WalletFilled className="fill-light-grey-dark" />
          </IconChip>

          <IconChip text={`${new Date().toLocaleDateString()}-მდე`}>
            <CalendarFilled className="fill-light-grey-dark" />
          </IconChip>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-5">
        <SendResumeButton
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
