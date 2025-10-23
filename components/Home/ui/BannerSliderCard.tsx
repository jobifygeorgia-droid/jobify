import Image from "next/image";

type BannerSliderCardT = {
  title: string;
  thumbnail: string;
};

const BannerSliderCard: React.FC<BannerSliderCardT> = (props) => {
  const { title, thumbnail } = props;

  return (
    <figure className="relative w-full h-[85px] tablet:h-[95px] laptop:h-[135px] bg-light-grey rounded-xl overflow-hidden">
      <Image
        fill
        sizes="800px"
        alt={title}
        src={thumbnail}
        className="object-cover object-center"
      />
    </figure>
  );
};

export default BannerSliderCard;
