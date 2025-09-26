import classnames from "classnames";

type IconT = {
  children: string;
  className?: string;
  filled?: boolean;
  size?: number;
};

const Icon: React.FC<IconT> = (props) => {
  const { className = "", children, filled = false, size = 24 } = props;

  return (
    <span
      className={classnames(
        "material-symbols-rounded flex items-center justify-center leading-[75%] overflow-hidden",
        className
      )}
      style={{
        fontVariationSettings: `'FILL' ${
          filled ? 1 : 0
        }, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </span>
  );
};

export default Icon;
