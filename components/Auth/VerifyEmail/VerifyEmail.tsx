import { redirect } from "next/navigation";

import { PATHS } from "@/lib/config";
import { verifyEmail } from "@/lib/actions/auth.actions";

import { SecondarySpinner } from "@/components/ui";
import { VerifyEmailContainer } from "@/components/Auth/ui";

type VerifyEmailT = { token: string };

const VerifyEmail: React.FC<VerifyEmailT> = async ({ token }) => {
  if (!token) redirect(PATHS.email_verification_failure);

  async function verify() {
    const { data, error } = await verifyEmail(token);

    if (error || !data) redirect(PATHS.email_verification_failure);

    redirect(PATHS.email_verification_success);
  }

  await verify();

  return (
    <VerifyEmailContainer>
      <div className="flex flex-col justify-start items-center gap-12 h-[140px]">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xl font-bold tracking-wide">
            თქვენ წარმატებით დარეგისტრირდით Jobify.ge - ზე
          </span>
          <span className="text-md font-medium">
            გთხოვთ დაგველოდოთ სანამ თქვენი ელ. ფოსტა ვერიფიკაციას გაივლის
          </span>
        </div>

        <SecondarySpinner />
      </div>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail;
