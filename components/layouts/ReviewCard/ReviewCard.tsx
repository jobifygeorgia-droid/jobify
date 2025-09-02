import Image from "next/image";

import { Rating } from "@/components/ui";
import UserAvatar from "@/public/user-avatar.png";

const ReviewCard: React.FC = () => {
  return (
    <div className="w-full max-w-[400px] h-auto max-h-[210px] border border-bc rounded-lg px-3 py-4 flex flex-col gap-5">
      <div className="flex items-start gap-5">
        <figure className="relative bg-light-grey-dark rounded-full size-14 border-dark-grey-dark overflow-hidden">
          <Image
            src={UserAvatar}
            fill
            alt="user default avatar"
            className="object-cover"
          />
        </figure>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-base font-medium text-dark-grey-dark">
              უცნობი მომხმარებელი
            </span>
            <span className="text-sm text-light-grey-dark">12 დღის წინ</span>
          </div>

          <div>
            <Rating value={5} readonly={true} />
          </div>
        </div>
      </div>

      <p className="text-base text-dark-grey-dark line-clamp-3">
        ძალიან კარგი პლატფორმაა, უმარტივესია გამოსაყენებლად და ნამდვილად
        უკონკურენტოა ქართულ ბაზარზე
      </p>
    </div>
  );
};

export default ReviewCard;
