import { components, MultiValueProps } from "react-select";

type SelectMultiValueContainerT<T> = MultiValueProps<T, boolean> & {};

const SelectMultiValueContainer = <T,>(
  props: SelectMultiValueContainerT<T>
) => {
  const { getValue, index } = props;

  const selectedOptions = getValue();
  const lastIndex = selectedOptions.length - 1;

  // If it's the last option, render it normally
  if (index === lastIndex)
    return <components.MultiValue {...props} className="order-1" />;

  // If it's the second-to-last, render "+N"
  if (index === 0)
    return (
      <components.MultiValue {...props} className="order-2">
        +{selectedOptions.length - 1}
      </components.MultiValue>
    );

  // Otherwise, render nothing
  return null;
};

export default SelectMultiValueContainer;
