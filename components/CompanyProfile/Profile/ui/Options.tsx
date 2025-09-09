"use client";

import { Menu } from "@/components/ui";
import OptionItem from "./OptionItem";
import { OptionsDots, Eye, Delete, Edit } from "@/components/ui/icons";

type OptionsT = {};

const Options: React.FC<OptionsT> = () => {
  return (
    <div>
      <Menu>
        <Menu.MenuButton className="bg-blue-light size-7 flex items-center justify-center rounded-full">
          <OptionsDots className="text-dark-grey" />
        </Menu.MenuButton>

        <Menu.MenuList>
          <OptionItem Icon={Eye} text="დეტალურად ნახვა" />
          <OptionItem Icon={Edit} text="რედაქტირება" />
          <OptionItem Icon={Delete} text="წაშლა" isDanger />
        </Menu.MenuList>
      </Menu>
    </div>
  );
};

export default Options;
