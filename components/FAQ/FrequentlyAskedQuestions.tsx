import Image from "next/image";
import { Accordion } from "@/components/ui";
import { data } from "./accordionData";

type FrequentlyAskedQuestionsT = {};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsT> = () => {
  return (
    <div className="flex items-stretch gap-10 min-h-[88vh]">
      <div className="flex-1 max-h-[88vh] sticky top-[60px]">
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
        <h3 className="font-bold text-3xl text-center pt-14">
          ხშირად დასმული კითხვები
        </h3>

        <div className="my-auto pb-12">
          <Accordion panels={data} />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
