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
    <Modal onClose={onCloseFilter}>
      <div className="w-[900px] h-[660px] flex flex-col p-6 pb-0">
        <UI.Header />

        <div className="h-full mt-6 mb-4 pr-6 overflow-y-auto">
          <UI.FilterByCategory />

          <div className="mt-6 flex flex-col gap-5 pb-4">
            <UI.ExpandedFilterSectionTitle title="სამუშაოს დეტალები" />

            <div className="flex flex-col gap-10">
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
