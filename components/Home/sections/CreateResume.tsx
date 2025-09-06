import Image from "next/image";

import { Button } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type CreateResumeT = {};

const CreateResume: React.FC<CreateResumeT> = () => {
  return (
    <SectionContainer>
      <div className="my-4 flex items-stretch gap-16">
        <div className="flex-1 flex">
          <figure className="relative w-full h-full flex justify-center items-center">
            <Image
              src="/create-resume-sidebar-asset.png"
              alt="create resume"
              fill
              className="object-contain scale-[140%]"
            />
          </figure>
        </div>

        <div className="flex-1 flex flex-col pt-32">
          <span className="text-xl font-semibold text-dark-grey-hover leading-12">
            შექმენი პროფესიონალური ანგარიში
          </span>

          <p className="mt-8 text-base text-light-grey-dark-active">
            პროფილის შექმნით შეძლებ წარმოაჩინო შენი უნარები, მიიღო
            პერსონალიზებული შეთავაზებები და მართო დასაქმების პროცესი მარტივად
          </p>

          <Button
            className="mt-12 px-32 w-max"
            rounded="base"
            buttonType="primary"
          >
            ავტორიზაცია
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CreateResume;
