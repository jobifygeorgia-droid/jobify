import { formatDate } from "@/lib/utils/formatDate";

import { Button, Chip } from "@/components/ui";
import { Calendar, Download } from "@/components/ui/icons";
import { AddToFavoriteButton } from "@/components/layouts";

type ReceivedResumeCardHorizontalT = {
  id: number;
  fullname: string;
  position: string;
  experience: number;
  education: string;
};

const ReceivedResumeCardHorizontal: React.FC<ReceivedResumeCardHorizontalT> = (
  props
) => {
  return (
    <div className="flex items-center gap-3 py-4 px-6 border border-bc rounded-2xl shadow-[0px_3px_16px_rgba(0,0,0,0.04)]">
      <figure className="relative size-12 aspect-square min-w-12 rounded-full overflow-hidden bg-light-grey"></figure>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-6">
          <span className="font-medium text-md">{props.fullname}</span>

          <Chip className="text-sm!">
            {props.experience} წლიანი გამოცდილება
          </Chip>
        </div>

        <div className="flex items-center gap-6 text-base-sm">
          <span className="text-light-grey-dark">{props.position}</span>
          <span className="text-light-grey-dark flex items-center gap-2">
            <Calendar size={17} className="text-light-grey-dark" />
            {formatDate(new Date())}
          </span>
        </div>
      </div>

      <div className="ml-auto text-base-sm flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Download className="text-blue" />
          <span className="text-blue">CV-ის გადმოწერა</span>
        </span>

        <Button
          buttonType="secondary"
          paddingSize="base-wider"
          className="text-base-sm"
        >
          მიწერა
        </Button>

        <AddToFavoriteButton />
      </div>
    </div>
  );
};

export default ReceivedResumeCardHorizontal;
