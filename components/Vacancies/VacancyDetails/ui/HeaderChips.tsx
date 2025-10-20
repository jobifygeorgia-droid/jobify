import { formatPhoneNumber } from "@/lib/utils";

import { HeaderChip } from "./";
import { Link, Phone, Mail } from "@/components/ui/icons";

type HeaderChipsT = {
  phone: string;
  email: string;
};

const HeaderChips: React.FC<HeaderChipsT> = (props) => {
  const { phone, email } = props;

  return (
    <div className="col-start-2 tablet:col-span-1 row-start-3 tablet:row-start-2 flex flex-col tablet:flex-row tablet:flex-wrap flex-wrap gap-y-2 gap-x-4 desktop-sm:-translate-y-[8px]">
      <HeaderChip
        Icon={Link}
        text="https://github.com/some-project-name-here/project/tree/main"
      />

      <HeaderChip Icon={Phone} text={formatPhoneNumber(phone)} />

      <HeaderChip Icon={Mail} text={email} />
    </div>
  );
};

export default HeaderChips;
