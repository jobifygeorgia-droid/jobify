"use client";

import classnames from "classnames";

import { useSearchParamUtils } from "@/hooks/utils";

import { Button } from "@/components/ui";
import { GridView, ListView } from "@/components/ui/icons";

type SwitchViewModeT = {
  viewMode: string;
};

const SwitchViewMode: React.FC<SwitchViewModeT> = ({ viewMode }) => {
  const { mergeAndNavigate } = useSearchParamUtils();

  const onSwitch = (mode: string) => mergeAndNavigate(mode);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => onSwitch("view=list")} className="p-0!">
        <ListView
          size={34}
          filled
          className={classnames("text-light-grey-active", {
            "text-blue!": viewMode === "list",
          })}
        />
      </Button>

      <Button onClick={() => onSwitch("view=grid")} className="p-0!">
        <GridView
          size={34}
          filled
          className={classnames("text-light-grey-active", {
            "text-blue!": viewMode === "grid",
          })}
        />
      </Button>
    </div>
  );
};

export default SwitchViewMode;
