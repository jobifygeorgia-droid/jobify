import { Download, Mail } from "@/components/ui/icons";

type CubicCardT = {
  id: number;
  fullname: string;
  position: string;
  experience: number;
  education: string;
};

const CubicCard: React.FC<CubicCardT> = (props) => {
  return (
    <div className="text-base-sm p-4 border border-bc rounded-md shadow-[0px_3px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 pb-5 border-b border-b-bc">
        <figure className="relative size-12 aspect-square min-w-12 rounded-full overflow-hidden bg-light-grey"></figure>
        <div className="flex flex-col gap-1">
          <span className="font-medium">{props.fullname}</span>
          <span>{props.position}</span>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-2">
        <p className="flex items-center gap-2">
          <span>&#9679;</span>
          <span>გამოცდილება:</span>
          <span>{props.experience} წელი</span>
        </p>

        <p className="flex items-center gap-2">
          <span>&#9679;</span>
          <span>განათლება:</span>
          <span>{props.education}</span>
        </p>
      </div>

      <div className="text-blue flex items-center justify-between pt-4">
        <span className="flex items-center gap-2">
          <Download className="fill-blue" />
          <span>CV-ის გადმოწერა</span>
        </span>

        <Mail className="fill-orange" />
      </div>
    </div>
  );
};

export default CubicCard;
