type BannerSliderCardT = {
  title: string;
  text: string;
};

const BannerSliderCard: React.FC<BannerSliderCardT> = (props) => {
  const { title, text } = props;

  return (
    <div key={"test"} className="w-full flex flex-col gap-6">
      <figure className="relative w-full h-[150px] bg-light-grey-dark-hover rounded-xl overflow-hidden"></figure>
      <div className="flex flex-col gap-5 text-dark-grey">
        <span className="text-[46px] font-bold">{title}</span>
        <p className="text-xl font-light line-clamp-2">{text}</p>
      </div>
    </div>
  );
};

export default BannerSliderCard;
