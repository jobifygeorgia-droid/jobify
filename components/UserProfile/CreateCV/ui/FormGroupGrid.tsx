import classnames from "classnames";

type FormGroupGridT = {
  showDivider?: boolean;
  children: React.ReactNode;
};

const FormGroupGrid: React.FC<FormGroupGridT> = (props) => {
  const { children, showDivider = false } = props;

  return (
    <div
      className={classnames(
        "grid grid-cols-2 gap-x-6 gap-y-4 relative group",

        { "border-b border-bc pb-4": showDivider }
      )}
    >
      {children}
    </div>
  );
};

export default FormGroupGrid;
