import classnames from "classnames";

import { TextFieldPropsT } from "@/components/layouts/Form/types/form-fields.types";

type TextFieldLabelT = {
  id?: TextFieldPropsT["id"];
  label: TextFieldPropsT["label"];
  labelPosition: TextFieldPropsT["labelPosition"];
  keepOrder?: boolean;
  className?: string;
  isRequired?: boolean;
};

const TextFieldLabel: React.FC<TextFieldLabelT> = (props) => {
  const {
    labelPosition,
    id,
    label,
    keepOrder = false,
    className = "",
    isRequired,
  } = props;

  return (
    <label
      htmlFor={id}
      className={classnames(
        className,
        "text-sm tablet:text-base-sm font-medium text-dark-grey flex items-center gap-2",
        {
          "absolute ml-1 px-1 -top-1/4 peer-focus:-top-1/4 peer-focus:text-base-sm peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-base transition-all duration-150 bg-white":
            labelPosition === "in",
          "order-1": labelPosition === "out" && !keepOrder,
        }
      )}
    >
      {label}
      {isRequired && <span className="text-blue">*</span>}
    </label>
  );
};

export default TextFieldLabel;
