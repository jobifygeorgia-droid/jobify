import classnames from "classnames";

type MenuGroupT = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const MenuGroup: React.FC<MenuGroupT> = ({ children, className, title }) => {
  return (
    <div
      className={classnames(
        "shrink relative flex items-center justify-center flex-wrap max-w-full gap-4 border border-gray-300 py-2 px-4 rounded-xl shadow-md",
        className || ""
      )}
    >
      <span className="absolute -top-1 -translate-y-1/2 left-2 bg-white px-2 text-sm">
        {title}
      </span>
      {children}
    </div>
  );
};

export default MenuGroup;
