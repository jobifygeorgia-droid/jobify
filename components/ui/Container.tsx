import classnames from "classnames";

type ContainerT = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerT> = ({ children, className }) => {
  return (
    <div
      className={classnames(
        "w-full max-w-[1440px] mx-auto pt-6 px-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
