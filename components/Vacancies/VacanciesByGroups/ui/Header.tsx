import Image from "next/image";

type HeaderT = {
  bgUrl: string;
};

const Header: React.FC<HeaderT> = ({ bgUrl }) => {
  return (
    <div className="hidden tablet:flex h-[180px] relative rounded-2xl overflow-hidden">
      <figure className="relative w-full h-full overflow-hidden">
        <Image
          fill
          src={bgUrl}
          alt="ukrainian"
          className="object-cover object-center"
        />
      </figure>

      {/* <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-white h-[80px] py-5 px-14 flex items-center justify-center">
          Google
        </div> */}
    </div>
  );
};

export default Header;
