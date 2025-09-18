import classnames from "classnames";

type ScrollableContainerT = {
  rounded?: number;
  border?: boolean;
  height: number | string;
  children: React.ReactNode;
  containerClassName?: string;
  transparentScroll?: boolean;
  spaceBetweenScrollbar?: number;
};

const ScrollableContainer: React.FC<ScrollableContainerT> = (props) => {
  const {
    children,
    height,
    rounded = 12,
    border = false,
    spaceBetweenScrollbar = 8,
    transparentScroll = false,
    containerClassName = "",
  } = props;

  const containerHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      style={{ height: containerHeight }}
      className={classnames("overflow-y-auto overflow-x-hidden", {
        "scrollbar scrollbar-transparent": transparentScroll,
      })}
    >
      <div
        style={{
          borderRadius: `${rounded}px`,
          margin: `0px ${spaceBetweenScrollbar}px`,
        }}
        className={classnames(
          containerClassName,
          { "border border-t-0 border-bc": border },
          `min-h-full rounded-tl-none rounded-tr-none`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableContainer;
