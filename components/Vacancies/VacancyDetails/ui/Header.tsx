import Image from "next/image";

import { Chip } from "@/components/ui";
import CompanyDetailChip from "./CompanyDetailChip";
import { Link, Phone, Mail } from "@/components/ui/icons";
import { AddToFavoriteButton, SendResumeButton } from "@/components/layouts";
import { vipVacancies } from "@/data/data";

type HeaderT = {};

const Header: React.FC<HeaderT> = () => {
  return (
    <header className="grid grid-cols-[repeat(2,max-content)] tablet:grid-cols-[repeat(1,max-content_1fr_max-content)] items-start tablet:items-center gap-x-2 gap-y-2">
      <figure className="row-start-2 tablet:row-start-1 row-span-2 col-start-1 size-11 tablet:size-16 tablet:self-start aspect-square relative bg-light-grey rounded-md overflow-hidden">
        <Image
          src={vipVacancies[1].image}
          alt=""
          fill
          className="object-center object-cover"
        />
      </figure>

      {/* Title and Type */}
      <div className="col-start-2 col-span-2 tablet:col-span-1 row-start-2 tablet:row-start-1 flex items-center justify-between tablet:justify-start gap-x-4">
        <h4 className="font-semibold text-base-sm tablet:text-md">
          Senior UX Designer
        </h4>

        <Chip type="tertiary" className="col-span-2 justify-self-start">
          სრული განაკვეთი
        </Chip>
      </div>

      {/* Chips */}
      <div className="col-start-2 tablet:col-span-1 row-start-3 tablet:row-start-2 flex flex-col tablet:flex-row tablet:flex-wrap flex-wrap gap-y-2 gap-x-4">
        <CompanyDetailChip
          Icon={Link}
          text="https://github.com/some-project-name-here/project/tree/main"
        />
        <CompanyDetailChip Icon={Phone} text="+995 555 896 878" />
        <CompanyDetailChip Icon={Mail} text="rusieshvili.joni@gmail.com" />
      </div>

      {/* Actions */}
      <div className="col-start-1 tablet:col-start-3 row-start-4 tablet:row-start-1 col-span-3 tablet:col-span-1 flex justify-end items-center gap-5">
        <AddToFavoriteButton className="min-w-9 size-9" />

        <SendResumeButton
          title="short"
          buttonProps={{
            className:
              "w-full tablet:w-max py-2! tablet:py-3! tablet:px-8 laptop:px-11 text-base-sm laptop:text-base!",
          }}
        />
      </div>

      {/* Exparation date */}
      <div className="row-start-1 tablet:row-start-2 self-start col-span-3 tablet:col-span-1 flex items-center justify-end gap-2 text-sm laptop:text-base-sm">
        <span className="text-light-grey-dark-active">ვაკანსია აქტიურია:</span>
        <span className="text-red">30 აგვისტო 2025</span>
      </div>
    </header>
  );
};

export default Header;
