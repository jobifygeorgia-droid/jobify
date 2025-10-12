import classnames from "classnames";

type GridTableItemT = {
  isHeader?: boolean;
  className?: string;
  alignCenter?: boolean;
  children: React.ReactNode;
  isSmallCol?: boolean;
};

const GridTableItem: React.FC<GridTableItemT> = (props) => {
  const { children, isHeader, alignCenter, className = "", isSmallCol } = props;

  return (
    <div
      className={classnames(
        className,
        "p-4 border-t border-t-bc h-full max-tablet:text-center",
        {
          "font-semibold text-sm bg-light-grey-light-active max-tablet:flex max-tablet:items-center max-tablet:justify-center":
            isHeader,
          "text-base-sm": !isHeader,
          "flex justify-center items-center": alignCenter,
          "max-tablet:max-w-[100px]": isHeader && isSmallCol,
        }
      )}
    >
      {children}
    </div>
  );
};

export default GridTableItem;
