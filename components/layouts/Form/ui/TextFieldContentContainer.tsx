import classnames from "classnames";

import { TextFieldPropsT } from "@/interface/ui/forms-ui";

type TextFieldContentContainerT = {
  children: React.ReactNode;
  onClick: TextFieldPropsT["onClick"];
  variant: TextFieldPropsT["variant"];
  fieldWrapperClassName: TextFieldPropsT["fieldWrapperClassName"];
};

export const filledContainerStyles = classnames(
  "border border-bc rounded-md focus-within:ring-1 ring-offset-2"
);

const TextFieldContentContainer: React.FC<TextFieldContentContainerT> = (
  props
) => {
  const {
    children,
    variant = "fill",
    fieldWrapperClassName,
    onClick = () => {},
  } = props;

  return (
    <div
      onClick={onClick}
      className={classnames(
        "relative flex items-center justify-between gap-[6px] border-bc  bg-white",
        {
          [filledContainerStyles]: variant === "fill",
          "border-b": variant === "outlined",
        },
        fieldWrapperClassName
      )}
    >
      {children}
    </div>
  );
};

export default TextFieldContentContainer;
