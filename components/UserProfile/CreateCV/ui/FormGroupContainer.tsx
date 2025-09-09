import { useState } from "react";
import classnames from "classnames";

import { Plus, Minus } from "@/components/ui/icons";

type FormGroupContainerT = {
  title: string;
  children: React.ReactNode;
};

const FormGroupContainer: React.FC<FormGroupContainerT> = (props) => {
  const { children, title } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-bc rounded-2xl p-5 relative">
      {isExpanded && (
        <div className="flex flex-col gap-5">
          <span className="font-bold text-md">{title}</span>
          {children}
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className={classnames("grid grid-cols-3 cursor-pointer", {
          "w-max absolute top-3 -right-5": isExpanded,
          "w-full": !isExpanded,
        })}
      >
        <div className="flex items-center gap-5 col-start-2">
          <span className="size-10 aspect-square flex items-center justify-center bg-blue-light rounded-full">
            {isExpanded ? (
              <Minus className="text-blue" size={30} />
            ) : (
              <Plus className="text-blue" size={30} />
            )}
          </span>

          {!isExpanded && <span className="font-bold min-w-max">{title}</span>}
        </div>
      </button>
    </div>
  );
};

export default FormGroupContainer;
