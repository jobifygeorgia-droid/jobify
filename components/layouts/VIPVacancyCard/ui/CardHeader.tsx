import Link from "next/link";
import Image from "next/image";

import { PATHS } from "@/lib/config";

import { TimeAgo } from "./";
import { LineClamp } from "@/components/ui";

type CardHeaderT = {
  companyId: string;
  companyName: string;
  companyLogo: string;
  publishedDate: string;
};

const CardHeader: React.FC<CardHeaderT> = (props) => {
  const { companyId, companyName, companyLogo, publishedDate } = props;

  return (
    <Link
      href={`${PATHS.vacancies}?company=${companyId}`}
      className="w-full flex items-start gap-3 tablet:gap-5"
    >
      <figure className="relative w-9 laptop:w-14 aspect-square rounded-md overflow-hidden bg-dark-grey-light">
        <Image
          src={companyLogo}
          fill
          sizes="36px, 56px"
          alt={companyName}
          className="object-cover object-center"
        />
      </figure>

      <div className="flex flex-col gap-1 tablet:gap-2 font-semibold">
        <LineClamp className="capitalize text-base-sm" title={companyName}>
          {companyName}
        </LineClamp>

        <TimeAgo createdAt={publishedDate} />
      </div>
    </Link>
  );
};

export default CardHeader;
