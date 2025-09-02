import Image from "next/image";

import { Rating } from "@/components/ui";
import UserAvatar from "@/public/user-avatar.png";

type ReviewCardT = {
  id: number;
  username: string;
  createdAt: string;
  rating: number;
  text: string;
};

const ReviewCard: React.FC<ReviewCardT> = (review) => {
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
              {review.username}
            </span>
            <span className="text-sm text-light-grey-dark">
              {review.createdAt}
            </span>
          </div>

          <div>
            <Rating value={5} readonly={true} />
          </div>
        </div>
      </div>

      <p className="text-base text-dark-grey-dark line-clamp-3">
        {review.text}
      </p>
    </div>
  );
};

export default ReviewCard;
