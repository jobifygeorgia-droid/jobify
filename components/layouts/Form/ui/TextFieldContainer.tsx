import classnames from "classnames";

type TextFieldContainerT = {
  children: React.ReactNode;
  className?: string;
};

const TextFieldContainer: React.FC<TextFieldContainerT> = (props) => {
  const { children, className } = props;
  return (
    <div className={classnames("flex flex-col gap-2", className || "")}>
      {children}
    </div>
  );
};

export default TextFieldContainer;
