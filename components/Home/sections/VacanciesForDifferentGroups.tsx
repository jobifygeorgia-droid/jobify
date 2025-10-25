import { vacanciesForDifferentGroupsData } from "@/data/data";

import {
  SectionContainer,
  VacanciesForDifferentGroupsCard,
} from "@/components/Home/ui";
import "@/components/Home/css/vacanciesForDifferentGroups.css";

type VacanciesForDifferentGroupsT = {};

const VacanciesForDifferentGroups: React.FC<
  VacanciesForDifferentGroupsT
> = () => {
  return (
    <SectionContainer title="ვაკანსიები სხვადასხვა ჯგუფებისთვის">
      <div className="flex items-center gap-3 laptop:h-[400px] overflow-x-scroll no-scrollbar laptop:overflow-visible">
        {vacanciesForDifferentGroupsData.map((segment) => (
          <VacanciesForDifferentGroupsCard
            key={segment.id}
            group={segment.group}
            title={segment.title}
            subtitle={segment.subtitle}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default VacanciesForDifferentGroups;
