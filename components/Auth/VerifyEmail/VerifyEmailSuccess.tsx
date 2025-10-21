import { PATHS } from "@/lib/config";

import { AnchorButton } from "@/components/ui";
import { Success } from "@/components/ui/icons";
import { VerifyEmailContainer } from "@/components/Auth/ui";

const VerifyEmailSuccess: React.FC = () => {
  return (
    <VerifyEmailContainer>
      <Success />

      <div className="transition-transform duration-500 ease-in-out origin-center h-[140px]">
        <div className="text-center flex flex-col gap-4">
          <p className="tracking-wide text-lg font-semibold">
            თქვენმა ელ. ფოსტამ წარმატებით გაიარა ვერიფიკაცია
          </p>
          <span className="font-medium text-md">
            შეგიძლიათ დახუროთ ეს ფანჯარა
          </span>
        </div>
      </div>

      <AnchorButton
        href={PATHS.home}
        buttonType="primary"
        paddingSize="base-wider"
      >
        მთავარ გვერდზე დაბრუნება
      </AnchorButton>
    </VerifyEmailContainer>
  );
};

export default VerifyEmailSuccess;
