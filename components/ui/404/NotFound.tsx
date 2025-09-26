import Image from "next/image";

import GoBackButton from "./GoBackButton";
import Container from "../Container";

const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse laptop:flex-row justify-center items-center gap-2 laptop:gap-11 h-[95vh] overflow-hidden">
        <div className="desktop-lg:flex-1 flex flex-col gap-4 tablet:gap-6 items-center laptop:items-start laptop:justify-center laptop:h-[245px]">
          <span className="font-semibold text-3xl tablet:text-5xl">
            404 Error
          </span>
          <span className="font-semibold text-base tablet:text-lg laptop:mb-auto">
            გვერდი დროებით მიუწვდომელია
          </span>

          <GoBackButton />
        </div>

        <div className="desktop-lg:flex-2 h-[300px] w-[300px] tablet:h-[450px] tablet:w-[450px] laptop:w-[500px] laptop:h-[500px] desktop-lg:h-full desktop-lg:w-full">
          <figure className="relative  w-full h-full flex">
            <Image
              src="/404.webp"
              alt="Page not found"
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
