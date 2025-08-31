import { Chip, IconChip } from "@/components/ui";
import { Location, Star } from "@/components/ui/icons";
import { SendResumeButton } from "@/components/layouts";

<<<<<<< HEAD
const VIPVacancyCard: React.FC = () => {
=======
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
>>>>>>> cb12249 (build landing page markup)
  return (
    <div className="bg-white max-w-[360px] w-full aspect-[35/25] border border-bc px-[30px] py-6 rounded-2xl flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="w-full flex items-start gap-5">
          <figure className="relative w-[54px] aspect-square rounded-md overflow-hidden bg-dark-grey-light"></figure>

          <div className="flex-1 flex items-start justify-between gap-2">
            <div className="flex flex-col gap-2 font-semibold">
              <span className="capitalize text-base-sm">
                {vacancy.companyName}
              </span>
              <span className="text-sm text text-light-grey-dark">
                1 კვრისი წინ
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-base">VIP</span>
              <Star className="fill-orange" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-1">
          <span className="text-blue font-bold text-base">
            {vacancy.position}
          </span>

          <span className="font-semibold">
            <span>ანაზღაურება:</span>
            &nbsp;
            <span>{vacancy.salary}</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <IconChip size="sm" Icon={Location} text={vacancy.location} />
        <Chip>{vacancy.jobFormat}</Chip>
      </div>

      <SendResumeButton paddingSize="base-wide" />
    </div>
  );
};

export default VIPVacancyCard;
