import Image from "next/image";

import { Container } from "@/components/ui";
import AuthPopupTitle from "./AuthPopupTitle";

type SignupContainerT = {
  children: React.ReactNode;
};

const SignupContainer: React.FC<SignupContainerT> = ({ children }) => {
  return (
    <div className="w-full h-screen p-14">
      <Container className="flex items-stretch h-full rounded-3xl overflow-hidden p-0! border border-bc shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <aside className="flex-1">
          <figure className="relative w-full h-full">
            <Image
              fill
              alt="placeholder"
              src="/authpanel.png"
              className="object-center object-cover"
            />
          </figure>
        </aside>
        <div className="flex-1 py-11 flex flex-col items-center">
          <AuthPopupTitle title="რეგისტრაცია" />

          {children}
        </div>
      </Container>
    </div>
  );
};

export default SignupContainer;
