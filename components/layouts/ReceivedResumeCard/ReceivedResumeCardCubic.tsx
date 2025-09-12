import { LineClamp } from "@/components/ui";
import { Download, Mail } from "@/components/ui/icons";

type ReceivedResumeCardCubicT = {
  id: number;
  fullname: string;
  position: string;
  experience: number;
  education: string;
};

const ReceivedResumeCardCubic: React.FC<ReceivedResumeCardCubicT> = (props) => {
  return (
    <div className="min-w-full text-base-sm p-4 border border-bc rounded-md shadow-[0px_3px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 pb-5 border-b border-b-bc">
        <figure className="relative size-12 aspect-square min-w-12 rounded-full overflow-hidden bg-light-grey"></figure>
        <div className="flex flex-col gap-1">
          <LineClamp title={props.fullname} className="font-semibold">
            {props.fullname}
          </LineClamp>
          <LineClamp title={props.position} className="text-secondary">
            {props.position}
          </LineClamp>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-2 text-secondary">
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
          <Download className="text-blue" />
          <span>CV-ის გადმოწერა</span>
        </span>

        <Mail className="text-orange" />
      </div>
    </div>
  );
};

export default ReceivedResumeCardCubic;
