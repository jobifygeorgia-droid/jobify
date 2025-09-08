import { AddToFavoriteButton } from "@/components/layouts";
import { Button, Chip } from "@/components/ui";
import { CalendarOutlined, Download } from "@/components/ui/icons";
import { formatDate } from "@/lib/utils/formatDate";

type HorizontalCardT = {
  id: number;
  fullname: string;
  position: string;
  experience: number;
  education: string;
};

const HorizontalCard: React.FC<HorizontalCardT> = (props) => {
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
            <CalendarOutlined
              width={17}
              height={17}
              className="fill-light-grey-dark"
            />
            {formatDate(new Date())}
          </span>
        </div>
      </div>

      <div className="ml-auto text-base-sm flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Download className="fill-blue" />
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

export default HorizontalCard;
