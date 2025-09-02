import Image from "next/image";

import GoBackButton from "./GoBackButton";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center gap-11 h-[95vh] overflow-hidden">
      <div className="flex-1 flex flex-col gap-6 justify-center h-[245px]">
        <span className="font-semibold text-5xl">404 Error</span>
        <span className="font-semibold text-lg mb-auto">
          გვერდი დროებით მიუწვდომელია
        </span>

        <GoBackButton />
      </div>

      <div className="flex-2 h-full w-full">
        <figure className="relative w-full h-full flex">
          <Image
            src="/404.png"
            alt="Page not found"
            fill
            className="object-contain"
          />
        </figure>
      </div>
    </div>
  );
};

export default NotFound;
