import { redirect } from "next/navigation";

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

    const candidateEndpoint = data === "natural_person" ? "user" : "company";

    redirect(`/auth/signup/${candidateEndpoint}`);
  }

  return (
    <SignupContainer>
      <span className="text-base-sm text-dark-grey-dark-active mt-7">
        რეგისტრაციისთვის გთხოვთ აირჩიოთ მომხმარებლის ტიპი
      </span>

      <form action={handleUserType}>
        <div className="mt-8">
          <Radio data={options} name="user-type" value="natural_person" />
        </div>

        <Button
          type="submit"
          className="w-full max-w-[375px] mt-12"
          rounded="base"
        >
          გაგრძელება
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignUp;
