import classnames from "classnames";

import { TextFieldPropsT } from "@/components/layouts/Form/types/form-fields.types";

type TextFieldLabelT = {
  id?: TextFieldPropsT["id"];
  label: TextFieldPropsT["label"];
  labelPosition: TextFieldPropsT["labelPosition"];
};

const TextFieldLabel: React.FC<TextFieldLabelT> = (props) => {
  const { labelPosition, id, label } = props;

  return (
    <label
      htmlFor={id}
      className={classnames("text-base-sm font-medium", {
        "absolute ml-1 px-1 -top-1/4 peer-focus:-top-1/4 peer-focus:text-base-sm peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-base transition-all duration-150 bg-white":
          labelPosition === "in",
        "order-1": labelPosition === "out",
      })}
    >
      {label}
    </label>
  );
};

export default TextFieldLabel;
