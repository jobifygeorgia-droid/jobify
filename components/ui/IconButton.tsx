import classnames from "classnames";

type IconButtonT = {
  /**
   * Size presets
   * - sm 36px/36px
   * - base 44px/44px
   */
  size?: "sm" | "base";
  children: React.ReactNode;
  color?: "orange" | "blue";
  isFilled?: boolean;
  className?: string;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonT> = (props) => {
  const {
    children,
    size = "base",
    color = "orange",
    isFilled = false,
    className,
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      className={classnames(
        className,
        `bg-blue-light stroke-${color}! fill-${color} rounded-full flex items-center justify-center cursor-pointer`,
        {
          "size-9": size === "sm",
          "min-w-8 size-8 laptop:min-w-11 laptop:size-11 aspect-square ":
            size === "base",
        },
        {
          "fill-none!": !isFilled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
