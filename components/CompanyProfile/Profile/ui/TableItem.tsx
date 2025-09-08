import classnames from "classnames";

type TableItemT = {
  isHeader?: boolean;
  alignCenter?: boolean;
  children: React.ReactNode;
};

const TableItem: React.FC<TableItemT> = (props) => {
  const { children, isHeader, alignCenter } = props;

  return (
    <li
      className={classnames("p-4 border-t border-t-bc", {
        "font-semibold text-sm bg-light-grey": isHeader,
        "text-base-sm": !isHeader,
        "flex justify-center items-center": alignCenter,
      })}
    >
      {children}
    </li>
  );
};

export default TableItem;
