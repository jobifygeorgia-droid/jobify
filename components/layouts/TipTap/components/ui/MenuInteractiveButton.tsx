"use client";

import { useState } from "react";

import MenuButton from "./MenuButton";
import { Button } from "@/components/ui";
import { Close, IconPropsT } from "@/components/ui/icons";

type MenuInteractiveButtonT = {
  title: string;
  message: string;
  placeholder: string;
  Icon: React.ComponentType<IconPropsT>;
  onConfirm: (url: string) => void;
};

const MenuInteractiveButton: React.FC<MenuInteractiveButtonT> = (props) => {
  const { Icon, title, placeholder, onConfirm, message } = props;

  const [openPopup, setOpenPopup] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user_value = formData.get("user_value") as string;

    if (!user_value) return;

    setOpenPopup(false);
    onConfirm(user_value);
  };

  return (
    <div>
      <MenuButton
        Icon={Icon}
        title={title}
        onClick={() => setOpenPopup(true)}
      />

      {openPopup && (
        <div
          onClick={() => setOpenPopup(false)}
          className="fixed inset-0 z-30 flex items-center justify-center"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <form
              onSubmit={onSubmit}
              className="w-[500px] z-40 bg-white shadow-xl border border-gray-300 rounded-xl p-4 pb-6 flex flex-col gap-6"
            >
              <button
                type="button"
                onClick={() => setOpenPopup(false)}
                className="ml-auto mb-2 cursor-pointer"
              >
                <Close width={15} height={15} />
              </button>

              <span className="font-semibold text-md text-center capitalize">
                {message}
              </span>

              <input
                type="text"
                name="user_value"
                placeholder={placeholder}
                className="border border-gray-300 shadow-md py-2 px-2 rounded-lg outline-green-light-active outline-offset-4 focus:border-green-light placeholder:italic"
              />

              <Button>დადასტურება</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuInteractiveButton;
