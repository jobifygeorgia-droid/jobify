"use client";

import classnames from "classnames";

import { AnchorButton } from "@/components/ui";
import { GridView, ListView } from "@/components/ui/icons";

type SwitchViewModeT = {
  viewMode: string;
};

const SwitchViewMode: React.FC<SwitchViewModeT> = ({ viewMode }) => {
  return (
    <div className="flex items-center gap-4">
      <AnchorButton href="?view=list" className="p-0!">
        <ListView
          size={34}
          filled
          className={classnames("text-light-grey-active", {
            "text-blue!": viewMode === "list",
          })}
        />
      </AnchorButton>

      <AnchorButton href="?view=grid" className="p-0!">
        <GridView
          size={34}
          filled
          className={classnames("text-light-grey-active", {
            "text-blue!": viewMode === "grid",
          })}
        />
      </AnchorButton>
    </div>
  );
};

export default SwitchViewMode;
