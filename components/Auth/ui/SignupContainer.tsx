import Image from "next/image";

import { AnchorButton, Container } from "@/components/ui";
import AuthPopupTitle from "./AuthPopupTitle";
import { Close } from "@/components/ui/icons";

type SignupContainerT = {
  children: React.ReactNode;
};

const SignupContainer: React.FC<SignupContainerT> = ({ children }) => {
  return (
    <div className="w-full h-screen tablet:p-8 laptop:p-14 bg-background-secondary">
      <Container className="flex items-stretch h-full overflow-hidden tablet:rounded-3xl px-4 tablet:px-0! tablet:border border-bc laptop:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-background relative">
        <AnchorButton
          href="/"
          className="absolute -top-2 -right-3 tablet:top-2 tablet:right-2"
        >
          <Close size={34} />
        </AnchorButton>

        <aside className="hidden tablet:flex tablet:flex-3 laptop:flex-1">
          <figure className="relative w-full h-full">
            <Image
              fill
              alt="placeholder"
              src="/authpanel.webp"
              className="object-center object-cover"
            />
          </figure>
        </aside>

        <div className="tablet:flex-6 laptop:flex-1 py-7 flex flex-col items-center w-full overflow-y-auto">
          <AuthPopupTitle title="რეგისტრაცია" />

          {children}
        </div>
      </Container>
    </div>
  );
};

export default SignupContainer;
