import { redirect } from "next/navigation";

import { PATHS } from "@/lib/config";

import { Button } from "@/components/ui";
import { Radio } from "@/components/layouts/Form";
import SignupContainer from "./ui/SignupContainer";

const options = [
  {
    label: "ფიზიკური პირი",
    value: "natural_person",
    id: "natural-person",
  },
  {
    label: "იურიდიული პირი",
    value: "legal_entity",
    id: "legal-entity",
  },
];

const SignUp: React.FC = () => {
  async function handleUserType(formData: FormData) {
    "use server";

    if (!formData) return;

    const data = formData.get("user-type");

    const candidateEndpoint =
      data === "natural_person" ? PATHS.sign_up_user : PATHS.sign_up_company;

    redirect(candidateEndpoint);
  }

  return (
    <SignupContainer>
      <span className="text-center text-base-sm text-dark-grey-dark-active mt-7 px-5 tablet:px-10">
        რეგისტრაციისთვის გთხოვთ აირჩიოთ მომხმარებლის ტიპი
      </span>

      <form action={handleUserType}>
        <div className="mt-8">
          <Radio data={options} name="user-type" value="natural_person" />
        </div>

        <Button
          type="submit"
          buttonType="primary"
          className="w-full max-w-[375px] mt-12"
        >
          გაგრძელება
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignUp;
