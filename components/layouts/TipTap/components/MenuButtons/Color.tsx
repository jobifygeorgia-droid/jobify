"use client";

import classnames from "classnames";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { textColors } from "@/components/layouts/TipTap/utils/colors";
import { MenuDropdownButton } from "@/components/layouts/TipTap/components/ui";

const Color: React.FC = () => {
  const { editor, onSelectColor } = useTipTap();

  return (
    <MenuDropdownButton
      data={textColors}
      title="text color"
      render={(close, data) => (
        <li
          key={data.color}
          onClick={() => onSelectColor(data, close)}
          style={{ background: data.color, color: data.color }}
          className={classnames(
            "cursor-pointer h-7 w-full rounded-md px-2 capitalize border border-gray-300 text-sm flex items-center",
            {
              "ring-2 ring-current ring-offset-1": editor?.isActive(
                "textStyle",
                {
                  color: data.color,
                }
              ),
            }
          )}
        >
          <span style={{ color: data.textColor }}>{data.title}</span>
        </li>
      )}
    >
      <span
        style={{
          background: editor?.getAttributes("textStyle").color || "#000",
        }}
        className="inline-block cursor-pointer w-12 h-6 rounded-md border border-gray-300"
      />
    </MenuDropdownButton>
  );
};

export default Color;
