import Image from "next/image";

type BurgerMenuAvatarT = {};

const BurgerMenuAvatar: React.FC<BurgerMenuAvatarT> = () => {
  const userSrc =
    "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col gap-4 px-5">
      <figure className="relative size-16 rounded-full overflow-hidden">
        <Image fill alt="user" src={userSrc} className="object-cover w-full" />
      </figure>

      <figcaption className="flex flex-col gap-1">
        <span className="font-bold text-base">ანანო თარხნიშვილი</span>
        <span className="text-base-sm text-secondary">UX/UI Designer</span>
      </figcaption>
    </div>
  );
};

export default BurgerMenuAvatar;
