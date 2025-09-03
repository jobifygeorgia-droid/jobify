import classnames from "classnames";

import AnchorButton from "./AnchorButton";
import { Arrow } from "@/components/ui/icons";
import { AnchorButtonT } from "./button.types";

type ViewAllButtonT = Omit<AnchorButtonT, "buttonType">;

const ViewAllButton: React.FC<ViewAllButtonT> = ({ className, ...props }) => {
  return (
    <AnchorButton
      buttonType="text"
      className={classnames(
        "text-dark-grey-dark text-base font-bold min-w-max! p-0! gap-6",
        className || ""
      )}
      {...props}
    >
      <span>ყველას ნახვა</span>
      <span>
        <Arrow className="stroke-current" width={41} height={22} />
      </span>
    </AnchorButton>
  );
};

export default ViewAllButton;
