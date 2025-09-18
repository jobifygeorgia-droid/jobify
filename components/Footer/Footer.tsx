import { Container, Logo } from "@/components/ui";
import { Mail, Phone } from "@/components/ui/icons";
import { PATHS } from "@/lib/config";
import Link from "next/link";
// import FooterNavigation from "./ui/FooterNavigation";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-footer mt-auto">
      <footer className="px-12 py-14">
        <Container className="flex flex-col gap-24">
          <div className="flex items-start justify-between">
            <Logo />
            {/* <FooterNavigation /> */}
          </div>

          <div className="flex items-end gap-28">
            <div className="flex items-center gap-4 text-light-grey-dark-active font-medium text-base">
              <Phone filled className="text-blue" />
              <span>+995 5992 00 32 32</span>
            </div>

            <div className="flex items-center gap-4 text-light-grey-dark-active font-medium text-base">
              <Mail filled className="text-blue" />
              <span>jobify@gmail.com</span>
            </div>

            <div className="ml-auto flex flex-col gap-6 text-base">
              <Link href={PATHS.faq}>ხშირად დასმული კითხვები</Link>
              <span>წესები და პირობები</span>
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
