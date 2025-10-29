import { getAudienceTags } from "@/lib/actions/utils";

import {
  SectionContainer,
  VacanciesForDifferentGroupsCard,
} from "@/components/Home/ui";
import "@/components/Home/css/vacanciesForDifferentGroups.css";
import { EmptyMessage, ErrorMessage } from "@/components/ui";

type VacanciesForDifferentGroupsT = {};

const VacanciesForDifferentGroups: React.FC<
  VacanciesForDifferentGroupsT
> = async () => {
  const { data, error } = await getAudienceTags();

  const hasNoData = !data || (Array.isArray(data) && data.length === 0);

  return (
    <SectionContainer title="ვაკანსიები სხვადასხვა ჯგუფებისთვის">
      {error && (
        <ErrorMessage message="წარმოიშვა შეცდომა ინფორმაციის ჩატვირთვის დროს" />
      )}

      {!error && hasNoData && <EmptyMessage message="მონაცემები არ მოიძებნა" />}

      {data && (
        <div className="flex items-center gap-3 laptop:h-[400px] overflow-x-scroll no-scrollbar laptop:overflow-visible">
          {data.map((segment: any) => (
            <VacanciesForDifferentGroupsCard
              key={segment.id}
              group={segment.group}
              title={segment.title}
              subtitle={segment.subtitle}
            />
          ))}
        </div>
      )}
    </SectionContainer>
  );
};

export default VacanciesForDifferentGroups;
