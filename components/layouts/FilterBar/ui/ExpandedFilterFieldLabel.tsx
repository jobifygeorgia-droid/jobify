type ExpandedFilterFieldLabelT = {
  label: React.ReactNode;
};

const ExpandedFilterFieldLabel: React.FC<ExpandedFilterFieldLabelT> = ({
  label,
}) => {
  return (
    <div className="text-base-sm text-light-grey-dark tablet:mx-auto">
      <span>{label}</span>
      &nbsp;
      {/* <span className="text-blue">*</span> */}
    </div>
  );
};

export default ExpandedFilterFieldLabel;
