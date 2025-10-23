"use client";

import { Controller } from "react-hook-form";

import { useFilterContext } from "./FilterProvider";

import * as UI from "./ui";
import { Modal } from "@/components/ui";
import { ChipsField } from "@/components/layouts/Form";

const ExpandedFilter: React.FC = () => {
  const { control, ...filter } = useFilterContext();

  if (!filter.isOpen) return null;

  return (
    <Modal onClose={filter.onCloseFilter} backdrop>
      <form
        onSubmit={filter.onFilter}
        className="w-screen h-screen overflow-y-auto tablet:w-[80vw] tablet:h-[80vh] laptop:w-[70vw] desktop-sm:w-[900px] flex flex-col p-6 pb-0"
      >
        <UI.Header />

        <div className="h-full mt-6 mb-4 pr-3 tablet:pr-6 overflow-y-auto">
          <UI.FilterByCategory />

          <div className="mt-6 flex flex-col gap-5 pb-4">
            <UI.ExpandedFilterSectionTitle title="სამუშაოს დეტალები" />

            <div className="flex flex-col gap-5 laptop:gap-10">
              <Controller
                control={control}
                name="vacancy_type"
                render={({ field }) => (
                  <ChipsField
                    value={field.value}
                    onChange={field.onChange}
                    data={filter.workTypeOptions}
                    label="აირჩიე ტიპი"
                    chipOptions={{ type: "secondary" }}
                    labelClassname="text-base-sm text-light-grey-dark tablet:mx-auto"
                  />
                )}
              />

              <Controller
                control={control}
                name="sector"
                render={({ field }) => (
                  <ChipsField
                    value={field.value}
                    onChange={field.onChange}
                    data={filter.workSectorOptions}
                    label="აირჩიე სექტორი"
                    chipOptions={{ type: "secondary" }}
                    labelClassname="text-base-sm text-light-grey-dark tablet:mx-auto"
                  />
                )}
              />

              <UI.FilterForm />

              <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                  <ChipsField
                    value={field.value}
                    onChange={field.onChange}
                    label="გამოცდილება"
                    data={filter.experienceOptions}
                    chipOptions={{ className: "px-4!", type: "secondary" }}
                    labelClassname="text-base-sm text-light-grey-dark tablet:mx-auto"
                  />
                )}
              />
            </div>
          </div>
        </div>

        <UI.Footer />
      </form>
    </Modal>
  );
};

export default ExpandedFilter;
