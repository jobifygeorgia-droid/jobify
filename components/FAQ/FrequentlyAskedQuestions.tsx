import Image from "next/image";
import { Accordion } from "@/components/ui";
import { data } from "./accordionData";

type FrequentlyAskedQuestionsT = {};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsT> = () => {
  return (
    <div className="flex flex-col laptop:flex-row laptop:items-stretch laptop:gap-10 min-h-[80vh] laptop:min-h-[88vh]">
      <div className="h-[200px] w-full laptop:h-auto laptop:flex-1 laptop:max-h-[88vh] laptop:sticky top-[60px]">
        <figure className="relative w-full h-full flex items-center">
          <Image
            src="/faq.jpg"
            alt="frequently asked questions"
            fill
            className="object-contain"
          />
        </figure>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        <h3 className="font-bold text-md tablet:text-2xl desktop-sm:text-3xl text-center pt-4 tablet:pt-14">
          ხშირად დასმული კითხვები
        </h3>

        <div className="laptop:my-auto laptop:pb-12">
          <Accordion panels={data} />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
