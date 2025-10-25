import Link from "next/link";

import { PATHS } from "@/lib/config";

// import {FooterNavigation} from "./ui";
import { Container, Logo } from "@/components/ui";
import { Mail, Phone } from "@/components/ui/icons";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-footer mt-auto pb-8 tablet:pb-14 laptop:pb-0">
      <footer className="px-6 desktop-lg:px-12 py-6 desktop-lg:py-14">
        <Container className="flex flex-col gap-2 p-0! text-sm tablet:text-base-sm laptop:text-base">
          <div className="flex items-start justify-between">
            <Logo />
            {/* <FooterNavigation /> */}
          </div>

          <div className="flex flex-col ml-auto mt-3 tablet:mt-7 desktop-lg:mt-20 mb-3 tablet:mb-7 gap-3 tablet:gap-6 text-end">
            <Link href={PATHS.faq}>ხშირად დასმული კითხვები</Link>
            <span>წესები და პირობები</span>
          </div>

          <div className="flex items-end justify-center flex-wrap gap-y-3 gap-x-8 laptop:gap-x-14 desktop-lg:gap-28">
            <div className="flex items-center gap-4 text-light-grey-dark-active font-medium">
              <Phone filled className="text-blue" />
              <span>+995 5992 00 32 32</span>
            </div>

            <div className="flex items-center gap-4 text-light-grey-dark-active font-medium">
              <Mail filled className="text-blue" />
              <span>jobify@gmail.com</span>
            </div>

            <div className="tablet:ml-auto flex flex-col gap-6">
              <span className="font-normal">
                &copy; power 2025 - All Rights Reserved
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
