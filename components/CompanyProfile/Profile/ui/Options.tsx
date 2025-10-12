"use client";

import { useRouter } from "next/navigation";

import { Menu } from "@/components/ui";
import OptionItem from "./OptionItem";
import { OptionsDots, Eye, Delete, Edit } from "@/components/ui/icons";
import { DYNAMIC_ROUTES } from "@/lib/config";

type OptionsT = {};

const Options: React.FC<OptionsT> = () => {
  const router = useRouter();

  const onViewDetails = () => {
    router.push(DYNAMIC_ROUTES.company_vacancy_details("123", "456"));
  };

  const onEdit = () => {};

  const onDelete = () => {};

  return (
    <div>
      <Menu>
        <Menu.MenuButton className="bg-blue-light size-7 flex items-center justify-center rounded-full">
          <OptionsDots className="text-dark-grey" />
        </Menu.MenuButton>

        <Menu.MenuList>
          <OptionItem
            onClick={onViewDetails}
            Icon={Eye}
            text="დეტალურად ნახვა"
          />
          <OptionItem onClick={onDelete} Icon={Delete} text="წაშლა" isDanger />
          <OptionItem onClick={onEdit} Icon={Edit} text="რედაქტირება" />
        </Menu.MenuList>
      </Menu>
    </div>
  );
};

export default Options;
