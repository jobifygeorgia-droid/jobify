"use client";

import { useState } from "react";

import Tooltip from "./Tooltip";

type MenuDropdownButtonPropsT<T extends object> = {
  data: Array<T>;
  title?: string;
  children: React.ReactNode;
  render: (close: () => void, listItem: T) => React.ReactElement;
};

const MenuDropdownButton = <T extends object>(
  props: MenuDropdownButtonPropsT<T>
) => {
  const { children, data, render, title } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center relative z-40 group"
      >
        {children}

        {title && <Tooltip>{title}</Tooltip>}
      </div>

      {open && (
        <>
          <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 " />

          <div className="absolute z-50 w-[200px] left-1/2 top-[calc(100%+10px)] -translate-x-1/2 p-3 rounded-md shadow-lg border border-gray-300 bg-white">
            <ul className="flex flex-col gap-2">
              {data.map(render.bind(null, () => setOpen(false)))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuDropdownButton;
