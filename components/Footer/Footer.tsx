import { Container, Logo } from "@/components/ui";
import FooterNavigation from "./ui/FooterNavigation";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-footer mt-auto">
      <footer className="px-12 py-14">
        <Container className="flex flex-col gap-24">
          <div className="flex items-start justify-between">
            <Logo />
            <FooterNavigation />
          </div>

          <div className="flex items-end gap-28">
            <div className="flex flex-col gap-4 text-light-grey-dark-active">
              <span className="text-base-sm">დაგვიკავშირდით</span>
              <span className="font-medium text-base">
                <span>Tel:</span>
                &nbsp;
                <span>+995 5992 00 32 32</span>
              </span>
            </div>

            <div className="flex flex-col gap-4 text-light-grey-dark-active">
              <span className="text-base-sm">მოგვწერეთ</span>
              <span className="font-medium text-base">jobify@gmail.com</span>
            </div>

            <div className="ml-auto flex flex-col gap-6 text-base">
              <span>ხშირად დასმული კითხვები</span>
              <span>წესები და პირობები</span>
              <span className="font-semibold">
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
