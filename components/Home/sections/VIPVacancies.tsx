"use client";

import { useRouter } from "next/navigation";

import { Button, MultipleSlider } from "@/components/ui";
import { VIPVacancyCard } from "@/components/layouts";
import { vipVacancies } from "@/data/data";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  const router = useRouter();

  const onViewAll = () => router.push("/vip-vacancies");

  return (
    <SectionContainer title="VIP ვაკანსიები" className="relative">
      <MultipleSlider
        slides={vipVacancies.map((slide) => (
          <VIPVacancyCard key={slide.id} {...slide} />
        ))}
      />
      {/* <div className="flex flex-wrap items-start gap-4">
          {vipVacancies.map((slide) => (
            <VIPVacancyCard key={slide.id} {...slide} />
          ))}
        </div> */}
      <Button
        buttonType="text"
        className="w-max! absolute z-[9] right-0 bottom-0 cursor-pointer"
        onClick={onViewAll}
      >
        <span>ყველას ნახვა</span>
        <span>&rarr;</span>
      </Button>
    </SectionContainer>
  );
};

export default VIPVacancies;
