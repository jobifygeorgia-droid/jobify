import classnames from "classnames";

import { TextFieldPropsT } from "@/interface/ui/forms-ui";

type TextFieldLabelT = {
  className?: string;
  isRequired?: boolean;
  id?: TextFieldPropsT["id"];
  label: TextFieldPropsT["label"];
};

const TextFieldLabel: React.FC<TextFieldLabelT> = (props) => {
  const { id, label, className = "", isRequired } = props;

  return (
    <label
      {...(id ? { htmlFor: id } : null)}
      className={classnames(
        className,
        "text-sm tablet:text-base-sm font-medium text-dark-grey flex items-center gap-2"
      )}
    >
      {label}
      {isRequired && <span className="text-blue">*</span>}
    </label>
  );
};

export default TextFieldLabel;
