import Image from "next/image";
import { SectionContainer } from "@/components/Home/ui";

type TopCompaniesT = {};

const TopCompanies: React.FC<TopCompaniesT> = () => {
  return (
    <SectionContainer className="items-center gap-14 mb-0">
      <span className="font-medium text-2xl">
        აღმოაჩინე წამყვანი კომპანიების ვაკანსიები ჩვენთან
      </span>

      <div className="flex items-center justify-between w-full">
        <figure className="relative w-[200px] h-[50px]">
          <Image
            src="/slack.png"
            alt="slack"
            quality={100}
            fill
            className="object-contain"
          />
        </figure>

        <figure className="relative w-[200px] h-[50px]">
          <Image
            src="/microsoft.png"
            alt="microsoft"
            quality={100}
            fill
            className="object-contain"
          />
        </figure>
        <figure className="relative w-[200px] h-[50px]">
          <Image
            src="/google.png"
            alt="google"
            quality={100}
            fill
            className="object-contain"
          />
        </figure>
        <figure className="relative w-[200px] h-[50px]">
          <Image
            src="/airbnb.png"
            alt="airbnb"
            quality={100}
            fill
            className="object-contain"
          />
        </figure>
      </div>
    </SectionContainer>
  );
};

export default TopCompanies;
