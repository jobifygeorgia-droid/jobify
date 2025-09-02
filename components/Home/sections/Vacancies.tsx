"use client";

import { useRouter } from "next/navigation";

import { vipVacancies } from "@/data/data";

import { VacancyCard } from "@/components/layouts";
import { Button, Pagination } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  const router = useRouter();

  const limit = 5;

  const onViewAll = () => {
    router.push("/vacancies?value=1");
  };

  return (
    <SectionContainer>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {vipVacancies.slice(0, limit).map((vacancy) => (
            <VacancyCard key={vacancy.id} />
          ))}
        </div>

        <div className="flex items-center">
          <div className="w-full flex justify-center">
            <Pagination />
          </div>

          <Button buttonType="text" className="min-w-max!" onClick={onViewAll}>
            <span>ყველას ნახვა</span>
            <span>&rarr;</span>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Vacancies;
