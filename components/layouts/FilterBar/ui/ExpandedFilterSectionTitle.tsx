type ExpandedFilterSectionTitleT = {
  title: string;
};

const ExpandedFilterSectionTitle: React.FC<ExpandedFilterSectionTitleT> = ({
  title,
}) => {
  return <div className="text-base font-medium tablet:mx-auto">{title}</div>;
};

export default ExpandedFilterSectionTitle;
