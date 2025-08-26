type TextFieldContainerT = {
  children: React.ReactNode;
};

const TextFieldContainer: React.FC<TextFieldContainerT> = (props) => {
  const { children } = props;
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default TextFieldContainer;
