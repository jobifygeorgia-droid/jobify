import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/logo.png";

type LogoT = {
  href?: string;
};

const Logo: React.FC<LogoT> = ({ href = "/" }) => {
  return (
    <figure>
      <Link href={href}>
        <Image src={LogoImage} alt="Jobify Logo" />
      </Link>
    </figure>
  );
};

export default Logo;
