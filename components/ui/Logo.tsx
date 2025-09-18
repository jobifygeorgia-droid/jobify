import Image from "next/image";
import Link from "next/link";

import { PATHS } from "@/lib/config";

const Logo: React.FC = () => {
  return (
    <figure>
      <Link href={PATHS.home}>
        <Image
          src="/logo.webp"
          alt="Jobify Logo"
          width={136}
          height={44}
          quality={100}
          priority
        />
      </Link>
    </figure>
  );
};

export default Logo;
