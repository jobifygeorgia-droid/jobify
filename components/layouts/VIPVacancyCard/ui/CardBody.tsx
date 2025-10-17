import { LineClamp } from "@/components/ui";
import { Star } from "@/components/ui/icons";
import { DYNAMIC_ROUTES } from "@/lib/config";
import Link from "next/link";

type CardBodyT = {
  id: number;
  title: string;
  salaryRange: string;
};

const CardBody: React.FC<CardBodyT> = (props) => {
  const { id, title, salaryRange } = props;

  return (
    <Link
      className="flex flex-col gap-1"
      href={DYNAMIC_ROUTES.vacancy_details(id.toString())}
    >
      <div className="flex items-center gap-1 laptop:gap-2">
        <span className="font-bold text-sm laptop:text-base">VIP</span>
        <Star className="text-orange text-lg! laptop:text-2xl!" filled={true} />
      </div>

      <LineClamp
        title={title}
        className="text-blue font-bold text-sm laptop:text-base-sm"
      >
        {title}
      </LineClamp>

      <span className="font-semibold text-sm">
        <span>ანაზღაურება:</span>
        &nbsp;
        <span>{salaryRange}</span>
      </span>
    </Link>
  );
};

export default CardBody;
