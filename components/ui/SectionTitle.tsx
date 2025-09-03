import classnames from "classnames";

type SectionTitleT = {
  title: string;
  size?: "base" | "lg";
};

const SectionTitle: React.FC<SectionTitleT> = ({ title, size = "lg" }) => {
  return (
    <h5
      className={classnames("font-bold text-dark-grey-dark-hover", {
        "text-lg": size === "lg",
        "text-base": size === "base",
      })}
    >
      {title}
    </h5>
  );
};

export default SectionTitle;
