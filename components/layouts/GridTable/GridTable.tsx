import classnames from "classnames";
import "./grid-table.css";

type GridTableT = {
  cols: number;
  className?: string;
  children: React.ReactNode;
};

const GridTable: React.FC<GridTableT> = (props) => {
  const { className = "", children, cols } = props;

  return (
    <div
      data-cols={cols}
      style={{ "--cols": cols } as React.CSSProperties}
      className={classnames(className, `grid content-start grid-table`)}
    >
      {children}
    </div>
  );
};

export default GridTable;
