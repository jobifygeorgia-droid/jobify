import classnames from "classnames";

type GridTableItemT = {
  isHeader?: boolean;
  className?: string;
  alignCenter?: boolean;
  children: React.ReactNode;
};

const GridTableItem: React.FC<GridTableItemT> = (props) => {
  const { children, isHeader, alignCenter, className = "" } = props;

  return (
    <div
      className={classnames(className, "p-4 border-t border-t-bc h-full", {
        "font-semibold text-sm bg-light-grey-light-active": isHeader,
        "text-base-sm": !isHeader,
        "flex justify-center items-center": alignCenter,
      })}
    >
      {children}
    </div>
  );
};

export default GridTableItem;
