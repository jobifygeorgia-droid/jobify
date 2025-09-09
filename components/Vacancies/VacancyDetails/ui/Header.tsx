import { Chip } from "@/components/ui";
import CompanyDetailChip from "./CompanyDetailChip";
import { Link, Phone, Mail } from "@/components/ui/icons";
import { AddToFavoriteButton, SendResumeButton } from "@/components/layouts";

type HeaderT = {};

const Header: React.FC<HeaderT> = () => {
  return (
    <header className="flex items-center gap-6 py-8">
      <figure className="size-16 aspect-square relative bg-light-grey-active rounded-md overflow-hidden"></figure>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-md">Senior UX Designer</h4>

          <Chip className="col-span-2 justify-self-start">სრული განაკვეთი</Chip>
        </div>

        <div className="flex items-center gap-x-4">
          <CompanyDetailChip
            Icon={Link}
            text="https://github.com/some-project-name-here/project/tree/main"
          />
          <CompanyDetailChip Icon={Phone} text="+995 555 896 878" />
          <CompanyDetailChip Icon={Mail} text="rusieshvili.joni@gmail.com" />
        </div>
      </div>

      <div className="ml-auto flex flex-col items-end gap-3">
        <div className="flex items-center gap-5">
          <AddToFavoriteButton />

          <SendResumeButton
            title="short"
            buttonProps={{ className: "bg-blue! text-white!" }}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-light-grey-dark-active">
            ვაკანსია აქტიურია:
          </span>
          <span className="text-red-dark">30 აგვისტო 2025</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
