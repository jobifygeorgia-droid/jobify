type FilterBarInputContainerT = {
  children: React.ReactNode;
};

const FilterBarInputContainer: React.FC<FilterBarInputContainerT> = (props) => {
  const { children } = props;

  return (
    <div className="flex-1 w-full flex items-center gap-3 px-2 border-r border-r-blue last:border-none last:pr-0 first:pl-0">
      {children}
    </div>
  );
};

export default FilterBarInputContainer;
