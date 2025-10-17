import Image from "next/image";

type CompanyImageT = {
  title: string;
  image: string;
};

const CompanyImage: React.FC<CompanyImageT> = ({ title, image }) => {
  return (
    <figure className="row-start-2 tablet:row-start-1 row-span-2 col-start-1 size-11 tablet:size-16 tablet:self-start aspect-square relative bg-light-grey rounded-md overflow-hidden">
      <Image
        fill
        alt={title}
        src={image}
        className="object-center object-cover"
      />
    </figure>
  );
};

export default CompanyImage;
