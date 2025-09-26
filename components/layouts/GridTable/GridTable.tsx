import classnames from "classnames";

type GridTableT = {
  cols: number;
  className?: string;
  children: React.ReactNode;
};

const GridTable: React.FC<GridTableT> = (props) => {
  const { className = "", children, cols } = props;

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${cols},minmax(max-content,1fr))` }}
      className={classnames(className, `grid content-start`)}
    >
      {children}
    </div>
  );
};

export default GridTable;
