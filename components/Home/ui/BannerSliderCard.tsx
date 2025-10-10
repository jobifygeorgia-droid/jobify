import Image from "next/image";

type BannerSliderCardT = {
  title: string;
  text: string;
  thumbnail: string;
};

const BannerSliderCard: React.FC<BannerSliderCardT> = (props) => {
  const { title, text, thumbnail } = props;

  return (
    <div className="w-full flex flex-col gap-4 laptop:gap-6">
      <figure className="relative w-full h-[85px] tablet:h-[95px] laptop:h-[135px] bg-light-grey rounded-xl overflow-hidden">
        <Image
          fill
          sizes="800px"
          alt={title}
          src={thumbnail}
          className="object-cover object-center"
        />
      </figure>
      <div className="flex flex-col gap-3 laptop:gap-5 text-dark-grey">
        <span className="text-base-sm laptop:text-xl font-bold">{title}</span>
        <p className="text-sm laptop:text-md font-light line-clamp-2">{text}</p>
      </div>
    </div>
  );
};

export default BannerSliderCard;
