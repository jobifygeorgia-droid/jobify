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
          "w-9 h-9": size === "sm",
          "w-11 h-11": size === "base",
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
