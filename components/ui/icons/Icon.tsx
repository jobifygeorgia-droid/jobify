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
      className={classnames("material-symbols-rounded", className)}
      style={{
        fontVariationSettings: `'FILL' ${
          filled ? 1 : 0
        }, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
        fontSize: `${size}px`,
      }}
    >
      {children}
    </span>
  );
};

export default Icon;
