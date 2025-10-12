import { formatDate } from "@/lib/utils";

import { Button, Chip } from "@/components/ui";
import { Calendar, Download, Mail } from "@/components/ui/icons";
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
    <div className="flex items-start tablet:items-center  tablet:flex-row tablet:gap-3 py-2 laptop:py-4 px-2 tablet:px-4 laptop:px-6 border border-bc rounded-2xl shadow-[0px_3px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2 tablet:gap-3 w-full tablet:w-max">
        {/* Avatar */}
        <figure className="relative size-8 tablet:size-12 aspect-square min-w-8 tablet:min-w-12 rounded-full overflow-hidden bg-light-grey"></figure>

        <div className="flex flex-col gap-1 tablet:gap-2 w-full">
          {/* Fullname & Experience */}
          <div className="flex items-center justify-between tablet:justify-start tablet:gap-6 w-full">
            <span className="font-medium text-sm tablet:text-base-sm laptop:text-md">
              {props.fullname}
            </span>

            <Chip className="text-sm!" type="tertiary">
              {props.experience} წლიანი გამოცდილება
            </Chip>
          </div>

          {/* Position & Date */}
          <div className="flex items-center gap-3 laptop:gap-6 text-sm tablet:text-base-sm">
            <span className="text-light-grey-dark">{props.position}</span>

            <span className="text-light-grey-dark hidden tablet:flex items-center gap-1 laptop:gap-2">
              <Calendar size={17} className="text-light-grey-dark" />
              {formatDate(new Date())}
            </span>

            {/* Actions */}
            <div className="ml-auto text-base-sm flex items-center gap-2 tablet:gap-4">
              <span className="flex items-center justify-center gap-2 size-6 tablet:size-8 laptop:size-auto bg-transparent tablet:bg-blue-light laptop:bg-transparent rounded-full laptop:rounded-none">
                <Download className="text-orange laptop:text-blue text-md! laptop:text-2xl!" />
                <span className="text-blue hidden laptop:inline-block">
                  CV-ის გადმოწერა
                </span>
              </span>

              <Button
                buttonType="primary"
                paddingSize="base-wider"
                className="text-base-sm max-tablet:bg-transparent max-laptop:p-0! max-laptop:rounded-full! max-tablet:size-6! max-laptop:size-8"
              >
                <span className="hidden laptop:inline-block">მიწერა</span>
                <Mail className="text-orange laptop:hidden! text-base! tablet:text-md!" />
              </Button>

              <AddToFavoriteButton className="max-tablet:bg-transparent! max-tablet:size-6! max-tablet:text-base!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedResumeCardHorizontal;
