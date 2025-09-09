import classnames from "classnames";

import AnchorButton from "./AnchorButton";
import { AnchorButtonT } from "./button.types";
import { ArrowRight } from "@/components/ui/icons";

type ViewAllButtonT = Omit<AnchorButtonT, "buttonType">;

const ViewAllButton: React.FC<ViewAllButtonT> = ({ className, ...props }) => {
  return (
    <AnchorButton
      buttonType="text"
      className={classnames(
        "text-dark-grey-dark text-base font-bold min-w-max! p-0! gap-6 decoration-transparent",
        className || ""
      )}
      {...props}
    >
      <span>ყველას ნახვა</span>
      <span className="flex items-center outline-none">
        <ArrowRight size={30} />
      </span>
    </AnchorButton>
  );
};

export default ViewAllButton;
