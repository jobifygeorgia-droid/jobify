"use client";

import * as UI from "./ui";
import { Modal } from "@/components/ui";
import { useFilterContext } from "./FilterProvider";

const ExpandedFilter: React.FC = () => {
  const {
    workSectorOptions,
    workTypeOptions,
    experienceOptions,
    onCloseFilter,
    isFilterExpanded,
  } = useFilterContext();

  if (!isFilterExpanded) return null;

  return (
    <Modal onClose={onCloseFilter} backdrop>
      <div className="w-screen h-screen overflow-y-auto tablet:w-[624px] tablet:h-[700px] laptop:w-[760px] laptop:h-[85vh] desktop:w-[900px] desktop:h-[660px] flex flex-col p-6 pb-0">
        <UI.Header />

        <div className="h-full mt-6 mb-4 pr-3 tablet:pr-6 overflow-y-auto">
          <UI.FilterByCategory />

          <div className="mt-6 flex flex-col gap-5 pb-4">
            <UI.ExpandedFilterSectionTitle title="სამუშაოს დეტალები" />

            <div className="flex flex-col gap-5 laptop:gap-10">
              <UI.ChipsFilter title="აირჩიე ტიპი" options={workTypeOptions} />

              <UI.ChipsFilter
                title="აირჩიე სექტორი"
                options={workSectorOptions}
              />

              <UI.SalaryExpectation />

              <UI.FilterForm />

              <UI.ChipsFilter title="გამოცდილება" options={experienceOptions} />
            </div>
          </div>
        </div>

        <UI.Footer />
      </div>
    </Modal>
  );
};

export default ExpandedFilter;
