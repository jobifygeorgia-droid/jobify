"use client";

import classnames from "classnames";

import {
  MenuButton,
  MenuDropdownButton,
} from "@/components/layouts/TipTap/components/ui";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { HighLight as Icon } from "@/components/ui/icons";
import { textColors } from "@/components/layouts/TipTap/utils/colors";

const Highlight: React.FC = () => {
  const { editor, onSelectHighlight } = useTipTap();

  return (
    <MenuDropdownButton
      data={textColors}
      render={(close, data) => (
        <li
          key={data.color}
          onClick={() => onSelectHighlight(data, close)}
          style={{ background: data.color, color: data.color }}
          className={classnames(
            "cursor-pointer h-7 w-full rounded-md px-2 capitalize border border-gray-300 text-sm flex items-center",
            {
              "ring-2 ring-current ring-offset-1": editor?.isActive(
                "highlight",
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
      <MenuButton
        Icon={Icon}
        title="highlight color"
        isActive={editor?.isActive("highlight")}
      />
    </MenuDropdownButton>
  );
};

export default Highlight;
