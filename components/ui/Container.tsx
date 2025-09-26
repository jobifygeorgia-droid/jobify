import classnames from "classnames";

type ContainerT = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerT> = ({ children, className }) => {
  return (
    <div
      className={classnames(
        "w-full max-w-[1440px] mx-auto px-2 desktop:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
