import classnames from "classnames";

type ScrollableContainerT = {
  rounded?: number;
  border?: boolean;
  height: number | string;
  children: React.ReactNode;
  containerClassName?: string;
  wrapperClassName?: string;
  transparentScroll?: boolean;
  spaceBetweenScrollbar?: number;
  disableScroll?: boolean;
};

const ScrollableContainer: React.FC<ScrollableContainerT> = (props) => {
  const {
    height,
    children,
    rounded = 12,
    border = false,
    wrapperClassName = "",
    containerClassName = "",
    spaceBetweenScrollbar = 8,
    transparentScroll = false,
    disableScroll = false,
  } = props;

  const containerHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      style={{ height: containerHeight }}
      className={classnames(containerClassName, "overflow-y-auto", {
        "scrollbar scrollbar-transparent": transparentScroll,
        "overflow-y-hidden!": disableScroll,
      })}
    >
      <div
        style={{
          borderRadius: `${rounded}px`,
          margin: `0px ${spaceBetweenScrollbar}px`,
        }}
        className={classnames(
          wrapperClassName,
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
