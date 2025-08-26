type ExpandedFilterSectionTitleT = {
  title: string;
};

const ExpandedFilterSectionTitle: React.FC<ExpandedFilterSectionTitleT> = ({
  title,
}) => {
  return <div className="text-base font-medium mx-auto">{title}</div>;
};

export default ExpandedFilterSectionTitle;
