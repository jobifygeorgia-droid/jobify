import { components, ValueContainerProps } from "react-select";
import "./selectInputContainer.css";

type SelectInputContainerProps<T> = ValueContainerProps<T, boolean> & {
  adornment?: React.ReactNode;
};

const SelectInputContainer = <T,>({
  adornment,
  children,
  ...rest
}: SelectInputContainerProps<T>) => {
  return (
    <components.ValueContainer {...rest}>
      <div className="flex items-center w-full gap-2">
        {adornment && (
          <span className="flex-none flex items-center justify-center">
            {adornment}
          </span>
        )}

        <div className="flex-1 relative flex items-center justify-start">
          {children}
        </div>
      </div>
    </components.ValueContainer>
  );
};

export default SelectInputContainer;
