import Image from "next/image";
import { notFound } from "next/navigation";

import { vipVacancies } from "@/data/data";
import { groups, GroupT } from "./groups";

import { Pagination, SectionTitle } from "@/components/ui";
import { VacancyCard, VIPVacanciesSlider } from "@/components/layouts";

type VacanciesByGroupsT = {
  group?: string;
};

const VacanciesByGroups: React.FC<VacanciesByGroupsT> = ({ group }) => {
  const dataToShow: GroupT = groups[group as keyof typeof groups];

  if (!dataToShow) notFound();

  return (
    <div className="tablet:py-3 laptop:py-7">
      <div className="hidden tablet:flex h-[180px] relative rounded-2xl overflow-hidden">
        <figure className="relative w-full h-full overflow-hidden">
          <Image
            src={dataToShow.bgURL}
            alt="ukrainian"
            fill
            className="object-cover object-center"
          />
        </figure>

        {/* <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-white h-[80px] py-5 px-14 flex items-center justify-center">
          Google
        </div> */}
      </div>

      <div className="mt-4 w-full max-w-[800px] mx-auto flex flex-col gap-3 justify-center items-center text-center">
        <span className="font-semibold text-base-sm tablet:text-lg">
          {dataToShow.title}
        </span>
        <span className="text-sm tablet:text-base desktop-sm:text-md">
          {dataToShow.subTitle}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <SectionTitle title="VIP ვაკანსიები" size="base" />

        <VIPVacanciesSlider />
      </div>

      <div className="mt-5 tablet:mt-10 flex flex-col gap-4">
        {vipVacancies.slice(0, 6).map((vacancy) => (
          <VacancyCard key={`vacancy-${vacancy.id}`} {...vacancy} />
        ))}
      </div>

      <div className="my-7 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default VacanciesByGroups;
