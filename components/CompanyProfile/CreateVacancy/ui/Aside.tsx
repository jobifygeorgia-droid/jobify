import Image from "next/image";

const Aside: React.FC = () => {
  return (
    <div className="hidden laptop:block flex-1 h-full">
      <figure className="relative h-full w-full">
        <Image
          fill
          alt="create cv"
          src="/typing-machine.png"
          className="object-cover tablet:object-[0px_-220px] desktop-sm:object-[0px_-150px] h-full"
        />
      </figure>
    </div>
  );
};

export default Aside;
