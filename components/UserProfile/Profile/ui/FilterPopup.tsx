"use client";

import { useSearchParamUtils } from "@/hooks/utils";
import { workCategoryOptions, workTypeOptions } from "@/lib/static-data";

import { Button, Modal, SectionTitle } from "@/components/ui";
import { ChipsField, Select, TextField } from "@/components/layouts/Form";

type FilterPopupT = {};

const FilterPopup: React.FC<FilterPopupT> = () => {
  const { searchParams, deleteAndNavigate } = useSearchParamUtils();
  const isOpened = Boolean(searchParams.get("filter-favorites"));

  const onCloseModal = () => deleteAndNavigate(["filter-favorites"]);

  if (!isOpened) return null;

  return (
    <Modal onClose={onCloseModal} className="overflow-visible">
      <div className="w-[600px] p-10">
        <SectionTitle size="base" title="ფილტრი" className="mb-6" />

        <form className="flex flex-col gap-6">
          <ChipsField
            value=""
            label="სამსახურის ტიპი"
            onChange={() => {}}
            data={workTypeOptions}
          />

          <Select
            isMulti
            values={[]}
            onChange={() => {}}
            label="კატეგორია"
            id="profile-filter-category"
            options={workCategoryOptions}
            placeholder="მონიშნე პოზიციები"
            instanceId="favorites-filter-categories"
            containerClassName="rounded-lg!"
          />

          <TextField label="მდებარეობა" labelPosition="out" />

          <div className="flex items-center justify-end gap-5 mt-2">
            <Button buttonType="tertiary" type="button" onClick={onCloseModal}>
              გაუქმება
            </Button>

            <Button buttonType="primary" type="submit">
              გაფილტვრა
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FilterPopup;
