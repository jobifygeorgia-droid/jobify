type SectionTitleT = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleT> = ({ title }) => {
  return (
    <h4 className="text-lg font-bold text-dark-grey-dark-hover">{title}</h4>
  );
};

export default SectionTitle;
