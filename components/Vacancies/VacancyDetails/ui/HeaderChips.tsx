import Link from "next/link";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { formatPhoneNumber, toGenitive } from "@/lib/utils";

import { HeaderChip } from "./";
import { Phone, Mail, CompanyProfile } from "@/components/ui/icons";

type HeaderChipsT = {
  phone: string;
  email: string;
  companyId: number;
  companyName: string;
};

const HeaderChips: React.FC<HeaderChipsT> = (props) => {
  const { phone, email, companyName, companyId } = props;

  return (
    <div className="col-start-2 tablet:col-span-1 row-start-3 tablet:row-start-2 flex flex-col tablet:flex-row tablet:flex-wrap flex-wrap gap-y-2 gap-x-4 desktop-sm:-translate-y-[8px]">
      <Link
        href={DYNAMIC_ROUTES.company_profile_guest(companyId)}
        className="bg-blue-light rounded-full px-4 py-[2px] w-full tablet:w-max flex justify-center"
      >
        <HeaderChip
          Icon={CompanyProfile}
          text={`${toGenitive(companyName)} ყველა ვაკანსია`}
        />
      </Link>

      <HeaderChip Icon={Phone} text={formatPhoneNumber(phone)} />

      <HeaderChip Icon={Mail} text={email} />
    </div>
  );
};

export default HeaderChips;
