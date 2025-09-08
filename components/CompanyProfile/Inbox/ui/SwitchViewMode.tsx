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
          width={30}
          height={30}
          className={classnames("fill-light-grey-darker", {
            "fill-blue!": viewMode === "list",
          })}
        />
      </AnchorButton>

      <AnchorButton href="?view=grid" className="p-0!">
        <GridView
          width={30}
          height={30}
          className={classnames("fill-light-grey-darker", {
            "fill-blue!": viewMode === "grid",
          })}
        />
      </AnchorButton>
    </div>
  );
};

export default SwitchViewMode;
