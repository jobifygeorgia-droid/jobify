import classnames from "classnames";

type FilterBarInputContainerT = {
  children: React.ReactNode;
  className?: string;
};

const FilterBarInputContainer: React.FC<FilterBarInputContainerT> = (props) => {
  const { children, className = "" } = props;

  return (
    <div
      className={classnames(
        className,
        "flex-1 w-full flex items-center gap-1 laptop:gap-3 px-1 laptop:px-2 tablet:border-r border-r-blue last:border-none last:pr-0 first:pl-0"
      )}
    >
      {children}
    </div>
  );
};

export default FilterBarInputContainer;
