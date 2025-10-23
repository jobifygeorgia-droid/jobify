type QuotationSliderCardT = {
  text: string;
  title: string;
};

const QuotationSliderCard: React.FC<QuotationSliderCardT> = (props) => {
  const { title, text } = props;

  return (
    <div className="flex flex-col gap-3 laptop:gap-5 text-dark-grey">
      <span className="text-base-sm laptop:text-xl font-bold">{title}</span>
      <p className="text-sm laptop:text-md font-light line-clamp-2">{text}</p>
    </div>
  );
};

export default QuotationSliderCard;
