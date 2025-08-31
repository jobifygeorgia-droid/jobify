import { Button, MultipleSlider } from "@/components/ui";
import { VIPVacancyCard } from "@/components/layouts";
import { vipVacancies } from "@/components/Home/data/data";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
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
      <Button buttonType="text" className="w-max! absolute right-0 bottom-0">
        <span>ყველას ნახვა</span>
        <span>&rarr;</span>
      </Button>
    </SectionContainer>
  );
};

export default VIPVacancies;
