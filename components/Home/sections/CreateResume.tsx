import Image from "next/image";

import { Button } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type CreateResumeT = {};

const CreateResume: React.FC<CreateResumeT> = () => {
  return (
    <SectionContainer>
      <div className="my-4 flex flex-col tablet:flex-row items-center gap-1 tablet:gap-8 laptop:gap-16">
        <div className="flex w-full h-[200px] tablet:h-[270px] tablet:flex-1">
          <figure className="relative w-full h-full flex justify-center items-center">
            <Image
              fill
              sizes="884px"
              alt="create resume"
              src="/create-resume-sidebar-asset.webp"
              className="object-contain laptop:scale-[130%]"
            />
          </figure>
        </div>

        <div className="flex-1 flex flex-col items-center tablet:items-start tablet:pt-4 laptop:pt-12">
          <span className="text-base-sm tablet:text-base laptop:text-xl font-semibold text-dark-grey-hover leading-12">
            შექმენი პროფესიონალური ანგარიში
          </span>

          <p className="hidden tablet:block mt-4 laptop:mt-8 text-base text-light-grey-dark-active">
            პროფილის შექმნით შეძლებ წარმოაჩინო შენი უნარები, მიიღო
            პერსონალიზებული შეთავაზებები და მართო დასაქმების პროცესი მარტივად
          </p>

          <Button
            buttonType="primary"
            className="mt-3 tablet:mt-12 px-16 tablet:px-32 w-max"
          >
            ავტორიზაცია
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CreateResume;
