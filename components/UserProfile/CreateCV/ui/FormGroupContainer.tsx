import classnames from "classnames";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

import { CVSchemaT } from "@/lib/schemas/user/CVSchema";
import { Plus, Minus, Check, Exclamation } from "@/components/ui/icons";

type FormGroupContainerT = {
  title: string;
  hasError: boolean;
  isSucceed: boolean;
  name: keyof CVSchemaT;
  children: React.ReactNode;
  onExpand: () => Promise<void>;
};

const FormGroupContainer: React.FC<FormGroupContainerT> = (props) => {
  const { children, title, name, hasError, isSucceed, onExpand } = props;

  const { isExpanded } = useCV();

  const isExpandedCurrentTab = isExpanded === name;

  return (
    <div className="border border-bc rounded-2xl p-3 tablet:p-5 relative">
      {isExpandedCurrentTab && (
        <div className="flex flex-col gap-5">
          <span className="font-bold text-base-sm tablet:text-md flex mb-2">
            {title}
          </span>
          {children}
        </div>
      )}

      <button
        type="button"
        onClick={onExpand}
        className={classnames("grid grid-cols-3 cursor-pointer", {
          "w-max absolute top-3 -right-5": isExpandedCurrentTab,
          "w-full": !isExpandedCurrentTab,
        })}
      >
        <div className="flex items-center gap-5 col-start-2">
          <span
            className={classnames(
              "size-8 tablet:size-10 aspect-square flex items-center justify-center bg-blue-light rounded-full",
              {
                "bg-red-light text-red": !isExpandedCurrentTab && hasError,
                "bg-green-light text-green": !isExpandedCurrentTab && isSucceed,
              }
            )}
          >
            {!isExpandedCurrentTab && isSucceed ? (
              <Check className="text-xl! tablet:text-3xl!" />
            ) : !isExpandedCurrentTab && hasError ? (
              <Exclamation />
            ) : isExpandedCurrentTab ? (
              <Minus className="text-blue text-xl! tablet:text-3xl!" />
            ) : (
              <Plus className="text-blue text-xl! tablet:text-3xl!" />
            )}
          </span>

          {!isExpandedCurrentTab && (
            <span className="font-bold min-w-max text-base-sm tablet:text-base">
              {title}
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default FormGroupContainer;
