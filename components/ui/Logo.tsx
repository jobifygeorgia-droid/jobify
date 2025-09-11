import Image from "next/image";
import Link from "next/link";

import { PATHS } from "@/lib/config";
import LogoImage from "@/public/logo.png";

const Logo: React.FC = () => {
  return (
    <figure>
      <Link href={PATHS.home}>
        <Image src={LogoImage} alt="Jobify Logo" />
      </Link>
    </figure>
  );
};

export default Logo;
