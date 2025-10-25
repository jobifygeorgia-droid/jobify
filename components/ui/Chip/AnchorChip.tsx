import Link from "next/link";

import { chipStyles } from "./styles";
import { AnchorChipT } from "@/interface/ui/ui";

const AnchorChip: React.FC<AnchorChipT> = (props) => {
  const { children, isActive, className, href, type = "primary" } = props;

  return (
    <Link href={href} className={chipStyles({ isActive, className, type })}>
      {children}
    </Link>
  );
};

export default AnchorChip;
