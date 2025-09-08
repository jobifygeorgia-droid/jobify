"use client";

import { Menu } from "@/components/ui";
import { Dots, Eye, Trash, Pen } from "@/components/ui/icons";
import OptionItem from "./OptionItem";

type OptionsT = {};

const Options: React.FC<OptionsT> = () => {
  return (
    <div>
      <Menu>
        <Menu.MenuButton className="bg-blue-light size-7 flex items-center justify-center rounded-full">
          <Dots className="fill-dark-grey" />
        </Menu.MenuButton>

        <Menu.MenuList>
          <OptionItem Icon={Eye} text="დეტალურად ნახვა" />
          <OptionItem Icon={Pen} text="რედაქტირება" />
          <OptionItem Icon={Trash} text="წაშლა" isDanger />
        </Menu.MenuList>
      </Menu>
    </div>
  );
};

export default Options;
