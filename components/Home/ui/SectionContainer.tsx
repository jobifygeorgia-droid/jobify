import classNames from "classnames";
import { SectionTitle } from "@/components/ui";

type SectionContainerT = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const SectionContainer: React.FC<SectionContainerT> = (props) => {
  const { title, children, className } = props;

  return (
    <section
      className={classNames("my-10 flex flex-col gap-5", className || "")}
    >
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default SectionContainer;
