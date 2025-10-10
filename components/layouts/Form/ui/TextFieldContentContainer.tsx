import classnames from "classnames";

import { TextFieldPropsT } from "@/components/layouts/Form/types/form-fields.types";

type TextFieldContentContainerT = {
  isLabelOut: boolean;
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
    isLabelOut,
    variant = "fill",
    fieldWrapperClassName,
    onClick = () => {},
  } = props;

  return (
    <div
      onClick={onClick}
      className={classnames(
        "relative flex flex-col gap-[6px] items-start border-bc  bg-white",
        {
          [filledContainerStyles]: variant === "fill",
          "border-b": variant === "outlined",
        },
        { "border-none ring-[none]": isLabelOut },
        fieldWrapperClassName
      )}
    >
      {children}
    </div>
  );
};

export default TextFieldContentContainer;
