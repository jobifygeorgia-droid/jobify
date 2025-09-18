import Image from "next/image";

type BannerSliderCardT = {
  title: string;
  text: string;
  thumbnail: string;
};

const BannerSliderCard: React.FC<BannerSliderCardT> = (props) => {
  const { title, text, thumbnail } = props;

  return (
    <div key={"test"} className="w-full flex flex-col gap-6">
      <figure className="relative w-full h-[150px] bg-light-grey rounded-xl overflow-hidden">
        <Image
          fill
          alt={title}
          src={thumbnail}
          className="object-cover object-center"
        />
      </figure>
      <div className="flex flex-col gap-5 text-dark-grey">
        <span className="text-[40px] font-bold">{title}</span>
        <p className="text-xl font-light line-clamp-2">{text}</p>
      </div>
    </div>
  );
};

export default BannerSliderCard;
