import Image from "next/image";

import { PATHS } from "@/lib/config";
import { AnchorButton } from "@/components/ui";

type ProfileHeaderT = {};

const src =
  "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProfileHeader: React.FC<ProfileHeaderT> = () => {
  return (
    <div className="py-3 tablet:py-4 px-4 tablet:px-7 rounded-xl tablet:rounded-3xl bg-blue-light shadow-[0px_4px_4px,rgba(0,0,0,0.25)] flex flex-col tablet:flex-row tablet:items-center gap-3 tablet:gap-14">
      <div className="flex items-center gap-3 tablet:gap-14">
        <figure className=" min-w-14 size-14 tablet:min-w-[87px] tablet:size-[87px] aspect-square relative bg-light-grey rounded-full overflow-hidden">
          <Image src={src} alt="" fill className="object-cover object-center" />
        </figure>

        <div className="flex flex-col gap gap-2 tablet:gap-5">
          <span className="font-bold text-sm tablet:text-md">
            ანანო თარხნიშვილი
          </span>

          <div className="flex flex-col tablet:flex-row text-sm tablet:text-base tablet:items-center gap-2 tablet:gap-11">
            <span>ფოტოს შეცვლა</span>
            <span>რეზიუმეს ნახვა</span>
          </div>
        </div>
      </div>

      <div className="ml-auto">
        <AnchorButton
          href={PATHS.user_create_cv}
          buttonType="secondary"
          className="max-sm:bg-transparent! max-sm:text-dark-grey-dark max-sm:text-sm max-sm:p-0"
        >
          შექმენი CV
        </AnchorButton>
      </div>
    </div>
  );
};

export default ProfileHeader;
