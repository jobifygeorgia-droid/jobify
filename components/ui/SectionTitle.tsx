import classnames from "classnames";

type SectionTitleT = {
  title: string;
  size?: "base" | "lg";
  className?: string;
};

const SectionTitle: React.FC<SectionTitleT> = (props) => {
  const { title, size = "lg", className = "" } = props;

  return (
    <h5
      className={classnames(className, "font-bold text-dark-grey-dark-hover", {
        "text-base-sm laptop:text-lg": size === "lg",
        "text-base": size === "base",
      })}
    >
      {title}
    </h5>
  );
};

export default SectionTitle;
