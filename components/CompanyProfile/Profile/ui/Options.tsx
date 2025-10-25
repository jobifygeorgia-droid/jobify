"use client";

import useVacancyOptions from "@/components/CompanyProfile/Profile/hooks/useVacancyOptions";

import { OptionItem } from "./";
import { Menu } from "@/components/ui";
import { OptionsDots, Eye, Delete, Edit } from "@/components/ui/icons";

type OptionsT = {
  vacancyId: string;
  vacancyTitle: string;
};

const Options: React.FC<OptionsT> = ({ vacancyId, vacancyTitle }) => {
  const { onViewDetails, onEdit, onDelete } = useVacancyOptions(
    vacancyId,
    vacancyTitle
  );

  return (
    <div>
      <Menu>
        <Menu.MenuButton className="bg-blue-light size-7 flex items-center justify-center rounded-full">
          <OptionsDots className="text-dark-grey" />
        </Menu.MenuButton>

        <Menu.MenuList>
          <OptionItem
            Icon={Eye}
            text="დეტალურად ნახვა"
            onClick={onViewDetails}
          />
          <OptionItem onClick={onDelete} Icon={Delete} text="წაშლა" isDanger />
          <OptionItem onClick={onEdit} Icon={Edit} text="რედაქტირება" />
        </Menu.MenuList>
      </Menu>
    </div>
  );
};

export default Options;
