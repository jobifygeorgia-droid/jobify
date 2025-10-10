import { components, MultiValueProps } from "react-select";

type SelectMultiValueContainerT<T> = MultiValueProps<T, boolean> & {
  itemsToShowCount?: number;
};

const SelectMultiValueContainer = <T,>(
  props: SelectMultiValueContainerT<T>
) => {
  const { getValue, index, itemsToShowCount = 1 } = props;

  const selectedOptions = getValue();
  const indexesToRender = Array.from(new Array(itemsToShowCount)).map(
    (item, index) => {
      return selectedOptions.length >= itemsToShowCount
        ? selectedOptions.length - itemsToShowCount + index
        : index;
    }
  );
  console.log(props);
  // If it's the last option, render it normally
  if (indexesToRender.includes(index))
    return (
      <components.MultiValue
        {...props}
        components={{
          ...props.components,
          Label: (props) => (
            <span
              className="text-white text-sm w-full"
              title={props.data.label}
            >
              {index === selectedOptions.length - itemsToShowCount &&
              itemsToShowCount > 1
                ? props.data.label
                : props.data.label.slice(0, 15)}
            </span>
          ),
        }}
        className="order-1"
      />
    );

  // If it's the second-to-last, render "+N"
  if (index === 0)
    return (
      <components.MultiValue {...props} className="order-2">
        +{selectedOptions.length - itemsToShowCount}
      </components.MultiValue>
    );

  // Otherwise, render nothing
  return null;
};

export default SelectMultiValueContainer;
